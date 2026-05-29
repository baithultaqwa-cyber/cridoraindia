import { Link } from 'react-router-dom'
import { ExternalOrContactCta } from '@/shared/components/marketing/ExternalOrContactCta'

export function WaitlistPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cridora-gold">Join waitlist</p>
        <h1 className="font-display mt-6 text-4xl font-semibold tracking-tight text-cridora-text sm:text-5xl">
          Be among the first families on Cridora.
        </h1>
        <p className="mt-6 text-base leading-relaxed text-cridora-muted sm:text-lg">
          Email, phone, and city — then optional saving goals. We confirm by email and WhatsApp when pilots
          open near you.
        </p>
      </header>

      <div className="mx-auto mt-14 max-w-xl">
        <div className="ui-glass-gold-frame">
          <div className="ui-glass-gold-inner p-8 text-center sm:p-10">
            <p className="text-sm text-cridora-muted">
              Early access is limited by city and partner readiness — joining the waitlist does not guarantee
              immediate signup.
            </p>
            <ExternalOrContactCta
              urlKey="userWaitlist"
              className="ui-btn-primary mt-8 inline-flex min-h-12 px-10 text-sm"
              fallbackTo="/contact?topic=user-waitlist"
            >
              Open waitlist form
            </ExternalOrContactCta>
            <p className="mt-6 text-xs text-cridora-muted/90">
              Prefer email only?{' '}
              <Link className="text-cridora-gold-light underline-offset-2 hover:underline" to="/contact">
                Contact the team
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
