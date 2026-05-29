import { Link } from 'react-router-dom'
import { NETWORK_JEWELLERS_DEMO } from '@/shared/data/network-jewellers-demo'
import { STOCK_MARKETPLACE_HERO, stockImageForProduct } from '@/shared/data/marketplace-stock-images'

export function ConsumerOrnamentsCatalogPage() {
  const rows = NETWORK_JEWELLERS_DEMO.flatMap((j) =>
    j.products.map((p) => ({
      ...p,
      jewellerId: j.id,
      jewellerName: j.name,
      city: j.city,
      verified: j.networkVerified,
      score: j.credibilityScore,
    })),
  )

  return (
    <div className="pb-8">
      <section className="relative -mx-4 overflow-hidden rounded-b-[1.75rem] border-b border-silk/10 md:-mx-10 md:rounded-b-[2rem]">
        <div className="absolute inset-0">
          <img
            src={STOCK_MARKETPLACE_HERO}
            alt=""
            className="h-full min-h-[200px] w-full object-cover opacity-35 sm:min-h-[240px]"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-deep/95 to-navy-deep" />
        </div>
        <div className="relative z-10 px-4 pb-12 pt-8 md:px-8 md:pb-14 md:pt-10">
          <nav className="text-sm text-cridora-muted/90">
            <Link to="/app/marketplace/products" className="font-medium text-cridora-gold-light hover:underline">
              Marketplace catalogue →
            </Link>
          </nav>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-cridora-gold">Redeem · ornament</p>
          <h1 className="font-display mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-cridora-text sm:text-3xl md:text-[2.35rem]">
            Ornaments &amp; showcase pieces
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cridora-muted sm:text-base">
            Browse demo SKUs across the network. Redemption as jewellery uses the partnering jeweller’s making charges and
            GST — confirmed before you pay.
          </p>
        </div>
      </section>

      <ul className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {rows.map((p) => {
          const img = stockImageForProduct(p.category, p.jewellerId, p.id)
          return (
            <li
              key={`${p.jewellerId}-${p.id}`}
              className="group overflow-hidden rounded-[1.35rem] border border-silk/12 bg-navy-silk/45 shadow-[var(--shadow-card)] transition-transform motion-safe:hover:-translate-y-0.5"
            >
              <Link to={`/app/marketplace/product/${p.jewellerId}/${p.id}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden bg-navy-deep/55">
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
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <p className="text-[0.65rem] font-bold uppercase tracking-wide text-cridora-gold">
                      {p.category} · {p.purity}
                    </p>
                    <h2 className="font-display text-base font-bold leading-snug text-cridora-text">{p.name}</h2>
                  </div>
                </div>
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
    </div>
  )
}
