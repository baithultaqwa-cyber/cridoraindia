import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '@/features/auth/AuthContext'
import { MarketplaceCartProvider, useMarketplaceCart } from '@/features/consumer/marketplace/MarketplaceCartContext'
import { cridoraUserIdFromEmail } from '@/features/consumer/lib/cridora-user-id'
import { DisclaimerStrip } from '@/shared/components/DisclaimerStrip'
import { CridoraLogoMark } from '@/shared/components/branding/CridoraLogoMark'
import {
  IconAward,
  IconBanknote,
  IconCart,
  IconGift,
  IconHistory,
  IconLayoutDashboard,
  IconLedger,
  IconLock,
  IconRefreshCw,
  IconSearch,
  IconShoppingBag,
  IconStorefront,
  IconUser,
} from '@/features/consumer/icons/ConsumerNavIcons'

function initialFromName(name: string | undefined): string {
  const t = name?.trim() ?? ''
  return t ? t[0]!.toUpperCase() : 'U'
}

const mainNav = [
  { to: '/app', label: 'Home', end: true, Icon: IconLayoutDashboard },
  { to: '/app/portfolio', label: 'Vault', end: false, Icon: IconLock },
  { to: '/app/ledger', label: 'Ledger', end: false, Icon: IconLedger },
  { to: '/app/schemes', label: 'Plans', end: false, Icon: IconAward },
  { to: '/app/credit', label: 'Credit', end: false, Icon: IconBanknote },
  { to: '/app/transfer', label: 'Gift', end: false, Icon: IconGift },
  { to: '/app/transactions', label: 'Activity', end: false, Icon: IconHistory },
] as const

const secondaryNav = [
  { to: '/app/marketplace', label: 'Marketplace', end: false, Icon: IconShoppingBag },
  { to: '/app/marketplace/cart', label: 'Cart', end: true, Icon: IconCart },
  { to: '/app/jewellers', label: 'Jewellers', end: false, Icon: IconStorefront },
  { to: '/app/redeem', label: 'Redeem', end: false, Icon: IconRefreshCw },
] as const

/** Thumb-friendly: Home, Vault, redeem, marketplace hub, you. Jewellers from Marketplace or directory. */
const mobileBottomNav = [
  { to: '/app', label: 'Home', end: true, Icon: IconLayoutDashboard },
  { to: '/app/portfolio', label: 'Vault', end: false, Icon: IconLock },
  { to: '/app/redeem', label: 'Redeem', end: false, Icon: IconRefreshCw },
  { to: '/app/marketplace', label: 'Shop', end: false, Icon: IconShoppingBag },
  { to: '/app/profile', label: 'Profile', end: false, Icon: IconUser },
] as const

const sidebarBtn = ({ isActive }: { isActive: boolean }) =>
  [
    'flex w-full touch-manipulation items-center gap-3 rounded-2xl px-4 py-3.5 text-left text-sm font-bold transition-all',
    isActive
      ? 'bg-cridora-gold text-cridora-ink shadow-[var(--shadow-gold)]'
      : 'text-cridora-muted hover:bg-white/[0.05] hover:text-cridora-text',
  ].join(' ')

const sidebarSecondaryBtn = ({ isActive }: { isActive: boolean }) =>
  [
    'flex w-full touch-manipulation items-center gap-2 rounded-xl px-3 py-2 text-left text-xs font-semibold transition-colors',
    isActive ? 'text-cridora-gold-light' : 'text-cridora-muted hover:text-cridora-text',
  ].join(' ')

export function ConsumerLayout() {
  return (
    <MarketplaceCartProvider>
      <ConsumerLayoutInner />
    </MarketplaceCartProvider>
  )
}

function ConsumerLayoutInner() {
  const { session, logout } = useAuth()
  const navigate = useNavigate()
  const { itemCount } = useMarketplaceCart()
  const initial = initialFromName(session?.displayName)
  const cridoraId = cridoraUserIdFromEmail(session?.email)

  return (
    <div className="relative min-h-svh bg-[var(--color-navy-deep)] pb-[max(5.75rem,env(safe-area-inset-bottom))] text-cridora-text md:pb-0">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-navy-shine/25 blur-[120px]" />
        <div className="absolute -right-24 top-1/2 h-80 w-80 rounded-full bg-cridora-gold/[0.07] blur-[100px]" />
      </div>

      <div className="relative z-10 flex min-h-svh flex-col md:flex-row">
        <aside className="sticky top-0 hidden h-svh w-72 shrink-0 flex-col border-r border-silk/10 bg-navy-silk/55 backdrop-blur-xl md:flex">
          <div className="p-6 pt-8">
            <Link to="/app" className="group flex items-center gap-3">
              <CridoraLogoMark size="sm" className="group-hover:scale-105" />
              <div>
                <span className="block font-display text-xl font-bold italic leading-none tracking-tight">Cridora</span>
                <span className="text-[0.625rem] font-bold uppercase tracking-widest text-cridora-gold">Your gold</span>
              </div>
            </Link>
          </div>

          <nav className="flex flex-1 flex-col gap-1.5 overflow-y-auto px-3 pb-4" aria-label="Workspace">
            {mainNav.map(({ to, label, end, Icon }) => (
              <NavLink key={to} to={to} end={end} className={sidebarBtn}>
                <Icon className="h-5 w-5 shrink-0" />
                {label}
              </NavLink>
            ))}
            <div className="my-3 border-t border-silk/10 pt-3">
              <p className="mb-2 px-2 text-[0.65rem] font-bold uppercase tracking-wider text-cridora-muted/80">
                Shop &amp; redeem
              </p>
              {secondaryNav.map(({ to, label, end, Icon }) => (
                <NavLink key={to} to={to} end={end} className={sidebarSecondaryBtn}>
                  <Icon className="h-4 w-4 shrink-0 opacity-90" />
                  {label}
                </NavLink>
              ))}
            </div>
          </nav>

          <div className="mt-auto border-t border-silk/10 p-5">
            <div className="rounded-2xl border border-silk/10 bg-navy-deep/50 p-4">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-silk/15 bg-navy-shine/50 font-bold text-cridora-gold-light">
                  {initial}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-xs font-bold text-cridora-text">{session?.displayName ?? 'User'}</p>
                  <p className="text-[0.625rem] text-cridora-muted">ID: {cridoraId}</p>
                </div>
              </div>
              <Link
                to="/app/profile"
                className="flex w-full items-center justify-center rounded-xl bg-navy-shine/70 py-2.5 text-[0.625rem] font-bold uppercase tracking-widest text-cridora-text transition-colors hover:bg-navy-shine"
              >
                Manage profile
              </Link>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => navigate('/app/kyc')}
                className={`flex-1 min-w-[6rem] rounded-xl border px-2 py-2 text-[0.65rem] font-semibold ${
                  session?.kycStatus === 'verified'
                    ? 'border-cridora-success/35 text-cridora-success'
                    : 'border-cridora-warning/35 text-cridora-warning'
                }`}
              >
                KYC
              </button>
              <button
                type="button"
                onClick={() => {
                  logout()
                  navigate('/')
                }}
                className="flex-1 min-w-[6rem] rounded-xl border border-cridora-border py-2 text-[0.65rem] font-semibold text-cridora-muted hover:text-cridora-text"
              >
                Log out
              </button>
            </div>
            <Link
              to="/"
              className="mt-3 block text-center text-[0.65rem] font-semibold uppercase tracking-wider text-cridora-muted hover:text-cridora-gold-light"
            >
              Public site
            </Link>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-50 border-b border-silk/10 bg-navy-deep/92 backdrop-blur-xl md:hidden">
            <div className="flex items-center justify-between gap-3 px-4 py-3">
              <Link to="/app" className="group flex min-w-0 items-center gap-2">
                <CridoraLogoMark size="sm" className="group-hover:scale-105" />
                <span className="font-display text-lg font-bold italic tracking-tight text-cridora-text">Cridora</span>
              </Link>
              <div className="flex shrink-0 items-center gap-2">
                <Link
                  to="/app/jewellers"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-silk/15 bg-navy-silk/50 text-cridora-muted hover:text-cridora-text"
                  aria-label="Search jewellers"
                >
                  <IconSearch className="h-5 w-5" />
                </Link>
                <Link
                  to="/app/marketplace/cart"
                  className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-silk/15 bg-navy-silk/50 text-cridora-muted hover:text-cridora-text"
                  aria-label={`Cart${itemCount ? `, ${itemCount} items` : ''}`}
                >
                  <IconCart className="h-5 w-5" />
                  {itemCount > 0 ? (
                    <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-cridora-gold px-1 text-[0.65rem] font-bold text-cridora-ink">
                      {itemCount > 99 ? '99+' : itemCount}
                    </span>
                  ) : null}
                </Link>
                <Link
                  to="/app/profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-cridora-gold/30 bg-navy-shine/40 text-sm font-bold text-cridora-gold-light"
                  aria-label="Profile"
                >
                  {initial}
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-silk/10 px-4 py-2.5">
              <button
                type="button"
                onClick={() => navigate('/app/kyc')}
                className={`rounded-xl border px-3 py-2 text-[0.7rem] font-semibold ${
                  session?.kycStatus === 'verified'
                    ? 'border-cridora-success/35 text-cridora-success'
                    : 'border-cridora-warning/35 text-cridora-warning'
                }`}
              >
                KYC {session?.kycStatus === 'verified' ? 'verified' : 'needed'}
              </button>
              <Link
                to="/app/buy"
                className="rounded-xl bg-cridora-gold px-4 py-2 text-[0.7rem] font-bold text-cridora-ink shadow-[var(--shadow-gold)]"
              >
                Buy gold
              </Link>
            </div>
          </header>

          <DisclaimerStrip dense />
          <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-4 md:px-10 md:py-8">
            <Outlet />
          </main>
        </div>
      </div>

      <nav
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-silk/15 bg-navy-silk/95 pt-2 shadow-[0_-8px_32px_rgba(0,8,20,0.45)] backdrop-blur-2xl md:hidden"
        aria-label="Mobile primary (PWA)"
        style={{ paddingBottom: 'max(0.65rem, env(safe-area-inset-bottom))' }}
      >
        <div className="flex overflow-x-auto [-webkit-overflow-scrolling:touch] px-2 pb-0.5">
          <div className="mx-auto flex min-w-max items-stretch justify-center gap-1 px-1">
            {mobileBottomNav.map(({ to, label, end, Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  [
                    'flex min-w-[3.35rem] max-w-[4.5rem] flex-col items-center gap-0.5 touch-manipulation rounded-xl px-1 py-1 sm:min-w-[3.6rem]',
                    isActive ? 'text-cridora-gold-light' : 'text-cridora-muted',
                  ].join(' ')
                }
              >
                {({ isActive }) => (
                  <>
                    <div
                      className={`rounded-2xl p-2 transition-transform ${
                        isActive
                          ? 'scale-105 bg-cridora-gold text-cridora-ink shadow-[var(--shadow-gold)]'
                          : 'text-cridora-muted'
                      }`}
                    >
                      <Icon className="mx-auto h-5 w-5" />
                    </div>
                    <span
                      className={`w-full truncate text-center text-[0.55rem] font-bold uppercase leading-tight tracking-tight sm:text-[0.6rem] ${
                        isActive ? 'text-cridora-gold-light' : 'text-cridora-muted'
                      }`}
                    >
                      {label}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}
