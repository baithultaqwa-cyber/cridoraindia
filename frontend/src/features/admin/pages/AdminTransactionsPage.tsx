const txns = [
  { id: 'TX-901221', type: 'Buy', party: 'Consumer', amount: '+0.42 g', t: 'Today 10:42' },
  { id: 'TX-901220', type: 'Cross-redeem', party: 'Settlement', amount: '2.00 g', t: 'Today 09:18' },
  { id: 'TX-901219', type: 'Transfer', party: 'Consumer', amount: '0.10 g', t: 'Yesterday' },
] as const

export function AdminTransactionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-cridora-text">Transactions</h1>
        <p className="mt-1 text-sm text-cridora-muted">Recent ledger events across the network.</p>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-silk/15 bg-navy-silk/40">
        <table className="min-w-[560px] w-full text-left text-sm">
          <thead className="border-b border-silk/15 text-xs uppercase tracking-wide text-cridora-muted">
            <tr>
              <th className="px-4 py-3">Ref</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Party</th>
              <th className="px-4 py-3">Metal</th>
              <th className="px-4 py-3">Time</th>
            </tr>
          </thead>
          <tbody>
            {txns.map((t) => (
              <tr key={t.id} className="border-b border-silk/10 last:border-0">
                <td className="px-4 py-3 font-medium text-cridora-text">{t.id}</td>
                <td className="px-4 py-3 text-cridora-muted">{t.type}</td>
                <td className="px-4 py-3 text-cridora-muted">{t.party}</td>
                <td className="px-4 py-3 text-cridora-gold-light">{t.amount}</td>
                <td className="px-4 py-3 text-cridora-muted">{t.t}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
