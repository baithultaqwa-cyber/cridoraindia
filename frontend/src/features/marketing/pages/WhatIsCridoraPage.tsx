import { Link } from 'react-router-dom'
import { ExternalOrContactCta } from '@/shared/components/marketing/ExternalOrContactCta'

export function WhatIsCridoraPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cridora-gold">What is Cridora</p>
        <h1 className="font-display mt-6 text-4xl font-semibold tracking-tight text-cridora-text sm:text-5xl">
          India’s trusted digital gold savings and redemption network.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-cridora-muted">
          We connect families who save in gold with jewellers who custody and fulfil — using shared
          infrastructure, not pooled customer money.
        </p>
      </header>

      <div className="mx-auto mt-16 grid w-full max-w-6xl gap-6 lg:grid-cols-3">
        <section className="ui-card ui-card-spotlight p-6 sm:p-7">
          <h2 className="font-display text-xl font-semibold text-cridora-text">Buy &amp; balance</h2>
          <ul className="mt-4 space-y-3 text-sm leading-snug text-cridora-muted">
            {[
              'Buy in any nominal amount through participating jewellers, with GST at purchase.',
              'Holdings are digital grams with live portfolio value.',
            ].map((line) => (
              <li key={line} className="flex gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cridora-gold" aria-hidden />
                {line}
              </li>
            ))}
          </ul>
        </section>
        <section className="ui-card ui-card-spotlight p-6 sm:p-7">
          <h2 className="font-display text-xl font-semibold text-cridora-text">Deposit &amp; use</h2>
          <ul className="mt-4 space-y-3 text-sm leading-snug text-cridora-muted">
            {[
              'Deposit physical gold after purity verification.',
              'Redeem as ornaments, cash, transfers, loans, or Cridora-assisted emergency funds — where offered.',
              'Instant ledger deductions across every use path.',
            ].map((line) => (
              <li key={line} className="flex gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cridora-gold" aria-hidden />
                {line}
              </li>
            ))}
          </ul>
        </section>
        <section className="ui-card ui-card-spotlight p-6 sm:p-7">
          <h2 className="font-display text-xl font-semibold text-cridora-text">Launch model</h2>
          <ul className="mt-4 space-y-3 text-sm leading-snug text-cridora-muted">
            {[
              'Focus: BIS 916 gold.',
              'Metal stays with jewellers; Cridora runs ledger, settlement routing, and approvals.',
            ].map((line) => (
              <li key={line} className="flex gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cridora-gold" aria-hidden />
                {line}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mx-auto mt-16 max-w-3xl space-y-10 text-base leading-relaxed text-cridora-muted">
        <section className="ui-card p-8">
          <h2 className="font-display text-2xl font-semibold text-cridora-text">Mission</h2>
          <p className="mt-4">
            Cridora shrinks the gap between how Indians save in gold and how stores serve them — with
            technology that respects the counter, the invoice, and the trust jewellers have built for
            generations.
          </p>
        </section>

        <section className="ui-card p-8">
          <h2 className="font-display text-2xl font-semibold text-cridora-text">Distributed custody</h2>
          <p className="mt-4">
            Physical BIS 916 gold stays with participating jewellers who act as custodians and redemption
            operators. Cridora coordinates ledgers and settlement; it does not take custody of metal or
            pool customer funds.
          </p>
          <div className="mt-6 rounded-2xl border border-silk/15 bg-navy-deep/50 p-5 text-sm text-cridora-muted">
            <p className="font-medium text-cridora-text">Simple picture</p>
            <p className="mt-2">
              Customers ↔ Cridora (orchestration) ↔ many jewellers — liabilities and settlements are
              recorded clearly; cash flows use partner escrow structures as described at launch.
            </p>
          </div>
        </section>

        <section className="ui-card p-8">
          <h2 className="font-display text-2xl font-semibold text-cridora-text">Multi-jeweller network</h2>
          <p className="mt-4">
            Savings can be tracked digitally while redemption stays grounded in real showcases. Over time,
            the network aims to let eligible customers redeem across participating stores, with fees and
            rules shown before confirmation.
          </p>
        </section>

        <section className="ui-card p-8">
          <h2 className="font-display text-2xl font-semibold text-cridora-text">What Cridora is not</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 marker:text-cridora-gold">
            <li>Not a bank or deposit-taking institution</li>
            <li>Not an NBFC or lender by default — any credit-like features are disclosed separately if offered</li>
            <li>Not a guarantee of returns — gold is market-linked</li>
            <li>Not a trading terminal — no “trade gold” or speculative positioning</li>
          </ul>
        </section>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <ExternalOrContactCta
            urlKey="userWaitlist"
            className="ui-btn-primary min-h-12 px-6 text-sm"
            fallbackTo="/waitlist"
          >
            Join waitlist
          </ExternalOrContactCta>
          <Link to="/trust" className="ui-btn-secondary min-h-12 px-6 text-sm">
            Security &amp; trust
          </Link>
        </div>
      </div>
    </div>
  )
}
