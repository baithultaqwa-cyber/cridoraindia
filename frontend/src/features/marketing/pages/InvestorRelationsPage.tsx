import { ExternalOrContactCta } from '@/shared/components/marketing/ExternalOrContactCta'

export function InvestorRelationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cridora-gold">Investor relations</p>
        <h1 className="font-display mt-6 text-4xl font-semibold tracking-tight text-cridora-text sm:text-5xl">
          Institutional, infrastructure-first gold connectivity.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-cridora-muted">
          Mature tone — deck access sits behind a short intake so we can respond with context.
        </p>
      </header>

      <div className="mx-auto mt-16 max-w-3xl space-y-8 text-base leading-relaxed text-cridora-muted">
        <section className="ui-card p-8">
          <h2 className="font-display text-2xl font-semibold text-cridora-text">Vision</h2>
          <p className="mt-4">
            Become the default interoperability layer between Indian jewellers and digitally native gold
            savers — settlement, compliance, and merchant SaaS in one stack.
          </p>
        </section>
        <section className="ui-card p-8">
          <h2 className="font-display text-2xl font-semibold text-cridora-text">Market</h2>
          <p className="mt-4">
            Hundreds of millions of households save via gold; independents still compose most storefronts.
            Cridora meets cultural trust with merchant-grade software.
          </p>
        </section>
        <section className="ui-card p-8">
          <h2 className="font-display text-2xl font-semibold text-cridora-text">Stage</h2>
          <p className="mt-4">
            Pre-launch: pilot jewellers, compliance review, and consumer waitlist. Ask for the latest
            factsheet in the form below.
          </p>
        </section>
        <section className="ui-card p-8">
          <h2 className="font-display text-2xl font-semibold text-cridora-text">Deck request</h2>
          <p className="mt-4">
            Share firm, ticket size, and mandate. We route to the founder inbox and follow up with
            materials or calendar availability.
          </p>
          <ExternalOrContactCta
            urlKey="investorRelations"
            className="ui-btn-primary mt-8 inline-flex min-h-12 px-8 text-sm"
            fallbackTo="/contact?topic=investor"
          >
            Request investor pack
          </ExternalOrContactCta>
        </section>
      </div>
    </div>
  )
}
