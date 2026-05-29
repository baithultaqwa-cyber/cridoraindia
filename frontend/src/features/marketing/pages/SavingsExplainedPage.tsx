import { Link } from 'react-router-dom'
import { SectionHeader } from '@/shared/components/marketing/SectionHeader'

const sections = [
  {
    title: 'What is BIS 916?',
    body: 'BIS 916 indicates 91.6% pure gold in India’s hallmarking system — the standard Cridora orients around for participating jewellers at launch.',
  },
  {
    title: 'How buying in grams works',
    body: 'You allocate rupees at checkout; the platform records grams credited using the disclosed rate, purity, and fee schedule for that jeweller or product.',
  },
  {
    title: 'Live rate vs jeweller rate',
    body: 'Benchmark feeds and store policies can differ. The app should show which rate applies before you pay — no surprises at the counter.',
  },
  {
    title: 'Why GST is paid at buy time',
    body: 'Tax treatment follows current rules for digital gold and jewellery purchases. Receipts and invoices remain with the jeweller or platform as applicable.',
  },
  {
    title: 'Lock-in explained',
    body: 'Some schemes or promotions freeze redemptions for a period. Lock-in length and exceptions are shown before you opt in.',
  },
  {
    title: 'Maturity explained',
    body: 'For scheme products, maturity may mean bonus grams, making-charge benefits, or cash settlement — depending on the jeweller’s published terms.',
  },
] as const

export function SavingsExplainedPage() {
  return (
    <div>
      <section className="relative border-b border-silk/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cridora-gold">Education</p>
          <h1 className="font-display mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-cridora-text sm:text-5xl">
            Gold savings explained
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cridora-muted">
            Teacher-like clarity — grams, rates, tax, and scheme language — without promising returns.
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

          <div className="mx-auto mt-16 max-w-2xl">
            <SectionHeader
              eyebrow="Simulator"
              title="Try a sample purchase (read-only)"
              subtitle="Illustrative only — use live checkout for real rates and taxes."
            />
            <div className="ui-card mt-8 space-y-4 p-8">
              <p className="text-sm font-medium text-cridora-text">Sample purchase (₹10,000)</p>
              <p className="text-sm leading-relaxed text-cridora-muted">
                At a hypothetical ₹6,500/gm (before GST and charges), ₹10,000 might correspond to roughly
                1.54g. Live checkout shows exact grams, GST, and fees at confirmation — this box is static
                for learning only.
              </p>
            </div>
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-cridora-muted">
            Next:{' '}
            <Link className="ui-link-foot font-medium text-cridora-gold-light" to="/redemption-explained">
              How redemption works
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
