import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useMarketplaceCart } from '@/features/consumer/marketplace/MarketplaceCartContext'
import { getDemoProduct } from '@/shared/data/network-jewellers-demo'
import { stockImageForProduct } from '@/shared/data/marketplace-stock-images'
import { formatInrPerGram } from '@/shared/lib/demo-gold-rate'

export function ConsumerMarketplaceProductPage() {
  const { jewellerId, productId } = useParams<{ jewellerId: string; productId: string }>()
  const { addItem } = useMarketplaceCart()
  const [qty, setQty] = useState(1)

  if (!jewellerId || !productId) {
    return <Navigate to="/app/marketplace/products" replace />
  }

  const found = getDemoProduct(jewellerId, productId)
  if (!found) {
    return <Navigate to="/app/marketplace/products" replace />
  }

  const { jeweller: j, product: p } = found
  const heroImg = stockImageForProduct(p.category, j.id, p.id)

  const handleAdd = () => {
    addItem({
      jewellerId: j.id,
      jewellerName: j.name,
      productId: p.id,
      productName: p.name,
      category: p.category,
      purity: p.purity,
      indicativeFromInr: p.indicativeFromInr,
      qty,
    })
  }

  return (
    <div className="pb-8">
      <nav className="mb-6 flex flex-wrap gap-x-3 gap-y-1 text-sm text-cridora-muted" aria-label="Breadcrumb">
        <Link to="/app/marketplace" className="font-medium text-cridora-gold-light hover:underline">
          Marketplace
        </Link>
        <span className="opacity-40">/</span>
        <Link to="/app/marketplace/products" className="font-medium text-cridora-gold-light hover:underline">
          Products
        </Link>
      </nav>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start">
        <div className="overflow-hidden rounded-[1.75rem] border border-silk/12 bg-navy-deep/40 shadow-[var(--shadow-card)]">
          <div className="relative aspect-square max-h-[min(520px,70vh)] sm:aspect-[4/5]">
            <img
              src={heroImg}
              alt=""
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-transparent" />
          </div>
        </div>

        <div className="space-y-6">
          <header>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cridora-gold">
              {p.category} · {p.purity}
            </p>
            <h1 className="font-display mt-3 text-2xl font-semibold tracking-tight text-cridora-text sm:text-3xl">
              {p.name}
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-cridora-muted">
              Sold by{' '}
              <Link to={`/app/jewellers/${j.id}/products`} className="font-medium text-cridora-gold-light underline hover:no-underline">
                {j.name}
              </Link>{' '}
              · {j.city}. {p.makingNote} Indicative price before taxes — final quote at confirmation.
            </p>
          </header>

          <div className="rounded-[1.35rem] border border-silk/12 bg-gradient-to-br from-navy-silk/75 to-navy-deep/45 p-6">
            <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-cridora-muted">Indicative from</p>
            <p className="font-display mt-2 text-3xl font-semibold tabular-nums text-cridora-gold-light sm:text-4xl">
              ₹{p.indicativeFromInr.toLocaleString('en-IN')}
            </p>
            <p className="mt-2 text-sm text-cridora-muted">
              Store indicative rate: {formatInrPerGram(j.indicativeRatePerGram)} · policy may vary
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-[1.35rem] border border-silk/12 bg-navy-silk/45 p-6">
            <label className="block">
              <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-cridora-muted">
                Quantity
              </span>
              <input
                type="number"
                min={1}
                max={99}
                value={qty}
                onChange={(e) => setQty(Math.min(99, Math.max(1, Number(e.target.value) || 1)))}
                className="ui-input max-w-[8rem]"
              />
            </label>
            <button type="button" className="ui-btn-primary min-h-12 w-full sm:w-auto sm:self-start" onClick={handleAdd}>
              Add to cart
            </button>
            <p className="text-xs text-cridora-muted">
              Tip: open{' '}
              <Link to="/app/marketplace/cart" className="font-medium text-cridora-gold-light underline hover:no-underline">
                Cart
              </Link>{' '}
              to review your basket.
            </p>
            <Link
              to={`/app/jewellers/${j.id}/products`}
              className="text-sm font-medium text-cridora-gold-light hover:underline"
            >
              Full store catalogue →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
