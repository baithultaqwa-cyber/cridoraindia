import { Link } from 'react-router-dom'
import { ExternalOrContactCta } from '@/shared/components/marketing/ExternalOrContactCta'
import { SectionHeader } from '@/shared/components/marketing/SectionHeader'

const benefits = [
  'Digital transformation without betting the shop on a massive IT project',
  'Retention tools that respect your customers and staff',
  'Recurring gold savings relationships — not only one-off showcases',
  'Extra footfall when balances redeem at your counter',
  'Optional liquidity conversations you control',
  'Modern infrastructure support and CRM-style building blocks',
  'A path to compete with chains as part of a credible network',
]

export function ForJewellersPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-silk/10">
        <div
          className="pointer-events-none absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-navy-shine/40 blur-3xl"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cridora-gold">For jewellers</p>
          <h1 className="font-display mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-cridora-text sm:text-5xl">
            Strengthen your store — don’t hand it over.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cridora-muted">
            Cridora is jeweller-first technology: acquire digitally, serve at the counter, and stay
            competitive with tools and network presence — without losing your brand story.
          </p>
          <ExternalOrContactCta
            urlKey="jewellerNetwork"
            className="ui-btn-primary mt-10 min-h-12 px-8 text-sm sm:inline-flex"
            fallbackTo="/contact?topic=jeweller"
          >
            Become an early network partner
          </ExternalOrContactCta>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Business value"
            title="Why jewellers are engaging"
            subtitle="Better retention, recurring savings behaviour, and digital credibility — grounded in the way India actually buys gold."
            large
          />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2">
            {benefits.map((t) => (
              <li key={t} className="ui-card p-6 text-sm leading-relaxed text-cridora-muted">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-silk/10 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="ui-glass-gold-frame">
            <div className="ui-glass-gold-inner p-8 text-center sm:p-10">
              <h2 className="font-display text-2xl font-semibold text-cridora-text">Ready for the jeweller form?</h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-cridora-muted">
                Share your shop, city, branches, and interest level — we’ll follow up for pilot conversations.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ExternalOrContactCta
                  urlKey="jewellerNetwork"
                  className="ui-btn-primary min-h-12 px-8 text-sm"
                  fallbackTo="/contact?topic=jeweller"
                >
                  Join jeweller network
                </ExternalOrContactCta>
                <Link to="/contact" className="ui-btn-secondary min-h-12 px-8 text-sm">
                  Speak to us first
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
