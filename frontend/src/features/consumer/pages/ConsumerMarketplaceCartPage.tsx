import { Link } from 'react-router-dom'
import { useMarketplaceCart } from '@/features/consumer/marketplace/MarketplaceCartContext'
import { MARKETPLACE_TILE_IMAGES, stockImageForProduct } from '@/shared/data/marketplace-stock-images'

export function ConsumerMarketplaceCartPage() {
  const { lines, subtotalInr, setQty, removeItem, clearCart } = useMarketplaceCart()

  return (
    <div className="pb-8">
      <section className="relative -mx-4 mb-8 overflow-hidden rounded-b-[1.5rem] border-b border-silk/10 md:-mx-10 md:rounded-b-[1.75rem]">
        <div className="absolute inset-0">
          <img
            src={MARKETPLACE_TILE_IMAGES.cart}
            alt=""
            className="h-full min-h-[140px] w-full object-cover opacity-30"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/96 to-navy-deep" />
        </div>
        <div className="relative z-10 flex flex-wrap items-start justify-between gap-4 px-4 py-8 md:px-8 md:py-10">
          <div>
            <nav className="text-sm text-cridora-muted/90" aria-label="Breadcrumb">
              <Link to="/app/marketplace" className="font-medium text-cridora-gold-light hover:underline">
                ← Marketplace
              </Link>
            </nav>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-cridora-gold">Basket</p>
            <h1 className="font-display mt-2 text-2xl font-semibold tracking-tight text-cridora-text sm:text-3xl">Cart</h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-cridora-muted">
              Indicative subtotal for planning. Each jeweller confirms tax, making charges, and fulfilment before you pay.
            </p>
          </div>
          {lines.length > 0 ? (
            <button type="button" className="ui-btn-secondary min-h-11 px-4 text-sm" onClick={() => clearCart()}>
              Clear all
            </button>
          ) : null}
        </div>
      </section>

      {lines.length === 0 ? (
        <div className="rounded-[1.35rem] border border-silk/15 bg-navy-silk/40 p-10 text-center">
          <p className="text-cridora-muted">Your cart is empty.</p>
          <Link to="/app/marketplace/products" className="ui-btn-primary mt-6 inline-flex min-h-11 items-center px-6">
            Browse products
          </Link>
        </div>
      ) : (
        <>
          <ul className="space-y-4">
            {lines.map((line) => {
              const thumb = stockImageForProduct(line.category, line.jewellerId, line.productId)
              return (
                <li
                  key={`${line.jewellerId}:${line.productId}`}
                  className="ui-card flex flex-col gap-4 overflow-hidden p-4 motion-reduce:hover:translate-y-0 sm:flex-row sm:items-center sm:justify-between sm:p-5"
                >
                  <div className="flex min-w-0 flex-1 gap-4">
                    <Link
                      to={`/app/marketplace/product/${line.jewellerId}/${line.productId}`}
                      className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-silk/12 bg-navy-deep/50 sm:h-28 sm:w-28"
                    >
                      <img
                        src={thumb}
                        alt=""
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </Link>
                    <div className="min-w-0 flex-1">
                      <p className="text-[0.65rem] font-bold uppercase tracking-wide text-cridora-gold">
                        {line.category} · {line.purity}
                      </p>
                      <h2 className="font-display text-base font-semibold text-cridora-text">{line.productName}</h2>
                      <p className="mt-1 text-sm text-cridora-muted">{line.jewellerName}</p>
                      <Link
                        to={`/app/marketplace/product/${line.jewellerId}/${line.productId}`}
                        className="mt-2 inline-block text-xs font-semibold text-cridora-gold-light hover:underline"
                      >
                        Edit choices
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 sm:justify-end">
                    <label className="flex items-center gap-2 text-sm text-cridora-muted">
                      Qty
                      <input
                        type="number"
                        min={1}
                        max={99}
                        value={line.qty}
                        onChange={(e) => setQty(line.jewellerId, line.productId, Number(e.target.value) || 1)}
                        className="ui-input w-20 py-2 text-center"
                      />
                    </label>
                    <div className="text-right">
                      <p className="text-xs text-cridora-muted">Line indicative</p>
                      <p className="font-display text-lg font-semibold tabular-nums text-cridora-text">
                        ₹{(line.indicativeFromInr * line.qty).toLocaleString('en-IN')}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="rounded-xl border border-red-500/25 px-3 py-2 text-xs font-semibold text-red-300 hover:bg-red-500/10"
                      onClick={() => removeItem(line.jewellerId, line.productId)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>

          <section className="ui-card mt-8 p-6 motion-reduce:hover:translate-y-0">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-cridora-muted">Subtotal (indicative)</p>
                <p className="font-display mt-2 text-3xl font-semibold tabular-nums text-cridora-gold-light">
                  ₹{subtotalInr.toLocaleString('en-IN')}
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:items-end">
                <Link to="/app/jewellers" className="ui-btn-secondary min-h-11 justify-center px-6 text-sm">
                  Visit jewellers
                </Link>
                <Link to="/app/support" className="ui-btn-primary min-h-11 justify-center px-6 text-sm">
                  Request checkout help
                </Link>
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-cridora-muted">
              Online checkout and gold-wallet payment against SKUs will appear when your rollout enables marketplace orders.
              Until then, use your jeweller’s desk or support for reservations.
            </p>
          </section>
        </>
      )}
    </div>
  )
}
