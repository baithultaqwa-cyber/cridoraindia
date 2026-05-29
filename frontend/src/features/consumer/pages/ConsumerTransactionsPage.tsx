export function ConsumerTransactionsPage() {
  const rows = [
    { date: '8 May 2026', type: 'Purchase', detail: 'UPI · ₹5,000', delta: '+0.702 g' },
    { date: '6 May 2026', type: 'Gift sent', detail: 'To Ananya', delta: '−0.050 g' },
    { date: '2 May 2026', type: 'Redemption queued', detail: 'Demo Gold House', delta: '−1.000 g' },
  ]

  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-semibold text-cridora-text">Activity</h1>
      <div className="overflow-x-auto rounded-2xl border border-silk/15">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-silk/15 text-xs uppercase tracking-wider text-cridora-muted">
            <tr>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Detail</th>
              <th className="px-4 py-3 text-right">Grams</th>
            </tr>
          </thead>
          <tbody className="text-cridora-text">
            {rows.map((r) => (
              <tr key={r.date + r.type} className="border-b border-silk/10 last:border-0">
                <td className="px-4 py-3 text-cridora-muted">{r.date}</td>
                <td className="px-4 py-3">{r.type}</td>
                <td className="px-4 py-3 text-cridora-muted">{r.detail}</td>
                <td className="px-4 py-3 text-right font-medium tabular-nums">{r.delta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
