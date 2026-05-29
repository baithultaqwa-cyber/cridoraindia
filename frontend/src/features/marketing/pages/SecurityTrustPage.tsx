import { Link } from 'react-router-dom'

export function SecurityTrustPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cridora-gold">Security &amp; trust</p>
        <h1 className="font-display mt-6 text-4xl font-semibold tracking-tight text-cridora-text sm:text-5xl">
          Safety, custody, compliance, and data — in plain view.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-cridora-muted">
          Sober, professional posture. Insurance and expanded attestations ship as partners finalise them.
        </p>
      </header>

      <div className="mx-auto mt-16 max-w-3xl space-y-8 text-base leading-relaxed text-cridora-muted">
        {(
          [
            {
              title: 'Distributed custody',
              body: 'No single abstract vault story — participating jewellers custody metal; Cridora records liabilities and orchestrates settlement.',
            },
            {
              title: 'BIS hallmarking',
              body: 'Launch scope targets BIS 916 participation. Hallmark claims are verified with jeweller documentation and audits.',
            },
            {
              title: 'KYC / AML',
              body: 'Identity and monitoring follow applicable India regulations and partner policies; high-risk behaviour is escalated.',
            },
            {
              title: 'Data encryption',
              body: 'Transport and storage follow industry baselines; access is logged and limited by role.',
            },
            {
              title: 'Audit trails',
              body: 'Material money and metal movements aim for double-entry clarity — users and admins see explainable histories.',
            },
            {
              title: 'Grievance contact',
              body: 'Named officers and SLAs appear on Contact and legal pages as we approach public launch.',
            },
            {
              title: 'Founder accountability',
              body: 'Leadership signs off on trust content — no anonymous “growth at any cost” messaging.',
            },
          ] as const
        ).map(({ title, body }) => (
          <section key={title} className="ui-card p-8">
            <h2 className="font-display text-2xl font-semibold text-cridora-text">{title}</h2>
            <p className="mt-4">{body}</p>
          </section>
        ))}

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link to="/contact" className="ui-btn-primary min-h-12 px-6 text-sm">
            Talk to us
          </Link>
          <Link to="/legal/grievance" className="ui-btn-secondary min-h-12 px-6 text-sm">
            Grievance policy
          </Link>
        </div>
      </div>
    </div>
  )
}
