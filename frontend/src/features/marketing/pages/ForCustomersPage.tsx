import { ExternalOrContactCta } from '@/shared/components/marketing/ExternalOrContactCta'
import { SectionHeader } from '@/shared/components/marketing/SectionHeader'

const benefits = [
  { title: 'Fractional savings', body: 'Add when it suits you; balances shown in grams for clarity at home.' },
  { title: 'Live portfolio', body: 'Track holdings and history without noisy trading interfaces.' },
  { title: 'Multi-jeweller redemption', body: 'Redeem through participating stores as the network expands — rules upfront.' },
  { title: 'Gifting', body: 'Share gold with family for milestones where product rules allow.' },
  { title: 'Family vaults', body: 'Household saving and approval flows for shared goals.' },
  { title: 'Emergency liquidity', body: 'Where offered, fee-based liquidity with clear disclosures — not interest selling.' },
  { title: 'GoldNest schemes', body: 'Jeweller-run schemes with programmable rules you can compare.' },
  { title: 'Existing gold deposit', body: 'Paths to register and track metal already with partners, per policy.' },
  { title: 'Referrals', body: 'Share Cridora with people who want calm, physical-first gold savings.' },
] as const

export function ForCustomersPage() {
  return (
    <div>
      <section className="relative border-b border-silk/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cridora-gold">For customers</p>
          <h1 className="font-display mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-cridora-text sm:text-5xl">
            Savings that stay close to real gold — and real jewellers.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cridora-muted">
            Cridora is built for families who want discipline and transparency — without turning gold into a
            speculative game.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Benefits"
            title="What you can do on Cridora"
            subtitle="Aspirational but grounded — features roll out by region, partner, and compliance review."
            large
          />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ title, body }) => (
              <li key={title} className="ui-card p-6">
                <h2 className="font-display text-lg font-semibold text-cridora-text">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-cridora-muted">{body}</p>
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-14 max-w-xl text-center">
            <ExternalOrContactCta
              urlKey="userWaitlist"
              className="ui-btn-primary min-h-12 px-8 text-sm"
              fallbackTo="/waitlist"
            >
              Join waitlist
            </ExternalOrContactCta>
          </div>
        </div>
      </section>
    </div>
  )
}
