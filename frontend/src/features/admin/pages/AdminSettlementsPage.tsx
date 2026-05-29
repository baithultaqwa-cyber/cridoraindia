const rows = [
  { id: 'ST-99012', from: 'Chennai Gold House', to: 'Mumbai Fine', amount: '₹12,40,000', status: 'Matched' },
  { id: 'ST-99011', from: 'Kochi Jewels', to: 'Hyderabad Works', amount: '₹8,02,500', status: 'Pending bank' },
] as const

export function AdminSettlementsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-cridora-text">Settlements</h1>
        <p className="mt-1 text-sm text-cridora-muted">Cross-jeweller settlement batches and escrow status.</p>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-silk/15 bg-navy-silk/40">
        <table className="min-w-[640px] w-full text-left text-sm">
          <thead className="border-b border-silk/15 text-xs uppercase tracking-wide text-cridora-muted">
            <tr>
              <th className="px-4 py-3">Batch</th>
              <th className="px-4 py-3">Origin</th>
              <th className="px-4 py-3">Destination</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-b border-silk/10 last:border-0">
                <td className="px-4 py-3 font-medium text-cridora-text">{r.id}</td>
                <td className="px-4 py-3 text-cridora-muted">{r.from}</td>
                <td className="px-4 py-3 text-cridora-muted">{r.to}</td>
                <td className="px-4 py-3 text-cridora-text">{r.amount}</td>
                <td className="px-4 py-3 text-cridora-gold-light">{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
