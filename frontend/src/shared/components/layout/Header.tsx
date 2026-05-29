import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '@/features/auth/AuthContext'
import { CridoraLogoMark } from '../branding/CridoraLogoMark'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-xl px-2.5 py-2 text-[0.8125rem] font-medium transition-all duration-300 ease-out min-h-12 flex items-center lg:min-h-0 xl:px-3',
    isActive
      ? 'bg-navy-shine/70 text-cridora-gold-light shadow-[var(--shadow-card)]'
      : 'text-cridora-muted hover:bg-white/[0.06] hover:text-cridora-text',
  ].join(' ')

const links = [
  { to: '/how-it-works', label: 'How it works' },
  { to: '/for-customers', label: 'For customers' },
  { to: '/for-jewellers', label: 'For jewellers' },
  { to: '/trust', label: 'Trust' },
  { to: '/faq', label: 'FAQ' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)
  const { session } = useAuth()

  const dashboardPath =
    session?.role === 'consumer'
      ? '/app'
      : session?.role === 'admin'
        ? '/admin'
        : session?.role === 'merchant_staff' || session?.role === 'merchant_admin'
          ? '/merchant'
          : null

  return (
    <header className="premium-header sticky top-0 z-40 border-b border-silk/10 bg-navy-deep/95 shadow-[0_8px_32px_rgba(0,8,20,0.5)] transition-[box-shadow] duration-500">
      <div className="mx-auto flex min-h-[4.5rem] max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <NavLink
          to="/"
          className="group flex shrink-0 items-center gap-2.5 text-lg font-semibold tracking-tight text-cridora-text"
          onClick={() => setOpen(false)}
        >
          <CridoraLogoMark size="sm" />
          <span className="transition-colors duration-300 group-hover:text-cridora-gold-light">Cridora</span>
        </NavLink>
        <nav className="hidden items-center gap-0 lg:flex" aria-label="Primary">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={navLinkClass}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
            {dashboardPath ? (
              <Link
                to={dashboardPath}
                className="ui-btn-secondary hidden min-h-12 px-4 text-sm sm:inline-flex"
              >
                {session?.role === 'admin' ? 'Admin console' : 'Dashboard'}
              </Link>
            ) : (
            <Link to="/auth/login" className="ui-btn-secondary hidden min-h-12 px-4 text-sm sm:inline-flex">
              Sign in
            </Link>
          )}
          <Link to="/waitlist" className="ui-btn-primary hidden min-h-12 px-4 text-sm sm:inline-flex">
            Join waitlist
          </Link>
          <button
            type="button"
            className="ui-control-ghost flex min-h-12 min-w-12 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {open ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-silk/10 bg-navy-silk/98 px-4 py-4 shadow-inner lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {links.map(({ to, label }) => (
              <NavLink key={to} to={to} className={navLinkClass} onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            ))}
            <Link
              to="/waitlist"
              className="ui-btn-primary mt-2 flex min-h-12 items-center justify-center px-4 text-sm"
              onClick={() => setOpen(false)}
            >
              Join waitlist
            </Link>
            {dashboardPath ? (
              <Link
                to={dashboardPath}
                className="ui-btn-secondary mt-1 flex min-h-12 w-full items-center justify-center px-4 text-sm"
                onClick={() => setOpen(false)}
              >
                {session?.role === 'admin' ? 'Admin console' : 'Dashboard'}
              </Link>
            ) : (
              <Link
                to="/auth/login"
                className="ui-btn-secondary mt-1 flex min-h-12 w-full items-center justify-center px-4 text-sm"
                onClick={() => setOpen(false)}
              >
                Sign in
              </Link>
            )}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
