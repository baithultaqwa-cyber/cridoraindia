const demoQueue = [
  { id: 'Q-2141', type: 'Buy', amount: '5g 24K', customer: 'R. Nair', status: 'Awaiting payment' },
  { id: 'Q-2140', type: 'Redeem', amount: '2g from Card A', customer: 'S. Kapoor', status: 'Verify ID' },
]

export function MerchantOverviewPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-serif font-semibold text-cridora-navy">Overview</h2>
        <p className="mt-1 text-sm text-cridora-muted">
          Queue snapshot, settlements window, and key controls for your jeweller workspace.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-cridora-sand/80 bg-white p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-cridora-muted">Queue</p>
          <p className="mt-2 text-2xl font-semibold text-cridora-navy">12</p>
          <p className="text-xs text-cridora-muted">open actions</p>
        </div>
        <div className="rounded-2xl border border-cridora-sand/80 bg-white p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-cridora-muted">
            Today gross
          </p>
          <p className="mt-2 text-2xl font-semibold text-cridora-navy">₹4.2L</p>
          <p className="text-xs text-cridora-muted">demo figures</p>
        </div>
        <div className="rounded-2xl border border-cridora-sand/80 bg-white p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-cridora-muted">
            Settlement
          </p>
          <p className="mt-2 text-lg font-semibold text-cridora-navy">Tue, 6pm</p>
          <p className="text-xs text-cridora-muted">next cut-off</p>
        </div>
      </div>
      <section className="rounded-2xl border border-cridora-sand/80 bg-white p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-cridora-navy">Queue highlights</h3>
        <ul className="mt-3 divide-y divide-cridora-sand/60 text-sm">
          {demoQueue.map((row) => (
            <li key={row.id} className="flex flex-wrap items-center justify-between gap-2 py-2 first:pt-0 last:pb-0">
              <span className="font-medium text-cridora-navy">
                {row.type} · {row.amount}
              </span>
              <span className="text-cridora-muted">{row.customer}</span>
              <span className="rounded-full bg-cridora-cream px-2 py-0.5 text-xs text-cridora-navy">
                {row.status}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
