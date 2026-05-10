import { Link } from 'react-router-dom'
import { ExternalOrContactCta } from '../components/marketing/ExternalOrContactCta'
import { SectionHeader } from '../components/marketing/SectionHeader'

const steps = [
  {
    title: 'Save gold digitally',
    body: 'Add money in amounts that work for you. Your savings show as grams — clear, easy to explain at home.',
  },
  {
    title: 'Balance tracked in grams',
    body: 'Your holdings stay visible in the app with simple history — no noisy trading screens.',
  },
  {
    title: 'Watch live value',
    body: 'See how your balance tracks with market-linked rates so you can plan festivals and milestones.',
  },
  {
    title: 'Redeem through jewellers',
    body: 'Pick participating stores and products you want — jewellery, coins, or bars where offered.',
  },
  {
    title: 'Transfer or sell back (where available)',
    body: 'Share gold with family for weddings and gifts, or explore sell-back options with partner jewellers who choose to offer them.',
  },
]

export function HowItWorksPage() {
  return (
    <div>
      <section className="relative border-b border-silk/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cridora-gold">How it works</p>
          <h1 className="font-display mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-cridora-text sm:text-5xl">
            Five simple steps — digital savings, physical trust.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cridora-muted">
            We keep the story easy: save, track, redeem — with jewellers you can visit. No need to understand
            backend machinery on day one.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <ol className="space-y-6">
              {steps.map((step, i) => (
                <li key={step.title} className="ui-card flex gap-5 p-6 sm:gap-6 sm:p-8">
                  <span
                    className="font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cridora-gold text-lg font-semibold text-cridora-ink shadow-[var(--shadow-gold)]"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-cridora-text sm:text-2xl">
                      {step.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-cridora-muted sm:text-base">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <SectionHeader
              eyebrow="Next"
              title="Jeweller view"
              subtitle="Stores get their own onboarding story — queues, customers, and early partner benefits."
            />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/for-jewellers" className="ui-btn-primary min-h-12 px-6 text-sm">
                For jewellers
              </Link>
              <ExternalOrContactCta
                urlKey="userWaitlist"
                className="ui-btn-secondary min-h-12 px-6 text-sm"
                fallbackTo="/contact?topic=user-waitlist"
              >
                Join waitlist
              </ExternalOrContactCta>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
