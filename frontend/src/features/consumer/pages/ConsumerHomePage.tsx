import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '@/features/auth/AuthContext'
import {
  demoGoldLoans,
  demoGoldNestSchemes,
  demoJewellerAllocations,
  demoPortfolio,
  demoPriceAlert,
  demoPulseBars,
} from '@/features/consumer/data/consumer-dashboard-demo'
import {
  IconArrowRight,
  IconBanknote,
  IconChevronRight,
  IconExternalLink,
  IconGift,
  IconLock,
  IconMapPin,
  IconPlus,
  IconRepeat,
  IconShieldCheck,
  IconTrendingUp,
} from '@/features/consumer/icons/ConsumerNavIcons'

import { formatInrPerGram } from '@/shared/lib/demo-gold-rate'
import { useDemoLiveSpot } from '@/shared/lib/use-demo-live-spot'

const pulseMax = Math.max(...demoPulseBars, 1)

export function ConsumerHomePage() {
  const { session } = useAuth()
  const [showPriceAlert, setShowPriceAlert] = useState(true)
  const { ratePerGram, lastUpdated } = useDemoLiveSpot()
  const pulseTime = new Date(lastUpdated).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })

  return (
    <div className="space-y-6 md:space-y-8">
      {showPriceAlert ? (
        <div className="flex flex-col gap-3 rounded-3xl border border-cridora-gold/25 bg-gradient-to-r from-cridora-gold/15 to-transparent p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div className="flex min-w-0 items-start gap-3 sm:items-center">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cridora-gold text-cridora-ink">
              <IconTrendingUp className="h-5 w-5" />
            </div>
            <p className="text-xs font-bold leading-relaxed text-cridora-gold-light md:text-sm">{demoPriceAlert}</p>
          </div>
          <button
            type="button"
            className="self-end rounded-xl border border-silk/15 p-2 text-cridora-muted hover:text-cridora-text sm:self-center"
            aria-label="Dismiss alert"
            onClick={() => setShowPriceAlert(false)}
          >
            <IconPlus className="h-4 w-4 rotate-45" />
          </button>
        </div>
      ) : null}

      {session?.city ? (
        <p className="text-sm text-cridora-muted">
          Primary city · <span className="font-medium text-cridora-text">{session.city}</span>
        </p>
      ) : null}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="space-y-6 lg:col-span-8">
          <div className="group relative overflow-hidden rounded-[2rem] border border-silk/10 bg-gradient-to-br from-navy-silk/95 to-navy-shine/40 p-6 shadow-[var(--shadow-card)] md:rounded-[2.5rem] md:p-8">
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cridora-gold/[0.06] blur-3xl transition-all duration-700 group-hover:bg-cridora-gold/10" />
            <div className="relative z-10">
              <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="text-[0.625rem] font-bold uppercase tracking-[0.2em] text-cridora-muted">
                      Total balance
                    </span>
                    <IconShieldCheck className="h-3 w-3 shrink-0 text-cridora-success" />
                  </div>
                  <h1 className="font-display text-3xl font-bold tracking-tight text-cridora-text sm:text-4xl md:text-5xl lg:text-6xl">
                    {demoPortfolio.totalValue}
                  </h1>
                  <Link
                    to="/app/portfolio"
                    className="mt-2 inline-block text-xs font-semibold text-cridora-gold-light hover:underline"
                  >
                    Open vault →
                  </Link>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-lg border border-cridora-success/25 bg-cridora-success/10 px-2 py-1 text-xs font-bold text-cridora-success">
                      {demoPortfolio.unrealizedGain} ({demoPortfolio.gainPercent})
                    </span>
                    <span className="rounded-lg border border-silk/15 px-2 py-1 text-xs font-bold text-cridora-muted">
                      {demoPortfolio.purityLabel} · demo
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-3">
                <div className="rounded-3xl border border-silk/10 bg-navy-deep/40 p-4">
                  <p className="text-[0.625rem] font-bold uppercase text-cridora-muted">Metal weight</p>
                  <p className="mt-1 font-display text-lg font-bold italic text-cridora-gold-light md:text-xl">
                    {demoPortfolio.totalWeight}
                  </p>
                </div>
                <div className="rounded-3xl border border-silk/10 bg-navy-deep/40 p-4">
                  <p className="text-[0.625rem] font-bold uppercase text-cridora-muted">Tradable</p>
                  <p className="mt-1 font-display text-lg font-bold italic text-cridora-text md:text-xl">
                    {demoPortfolio.availableToSell}
                  </p>
                </div>
                <div className="hidden rounded-3xl border border-silk/10 bg-navy-deep/40 p-4 md:block">
                  <p className="text-[0.625rem] font-bold uppercase text-cridora-muted">Locked (collateral)</p>
                  <p className="mt-1 font-display text-lg font-bold italic text-silk md:text-xl">
                    {demoPortfolio.lockedGold}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link
                  to="/app/buy"
                  className="flex min-h-[3.25rem] flex-1 items-center justify-center gap-2 rounded-2xl bg-cridora-gold py-4 text-center text-sm font-bold text-cridora-ink shadow-[var(--shadow-gold)] transition-transform active:scale-[0.98] sm:min-h-0"
                >
                  <IconPlus className="h-5 w-5" />
                  Buy gold
                </Link>
                <Link
                  to="/app/redeem"
                  className="flex min-h-[3.25rem] flex-1 items-center justify-center gap-2 rounded-2xl border border-silk/20 bg-navy-deep/50 py-4 text-center text-sm font-bold text-cridora-text backdrop-blur-sm transition-colors hover:bg-navy-shine/40 active:scale-[0.98] sm:min-h-0"
                >
                  <IconRepeat className="h-5 w-5" />
                  Redeem gold
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-silk/10 bg-navy-silk/40 p-5 md:p-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <h2 className="flex items-center gap-2 font-display text-lg font-bold italic text-cridora-text">
                <IconLock className="h-5 w-5 text-cridora-gold" />
                Gold by jeweller
              </h2>
              <Link
                to="/app/portfolio"
                className="text-[0.625rem] font-bold uppercase tracking-wider text-cridora-muted hover:text-cridora-gold-light"
              >
                Ledger
                <IconExternalLink className="ml-1 inline h-3 w-3" />
              </Link>
            </div>
            <ul className="space-y-3">
              {demoJewellerAllocations.map((alloc, i) => (
                <li
                  key={`${alloc.name}-${i}`}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-silk/10 bg-navy-deep/35 p-4 transition-colors hover:border-cridora-gold/20"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-shine/60 text-xs font-bold italic text-cridora-gold-light">
                      {alloc.name[0]}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-cridora-text">{alloc.name}</p>
                      <p className="flex items-center gap-1 text-[0.625rem] text-cridora-muted">
                        <IconMapPin className="h-2.5 w-2.5 shrink-0" />
                        {alloc.location}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold tabular-nums text-cridora-gold-light">{alloc.weight}</p>
                    <p
                      className={`text-[0.5625rem] font-bold uppercase ${
                        alloc.status === 'In vault' ? 'text-cridora-success' : 'text-cridora-warning'
                      }`}
                    >
                      {alloc.status}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-navy-shine/40 bg-navy-shine/20 p-5 md:p-6">
            <IconBanknote className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 text-navy-shine/30" />
            <div className="relative z-10">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <h2 className="flex items-center gap-2 font-display text-lg font-bold italic text-cridora-text">
                  <IconBanknote className="h-5 w-5 text-silk" />
                  Emergency liquidity
                </h2>
                <span className="rounded-full bg-navy-shine px-3 py-1 text-[0.625rem] font-bold uppercase tracking-wide text-cridora-text">
                  Pilot · fees upfront
                </span>
              </div>
              {demoGoldLoans.map((loan) => (
                <div
                  key={loan.id}
                  className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-silk/10 bg-navy-deep/60 p-4"
                >
                  <div>
                    <p className="text-[0.625rem] font-bold uppercase text-silk">Active facility (demo)</p>
                    <p className="text-lg font-bold text-cridora-text">{loan.amount}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[0.625rem] font-bold uppercase text-cridora-muted">Collateral</p>
                    <p className="text-sm font-bold text-cridora-text">{loan.collateral}</p>
                  </div>
                </div>
              ))}
              <Link
                to="/app/credit"
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-navy-shine py-4 text-sm font-bold text-cridora-text transition-colors hover:bg-navy-shine/90"
              >
                View gold credit
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-4">
          <div className="rounded-[2rem] border border-silk/10 bg-navy-silk/55 p-5 shadow-[var(--shadow-card)] backdrop-blur-sm md:p-6">
            <div className="mb-5 flex items-center justify-between gap-2">
              <h3 className="text-sm font-bold uppercase italic tracking-wider text-cridora-muted">Live pulse</h3>
              <span className="rounded-lg border border-cridora-success/25 bg-cridora-success/10 px-2 py-1 text-[0.625rem] font-bold text-cridora-success">
                {demoPortfolio.purityLabel}
              </span>
            </div>
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-display text-3xl font-bold tabular-nums text-cridora-text">
                {formatInrPerGram(ratePerGram)}
              </span>
              <span className="text-sm font-bold text-cridora-success">live demo</span>
            </div>
            <p className="mb-6 mt-2 text-[0.625rem] font-bold uppercase text-cridora-muted">
              Refreshed: <span className="text-cridora-muted/90">{pulseTime}</span> · indicative ₹/g
            </p>
            <div className="mb-6 flex h-28 items-end gap-1 px-0.5" role="img" aria-label="Demo rate pulse chart">
              {demoPulseBars.map((h, i) => (
                <div key={i} className="group relative flex flex-1">
                  <div className="relative h-full w-full rounded-t-md bg-cridora-gold/10">
                    <div
                      className="absolute bottom-0 w-full rounded-t-md bg-cridora-gold transition-all group-hover:bg-cridora-gold-light"
                      style={{ height: `${(h / pulseMax) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-silk/10 bg-navy-deep/50 p-3">
                <p className="text-[0.5625rem] font-bold uppercase text-cridora-muted">Approx low</p>
                <p className="text-xs font-bold text-cridora-text">₹{(ratePerGram - 120).toLocaleString('en-IN')}</p>
              </div>
              <div className="rounded-xl border border-silk/10 bg-navy-deep/50 p-3">
                <p className="text-[0.5625rem] font-bold uppercase text-cridora-muted">Approx high</p>
                <p className="text-xs font-bold text-cridora-text">₹{(ratePerGram + 95).toLocaleString('en-IN')}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-silk/10 bg-navy-silk/55 p-5 md:p-6">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase italic tracking-wider text-cridora-muted">GoldNest</h3>
              <Link to="/app/schemes" aria-label="Add or manage schemes" className="text-cridora-gold hover:text-cridora-gold-light">
                <IconPlus className="h-4 w-4" />
              </Link>
            </div>
            <ul className="space-y-6">
              {demoGoldNestSchemes.map((scheme) => (
                <li key={scheme.id}>
                  <div className="mb-3 flex justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-cridora-text">{scheme.name}</p>
                      <p className="text-[0.5625rem] font-bold uppercase text-silk">{scheme.partner}</p>
                    </div>
                    <span className="shrink-0 text-[0.625rem] font-bold text-cridora-gold">{scheme.progress}%</span>
                  </div>
                  <div className="mb-2 h-2 w-full overflow-hidden rounded-full bg-navy-deep">
                    <div className="h-full rounded-full bg-cridora-gold" style={{ width: `${scheme.progress}%` }} />
                  </div>
                  <div className="flex justify-between text-[0.5625rem] font-bold uppercase text-cridora-muted">
                    <span>{scheme.current}</span>
                    <span>Target: {scheme.target}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between rounded-xl border border-silk/10 bg-navy-deep/50 p-2">
                    <span className="text-[0.5625rem] font-semibold text-cridora-muted">
                      Next instalment: {scheme.nextSip}
                    </span>
                    <IconChevronRight className="h-3 w-3 text-cridora-muted" />
                  </div>
                  <p className="mt-1 text-[0.5625rem] text-cridora-muted/90">{scheme.bonus}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-cridora-gold to-amber-700 p-6 text-cridora-ink shadow-[var(--shadow-gold)]">
            <IconGift className="mb-3 h-10 w-10 opacity-90" />
            <h4 className="font-display text-lg font-bold italic leading-tight">Share grams</h4>
            <p className="mt-1 text-xs font-semibold leading-relaxed text-cridora-ink/80">
              Transfer or gift gold to a trusted recipient — fees and limits are shown before you confirm.
            </p>
            <Link
              to="/app/transfer"
              className="mt-5 flex min-h-12 w-full items-center justify-center rounded-xl bg-navy-deep py-3 text-xs font-bold uppercase tracking-widest text-cridora-text transition-transform active:scale-[0.98]"
            >
              Gift / transfer
            </Link>
          </div>

          <div className="flex gap-4 rounded-[2rem] border border-silk/10 bg-navy-silk/40 p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cridora-success/15 text-cridora-success">
              <IconShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[0.625rem] font-bold uppercase italic text-cridora-text">Trust layer</p>
              <p className="mt-1 text-[0.5625rem] leading-snug text-cridora-muted">
                Ledger, jeweller custody, and statements reconcile in production — demo copy only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
