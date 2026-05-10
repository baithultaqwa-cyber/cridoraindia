import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import { DisclaimerStrip } from '../components/DisclaimerStrip'

const tabClass = ({ isActive }: { isActive: boolean }) =>
  [
    'flex min-h-12 min-w-[4.5rem] flex-1 flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-[0.65rem] font-medium transition-colors sm:text-xs',
    isActive ? 'text-cridora-gold-light' : 'text-cridora-muted hover:text-cridora-text',
  ].join(' ')

const tabs = [
  { to: '/app', label: 'Home', end: true },
  { to: '/app/portfolio', label: 'Portfolio', end: false },
  { to: '/app/redeem', label: 'Redeem', end: false },
  { to: '/app/transactions', label: 'Activity', end: false },
  { to: '/app/profile', label: 'Profile', end: false },
] as const

export function ConsumerLayout() {
  const { session, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="flex min-h-svh flex-col bg-[var(--color-navy-deep)] pb-[5.25rem] md:pb-8">
      <header className="sticky top-0 z-30 border-b border-silk/10 bg-navy-deep/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-cridora-gold">Cridora</p>
            <p className="font-display text-lg font-semibold text-cridora-text">Hello, {session?.displayName}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => navigate('/app/kyc')}
              className={`rounded-xl border px-3 py-2 text-xs font-medium transition-colors ${
                session?.kycStatus === 'verified'
                  ? 'border-cridora-success/40 text-cridora-success'
                  : 'border-cridora-warning/40 text-cridora-warning'
              }`}
            >
              KYC: {session?.kycStatus === 'verified' ? 'OK' : 'Action'}
            </button>
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
      </header>
      <DisclaimerStrip dense />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6">
        <Outlet />
      </main>
      <nav
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-silk/15 bg-navy-silk/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl md:relative md:border-0 md:bg-transparent md:pb-6 md:pt-0"
        aria-label="Consumer primary"
      >
        <div className="mx-auto flex max-w-6xl justify-between md:justify-center md:gap-4 md:rounded-2xl md:border md:border-silk/10 md:bg-navy-silk/60 md:p-2">
          {tabs.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={tabClass}>
              <span className="font-medium">{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}
