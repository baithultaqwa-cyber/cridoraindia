import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  demoMarketplaceCategories,
  flattenDemoMarketplaceProducts,
} from '@/shared/data/network-jewellers-demo'
import { stockImageForProduct, STOCK_MARKETPLACE_HERO } from '@/shared/data/marketplace-stock-images'

export function ConsumerMarketplaceProductsPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string>('all')

  const categories = useMemo(() => demoMarketplaceCategories(), [])

  const rows = useMemo(() => {
    const all = flattenDemoMarketplaceProducts()
    const q = query.trim().toLowerCase()
    return all.filter((p) => {
      if (category !== 'all' && p.category !== category) return false
      if (!q) return true
      const blob = [p.name, p.category, p.purity, p.jewellerName, p.city, p.makingNote].join(' ').toLowerCase()
      return blob.includes(q)
    })
  }, [query, category])

  return (
    <div className="pb-8">
      <section className="relative -mx-4 overflow-hidden rounded-b-[1.75rem] border-b border-silk/10 md:-mx-10 md:rounded-b-[2rem]">
        <div className="absolute inset-0">
          <img
            src={STOCK_MARKETPLACE_HERO}
            alt=""
            className="h-full min-h-[220px] w-full object-cover opacity-35 sm:min-h-[260px]"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-deep/95 to-navy-deep" />
        </div>
        <div className="relative z-10 px-4 pb-24 pt-8 md:px-8 md:pb-28 md:pt-12">
          <nav className="text-sm text-cridora-muted/90" aria-label="Breadcrumb">
            <Link to="/app/marketplace" className="font-medium text-cridora-gold-light hover:underline">
              ← Marketplace
            </Link>
          </nav>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.26em] text-cridora-gold">Catalogue</p>
          <h1 className="font-display mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-cridora-text sm:text-3xl md:text-[2.35rem]">
            Products across jewellers
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cridora-muted sm:text-base">
            Demo showcase SKUs from network partners. Open a product to add it to your cart or visit the store page.
          </p>
        </div>
      </section>

      <div className="relative z-20 -mt-16 px-1 md:-mt-20">
        <div className="mx-auto max-w-6xl rounded-[1.35rem] border border-silk/15 bg-navy-silk/92 p-4 shadow-[0_28px_70px_rgba(0,8,20,0.5)] backdrop-blur-xl sm:flex sm:flex-wrap sm:items-end sm:gap-4 sm:p-5 md:rounded-[1.75rem]">
          <label className="block min-w-0 flex-1">
            <span className="mb-1.5 block text-[0.65rem] font-semibold uppercase tracking-wide text-cridora-muted">
              Search
            </span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Name, jeweller, city, category…"
              className="ui-input min-h-11 w-full text-base sm:min-h-12 sm:text-sm"
              autoComplete="off"
            />
          </label>
          <label className="mt-3 block w-full sm:mt-0 sm:w-52">
            <span className="mb-1.5 block text-[0.65rem] font-semibold uppercase tracking-wide text-cridora-muted">
              Category
            </span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="ui-input min-h-11 w-full cursor-pointer text-base sm:min-h-12 sm:text-sm"
            >
              <option value="all">All categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-0">
        <p className="text-sm text-cridora-muted">
          Showing <strong className="font-medium text-cridora-text">{rows.length}</strong> SKU
          {rows.length === 1 ? '' : 's'}
        </p>

        <ul className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {rows.map((p) => {
            const img = stockImageForProduct(p.category, p.jewellerId, p.id)
            return (
              <li
                key={`${p.jewellerId}-${p.id}`}
                className="group overflow-hidden rounded-[1.35rem] border border-silk/12 bg-navy-silk/45 shadow-[var(--shadow-card)] transition-transform motion-safe:hover:-translate-y-0.5"
              >
                <Link to={`/app/marketplace/product/${p.jewellerId}/${p.id}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-navy-deep/60">
                    <img
                      src={img}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent" />
                    {p.verified ? (
                      <span className="absolute right-3 top-3 rounded-md border border-cridora-success/35 bg-navy-deep/80 px-2 py-0.5 text-[0.6rem] font-bold uppercase text-cridora-success backdrop-blur-sm">
                        Verified
                      </span>
                    ) : null}
                  </div>
                </Link>
                <div className="flex flex-col p-4 pt-3">
                  <p className="text-[0.65rem] font-bold uppercase tracking-wide text-cridora-gold">
                    {p.category} · {p.purity}
                  </p>
                  <h2 className="font-display text-base font-bold leading-snug text-cridora-text">{p.name}</h2>
                  <p className="mt-1 text-xs text-cridora-muted">
                    {p.jewellerName} · {p.city} · score {p.score}
                  </p>
                  <p className="mt-2 line-clamp-2 flex-1 text-xs text-cridora-muted">{p.makingNote}</p>
                  <p className="mt-3 font-display text-lg font-semibold tabular-nums text-cridora-text">
                    from ₹{p.indicativeFromInr.toLocaleString('en-IN')}
                  </p>
                  <Link
                    to={`/app/marketplace/product/${p.jewellerId}/${p.id}`}
                    className="ui-btn-primary mt-3 min-h-11 justify-center text-sm"
                  >
                    View &amp; add to cart
                  </Link>
                </div>
              </li>
            )
          })}
        </ul>

        {rows.length === 0 ? (
          <p className="mt-8 rounded-2xl border border-silk/15 bg-navy-silk/40 p-6 text-center text-sm text-cridora-muted">
            No products match. Clear search or pick another category.
          </p>
        ) : null}
      </div>
    </div>
  )
}
