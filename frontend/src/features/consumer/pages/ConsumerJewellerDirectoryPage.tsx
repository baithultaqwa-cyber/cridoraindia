import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { getDefaultJewellerId, setDefaultJewellerId } from '@/features/consumer/lib/default-jeweller'
import {
  NETWORK_JEWELLERS_DEMO,
  demoJewellerCities,
  type NetworkJewellerDemo,
} from '@/shared/data/network-jewellers-demo'
import { STOCK_SHOP_WINDOW, stockImageForJeweller } from '@/shared/data/marketplace-stock-images'
import { formatInrPerGram } from '@/shared/lib/demo-gold-rate'

function matchesQuery(j: NetworkJewellerDemo, q: string): boolean {
  if (!q.trim()) return true
  const n = q.trim().toLowerCase()
  const blob = [
    j.name,
    j.city,
    j.area,
    j.addressLine,
    j.pincode ?? '',
    j.tagline,
    ...j.facilities,
    ...j.services,
    ...j.schemes.map((s) => `${s.name} ${s.tenure} ${s.highlight}`),
  ]
    .join(' ')
    .toLowerCase()
  return blob.includes(n)
}

export function ConsumerJewellerDirectoryPage() {
  const [query, setQuery] = useState('')
  const [city, setCity] = useState<string>('all')
  const [sameDayOnly, setSameDayOnly] = useState(false)
  const [schemesOnly, setSchemesOnly] = useState(false)
  const [verifiedOnly, setVerifiedOnly] = useState(false)
  const [defaultId, setDefaultId] = useState<string | null>(() => getDefaultJewellerId())

  useEffect(() => {
    const onStorage = () => setDefaultId(getDefaultJewellerId())
    window.addEventListener('cridora-default-jeweller', onStorage)
    window.addEventListener('storage', onStorage)
    return () => {
      window.removeEventListener('cridora-default-jeweller', onStorage)
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  const cities = useMemo(() => demoJewellerCities(), [])

  const filtered = useMemo(() => {
    return NETWORK_JEWELLERS_DEMO.filter((j) => {
      if (city !== 'all' && j.city !== city) return false
      if (sameDayOnly && !j.sameDayRedemption) return false
      if (schemesOnly && j.schemes.length === 0) return false
      if (verifiedOnly && !j.networkVerified) return false
      return matchesQuery(j, query)
    }).sort((a, b) => b.credibilityScore - a.credibilityScore)
  }, [city, query, sameDayOnly, schemesOnly, verifiedOnly])

  return (
    <div className="pb-8">
      <section className="relative -mx-4 overflow-hidden rounded-b-[1.75rem] border-b border-silk/10 md:-mx-10 md:rounded-b-[2rem]">
        <div className="absolute inset-0">
          <img
            src={STOCK_SHOP_WINDOW}
            alt=""
            className="h-full min-h-[240px] w-full object-cover opacity-40 sm:min-h-[280px]"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/94 to-navy-deep" />
          <div className="pointer-events-none absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-cridora-gold/12 blur-[90px]" />
        </div>
        <div className="relative z-10 px-4 pb-28 pt-8 md:px-8 md:pb-32 md:pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cridora-gold">Network</p>
          <h1 className="font-display mt-4 max-w-3xl text-2xl font-semibold tracking-tight text-cridora-text sm:text-3xl md:text-[2.5rem]">
            Find jewellers &amp; services
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cridora-muted sm:text-base">
            Search participating stores, compare indicative rates and schemes, and open catalogues — demo data until your
            backend connects.{' '}
            <Link to="/app/marketplace" className="font-medium text-cridora-gold-light underline hover:no-underline">
              Marketplace hub
            </Link>{' '}
            for cart-ready browsing.
          </p>
        </div>
      </section>

      <div className="relative z-20 -mt-20 px-1 md:-mt-24">
        <div className="mx-auto max-w-6xl rounded-[1.35rem] border border-silk/15 bg-navy-silk/92 p-4 shadow-[0_28px_70px_rgba(0,8,20,0.52)] backdrop-blur-xl sm:p-5 md:rounded-[1.75rem]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
            <label className="min-w-0 flex-1">
              <span className="mb-1.5 block text-[0.65rem] font-semibold uppercase tracking-wide text-cridora-muted">
                Search
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Name, city, area, street address, pincode…"
                className="ui-input min-h-11 w-full text-base sm:min-h-12 sm:text-sm"
                autoComplete="off"
              />
            </label>
            <label className="w-full sm:w-44">
              <span className="mb-1.5 block text-[0.65rem] font-semibold uppercase tracking-wide text-cridora-muted">
                City
              </span>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="ui-input min-h-11 w-full cursor-pointer text-base sm:min-h-12 sm:text-sm"
              >
                <option value="all">All cities</option>
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 border-t border-silk/10 pt-4">
            <button
              type="button"
              onClick={() => setSameDayOnly((v) => !v)}
              className={`touch-manipulation rounded-xl border px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                sameDayOnly
                  ? 'border-cridora-gold/45 bg-navy-shine/60 text-cridora-gold-light'
                  : 'border-silk/20 bg-navy-deep/40 text-cridora-muted hover:border-silk/35'
              }`}
            >
              Same‑day quotes
            </button>
            <button
              type="button"
              onClick={() => setSchemesOnly((v) => !v)}
              className={`touch-manipulation rounded-xl border px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                schemesOnly
                  ? 'border-cridora-gold/45 bg-navy-shine/60 text-cridora-gold-light'
                  : 'border-silk/20 bg-navy-deep/40 text-cridora-muted hover:border-silk/35'
              }`}
            >
              Has savings schemes
            </button>
            <button
              type="button"
              onClick={() => setVerifiedOnly((v) => !v)}
              className={`touch-manipulation rounded-xl border px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                verifiedOnly
                  ? 'border-cridora-gold/45 bg-navy-shine/60 text-cridora-gold-light'
                  : 'border-silk/20 bg-navy-deep/40 text-cridora-muted hover:border-silk/35'
              }`}
            >
              Verified only
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl space-y-6">

      {defaultId ? (
        <p className="text-sm text-cridora-muted">
          Default counter for buys & redemptions:{' '}
          <strong className="text-cridora-text">
            {NETWORK_JEWELLERS_DEMO.find((x) => x.id === defaultId)?.name ?? defaultId}
          </strong>
        </p>
      ) : (
        <p className="text-sm text-cridora-muted">Set a default jeweller so guided flows pre-select their counter.</p>
      )}

      <p className="text-sm text-cridora-muted">
        Showing <strong className="font-medium text-cridora-text">{filtered.length}</strong> of{' '}
        {NETWORK_JEWELLERS_DEMO.length} demo partners (sorted by credibility).
      </p>

      <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-2">
        {filtered.map((j) => (
          <li
            key={j.id}
            className="group overflow-hidden rounded-[1.35rem] border border-silk/12 bg-navy-silk/45 shadow-[var(--shadow-card)] motion-reduce:hover:translate-y-0"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-navy-deep/50">
              <img
                src={stockImageForJeweller(j.id)}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep from-30% via-transparent to-transparent" />
            </div>
            <div className="flex h-full flex-col p-5 pt-4">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="min-w-0">
                <h2 className="font-display text-lg font-semibold text-cridora-text">{j.name}</h2>
                <p className="text-xs text-cridora-muted">
                  {j.area} · {j.city}
                </p>
                <p className="mt-1 text-xs text-cridora-muted">
                  {j.addressLine}
                  {j.pincode ? ` · ${j.pincode}` : ''}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-md border border-silk/15 bg-navy-deep/40 px-2 py-0.5 text-[0.7rem] font-bold text-cridora-gold-light">
                    Score {j.credibilityScore}
                  </span>
                  {j.networkVerified ? (
                    <span className="rounded-md border border-cridora-success/35 bg-cridora-success/10 px-2 py-0.5 text-[0.65rem] font-bold uppercase text-cridora-success">
                      Cridora verified
                    </span>
                  ) : (
                    <span className="rounded-md border border-cridora-warning/35 bg-cridora-warning/10 px-2 py-0.5 text-[0.65rem] font-bold uppercase text-cridora-warning">
                      Unverified pilot
                    </span>
                  )}
                  {defaultId === j.id ? (
                    <span className="text-[0.65rem] font-bold uppercase text-cridora-gold">Default</span>
                  ) : null}
                </div>
              </div>
              <div className="shrink-0 rounded-xl border border-cridora-gold/25 bg-navy-deep/45 px-3 py-2 text-right">
                <p className="text-[0.65rem] font-medium uppercase tracking-wide text-cridora-muted">
                  Indicative rate
                </p>
                <p className="font-display text-base font-semibold tabular-nums text-cridora-gold-light sm:text-lg">
                  {formatInrPerGram(j.indicativeRatePerGram)}
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-cridora-muted">{j.tagline}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {j.sameDayRedemption ? (
                <span className="rounded-lg bg-cridora-success/15 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-cridora-success">
                  Same‑day desk
                </span>
              ) : (
                <span className="rounded-lg bg-navy-deep/60 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-cridora-muted">
                  Standard queue
                </span>
              )}
              <span className="rounded-lg bg-navy-deep/50 px-2 py-0.5 text-[0.65rem] text-cridora-muted">
                {j.schemes.length} scheme{j.schemes.length === 1 ? '' : 's'}
              </span>
              <span className="rounded-lg bg-navy-deep/50 px-2 py-0.5 text-[0.65rem] text-cridora-muted">
                {j.products.length} demo SKU{j.products.length === 1 ? '' : 's'}
              </span>
            </div>
            {j.schemes.length > 0 ? (
              <div className="mt-4 border-t border-silk/10 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-cridora-gold">Schemes</p>
                <ul className="mt-2 space-y-2">
                  {j.schemes.map((s) => (
                    <li
                      key={s.name}
                      className="rounded-xl border border-silk/10 bg-navy-deep/35 px-3 py-2 text-sm text-cridora-text"
                    >
                      <span className="font-medium">{s.name}</span>
                      <span className="text-cridora-muted"> · {s.tenure}</span>
                      <p className="mt-0.5 text-xs text-cridora-muted">{s.highlight}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="mt-4 border-t border-silk/10 pt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-cridora-gold">Facilities &amp; services</p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {[...j.facilities, ...j.services].map((f) => (
                  <li
                    key={f}
                    className="rounded-lg border border-silk/10 bg-navy-deep/30 px-2 py-1 text-[0.7rem] text-cridora-muted"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-[0.7rem] text-cridora-muted/90">{j.hallmarkingNote}</p>
            </div>
            <div className="mt-auto flex flex-col gap-2 pt-5 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={() => {
                  setDefaultJewellerId(j.id)
                  setDefaultId(j.id)
                }}
                className="ui-btn-secondary flex min-h-12 flex-1 items-center justify-center text-center text-sm"
              >
                Set as default
              </button>
              <Link
                to={`/app/jewellers/${j.id}/products`}
                className="ui-btn-primary flex min-h-12 flex-1 items-center justify-center text-center text-sm"
              >
                View products
              </Link>
              <Link
                to={`/app/jewellers/${j.id}/products#services`}
                className="ui-btn-secondary flex min-h-12 flex-1 items-center justify-center text-center text-sm"
              >
                Store details
              </Link>
            </div>
            </div>
          </li>
        ))}
      </ul>

      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-silk/15 bg-navy-silk/40 p-6 text-center text-sm text-cridora-muted">
          No jewellers match. Clear filters or try another city.
        </p>
      ) : null}
      </div>
    </div>
  )
}
