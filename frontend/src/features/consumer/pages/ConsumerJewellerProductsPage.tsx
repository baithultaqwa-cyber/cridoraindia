import { Link, Navigate, useParams } from 'react-router-dom'
import { useMarketplaceCart } from '@/features/consumer/marketplace/MarketplaceCartContext'
import { getDemoJeweller } from '@/shared/data/network-jewellers-demo'
import { stockImageForJeweller, stockImageForProduct } from '@/shared/data/marketplace-stock-images'
import { formatInrPerGram } from '@/shared/lib/demo-gold-rate'

export function ConsumerJewellerProductsPage() {
  const { addItem } = useMarketplaceCart()
  const { jewellerId } = useParams<{ jewellerId: string }>()
  if (!jewellerId) {
    return <Navigate to="/app/jewellers" replace />
  }

  const j = getDemoJeweller(jewellerId)
  if (!j) {
    return <Navigate to="/app/jewellers" replace />
  }

  const heroImg = stockImageForJeweller(j.id)

  return (
    <div className="pb-8">
      <section className="relative -mx-4 overflow-hidden rounded-b-[1.75rem] border-b border-silk/10 md:-mx-10 md:rounded-b-[2rem]">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            className="h-full min-h-[260px] w-full object-cover opacity-45 sm:min-h-[300px]"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/92 to-navy-deep/75" />
        </div>
        <div className="relative z-10 px-4 pb-28 pt-8 md:px-8 md:pb-32 md:pt-10">
          <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-cridora-muted/90" aria-label="Breadcrumb">
            <Link to="/app/jewellers" className="font-medium text-cridora-gold-light hover:underline">
              ← All jewellers
            </Link>
            <Link to="/app/marketplace" className="font-medium text-cridora-gold-light hover:underline">
              Marketplace
            </Link>
          </nav>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-cridora-gold">{j.city}</p>
          <h1 className="font-display mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-cridora-text sm:text-3xl md:text-[2.45rem]">
            {j.name}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cridora-muted sm:text-base">
            {j.area} · {j.tagline} Figures are illustrative; final quotes, making charges, and GST appear at the counter
            before you confirm.
          </p>
        </div>
      </section>

      <div className="relative z-20 -mt-20 px-1 md:-mt-24">
        <div className="mx-auto grid max-w-6xl gap-3 rounded-[1.35rem] border border-silk/15 bg-navy-silk/92 p-4 shadow-[0_28px_70px_rgba(0,8,20,0.52)] backdrop-blur-xl sm:grid-cols-3 sm:p-5 md:rounded-[1.75rem]">
          <div className="rounded-xl border border-silk/10 bg-navy-deep/35 px-4 py-3">
            <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-cridora-muted">Indicative rate</p>
            <p className="font-display mt-2 text-xl font-semibold tabular-nums text-cridora-gold-light">
              {formatInrPerGram(j.indicativeRatePerGram)}
            </p>
            <p className="mt-1 text-xs text-cridora-muted">Per gram · policy may vary</p>
          </div>
          <div className="rounded-xl border border-silk/10 bg-navy-deep/35 px-4 py-3">
            <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-cridora-muted">Redemption desk</p>
            <p className="mt-2 text-sm font-medium text-cridora-text">
              {j.sameDayRedemption ? 'Same‑day quotes available' : 'Standard scheduling'}
            </p>
            <p className="mt-1 text-xs text-cridora-muted">{j.hallmarkingNote}</p>
          </div>
          <div className="rounded-xl border border-silk/10 bg-navy-deep/35 px-4 py-3">
            <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-cridora-muted">Catalogue (demo)</p>
            <p className="font-display mt-2 text-xl font-semibold tabular-nums text-cridora-text">
              {j.products.length} SKU{j.products.length === 1 ? '' : 's'}
            </p>
            <p className="mt-1 text-xs text-cridora-muted">POS sync later</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl space-y-8">
        {j.schemes.length > 0 ? (
          <section className="rounded-[1.35rem] border border-silk/12 bg-navy-silk/45 p-5 md:p-6">
            <h2 className="font-display text-lg font-semibold text-cridora-text">GoldNest-style schemes</h2>
            <p className="mt-1 text-xs text-cridora-muted">Lock‑ins and bonuses are disclosed before you enrol.</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2" id="services">
              {j.schemes.map((s) => (
                <li key={s.name} className="rounded-2xl border border-silk/10 bg-navy-deep/40 px-4 py-3">
                  <p className="font-medium text-cridora-text">{s.name}</p>
                  <p className="text-xs text-cridora-gold-light">{s.tenure}</p>
                  <p className="mt-1 text-sm text-cridora-muted">{s.highlight}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <section className="rounded-[1.35rem] border border-silk/12 bg-navy-silk/45 p-5 md:p-6" id="services">
            <h2 className="font-display text-lg font-semibold text-cridora-text">Services</h2>
            <p className="mt-2 text-sm text-cridora-muted">
              This partner has not listed a GoldNest scheme in the demo dataset — counter purchases and redemptions may
              still be available.
            </p>
          </section>
        )}

        <section className="overflow-hidden rounded-[1.35rem] border border-silk/12 bg-navy-silk/40">
          <div className="border-b border-silk/10 px-5 py-4 md:px-6">
            <h2 className="font-display text-lg font-semibold text-cridora-text">Showcase products</h2>
            <p className="mt-1 text-xs text-cridora-muted">
              Demo SKUs for layout — weights, stone charges, and day rates will come from each store.
            </p>
          </div>
          <ul className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 md:p-5">
            {j.products.map((p) => {
              const img = stockImageForProduct(p.category, j.id, p.id)
              return (
                <li
                  key={p.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-silk/10 bg-navy-deep/35"
                >
                  <Link to={`/app/marketplace/product/${j.id}/${p.id}`} className="relative block aspect-[4/3] overflow-hidden bg-navy-deep/60">
                    <img
                      src={img}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.04]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-transparent to-transparent" />
                  </Link>
                  <div className="flex flex-1 flex-col p-4">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-cridora-gold">
                      {p.category} · {p.purity}
                    </p>
                    <h3 className="mt-2 font-display text-base font-semibold text-cridora-text">{p.name}</h3>
                    <p className="mt-1 flex-1 text-xs text-cridora-muted">{p.makingNote}</p>
                    <p className="mt-3 font-display text-lg font-semibold tabular-nums text-cridora-text">
                      from ₹{p.indicativeFromInr.toLocaleString('en-IN')}
                    </p>
                    <p className="text-[0.65rem] text-cridora-muted">Indicative · before taxes</p>
                    <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                      <Link
                        to={`/app/marketplace/product/${j.id}/${p.id}`}
                        className="ui-btn-secondary flex min-h-11 flex-1 items-center justify-center text-center text-sm"
                      >
                        Details
                      </Link>
                      <button
                        type="button"
                        className="ui-btn-primary flex min-h-11 flex-1 items-center justify-center text-center text-sm"
                        onClick={() =>
                          addItem({
                            jewellerId: j.id,
                            jewellerName: j.name,
                            productId: p.id,
                            productName: p.name,
                            category: p.category,
                            purity: p.purity,
                            indicativeFromInr: p.indicativeFromInr,
                            qty: 1,
                          })
                        }
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>

        <section className="rounded-[1.35rem] border border-silk/10 bg-navy-silk/35 px-5 py-4 md:px-6" id="facilities">
          <h2 className="text-sm font-semibold text-cridora-text">Facilities &amp; counter services</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {[...j.facilities, ...j.services].map((f) => (
              <li
                key={f}
                className="rounded-lg border border-silk/15 bg-navy-deep/40 px-3 py-1.5 text-xs text-cridora-muted"
              >
                {f}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
