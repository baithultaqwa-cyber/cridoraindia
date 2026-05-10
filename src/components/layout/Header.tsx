import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../auth/AuthContext'
import { CridoraLogoMark } from '../branding/CridoraLogoMark'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-xl px-3 py-2 text-sm font-medium transition-all duration-300 ease-out min-h-12 flex items-center md:min-h-0',
    isActive
      ? 'bg-navy-shine/70 text-cridora-gold-light shadow-[var(--shadow-card)]'
      : 'text-cridora-muted hover:bg-white/[0.06] hover:text-cridora-text',
  ].join(' ')

const links = [
  { to: '/', label: 'Home', end: true as const },
  { to: '/about', label: 'About', end: false as const },
  { to: '/how-it-works', label: 'How it works', end: false as const },
  { to: '/for-jewellers', label: 'Jewellers', end: false as const },
  { to: '/faq', label: 'FAQ', end: false as const },
  { to: '/contact', label: 'Contact', end: false as const },
] as const

export function Header() {
  const [open, setOpen] = useState(false)
  const { session } = useAuth()

  const dashboardPath =
    session?.role === 'consumer'
      ? '/app'
      : session?.role === 'merchant_staff' || session?.role === 'merchant_admin'
        ? '/merchant'
        : null

  return (
    <header className="sticky top-0 z-40 border-b border-silk/10 bg-navy-deep/80 shadow-[0_8px_32px_rgba(0,8,20,0.5)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <NavLink
          to="/"
          className="group flex items-center gap-2.5 text-lg font-semibold tracking-tight text-cridora-text"
          onClick={() => setOpen(false)}
        >
          <CridoraLogoMark size="sm" />
          <span className="transition-colors duration-300 group-hover:text-cridora-gold-light">Cridora</span>
        </NavLink>
        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {links.map(({ to, label, end }) => (
            <NavLink key={to} to={to} className={navLinkClass} end={end}>
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
              Dashboard
            </Link>
          ) : (
            <Link to="/auth/login" className="ui-btn-secondary hidden min-h-12 px-4 text-sm sm:inline-flex">
              Sign in
            </Link>
          )}
          <Link to="/#waitlist" className="ui-btn-primary hidden min-h-12 px-4 text-sm sm:inline-flex">
            Join waitlist
          </Link>
          <button
            type="button"
            className="ui-control-ghost flex min-h-12 min-w-12 items-center justify-center xl:hidden"
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
          className="border-t border-silk/10 bg-navy-silk/98 px-4 py-4 shadow-inner backdrop-blur-md xl:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {links.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                className={navLinkClass}
                end={end}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/#waitlist"
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
                Dashboard
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
