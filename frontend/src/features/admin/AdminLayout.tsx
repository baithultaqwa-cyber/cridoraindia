import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '@/features/auth/AuthContext'
import { DashboardAppShell, type DashboardNavItem } from '@/shared/components/dashboard/DashboardAppShell'

const navItems: DashboardNavItem[] = [
  { to: '/admin', label: 'Overview', end: true },
  { to: '/admin/settlements', label: 'Settlements', end: false },
  { to: '/admin/jewellers', label: 'Jewellers', end: false },
  { to: '/admin/kyc-queue', label: 'KYC', end: false },
  { to: '/admin/transactions', label: 'Transactions', end: false },
]

export function AdminLayout() {
  const { session, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <DashboardAppShell
      shellEyebrow="Admin"
      shellTitle="Operations console"
      userName={session?.displayName ?? 'Operator'}
      roleBadge="Platform operations"
      detailLine={session?.email}
      navItems={navItems}
      brandLink="/admin"
      onLogout={handleLogout}
    >
      <Outlet />
    </DashboardAppShell>
  )
}
