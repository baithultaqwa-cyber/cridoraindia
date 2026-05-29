import { Link } from 'react-router-dom'
import { SectionHeader } from '@/shared/components/marketing/SectionHeader'

const sections = [
  {
    title: 'Same-jeweller redemption',
    body: 'When you redeem where you bought, making-charge waivers or loyalty benefits may apply per the jeweller’s published rules.',
  },
  {
    title: 'Cross-jeweller redemption',
    body: 'Redeeming at another network store can trigger settlement between jewellers. Fees are itemized before you confirm.',
  },
  {
    title: 'Making charges explained',
    body: 'Labour and design fees turn bullion into jewellery. They are disclosed as part of the redemption quote, not hidden at handover.',
  },
  {
    title: 'Categories',
    body: 'Jewellery, coins, bars, and ornaments may be offered depending on store inventory and scheme rules.',
  },
  {
    title: 'Lock-in interaction',
    body: 'Active lock-ins may block or reshape redemption until the period ends or you pay any disclosed early-exit costs.',
  },
] as const

export function RedemptionExplainedPage() {
  return (
    <div>
      <section className="relative border-b border-silk/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cridora-gold">Education</p>
          <h1 className="font-display mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-cridora-text sm:text-5xl">
            Redemption explained
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cridora-muted">
            Calm, transparent language on fees — especially when you redeem away from your original jeweller.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {sections.map(({ title, body }) => (
              <article key={title} className="ui-card p-8">
                <h2 className="font-display text-xl font-semibold text-cridora-text">{title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-cridora-muted sm:text-base">{body}</p>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <SectionHeader
              eyebrow="Worked example"
              title="Fee anatomy (illustrative)"
              subtitle="Numbers are placeholders; live checkout always wins."
              large
            />
            <div className="ui-card mx-auto mt-10 max-w-2xl space-y-4 p-8 text-sm text-cridora-muted">
              <div className="flex justify-between border-b border-silk/10 pb-3 text-cridora-text">
                <span>Grams redeemed</span>
                <span className="font-medium">10.0000 g</span>
              </div>
              <div className="flex justify-between">
                <span>Metal value @ store rate</span>
                <span>₹65,000</span>
              </div>
              <div className="flex justify-between">
                <span>Cross-jeweller settlement fee</span>
                <span>₹900</span>
              </div>
              <div className="flex justify-between">
                <span>Making charges (design)</span>
                <span>₹4,500</span>
              </div>
              <div className="flex justify-between">
                <span>GST (as applicable)</span>
                <span>₹1,620</span>
              </div>
              <div className="flex justify-between border-t border-cridora-gold/25 pt-4 font-display text-lg font-semibold text-cridora-text">
                <span>Pay at counter (excl. waivers)</span>
                <span>₹72,020</span>
              </div>
              <p className="text-xs leading-relaxed">
                Waivers, bonuses, and effective rates depend on jeweller promos and your eligibility at
                redemption time.
              </p>
            </div>
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-cridora-muted">
            Back to{' '}
            <Link className="ui-link-foot font-medium text-cridora-gold-light" to="/savings-explained">
              Gold savings explained
            </Link>{' '}
            ·{' '}
            <Link className="ui-link-foot font-medium text-cridora-gold-light" to="/compare">
              Compare options
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
