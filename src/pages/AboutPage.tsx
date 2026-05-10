import { Link } from 'react-router-dom'
import { ExternalOrContactCta } from '../components/marketing/ExternalOrContactCta'

export function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cridora-gold">About Cridora</p>
        <h1 className="font-display mt-6 text-4xl font-semibold tracking-tight text-cridora-text sm:text-5xl">
          A connected gold savings & redemption ecosystem — with jewellers at the centre.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-cridora-muted">
          Cridora exists to shrink the gap between how families save in gold and how stores serve them —
          using modern, India-first technology that respects the counter, the invoice, and the trust
          jewellers have built for generations.
        </p>
      </header>

      <div className="mx-auto mt-16 max-w-3xl space-y-10 text-base leading-relaxed text-cridora-muted">
        <section className="ui-card p-8">
          <h2 className="font-display text-2xl font-semibold text-cridora-text">Why we’re building it</h2>
          <p className="mt-4">
            Savings are still fragmented: families feel locked to one shop, and many independents lack the
            digital layer that chains already experiment with. Cridora is a pragmatic response —{' '}
            <strong className="font-medium text-cridora-text">awareness</strong>,{' '}
            <strong className="font-medium text-cridora-text">market validation</strong>, and{' '}
            <strong className="font-medium text-cridora-text">merchant growth</strong> — without replacing
            the jeweller’s role in the story.
          </p>
        </section>

        <section className="ui-card p-8">
          <h2 className="font-display text-2xl font-semibold text-cridora-text">What success looks like</h2>
          <p className="mt-4">
            A future where savers can move more freely between trusted stores, jewellers earn repeat
            relationships through better tools, and gold stays culturally grounded —{' '}
            <strong className="font-medium text-cridora-text">physical redemption</strong> stays normal,
            not exceptional.
          </p>
        </section>

        <section className="ui-card p-8">
          <h2 className="font-display text-2xl font-semibold text-cridora-text">Tone & principles</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 marker:text-cridora-gold">
            <li>Practical, trustworthy, and proudly India-focused.</li>
            <li>Pro-jeweller: we market strength for partners, not displacement.</li>
            <li>Technology-first UX with explanations anyone in the family can follow.</li>
          </ul>
        </section>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link to="/how-it-works" className="ui-btn-secondary min-h-12 px-6 text-sm">
            How it works
          </Link>
          <ExternalOrContactCta
            urlKey="userWaitlist"
            className="ui-btn-primary min-h-12 px-6 text-sm"
            fallbackTo="/contact?topic=user-waitlist"
          >
            Join waitlist
          </ExternalOrContactCta>
        </div>
      </div>
    </div>
  )
}
