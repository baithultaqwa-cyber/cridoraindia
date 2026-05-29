import { Link } from 'react-router-dom'
import { useMarketplaceCart } from '@/features/consumer/marketplace/MarketplaceCartContext'
import {
  MARKETPLACE_TILE_IMAGES,
  STOCK_MARKETPLACE_HERO,
} from '@/shared/data/marketplace-stock-images'

export function ConsumerMarketplaceHubPage() {
  const { itemCount } = useMarketplaceCart()

  return (
    <div className="pb-6">
      <section className="relative -mx-4 overflow-hidden rounded-b-[2rem] border-b border-silk/10 md:-mx-10 md:rounded-b-[2.5rem]">
        <div className="absolute inset-0">
          <img
            src={STOCK_MARKETPLACE_HERO}
            alt=""
            className="h-full w-full object-cover opacity-40"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/92 to-navy-deep" />
          <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-cridora-gold/15 blur-[100px]" />
        </div>
        <div className="relative z-10 px-4 pb-28 pt-10 md:px-8 md:pb-32 md:pt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cridora-gold">Marketplace</p>
          <h1 className="font-display mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-cridora-text sm:text-4xl md:text-[2.75rem]">
            Browse jewellers &amp; showcase jewellery — save your basket for the counter
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-cridora-muted sm:text-lg">
            Illustrative listings from the demo network. Final billing, making charges, and GST are confirmed by the
            partner store before you pay.
          </p>
        </div>
      </section>

      <div className="relative z-20 -mt-20 px-0 md:-mt-24">
        <div className="mx-auto grid max-w-6xl gap-5 px-1 sm:grid-cols-3">
          <Link
            to="/app/jewellers"
            className="group overflow-hidden rounded-[1.75rem] border border-silk/15 bg-navy-silk/90 shadow-[0_24px_60px_rgba(0,8,20,0.55)] backdrop-blur-xl transition-transform hover:-translate-y-0.5 md:rounded-[2rem]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={MARKETPLACE_TILE_IMAGES.jewellers}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />
              <p className="absolute bottom-3 left-4 text-[0.65rem] font-bold uppercase tracking-widest text-white/90">
                Stores
              </p>
            </div>
            <div className="space-y-2 px-5 py-5">
              <h2 className="font-display text-xl font-semibold text-cridora-text">Jewellers</h2>
              <p className="text-sm leading-relaxed text-cridora-muted">
                Search by city, schemes, credibility, and same-day desk availability.
              </p>
              <span className="inline-flex items-center text-sm font-semibold text-cridora-gold-light">
                Open directory →
              </span>
            </div>
          </Link>

          <Link
            to="/app/marketplace/products"
            className="group overflow-hidden rounded-[1.75rem] border border-silk/15 bg-navy-silk/90 shadow-[0_24px_60px_rgba(0,8,20,0.55)] backdrop-blur-xl transition-transform hover:-translate-y-0.5 md:rounded-[2rem]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={MARKETPLACE_TILE_IMAGES.products}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />
              <p className="absolute bottom-3 left-4 text-[0.65rem] font-bold uppercase tracking-widest text-white/90">
                Catalogue
              </p>
            </div>
            <div className="space-y-2 px-5 py-5">
              <h2 className="font-display text-xl font-semibold text-cridora-text">All products</h2>
              <p className="text-sm leading-relaxed text-cridora-muted">
                Filter SKUs across every demo partner in one grid — chains, coins, bridal picks.
              </p>
              <span className="inline-flex items-center text-sm font-semibold text-cridora-gold-light">
                Browse SKUs →
              </span>
            </div>
          </Link>

          <Link
            to="/app/marketplace/cart"
            className="group overflow-hidden rounded-[1.75rem] border border-cridora-gold/35 bg-navy-silk/95 shadow-[0_24px_60px_rgba(200,162,77,0.12)] backdrop-blur-xl transition-transform hover:-translate-y-0.5 md:rounded-[2rem]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={MARKETPLACE_TILE_IMAGES.cart}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />
              <p className="absolute bottom-3 left-4 text-[0.65rem] font-bold uppercase tracking-widest text-cridora-gold-light">
                Basket · {itemCount}
              </p>
            </div>
            <div className="space-y-2 px-5 py-5">
              <h2 className="font-display text-xl font-semibold text-cridora-text">Cart</h2>
              <p className="text-sm leading-relaxed text-cridora-muted">
                {itemCount === 0
                  ? 'Nothing saved yet — add pieces from a product page.'
                  : `${itemCount} line items ready to review with your jeweller.`}
              </p>
              <span className="inline-flex items-center text-sm font-semibold text-cridora-gold-light">
                View cart →
              </span>
            </div>
          </Link>
        </div>
      </div>

      <section className="mx-auto mt-14 max-w-6xl rounded-[1.75rem] border border-silk/12 bg-navy-silk/35 px-5 py-6 md:flex md:items-start md:gap-8 md:px-8 md:py-8">
        <div className="relative mb-5 hidden w-40 shrink-0 overflow-hidden rounded-2xl border border-silk/15 md:mb-0 md:block md:w-48">
          <img
            src={MARKETPLACE_TILE_IMAGES.products}
            alt=""
            className="aspect-square h-full w-full object-cover opacity-90"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="min-w-0 text-sm leading-relaxed text-cridora-muted">
          <p className="font-display text-lg font-semibold text-cridora-text">Planning checkout (pilot)</p>
          <p className="mt-2">
            Your basket helps you compare indicative totals before visiting the counter. When marketplace orders go live,
            you&apos;ll confirm grams, wallet top-up, and receipts in one flow. Questions?{' '}
            <Link to="/app/support" className="font-medium text-cridora-gold-light underline hover:no-underline">
              Support
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
