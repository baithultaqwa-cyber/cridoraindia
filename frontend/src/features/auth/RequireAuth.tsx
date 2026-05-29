import { Navigate, useLocation } from 'react-router-dom'
import type { UserRole } from './AuthContext'
import { useAuth } from './AuthContext'

type RequireAuthProps = {
  children: React.ReactNode
  roles?: UserRole[]
  redirectTo?: string
}

function homeForRole(role: UserRole): string {
  if (role === 'consumer') return '/app'
  if (role === 'admin') return '/admin'
  if (role === 'merchant_staff' || role === 'merchant_admin') return '/merchant'
  return '/'
}

export function RequireAuth({ children, roles, redirectTo = '/auth/login' }: RequireAuthProps) {
  const { session, authReady } = useAuth()
  const location = useLocation()

  if (!authReady) {
    return (
      <div
        className="flex min-h-svh items-center justify-center bg-[var(--color-navy-deep)] px-4"
        aria-busy="true"
        aria-live="polite"
      >
        <p className="text-sm text-cridora-muted">Loading session…</p>
      </div>
    )
  }

  if (!session) {
    const next = `${location.pathname}${location.search}`
    return <Navigate to={`${redirectTo}?next=${encodeURIComponent(next)}`} replace />
  }

  if (roles && !roles.includes(session.role)) {
    return <Navigate to={homeForRole(session.role)} replace />
  }

  return <>{children}</>
}
