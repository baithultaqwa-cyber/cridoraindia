import { Navigate, useLocation } from 'react-router-dom'
import type { UserRole } from './AuthContext'
import { useAuth } from './AuthContext'

type RequireAuthProps = {
  children: React.ReactNode
  roles?: UserRole[]
  redirectTo?: string
}

export function RequireAuth({ children, roles, redirectTo = '/auth/login' }: RequireAuthProps) {
  const { session } = useAuth()
  const location = useLocation()

  if (!session) {
    const next = `${location.pathname}${location.search}`
    return <Navigate to={`${redirectTo}?next=${encodeURIComponent(next)}`} replace />
  }

  if (roles && !roles.includes(session.role)) {
    if (session.role === 'consumer') {
      return <Navigate to="/app" replace />
    }
    if (session.role === 'merchant_staff' || session.role === 'merchant_admin') {
      return <Navigate to="/merchant" replace />
    }
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}
