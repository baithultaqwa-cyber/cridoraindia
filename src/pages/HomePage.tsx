import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ExternalOrContactCta } from '../components/marketing/ExternalOrContactCta'
import { SectionHeader } from '../components/marketing/SectionHeader'

const comparisonRows: [string, string, string, string, string][] = [
  ['Fractional gold savings', 'Limited', 'Yes', 'Yes', 'Yes'],
  ['Physical jewellery redemption', 'Mostly same shop', 'Limited', 'No', 'Yes'],
  ['Multiple jeweller access', 'No', 'No', 'No', 'Yes (network vision)'],
  ['User-to-user transfers', 'No', 'No', 'No', 'Yes'],
  ['Local jeweller integration', 'Yes', 'No', 'No', 'Yes'],
  ['Nationwide redemption vision', 'No', 'No', 'No', 'Yes (rolled out over time)'],
  ['Live gold value tracking', 'Limited', 'Yes', 'Yes', 'Yes'],
  ['Digital + physical ecosystem', 'Partial', 'Mostly digital', 'Investment-focused', 'Yes'],
  ['Designed for jewellery economy', 'Yes', 'No', 'No', 'Yes'],
  ['Customer flexibility', 'Low', 'Medium', 'Medium', 'High'],
]

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
      {/* Hero — what is Cridora */}
      <section className="relative overflow-hidden border-b border-silk/10">
        <div className="pointer-events-none absolute -right-32 top-1/4 h-72 w-72 rounded-full bg-cridora-gold/10 blur-[100px]" aria-hidden />
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cridora-gold">
              What is Cridora?
            </p>
            <h1 className="font-display mt-5 text-4xl font-semibold leading-[1.12] tracking-tight text-cridora-text sm:text-5xl lg:text-[3.15rem]">
              Save Gold Digitally. Redeem Through Trusted Jewellers.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cridora-muted sm:text-xl">
              Cridora helps users save fractional gold digitally and redeem it through participating
              jewellers across the network — a unified gold savings & redemption ecosystem for India.
            </p>
            <p className="mt-4 text-sm font-medium text-cridora-gold-light/95">
              Tangible, gold-linked savings — built for physical redemption, not speculation.
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
          <div className="ui-glass-gold-frame lg:justify-self-end">
            <div className="ui-glass-gold-inner p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cridora-gold-light/90">
                Digital savings · physical trust
              </p>
              <p className="font-display mt-6 text-3xl font-semibold text-cridora-text sm:text-4xl">
                Your balance in grams. Your jeweller at the counter.
              </p>
              <div className="mt-8 grid gap-3 text-sm">
                <div className="flex items-center gap-3 rounded-2xl border border-silk/10 bg-navy-deep/45 px-4 py-3">
                  <span className="rounded-lg bg-cridora-gold/20 px-2 py-1 text-xs font-semibold text-cridora-gold-light">
                    Wallet
                  </span>
                  <span className="text-cridora-muted">Save small amounts anytime</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-silk/10 bg-navy-deep/45 px-4 py-3">
                  <span className="rounded-lg bg-cridora-gold/20 px-2 py-1 text-xs font-semibold text-cridora-gold-light">
                    Network
                  </span>
                  <span className="text-cridora-muted">Redeem across participating stores</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-silk/10 bg-navy-deep/45 px-4 py-3">
                  <span className="rounded-lg bg-cridora-gold/20 px-2 py-1 text-xs font-semibold text-cridora-gold-light">
                    Jewellery
                  </span>
                  <span className="text-cridora-muted">Coins, bars & ornaments — per store policy</span>
                </div>
              </div>
              <p className="mt-6 text-xs leading-relaxed text-cridora-muted/85">
                Illustrative. Participation, rates, and products depend on jewellers and rollout regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-b border-silk/10 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Why change"
            title="The Gold Savings System Is Fragmented"
            subtitle="India trusts gold — but the experience is often split between old schemes and apps that don’t speak to your trusted jeweller."
            large
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="ui-card p-8">
              <h3 className="font-display text-xl font-semibold text-cridora-gold-light">For users</h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-cridora-muted">
                {[
                  'Locked to one jewellery shop',
                  'No portability across stores',
                  'Limited redemption flexibility',
                  'Weak transparency on charges',
                  'No easy gifting or transfers',
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
            <div className="ui-card p-8">
              <h3 className="font-display text-xl font-semibold text-cridora-gold-light">For jewellers</h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-cridora-muted">
                {[
                  'Losing customers to chains & digital brands',
                  'Little modern digital infrastructure',
                  'Weak retention beyond the ledger book',
                  'Rising competition without shared tools',
                  'Limited technology adoption at counter pace',
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
        </div>
      </section>

      {/* Solution */}
      <section className="border-b border-silk/10 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Solution"
            title="One Unified Gold Network"
            subtitle="Cridora connects users and trusted jewellers into one digital gold savings and redemption ecosystem — simple to explain, serious to build."
            large
          />
          <div className="mx-auto mt-12 max-w-3xl space-y-6 text-base leading-relaxed text-cridora-muted">
            <p className="text-cridora-text">
              <strong className="font-semibold text-cridora-text">Users can:</strong> save gold digitally,
              monitor live value, redeem through participating jewellers, transfer gold to family and
              friends, and — where partners offer it — sell back through the network.
            </p>
            <p className="text-cridora-text">
              <strong className="font-semibold text-cridora-text">Jewellers receive:</strong> digital
              customer acquisition, modern software tools, better retention, recurring engagement, extra
              redemption footfall, and a credible way to compete together without losing their identity.
            </p>
          </div>
        </div>
      </section>

      {/* Why users */}
      <section id="why-users" className="scroll-mt-24 border-b border-silk/10 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Savers"
            title="Why People Will Choose Cridora"
            subtitle="Clarity, flexibility, and a path to physical gold — without turning savings into a trading game."
            large
          />
          <ul className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
            {[
              'Save gold in any amount',
              'Gold measured transparently in grams',
              'Redeem through trusted jewellers',
              'More flexibility than many traditional schemes',
              'Better portability across the network over time',
              'Easier gifting for weddings & family',
              'Access multiple participating jewellers (as coverage grows)',
              'Live value tracking',
              'A future-ready digital gold experience — calm, not flashy',
            ].map((t) => (
              <li key={t} className="group flex gap-3 rounded-2xl border border-silk/10 bg-navy-silk/35 px-4 py-3 text-sm text-cridora-text backdrop-blur-sm transition-colors duration-300 hover:border-cridora-gold/20">
                <span
                  className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-cridora-gold shadow-[0_0_10px_rgba(200,162,77,0.45)]"
                  aria-hidden
                />
                {t}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-2xl rounded-2xl border border-cridora-gold/20 bg-navy-deep/40 px-6 py-4 text-center text-sm leading-relaxed text-cridora-muted">
            Your gold remains linked to{' '}
            <strong className="font-medium text-cridora-text">participating jewellers</strong> — not
            dependent on a single abstract vault story. Real counters, real metal, clear rules.
          </p>
        </div>
      </section>

      {/* Why jewellers */}
      <section className="border-b border-silk/10 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Partners"
            title="Why Jewellers Are Joining Cridora"
            subtitle="Cridora is designed to strengthen jewellers — not replace them. Independent stores can compete digitally, together."
            large
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Digital transformation without massive upfront builds',
              'Retention & engagement tooling',
              'New recurring gold savings customers',
              'Increased footfall through redemption traffic',
              'Healthier liquidity conversations where you choose',
              'Technology infrastructure support',
              'CRM & customer engagement building blocks',
              'Access to a larger network economy over time',
              'Competitive edge versus chains — as a connected cohort',
              'Participation in a nationwide digital gold vision — phased, serious rollout',
            ].map((t) => (
              <div key={t} className="ui-card p-5 text-sm leading-relaxed text-cridora-muted">
                {t}
              </div>
            ))}
          </div>
          <p className="mt-10 text-center font-display text-xl font-medium italic text-cridora-gold-light/95">
            “Independent jewellers can now compete digitally together.”
          </p>
        </div>
      </section>

      {/* Different — careful comparison copy */}
      <section className="border-b border-silk/10 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Clarity"
            title="How Cridora Is Different"
            subtitle="We focus on a culturally trusted asset, physical redemption, and utility — not on comparing ourselves to other industries."
            large
          />
          <div className="mx-auto mt-10 max-w-3xl space-y-5 text-sm leading-relaxed text-cridora-muted">
            <p>
              Gold has deep cultural trust in India — and Cridora is oriented toward{' '}
              <strong className="font-medium text-cridora-text">physically redeemable</strong> savings,
              not screen-only accounts with no path to metal.
            </p>
            <p>
              Many investment platforms stay entirely digital; Cridora connects{' '}
              <strong className="font-medium text-cridora-text">digital savings</strong> with{' '}
              <strong className="font-medium text-cridora-text">physical redemption</strong> through
              trusted jewellers.
            </p>
            <p>
              Many people want savings that still feel close to the showcase counter. Cridora stays focused
              on <strong className="font-medium text-cridora-text">gold-linked savings</strong> with{' '}
              <strong className="font-medium text-cridora-text">real-world redemption utility</strong> — not
              on promoting unrelated risk assets.
            </p>
          </div>
          <div className="mt-14 overflow-x-auto rounded-3xl border border-silk/15 bg-navy-silk/40 backdrop-blur-md">
            <table className="min-w-[720px] w-full text-left text-sm lg:min-w-full">
              <thead>
                <tr className="border-b border-silk/15 text-[0.65rem] uppercase tracking-wider text-cridora-muted">
                  <th className="px-4 py-3 font-semibold sm:px-5 sm:py-4">Feature</th>
                  <th className="px-4 py-3 font-semibold sm:px-5 sm:py-4">Traditional schemes</th>
                  <th className="px-4 py-3 font-semibold sm:px-5 sm:py-4">Digital gold apps</th>
                  <th className="px-4 py-3 font-semibold sm:px-5 sm:py-4">Gold ETFs / gold stocks</th>
                  <th className="px-4 py-3 font-semibold text-cridora-gold-light sm:px-5 sm:py-4">
                    Cridora
                  </th>
                </tr>
              </thead>
              <tbody className="text-cridora-text">
                {comparisonRows.map(([feature, a, b, c, d]) => (
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

      {/* Trust */}
      <section className="border-b border-silk/10 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Trust"
            title="Built Around Trusted Jewellers"
            subtitle="Verification, transparency, and clear history — without publishing internal legal playbooks on the open web."
            large
          />
          <ul className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
            {[
              'Participating jewellers remain redemption partners',
              'Users engage through verified jewellers in the network',
              'Transparent gram-based tracking in the product',
              'Clear redemption flows before you confirm',
              'Digital transaction history you can rely on',
              'Compliance-oriented product architecture',
            ].map((t) => (
              <li key={t} className="flex gap-3 rounded-2xl border border-silk/10 bg-navy-silk/35 px-4 py-3 text-sm text-cridora-muted">
                <span className="text-cridora-gold" aria-hidden>
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Early access */}
      <section id="waitlist" className="scroll-mt-28 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Early access"
            title="Be Part of India’s Next Gold Ecosystem"
            subtitle="Cridora is building infrastructure for India’s evolving gold economy — starting with focused pilots and honest waitlists."
            large
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <div className="ui-card flex flex-col p-8">
              <h3 className="font-display text-xl font-semibold text-cridora-text">For users</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-cridora-muted">
                Join the user waitlist — Name, mobile, city, how you plan to use Cridora, and your current
                gold savings habits (on the Google Form).
              </p>
              <ExternalOrContactCta
                urlKey="userWaitlist"
                className="ui-btn-primary mt-8 min-h-12 w-full justify-center text-sm"
                fallbackTo="/contact?topic=user-waitlist"
              >
                Join user waitlist
              </ExternalOrContactCta>
            </div>
            <div className="ui-card flex flex-col p-8">
              <h3 className="font-display text-xl font-semibold text-cridora-text">For jewellers</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-cridora-muted">
                Join the jeweller network — shop name, city, state, contact person, branches, current
                scheme usage, and interest level.
              </p>
              <ExternalOrContactCta
                urlKey="jewellerNetwork"
                className="ui-btn-primary mt-8 min-h-12 w-full justify-center border border-cridora-gold/35 text-sm text-cridora-ink"
                fallbackTo="/contact?topic=jeweller"
              >
                Join jeweller network
              </ExternalOrContactCta>
            </div>
            <div className="ui-card flex flex-col p-8">
              <h3 className="font-display text-xl font-semibold text-cridora-text">Investor relations</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-cridora-muted">
                Firm or fund, investment and strategic interest, region, and contact details — via a
                dedicated Google Form.
              </p>
              <ExternalOrContactCta
                urlKey="investorRelations"
                className="ui-btn-secondary mt-8 min-h-12 w-full justify-center text-sm"
                fallbackTo="/contact?topic=investor"
              >
                Investor relations
              </ExternalOrContactCta>
            </div>
          </div>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-cridora-muted">
            Questions first? Read the{' '}
            <Link to="/faq" className="font-medium text-cridora-gold-light underline decoration-cridora-gold/35 underline-offset-4 hover:text-cridora-gold">
              FAQ
            </Link>{' '}
            or reach us on the{' '}
            <Link to="/contact" className="font-medium text-cridora-gold-light underline decoration-cridora-gold/35 underline-offset-4 hover:text-cridora-gold">
              contact page
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
