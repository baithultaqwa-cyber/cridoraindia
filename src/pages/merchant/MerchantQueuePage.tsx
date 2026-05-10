const rows = [
  { id: 'Q-2141', action: 'Buy', detail: '5g 24K', customer: 'R. Nair', state: 'Payment pending' },
  { id: 'Q-2140', action: 'Redeem', detail: 'Card A 2g', customer: 'S. Kapoor', state: 'ID check' },
  { id: 'Q-2139', action: 'Transfer out', detail: 'Partner bank', customer: 'A. Sen', state: 'In progress' },
]

export function MerchantQueuePage() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-serif font-semibold text-cridora-navy">Operations queue</h2>
        <p className="mt-1 text-sm text-cridora-muted">
          Buy, redeem, transfer, and sell-back requests awaiting jeweller action.
        </p>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-cridora-sand/80 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-cridora-sand/80 bg-cridora-cream/50 text-xs uppercase tracking-wide text-cridora-muted">
            <tr>
              <th className="px-4 py-3 font-medium">ID</th>
              <th className="px-4 py-3 font-medium">Action</th>
              <th className="px-4 py-3 font-medium">Customer</th>
              <th className="px-4 py-3 font-medium">State</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-b border-cridora-sand/60 last:border-0">
                <td className="px-4 py-3 font-mono text-xs text-cridora-muted">{r.id}</td>
                <td className="px-4 py-3 text-cridora-navy">
                  {r.action}
                  <span className="block text-xs text-cridora-muted">{r.detail}</span>
                </td>
                <td className="px-4 py-3">{r.customer}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-cridora-cream px-2 py-0.5 text-xs">{r.state}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
