import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from 'react'

export type UserRole = 'consumer' | 'merchant_staff' | 'merchant_admin'

export type CridoraSession = {
  role: UserRole
  email: string
  displayName: string
  shopName?: string
  kycStatus: 'pending' | 'verified' | 'submitted'
}

const STORAGE_KEY = 'cridora_demo_session'

const listeners = new Set<() => void>()

function readStored(): CridoraSession | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as CridoraSession
  } catch {
    return null
  }
}

function writeStored(s: CridoraSession | null) {
  try {
    if (s) localStorage.setItem(STORAGE_KEY, JSON.stringify(s))
    else localStorage.removeItem(STORAGE_KEY)
  } catch {
    /* ignore */
  }
  listeners.forEach((l) => l())
}

function subscribe(cb: () => void) {
  listeners.add(cb)
  return () => listeners.delete(cb)
}

type AuthContextValue = {
  session: CridoraSession | null
  login: (params: {
    email: string
    password: string
    role: UserRole
    displayName?: string
    shopName?: string
  }) => void
  signupConsumer: (params: { email: string; password: string; displayName: string }) => void
  signupMerchant: (params: {
    email: string
    password: string
    displayName: string
    shopName: string
    asAdmin: boolean
  }) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const session = useSyncExternalStore(subscribe, readStored, () => null)

  const login = useCallback(
    (params: {
      email: string
      password: string
      role: UserRole
      displayName?: string
      shopName?: string
    }) => {
      const displayName =
        params.displayName?.trim() || params.email.split('@')[0] || 'User'
      writeStored({
        role: params.role,
        email: params.email.trim(),
        displayName,
        shopName: params.shopName?.trim(),
        kycStatus: params.role === 'consumer' ? 'pending' : 'verified',
      })
    },
    [],
  )

  const signupConsumer = useCallback(
    (params: { email: string; password: string; displayName: string }) => {
      login({
        email: params.email,
        password: params.password,
        role: 'consumer',
        displayName: params.displayName,
      })
    },
    [login],
  )

  const signupMerchant = useCallback(
    (params: {
      email: string
      password: string
      displayName: string
      shopName: string
      asAdmin: boolean
    }) => {
      login({
        email: params.email,
        password: params.password,
        role: params.asAdmin ? 'merchant_admin' : 'merchant_staff',
        displayName: params.displayName,
        shopName: params.shopName,
      })
    },
    [login],
  )

  const logout = useCallback(() => writeStored(null), [])

  const value = useMemo(
    () => ({ session, login, signupConsumer, signupMerchant, logout }),
    [session, login, signupConsumer, signupMerchant, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
