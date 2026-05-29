import { useState, type ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CridoraLogoMark } from '@/shared/components/branding/CridoraLogoMark'

export type DashboardNavItem = {
  to: string
  label: string
  end?: boolean
}

type DashboardAppShellProps = {
  /** Micro-label under the logo (gold), e.g. Jeweller workspace */
  shellEyebrow: string
  shellTitle: string
  userName: string
  roleBadge: string
  detailLine?: string
  navItems: DashboardNavItem[]
  onLogout: () => void
  children: ReactNode
  /** Logo / brand row links here — `/merchant`, `/admin`, etc. */
  brandLink: string
}

const sidebarNavClass = ({ isActive }: { isActive: boolean }) =>
  [
    'flex w-full touch-manipulation items-center rounded-2xl px-4 py-3.5 text-left text-sm font-bold transition-all',
    isActive
      ? 'bg-cridora-gold text-cridora-ink shadow-[var(--shadow-gold)]'
      : 'text-cridora-muted hover:bg-white/[0.05] hover:text-cridora-text',
  ].join(' ')

const mobilePillClass = ({ isActive }: { isActive: boolean }) =>
  [
    'shrink-0 snap-start rounded-xl border px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-wider transition-colors',
    isActive
      ? 'border-cridora-gold/40 bg-navy-shine/60 text-cridora-gold-light'
      : 'border-silk/15 bg-navy-deep/40 text-cridora-muted hover:border-silk/25 hover:text-cridora-text',
  ].join(' ')

function initialFromName(name: string): string {
  const t = name.trim()
  return t ? t[0]!.toUpperCase() : 'U'
}

type SidebarBodyProps = {
  shellEyebrow: string
  shellTitle: string
  userName: string
  roleBadge: string
  detailLine?: string
  navItems: DashboardNavItem[]
  brandLink: string
  onLogout: () => void
  onCloseDrawer?: () => void
}

function SidebarBody({
  shellEyebrow,
  shellTitle,
  userName,
  roleBadge,
  detailLine,
  navItems,
  brandLink,
  onLogout,
  onCloseDrawer,
}: SidebarBodyProps) {
  const afterNav = () => onCloseDrawer?.()

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="p-6 pt-8">
        <Link to={brandLink} className="group flex items-center gap-3" onClick={afterNav}>
          <CridoraLogoMark size="sm" className="group-hover:scale-105" />
          <div className="min-w-0">
            <span className="block font-display text-xl font-bold italic leading-none tracking-tight text-cridora-text">
              Cridora
            </span>
            <span className="text-[0.625rem] font-bold uppercase tracking-widest text-cridora-gold">{shellEyebrow}</span>
          </div>
        </Link>
        <p className="mt-5 truncate font-display text-base font-semibold leading-snug text-cridora-text">{shellTitle}</p>
      </div>

      <nav className="flex min-h-0 flex-1 flex-col gap-1.5 overflow-y-auto px-3 pb-4" aria-label="Workspace sections">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.end} className={sidebarNavClass} onClick={afterNav}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto border-t border-silk/10 p-5">
        <div className="rounded-2xl border border-silk/10 bg-navy-deep/50 p-4">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-silk/15 bg-navy-shine/50 text-sm font-bold text-cridora-gold-light">
              {initialFromName(userName)}
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-bold text-cridora-text">{userName}</p>
              <p className="text-[0.625rem] font-bold uppercase tracking-widest text-cridora-gold">{roleBadge}</p>
              {detailLine ? <p className="mt-0.5 truncate text-[0.625rem] text-cridora-muted">{detailLine}</p> : null}
            </div>
          </div>
          <button
            type="button"
            className="w-full rounded-xl border border-cridora-border py-2.5 text-[0.65rem] font-semibold text-cridora-muted transition-colors hover:bg-white/[0.04] hover:text-cridora-text"
            onClick={() => {
              afterNav()
              onLogout()
            }}
          >
            Log out
          </button>
        </div>
        <Link
          to="/"
          className="mt-3 block text-center text-[0.65rem] font-semibold uppercase tracking-wider text-cridora-muted hover:text-cridora-gold-light"
          onClick={afterNav}
        >
          Public site
        </Link>
      </div>
    </div>
  )
}

export function DashboardAppShell({
  shellEyebrow,
  shellTitle,
  userName,
  roleBadge,
  detailLine,
  navItems,
  onLogout,
  children,
  brandLink,
}: DashboardAppShellProps) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div className="relative min-h-svh overflow-x-hidden bg-[var(--color-navy-deep)] pb-[max(0.75rem,env(safe-area-inset-bottom))] text-cridora-text">
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-navy-shine/25 blur-[120px]" />
        <div className="absolute -right-24 top-1/2 h-80 w-80 rounded-full bg-cridora-gold/[0.07] blur-[100px]" />
      </div>

      <div className="relative z-10 flex min-h-svh min-w-0">
        <aside className="sticky top-0 hidden h-svh w-72 shrink-0 flex-col border-r border-silk/10 bg-navy-silk/55 backdrop-blur-xl md:flex">
          <SidebarBody
            shellEyebrow={shellEyebrow}
            shellTitle={shellTitle}
            userName={userName}
            roleBadge={roleBadge}
            detailLine={detailLine}
            navItems={navItems}
            brandLink={brandLink}
            onLogout={onLogout}
          />
        </aside>

        {drawerOpen ? (
          <button
            type="button"
            className="fixed inset-0 z-30 bg-black/70 backdrop-blur-[2px] md:hidden"
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
          />
        ) : null}

        <aside
          className={`fixed left-0 top-0 z-40 flex h-full w-72 max-w-[85vw] flex-col border-r border-silk/10 bg-navy-silk/95 shadow-2xl backdrop-blur-xl transition-transform duration-200 ease-out md:pointer-events-none md:hidden ${
            drawerOpen ? 'translate-x-0 pointer-events-auto' : '-translate-x-full pointer-events-none'
          }`}
          aria-hidden={!drawerOpen}
        >
          <div className="flex h-14 shrink-0 items-center justify-end border-b border-silk/10 px-3 md:hidden">
            <button
              type="button"
              className="rounded-xl p-2 text-cridora-muted hover:bg-white/[0.06] hover:text-cridora-text"
              aria-label="Close menu"
              onClick={() => setDrawerOpen(false)}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto">
            <SidebarBody
              shellEyebrow={shellEyebrow}
              shellTitle={shellTitle}
              userName={userName}
              roleBadge={roleBadge}
              detailLine={detailLine}
              navItems={navItems}
              brandLink={brandLink}
              onLogout={onLogout}
              onCloseDrawer={() => setDrawerOpen(false)}
            />
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-20 flex h-14 shrink-0 items-center justify-between gap-3 border-b border-silk/10 bg-navy-deep/92 px-3 backdrop-blur-xl sm:px-4 md:hidden">
            <div className="flex min-w-0 items-center gap-2">
              <button
                type="button"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-cridora-muted hover:bg-white/[0.06] hover:text-cridora-text"
                aria-expanded={drawerOpen}
                aria-label="Open menu"
                onClick={() => setDrawerOpen(true)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <Link to={brandLink} className="group flex min-w-0 items-center gap-2">
                <CridoraLogoMark size="sm" className="group-hover:scale-105" />
                <div className="min-w-0">
                  <span className="block truncate font-display text-lg font-bold italic tracking-tight text-cridora-text">
                    Cridora
                  </span>
                  <span className="block truncate text-[0.6rem] font-bold uppercase tracking-wider text-cridora-gold">
                    {shellEyebrow}
                  </span>
                </div>
              </Link>
            </div>
            <Link
              to="/"
              className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-wider text-cridora-muted hover:text-cridora-gold-light"
            >
              Site
            </Link>
          </header>

          <div className="shrink-0 overflow-x-auto border-b border-silk/15 bg-navy-silk/95 [-webkit-overflow-scrolling:touch] backdrop-blur-2xl md:hidden">
            <div className="flex gap-1.5 px-2 py-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={mobilePillClass}
                  onClick={() => setDrawerOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-4 md:px-10 md:py-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
