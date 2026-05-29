import { Link } from 'react-router-dom'

const demoQueue = [
  {
    id: 'Q-2141',
    type: 'Buy',
    amount: '5g 24K',
    customer: 'R. Nair',
    status: 'Awaiting payment',
    age: '12m',
  },
  {
    id: 'Q-2140',
    type: 'Redeem',
    amount: '2g from Card A',
    customer: 'S. Kapoor',
    status: 'Verify ID',
    age: '18m',
  },
  {
    id: 'Q-2139',
    type: 'Sellback',
    amount: '1.2g',
    customer: 'V. Iyer',
    status: 'Rate locked',
    age: '6m',
  },
  {
    id: 'Q-2138',
    type: 'GoldNest',
    amount: 'Instalment #4',
    customer: 'P. Das',
    status: 'OK',
    age: '2m',
  },
] as const

const liabilities = [
  { label: 'Gold owed to customers', value: '842.6 g', hint: 'network liability' },
  { label: 'Cross-jeweller due (72h)', value: '₹18.4 L', hint: 'escrow' },
  { label: 'BIS audit', value: 'Current', hint: 'last check 04 May' },
] as const

const shortcuts = [
  { to: '/merchant/queue', label: 'Open queue', desc: 'Verify & fulfil orders' },
  { to: '/merchant/settlements', label: 'Settlements', desc: 'Cut-offs & payouts' },
  { to: '/merchant/inventory', label: 'Inventory', desc: 'Vault vs ledger' },
  { to: '/merchant/customers', label: 'Customers', desc: 'Balances & history' },
] as const

const pillClass =
  'rounded-full border border-silk/25 bg-navy-shine/40 px-3 py-1 text-xs font-medium text-cridora-gold-light'

export function MerchantOverviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-semibold text-cridora-text sm:text-3xl">Today</h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-cridora-muted">
          Queue load, liabilities, and shortcuts. Figures are placeholders until your jeweller API is connected.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-silk/15 bg-navy-silk/50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-cridora-muted">Open queue</p>
          <p className="mt-2 font-display text-3xl font-semibold tabular-nums text-cridora-text">12</p>
          <p className="text-xs text-cridora-muted">needs staff action</p>
        </div>
        <div className="rounded-2xl border border-silk/15 bg-navy-silk/50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-cridora-muted">Today gross (demo)</p>
          <p className="mt-2 font-display text-3xl font-semibold tabular-nums text-cridora-text">₹4.2L</p>
          <p className="text-xs text-cridora-muted">buy + schemes + top-ups</p>
        </div>
        <div className="rounded-2xl border border-silk/15 bg-navy-silk/50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-cridora-muted">Next settlement</p>
          <p className="mt-2 text-xl font-semibold text-cridora-text">Tue · 18:00</p>
          <p className="text-xs text-cridora-muted">IST cut-off</p>
        </div>
        <div className="rounded-2xl border border-silk/15 bg-navy-silk/50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-cridora-muted">Staff on floor</p>
          <p className="mt-2 text-xl font-semibold text-cridora-text">4</p>
          <p className="text-xs text-cridora-muted">2 tills · demo</p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {liabilities.map((row) => (
          <div
            key={row.label}
            className="rounded-2xl border border-cridora-gold/30 bg-navy-deep/55 p-4 shadow-[var(--shadow-card)]"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-cridora-muted">{row.label}</p>
            <p className="mt-2 font-display text-xl font-semibold text-cridora-gold-light">{row.value}</p>
            <p className="mt-1 text-xs text-cridora-muted">{row.hint}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border border-silk/15 bg-navy-silk/50 p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-display text-lg font-semibold text-cridora-text">Queue</h2>
            <Link to="/merchant/queue" className="text-sm font-medium text-cridora-gold-light hover:underline">
              View all →
            </Link>
          </div>
          <ul className="mt-4 divide-y divide-silk/10">
            {demoQueue.map((row) => (
              <li
                key={row.id}
                className="flex flex-wrap items-center justify-between gap-2 py-3 first:pt-0 last:pb-0"
              >
                <div>
                  <p className="font-medium text-cridora-text">
                    {row.type} · {row.amount}
                  </p>
                  <p className="text-xs text-cridora-muted">
                    {row.customer} · {row.id} · {row.age}
                  </p>
                </div>
                <span className={pillClass}>{row.status}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-silk/15 bg-navy-silk/50 p-5">
          <h2 className="font-display text-lg font-semibold text-cridora-text">Shortcuts</h2>
          <p className="mt-1 text-xs text-cridora-muted">Common tasks at the counter</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {shortcuts.map((s) => (
              <li key={s.to}>
                <Link
                  to={s.to}
                  className="block rounded-xl border border-silk/15 bg-navy-deep/40 p-4 text-left transition-colors hover:border-cridora-gold/35"
                >
                  <span className="text-sm font-semibold text-cridora-text">{s.label}</span>
                  <span className="mt-1 block text-xs text-cridora-muted">{s.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="rounded-2xl border border-dashed border-cridora-gold/35 bg-navy-silk/40 p-5 text-sm text-cridora-muted">
        <p className="font-medium text-cridora-text">Compliance (demo)</p>
        <p className="mt-2">
          KYC escalations and suspicious-activity flags will appear here in production. This panel reserves space for ops
          review.
        </p>
      </section>
    </div>
  )
}
