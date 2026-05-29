import { Link } from 'react-router-dom'
import { ExternalOrContactCta } from '@/shared/components/marketing/ExternalOrContactCta'
import { SectionHeader } from '@/shared/components/marketing/SectionHeader'

const requirements = [
  'Valid GST registration and storefront presence',
  'BIS-related purity documentation for offered SKUs',
  'Owner or authorised signatory for contracts and escrow onboarding',
  'Basic digital readiness: staff device + stable connectivity',
] as const

const journey = [
  'Submit application (shop, city, branches, documents)',
  'Verification call and lightweight store checks',
  'Sandbox testing with scripted buys and redemptions',
  'Go-live checklist: rates, making charges, schemes, staff training',
] as const

export function JewellerPartnershipPage() {
  return (
    <div>
      <section className="relative border-b border-silk/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cridora-gold">
            Jeweller partnership
          </p>
          <h1 className="font-display mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-cridora-text sm:text-5xl">
            Modernise your shop — keep your customers and brand story.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cridora-muted">
            Peer-to-peer respect: we equip jewellers to compete digitally without becoming invisible behind
            a marketplace badge.
          </p>
          <ExternalOrContactCta
            urlKey="jewellerNetwork"
            className="ui-btn-primary mt-10 min-h-12 px-8 text-sm sm:inline-flex"
            fallbackTo="/contact?topic=jeweller"
          >
            Start application
          </ExternalOrContactCta>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Why partner"
            title="Network effects without losing the counter"
            subtitle="Digital acquisition, settlements, GoldNest tooling — grounded in how India buys gold."
            large
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="ui-card p-8">
              <h2 className="font-display text-xl font-semibold text-cridora-text">Requirements</h2>
              <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-cridora-muted marker:text-cridora-gold">
                {requirements.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="ui-card p-8">
              <h2 className="font-display text-xl font-semibold text-cridora-text">Onboarding journey</h2>
              <ol className="mt-4 list-inside list-decimal space-y-2 text-sm text-cridora-muted marker:text-cridora-gold">
                {journey.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ol>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <ExternalOrContactCta
              urlKey="jewellerNetwork"
              className="ui-btn-primary min-h-12 px-8 text-sm"
              fallbackTo="/contact?topic=jeweller"
            >
              Apply as partner
            </ExternalOrContactCta>
            <Link to="/for-jewellers" className="ui-btn-secondary min-h-12 px-8 text-sm">
              Product value for jewellers
            </Link>
            <Link to="/faq" className="ui-btn-secondary min-h-12 px-8 text-sm">
              Partner FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
