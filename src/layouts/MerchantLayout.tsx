import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium transition-colors',
    isActive ? 'bg-navy-shine/80 text-cridora-gold-light' : 'text-cridora-muted hover:text-cridora-text',
  ].join(' ')

const staffLinks = [
  { to: '/merchant', label: 'Overview', end: true },
  { to: '/merchant/queue', label: 'Redemption queue', end: false },
  { to: '/merchant/customers', label: 'Customers', end: false },
  { to: '/merchant/settlements', label: 'Settlements', end: false },
  { to: '/merchant/sellback', label: 'Sellback', end: false },
  { to: '/merchant/inventory', label: 'Inventory', end: false },
  { to: '/merchant/reports', label: 'Reports', end: false },
  { to: '/merchant/billing', label: 'Billing', end: false },
  { to: '/merchant/settings', label: 'Settings', end: false },
] as const

const adminLinks = [{ to: '/merchant/staff', label: 'Staff', end: false }] as const

export function MerchantLayout() {
  const { session, logout } = useAuth()
  const navigate = useNavigate()
  const isAdmin = session?.role === 'merchant_admin'

  return (
    <div className="min-h-svh bg-[var(--color-navy-deep)]">
      <header className="sticky top-0 z-30 border-b border-silk/10 bg-navy-deep/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-cridora-gold">
              Merchant
            </p>
            <p className="font-display text-lg font-semibold text-cridora-text">
              {session?.shopName ?? 'Your showroom'}
            </p>
            <p className="text-xs text-cridora-muted">
              {session?.displayName} · {isAdmin ? 'Admin' : 'Staff'}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                logout()
                navigate('/')
              }}
              className="ui-control-ghost px-3 py-2 text-xs"
            >
              Log out
            </button>
          </div>
        </div>
        <div className="overflow-x-auto border-t border-silk/10 bg-navy-silk/50 px-4 sm:px-6">
          <nav className="mx-auto flex max-w-7xl gap-1 py-2" aria-label="Merchant sections">
            {staffLinks.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} className={linkClass}>
                {label}
              </NavLink>
            ))}
            {isAdmin
              ? adminLinks.map(({ to, label, end }) => (
                  <NavLink key={to} to={to} end={end} className={linkClass}>
                    {label}
                  </NavLink>
                ))
              : null}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <Outlet />
      </main>
    </div>
  )
}
