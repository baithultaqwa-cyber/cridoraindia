import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '@/features/auth/AuthContext'
import { DashboardAppShell, type DashboardNavItem } from '@/shared/components/dashboard/DashboardAppShell'

const staffLinks: DashboardNavItem[] = [
  { to: '/merchant', label: 'Overview', end: true },
  { to: '/merchant/queue', label: 'Queue', end: false },
  { to: '/merchant/customers', label: 'Customers', end: false },
  { to: '/merchant/settlements', label: 'Settlements', end: false },
  { to: '/merchant/sellback', label: 'Sellback', end: false },
  { to: '/merchant/inventory', label: 'Inventory', end: false },
  { to: '/merchant/reports', label: 'Reports', end: false },
  { to: '/merchant/billing', label: 'Billing', end: false },
  { to: '/merchant/settings', label: 'Settings', end: false },
]

const adminLink: DashboardNavItem = { to: '/merchant/staff', label: 'Staff', end: false }

export function MerchantLayout() {
  const { session, logout } = useAuth()
  const navigate = useNavigate()
  const isAdmin = session?.role === 'merchant_admin'

  const navItems: DashboardNavItem[] = isAdmin ? [...staffLinks, adminLink] : staffLinks

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <DashboardAppShell
      shellEyebrow="Jeweller"
      shellTitle={session?.shopName ?? 'Your showroom'}
      userName={session?.displayName ?? 'User'}
      roleBadge={isAdmin ? 'Store admin' : 'Counter / staff'}
      detailLine={
        session?.city ? `City · ${session.city}` : session?.phone ? `Phone · ${session.phone}` : undefined
      }
      navItems={navItems}
      brandLink="/merchant"
      onLogout={handleLogout}
    >
      <Outlet />
    </DashboardAppShell>
  )
}
