import { apiBaseUrl } from '@/shared/lib/env'

export type HealthResponse = { status: string; service?: string }

export type ApiUser = {
  id: number
  username: string
  email: string
  first_name: string
  last_name: string
  profile: {
    role: string
    display_name: string
    phone: string
    city: string
    shop_name: string
    kyc_status: string
  }
}

export class ApiRequestError extends Error {
  status: number
  body: unknown
  constructor(message: string, status: number, body: unknown) {
    super(message)
    this.name = 'ApiRequestError'
    this.status = status
    this.body = body
  }
}

function parseErrorDetail(body: unknown): string {
  if (body && typeof body === 'object') {
    const d = (body as { detail?: unknown }).detail
    if (typeof d === 'string') return d
    if (Array.isArray(d) && d[0] && typeof d[0] === 'object' && 'msg' in d[0]) {
      return String((d[0] as { msg: unknown }).msg)
    }
  }
  return 'Request failed'
}

export async function fetchApiHealth(): Promise<HealthResponse> {
  const url = `${apiBaseUrl}/api/v1/health/`
  const r = await fetch(url)
  if (!r.ok) {
    throw new Error(`API health check failed: ${r.status}`)
  }
  return r.json() as Promise<HealthResponse>
}

export async function apiLogin(params: {
  email: string
  password: string
  expected_role?: string
}): Promise<{ token: string; user: ApiUser }> {
  const r = await fetch(`${apiBaseUrl}/api/v1/auth/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: params.email,
      password: params.password,
      expected_role: params.expected_role,
    }),
  })
  const body = await r.json().catch(() => ({}))
  if (!r.ok) {
    throw new ApiRequestError(parseErrorDetail(body), r.status, body)
  }
  const token = (body as { token?: string }).token
  const user = (body as { user?: ApiUser }).user
  if (!token || !user) {
    throw new ApiRequestError('Invalid login response', r.status, body)
  }
  return { token, user }
}

export async function apiRegister(params: {
  account_kind: 'consumer' | 'merchant'
  email: string
  password: string
  display_name: string
  phone: string
  city: string
  shop_name?: string
  as_admin?: boolean
}): Promise<{ token: string; user: ApiUser }> {
  const r = await fetch(`${apiBaseUrl}/api/v1/auth/register/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  })
  const body = await r.json().catch(() => ({}))
  if (!r.ok) {
    throw new ApiRequestError(parseErrorDetail(body), r.status, body)
  }
  const token = (body as { token?: string }).token
  const user = (body as { user?: ApiUser }).user
  if (!token || !user) {
    throw new ApiRequestError('Invalid register response', r.status, body)
  }
  return { token, user }
}

export async function apiFetchMe(token: string): Promise<ApiUser> {
  const r = await fetch(`${apiBaseUrl}/api/v1/auth/me/`, {
    headers: { Authorization: `Token ${token}` },
  })
  const body = await r.json().catch(() => ({}))
  if (!r.ok) {
    throw new ApiRequestError(parseErrorDetail(body), r.status, body)
  }
  return body as ApiUser
}

export async function apiLogout(token: string): Promise<void> {
  const r = await fetch(`${apiBaseUrl}/api/v1/auth/logout/`, {
    method: 'POST',
    headers: { Authorization: `Token ${token}` },
  })
  if (r.status !== 204 && r.status !== 401) {
    await r.text().catch(() => '')
  }
}
