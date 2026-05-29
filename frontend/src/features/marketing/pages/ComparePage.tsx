import { Link } from 'react-router-dom'
import { publicComparisonRows } from '@/features/marketing/content/public-comparison'
import { ExternalOrContactCta } from '@/shared/components/marketing/ExternalOrContactCta'
import { SectionHeader } from '@/shared/components/marketing/SectionHeader'

const explainers = [
  {
    title: 'Traditional schemes vs Cridora',
    body: 'Many shop schemes optimize for loyalty to one counter. Cridora’s architecture aims for clearer gram balances and broader redemption choice as the network grows — without replacing jewellers.',
  },
  {
    title: 'Digital gold apps',
    body: 'Some products stay screen-first. Cridora emphasizes physical redemption with BIS 916 participation and fees shown before you confirm.',
  },
  {
    title: 'ETFs, SGBs, and equities',
    body: 'Listed instruments serve different goals. Cridora focuses on jeweller-integrated savings and ornaments — not brokerage flows.',
  },
  {
    title: 'Gold loans and forex',
    body: 'Borrowing against gold or trading currency pairs is a different risk stack. Cridora does not market leverage or FX as core savings.',
  },
  {
    title: 'How to read the table',
    body: 'Rows summarize typical positioning; your experience depends on live partners, city, and product rules at signup.',
  },
] as const

export function ComparePage() {
  return (
    <div>
      <section className="relative border-b border-silk/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cridora-gold">Compare</p>
          <h1 className="font-display mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-cridora-text sm:text-5xl">
            Compare with other ways Indians save and hold gold.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cridora-muted">
            Factual framing — no insult to other systems. Choose what fits your family’s goals and risk
            comfort.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="overflow-x-auto rounded-3xl border border-silk/15 bg-navy-silk/65">
            <table className="min-w-[720px] w-full text-left text-sm lg:min-w-full">
              <thead className="sticky top-0 z-10 bg-navy-deep">
                <tr className="border-b border-silk/15 text-[0.65rem] uppercase tracking-wider text-cridora-muted">
                  <th className="px-4 py-3 font-semibold sm:px-5 sm:py-4">Feature</th>
                  <th className="px-4 py-3 font-semibold sm:px-5 sm:py-4">Traditional schemes</th>
                  <th className="px-4 py-3 font-semibold sm:px-5 sm:py-4">Digital gold apps</th>
                  <th className="px-4 py-3 font-semibold sm:px-5 sm:py-4">Gold ETFs / stocks</th>
                  <th className="px-4 py-3 font-semibold text-cridora-gold-light sm:px-5 sm:py-4">
                    Cridora
                  </th>
                </tr>
              </thead>
              <tbody className="text-cridora-text">
                {publicComparisonRows.map(([feature, a, b, c, d]) => (
                  <tr key={feature} className="border-b border-silk/10 last:border-0">
                    <td className="px-4 py-3 text-cridora-muted sm:px-5 sm:py-4">{feature}</td>
                    <td className="px-4 py-3 sm:px-5 sm:py-4">{a}</td>
                    <td className="px-4 py-3 sm:px-5 sm:py-4">{b}</td>
                    <td className="px-4 py-3 sm:px-5 sm:py-4">{c}</td>
                    <td className="px-4 py-3 font-medium text-cridora-gold-light sm:px-5 sm:py-4">
                      {d}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-cridora-muted/90">
            Summaries are illustrative. Product availability varies by region, partner, and regulatory
            review.
          </p>
        </div>
      </section>

      <section className="border-t border-silk/10 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Explainers"
            title="How to think about each column"
            subtitle="Plain-language notes — not financial advice."
            large
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {explainers.map(({ title, body }) => (
              <div key={title} className="ui-card p-6">
                <h2 className="font-display text-lg font-semibold text-cridora-text">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-cridora-muted">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <ExternalOrContactCta
              urlKey="userWaitlist"
              className="ui-btn-primary min-h-12 px-6 text-sm"
              fallbackTo="/waitlist"
            >
              Join waitlist
            </ExternalOrContactCta>
            <Link to="/savings-explained" className="ui-btn-secondary min-h-12 px-6 text-sm">
              Gold savings explained
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
