import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'

import {
  type ApiUser,
  apiFetchMe,
  apiLogin,
  apiLogout,
  apiRegister,
  ApiRequestError,
} from '@/shared/lib/api'
import { isApiConfigured } from '@/shared/lib/env'

export type UserRole = 'consumer' | 'merchant_staff' | 'merchant_admin' | 'admin'

export type CridoraSession = {
  role: UserRole
  email: string
  displayName: string
  shopName?: string
  phone?: string
  city?: string
  kycStatus: 'pending' | 'verified' | 'submitted'
}

type PersistedAuth = CridoraSession & { token?: string }

const AUTH_KEY = 'cridora_auth'
const LEGACY_KEY = 'cridora_demo_session'

const listeners = new Set<() => void>()

function normalizeKyc(raw: string): CridoraSession['kycStatus'] {
  if (raw === 'verified' || raw === 'submitted' || raw === 'pending') return raw
  return 'pending'
}

function mapApiUser(user: ApiUser): CridoraSession {
  const p = user.profile
  return {
    role: p.role as UserRole,
    email: (user.email || user.username).trim(),
    displayName: (p.display_name || user.username).trim(),
    shopName: p.shop_name?.trim() || undefined,
    phone: p.phone?.trim() || undefined,
    city: p.city?.trim() || undefined,
    kycStatus: normalizeKyc(p.kyc_status || 'pending'),
  }
}

function readPersisted(): PersistedAuth | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(AUTH_KEY)
    if (raw) return JSON.parse(raw) as PersistedAuth
    const legacy = localStorage.getItem(LEGACY_KEY)
    if (legacy) {
      const s = JSON.parse(legacy) as CridoraSession
      const next: PersistedAuth = { ...s, token: undefined }
      writePersisted(next)
      localStorage.removeItem(LEGACY_KEY)
      return next
    }
  } catch {
    return null
  }
  return null
}

function writePersisted(next: PersistedAuth | null): boolean {
  try {
    if (!next) {
      localStorage.removeItem(AUTH_KEY)
      localStorage.removeItem(LEGACY_KEY)
    } else {
      localStorage.setItem(AUTH_KEY, JSON.stringify(next))
      localStorage.removeItem(LEGACY_KEY)
    }
  } catch {
    listeners.forEach((l) => l())
    return false
  }
  listeners.forEach((l) => l())
  return true
}

type LoginParams = {
  email: string
  password: string
  role: UserRole
  displayName?: string
  shopName?: string
  phone?: string
  city?: string
}

type AuthResult = { ok: true } | { ok: false; error: string }

type AuthContextValue = {
  session: CridoraSession | null
  authReady: boolean
  usesApi: boolean
  login: (params: LoginParams) => Promise<AuthResult>
  signupConsumer: (params: {
    email: string
    password: string
    displayName: string
    phone: string
    city: string
  }) => Promise<AuthResult>
  signupMerchant: (params: {
    email: string
    password: string
    displayName: string
    shopName: string
    phone: string
    city: string
    asAdmin: boolean
  }) => Promise<AuthResult>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const tokenRef = useRef<string | null>(null)
  const [session, setSession] = useState<CridoraSession | null>(null)
  const [authReady, setAuthReady] = useState(false)
  const usesApi = isApiConfigured

  const applyPersisted = useCallback((p: PersistedAuth | null) => {
    if (!p) {
      tokenRef.current = null
      setSession(null)
      return
    }
    tokenRef.current = p.token ?? null
    const { token: _t, ...rest } = p
    setSession(rest)
  }, [])

  useEffect(() => {
    const p = readPersisted()
    if (!p) {
      applyPersisted(null)
      setAuthReady(true)
      return
    }
    if (usesApi && p.token) {
      apiFetchMe(p.token)
        .then((u) => {
          const next: PersistedAuth = { ...mapApiUser(u), token: p.token }
          writePersisted(next)
          applyPersisted(next)
        })
        .catch(() => {
          writePersisted(null)
          applyPersisted(null)
        })
        .finally(() => setAuthReady(true))
      return
    }
    applyPersisted(p)
    setAuthReady(true)
  }, [applyPersisted, usesApi])

  useEffect(() => {
    const onChange = () => {
      const next = readPersisted()
      applyPersisted(next)
    }
    listeners.add(onChange)
    return () => {
      listeners.delete(onChange)
    }
  }, [applyPersisted])

  const login = useCallback(
    async (params: LoginParams): Promise<AuthResult> => {
      const eTrim = params.email.trim()
      if (!eTrim) return { ok: false, error: 'Enter your email address.' }

      if (usesApi) {
        try {
          const { token, user } = await apiLogin({
            email: eTrim,
            password: params.password,
            expected_role: params.role,
          })
          const mapped = mapApiUser(user)
          const next: PersistedAuth = { ...mapped, token }
          if (!writePersisted(next)) {
            return {
              ok: false,
              error:
                'Could not save your session. Allow site storage for this site (not full private mode), then try again.',
            }
          }
          tokenRef.current = token
          setSession(mapped)
          return { ok: true }
        } catch (err) {
          if (err instanceof ApiRequestError) {
            if (err.status === 403 && err.body && typeof err.body === 'object') {
              const ar = (err.body as { actual_role?: string }).actual_role
              if (ar) {
                return {
                  ok: false,
                  error: `This account is registered as “${ar}”. Choose that account type above and try again.`,
                }
              }
            }
            return { ok: false, error: err.message }
          }
          return { ok: false, error: 'Could not reach the server. Is the API running?' }
        }
      }

      const displayName =
        params.displayName?.trim() || params.email.split('@')[0] || 'User'
      const isConsumer = params.role === 'consumer'
      const isAdmin = params.role === 'admin'
      const local: PersistedAuth = {
        role: params.role,
        email: eTrim,
        displayName,
        shopName: params.shopName?.trim(),
        phone: params.phone?.trim() || undefined,
        city: params.city?.trim() || undefined,
        kycStatus: isConsumer ? 'pending' : isAdmin ? 'verified' : 'verified',
      }
      if (!writePersisted(local)) {
        return {
          ok: false,
          error:
            'Could not save your session. Allow site storage / cookies for this site (not full private mode), then try again.',
        }
      }
      tokenRef.current = null
      setSession({
        role: local.role,
        email: local.email,
        displayName: local.displayName,
        shopName: local.shopName,
        phone: local.phone,
        city: local.city,
        kycStatus: local.kycStatus,
      })
      return { ok: true }
    },
    [usesApi],
  )

  const signupConsumer = useCallback(
    async (params: {
      email: string
      password: string
      displayName: string
      phone: string
      city: string
    }): Promise<AuthResult> => {
      if (usesApi) {
        try {
          const { token, user } = await apiRegister({
            account_kind: 'consumer',
            email: params.email.trim(),
            password: params.password,
            display_name: params.displayName.trim(),
            phone: params.phone,
            city: params.city.trim(),
          })
          const mapped = mapApiUser(user)
          const next: PersistedAuth = { ...mapped, token }
          if (!writePersisted(next)) {
            return {
              ok: false,
              error: 'Could not save your session locally after sign-up.',
            }
          }
          tokenRef.current = token
          setSession(mapped)
          return { ok: true }
        } catch (err) {
          if (err instanceof ApiRequestError) return { ok: false, error: err.message }
          return { ok: false, error: 'Could not reach the server. Is the API running?' }
        }
      }
      return login({
        email: params.email,
        password: params.password,
        role: 'consumer',
        displayName: params.displayName,
        phone: params.phone,
        city: params.city,
      })
    },
    [usesApi, login],
  )

  const signupMerchant = useCallback(
    async (params: {
      email: string
      password: string
      displayName: string
      shopName: string
      phone: string
      city: string
      asAdmin: boolean
    }): Promise<AuthResult> => {
      if (usesApi) {
        try {
          const { token, user } = await apiRegister({
            account_kind: 'merchant',
            email: params.email.trim(),
            password: params.password,
            display_name: params.displayName.trim(),
            phone: params.phone,
            city: params.city.trim(),
            shop_name: params.shopName.trim(),
            as_admin: params.asAdmin,
          })
          const mapped = mapApiUser(user)
          const next: PersistedAuth = { ...mapped, token }
          if (!writePersisted(next)) {
            return {
              ok: false,
              error: 'Could not save your session locally after sign-up.',
            }
          }
          tokenRef.current = token
          setSession(mapped)
          return { ok: true }
        } catch (err) {
          if (err instanceof ApiRequestError) return { ok: false, error: err.message }
          return { ok: false, error: 'Could not reach the server. Is the API running?' }
        }
      }
      return login({
        email: params.email,
        password: params.password,
        role: params.asAdmin ? 'merchant_admin' : 'merchant_staff',
        displayName: params.displayName,
        shopName: params.shopName,
        phone: params.phone,
        city: params.city,
      })
    },
    [usesApi, login],
  )

  const logout = useCallback(() => {
    const t = tokenRef.current
    tokenRef.current = null
    writePersisted(null)
    setSession(null)
    if (usesApi && t) {
      void apiLogout(t)
    }
  }, [usesApi])

  const value = useMemo(
    () => ({
      session,
      authReady,
      usesApi,
      login,
      signupConsumer,
      signupMerchant,
      logout,
    }),
    [session, authReady, usesApi, login, signupConsumer, signupMerchant, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
