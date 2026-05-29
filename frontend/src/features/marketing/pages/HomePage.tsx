import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ExternalOrContactCta } from '@/shared/components/marketing/ExternalOrContactCta'
import { SectionHeader } from '@/shared/components/marketing/SectionHeader'
import { TiltSurface } from '@/shared/components/TiltSurface'
import { STOCK_HERO_JEWELLERY } from '@/shared/data/marketplace-stock-images'

export function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    const map: Record<string, string> = {
      '#waitlist': 'waitlist',
      '#why-users': 'why-users',
    }
    const id = map[hash]
    if (!id) return
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [hash])

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-silk/10">
        <div
          className="pointer-events-none absolute -right-32 top-1/4 h-72 w-72 animate-pulse rounded-full bg-cridora-gold/10 blur-3xl motion-reduce:animate-none"
          aria-hidden
        />
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cridora-gold">
              What is Cridora?
            </p>
            <h1 className="font-display mt-5 text-4xl font-semibold leading-[1.12] tracking-tight text-cridora-text sm:text-5xl lg:text-[3.15rem]">
              <span className="text-cridora-text">Save Gold Digitally.</span>{' '}
              <span className="text-gradient-gold-live">Redeem Through Trusted Jewellers.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cridora-muted sm:text-xl">
              Save in grams, redeem as jewellery or bullion where partners offer it — physical savings at real
              counters, not speculation on a screen.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ExternalOrContactCta
                urlKey="userWaitlist"
                className="ui-btn-primary min-h-12 px-7 text-[0.9375rem] sm:inline-flex"
                fallbackTo="/contact?topic=user-waitlist"
              >
                Join waitlist
              </ExternalOrContactCta>
              <ExternalOrContactCta
                urlKey="jewellerNetwork"
                className="ui-btn-secondary min-h-12 border-cridora-gold/30 px-7 text-[0.9375rem] text-cridora-gold-light sm:inline-flex hover:border-cridora-gold/45"
                fallbackTo="/contact?topic=jeweller"
              >
                Join as jeweller
              </ExternalOrContactCta>
              <ExternalOrContactCta
                urlKey="investorRelations"
                className="ui-btn-secondary min-h-12 px-7 text-[0.9375rem] sm:inline-flex"
                fallbackTo="/contact?topic=investor"
              >
                Investor relations
              </ExternalOrContactCta>
            </div>
          </div>
          <TiltSurface className="w-full max-w-xl lg:justify-self-end" maxTilt={9}>
            <div className="ui-glass-gold-frame">
              <div className="ui-glass-gold-inner overflow-hidden p-0 sm:p-0">
                <div className="relative aspect-[5/3] w-full overflow-hidden sm:aspect-[16/9]">
                  <img
                    src={STOCK_HERO_JEWELLERY}
                    alt=""
                    className="h-full w-full object-cover opacity-95 transition-transform duration-700 ease-out hover:scale-[1.03] motion-reduce:transition-none motion-reduce:hover:scale-100"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/25 to-transparent" />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cridora-gold-light/90">
                    At a glance
                  </p>
                  <p className="font-display mt-4 text-2xl font-semibold leading-snug text-cridora-text sm:text-3xl">
                    Grams in your wallet. Your jeweller at redemption.
                  </p>
                  <div className="mt-6 grid gap-2.5 text-sm">
                    <div className="ui-row-interactive items-center border-silk/10 bg-navy-deep/45 py-2.5">
                      <span className="rounded-lg bg-cridora-gold/20 px-2 py-1 text-xs font-semibold text-cridora-gold-light">
                        Save
                      </span>
                      <span className="text-cridora-muted">Top up anytime</span>
                    </div>
                    <div className="ui-row-interactive items-center border-silk/10 bg-navy-deep/45 py-2.5">
                      <span className="rounded-lg bg-cridora-gold/20 px-2 py-1 text-xs font-semibold text-cridora-gold-light">
                        Network
                      </span>
                      <span className="text-cridora-muted">Partner stores where enabled</span>
                    </div>
                    <div className="ui-row-interactive items-center border-silk/10 bg-navy-deep/45 py-2.5">
                      <span className="rounded-lg bg-cridora-gold/20 px-2 py-1 text-xs font-semibold text-cridora-gold-light">
                        Redeem
                      </span>
                      <span className="text-cridora-muted">Per store policy</span>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-cridora-muted/80">
                    Illustrative — terms vary by jeweller and region.
                  </p>
                </div>
              </div>
            </div>
          </TiltSurface>
        </div>
      </section>

      {/* Gap + what we do */}
      <section className="border-b border-silk/10 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Overview"
            title="Savings and jewellers, finally in sync"
            subtitle="Today, schemes and apps often leave families or stores stranded. Cridora links both sides in one network."
            large
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="ui-card ui-card-spotlight p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-cridora-gold-light">For you</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-cridora-muted">
                {[
                  'Often locked to one shop',
                  'Hard to move savings across trusted stores',
                  'Redemption and charges can be opaque',
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="text-cridora-gold" aria-hidden>
                      ·
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="ui-card ui-card-spotlight p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-cridora-gold-light">For jewellers</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-cridora-muted">
                {[
                  'Pressure from chains and pure digital brands',
                  'Limited modern tools at the counter',
                  'Retention beyond the physical ledger',
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="text-cridora-gold" aria-hidden>
                      ·
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              { h: 'Savers', b: 'Buy and track gold in grams with clarity.' },
              { h: 'Stores', b: 'Acquire and retain customers with shared infrastructure.' },
              { h: 'Network', b: 'One playbook for savings and redemption — phased by city.' },
            ].map(({ h, b }) => (
              <div
                key={h}
                className="rounded-2xl border border-silk/15 bg-navy-silk/50 px-5 py-4 text-center sm:text-left"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-cridora-gold">{h}</p>
                <p className="mt-2 text-sm leading-snug text-cridora-muted">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why users — shortened */}
      <section id="why-users" className="scroll-mt-24 border-b border-silk/10 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="For savers"
            title="Why people choose Cridora"
            subtitle="Clear grams, trusted counters, calm experience — not a trading app."
            large
          />
          <ul className="mx-auto mt-10 grid max-w-3xl gap-2.5 sm:grid-cols-2">
            {[
              'Save in any amount',
              'Transparent gram balance',
              'Redeem through partner jewellers',
              'Live value view in-product',
              'Gifting and family use where enabled',
              'More portability as the network grows',
            ].map((t) => (
              <li
                key={t}
                className="group flex gap-3 rounded-2xl border border-silk/10 bg-navy-silk/60 px-4 py-2.5 text-sm text-cridora-text transition-colors duration-300 hover:border-cridora-gold/20"
              >
                <span
                  className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-cridora-gold shadow-[0_0_10px_rgba(200,162,77,0.45)]"
                  aria-hidden
                />
                {t}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-xl text-center text-sm text-cridora-muted">
            Linked to participating jewellers — real counters and clear rules.{' '}
            <Link
              to="/for-customers"
              className="font-medium text-cridora-gold-light underline decoration-cridora-gold/35 underline-offset-4 hover:text-cridora-gold"
            >
              See all benefits
            </Link>
          </p>
        </div>
      </section>

      {/* Why jewellers — three pillars */}
      <section className="border-b border-silk/10 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="For jewellers"
            title="Stronger stores, together"
            subtitle="Digital tools and network demand without losing your identity at the counter."
            large
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              {
                h: 'Modern stack',
                b: 'Dashboards, customers, and redemption flow without a massive upfront build.',
              },
              {
                h: 'Footfall & retention',
                b: 'Savings customers and redemption visits anchored to your showroom.',
              },
              {
                h: 'Cohort scale',
                b: 'Compete with chains as part of a connected network, not in isolation.',
              },
            ].map(({ h, b }) => (
              <div key={h} className="ui-card ui-card-spotlight p-6">
                <h3 className="font-display text-lg font-semibold text-cridora-gold-light">{h}</h3>
                <p className="mt-3 text-sm leading-snug text-cridora-muted">{b}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-cridora-muted">
            <Link
              to="/for-jewellers"
              className="font-medium text-cridora-gold-light underline decoration-cridora-gold/35 underline-offset-4 hover:text-cridora-gold"
            >
              Partner overview
            </Link>
          </p>
        </div>
      </section>

      {/* Difference — snapshot, table on /compare */}
      <section className="border-b border-silk/10 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Compare"
            title="Built for physical gold"
            subtitle="Cridora stays on savings you can use at jewellers — not generic investing."
            large
          />
          <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {[
              { h: 'Redeem in metal', b: 'Path to jewellery or bullion at trusted stores.' },
              { h: 'Gram clarity', b: 'Holdings in grams you can understand.' },
              { h: 'Store-first', b: 'Jewellers stay central, not an afterthought.' },
              { h: 'Gold focus', b: 'No push into unrelated risky assets.' },
            ].map(({ h, b }) => (
              <div key={h} className="rounded-2xl border border-silk/12 bg-navy-silk/45 px-5 py-4">
                <p className="text-sm font-semibold text-cridora-text">{h}</p>
                <p className="mt-1.5 text-sm leading-snug text-cridora-muted">{b}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 flex flex-col items-center gap-3">
            <Link to="/compare" className="ui-btn-primary min-h-12 px-8 text-sm sm:inline-flex">
              Full comparison
            </Link>
            <p className="max-w-md text-center text-xs text-cridora-muted/85">
              Summaries are illustrative; availability varies by region and partner.
            </p>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="border-b border-silk/10 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Trust"
            title="Verified jewellers, clear history"
            subtitle="Strong hygiene in-product — details live in policies and the app, not marketing essays."
            large
          />
          <ul className="mx-auto mt-10 grid max-w-3xl gap-2.5 sm:grid-cols-2">
            {[
              'Verified partners for redemption',
              'Gram-based balance in the product',
              'Flows explained before you confirm',
              'Dependable digital transaction history',
              'Compliance-aware architecture',
            ].map((t) => (
              <li key={t} className="flex gap-3 rounded-2xl border border-silk/10 bg-navy-silk/35 px-4 py-2.5 text-sm text-cridora-muted">
                <span className="text-cridora-gold" aria-hidden>
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="scroll-mt-28 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Get started"
            title="Join the next chapter for Indian gold"
            subtitle="Pick your path — short forms, no long essays on this page."
            large
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="ui-card ui-card-spotlight flex flex-col p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold text-cridora-text">Savers</h3>
              <p className="mt-3 flex-1 text-sm text-cridora-muted">
                City and how you save — we follow up when waitlists open.
              </p>
              <ExternalOrContactCta
                urlKey="userWaitlist"
                className="ui-btn-primary mt-6 min-h-12 w-full justify-center text-sm"
                fallbackTo="/contact?topic=user-waitlist"
              >
                Join user waitlist
              </ExternalOrContactCta>
            </div>
            <div className="ui-card ui-card-spotlight flex flex-col p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold text-cridora-text">Jewellers</h3>
              <p className="mt-3 flex-1 text-sm text-cridora-muted">
                Shop, city, and interest — we’ll reach out for next steps.
              </p>
              <ExternalOrContactCta
                urlKey="jewellerNetwork"
                className="ui-btn-primary mt-6 min-h-12 w-full justify-center border border-cridora-gold/35 text-sm text-cridora-ink"
                fallbackTo="/contact?topic=jeweller"
              >
                Join jeweller network
              </ExternalOrContactCta>
            </div>
            <div className="ui-card ui-card-spotlight flex flex-col p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold text-cridora-text">Investors</h3>
              <p className="mt-3 flex-1 text-sm text-cridora-muted">
                Firm, mandate, and region — routed to the right conversation.
              </p>
              <ExternalOrContactCta
                urlKey="investorRelations"
                className="ui-btn-secondary mt-6 min-h-12 w-full justify-center text-sm"
                fallbackTo="/contact?topic=investor"
              >
                Investor relations
              </ExternalOrContactCta>
            </div>
          </div>
          <p className="mx-auto mt-10 max-w-xl text-center text-sm text-cridora-muted">
            Questions?{' '}
            <Link
              to="/faq"
              className="font-medium text-cridora-gold-light underline decoration-cridora-gold/35 underline-offset-4 hover:text-cridora-gold"
            >
              FAQ
            </Link>{' '}
            or{' '}
            <Link
              to="/contact"
              className="font-medium text-cridora-gold-light underline decoration-cridora-gold/35 underline-offset-4 hover:text-cridora-gold"
            >
              contact
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
