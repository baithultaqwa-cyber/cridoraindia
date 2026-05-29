import { Link } from 'react-router-dom'
import { LEDGER_HOLDINGS_DEMO, holdingKindLabel, type HoldingKind } from '@/features/consumer/data/ledger-holdings-demo'
import { DashPageHeader } from '@/shared/components/dashboard/DashPageHeader'

const kindStyles: Record<HoldingKind, string> = {
  fractional: 'border-cridora-gold/30 bg-cridora-gold/10 text-cridora-gold-light',
  deposit: 'border-silk/25 bg-navy-shine/30 text-silk',
  goldnest: 'border-cridora-success/30 bg-cridora-success/10 text-cridora-success',
}

export function ConsumerLedgerPage() {
  return (
    <div className="space-y-6">
      <DashPageHeader
        eyebrow="Ledger"
        title="Holdings by type"
        description="Each row is a custody position: fractional purchase, counter deposit, or GoldNest scheme credit. Production will reconcile to GST invoices and jeweller settlement."
      />

      <div className="overflow-x-auto rounded-3xl border border-silk/10 bg-navy-silk/40">
        <table className="min-w-[720px] w-full text-left text-sm">
          <thead className="border-b border-silk/10 text-xs uppercase tracking-wide text-cridora-muted">
            <tr>
              <th className="px-4 py-3">Ref</th>
              <th className="px-4 py-3">Jeweller</th>
              <th className="px-4 py-3">Holding</th>
              <th className="px-4 py-3">Grams</th>
              <th className="px-4 py-3">Book ₹/g</th>
              <th className="px-4 py-3">Credited</th>
            </tr>
          </thead>
          <tbody>
            {LEDGER_HOLDINGS_DEMO.map((row) => (
              <tr key={row.id} className="border-b border-silk/10 last:border-0">
                <td className="px-4 py-3 font-mono text-xs text-cridora-gold-light">{row.ref}</td>
                <td className="px-4 py-3">
                  <span className="font-medium text-cridora-text">{row.jewellerName}</span>
                  {row.note ? <p className="text-xs text-cridora-muted">{row.note}</p> : null}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block rounded-lg border px-2 py-1 text-[0.65rem] font-bold uppercase tracking-wide ${kindStyles[row.kind]}`}
                  >
                    {holdingKindLabel(row.kind)}
                  </span>
                </td>
                <td className="px-4 py-3 tabular-nums text-cridora-text">{row.grams.toFixed(3)} g</td>
                <td className="px-4 py-3 tabular-nums text-cridora-muted">₹{row.bookRatePerGram.toLocaleString('en-IN')}</td>
                <td className="px-4 py-3 text-cridora-muted">{row.creditedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-center text-sm text-cridora-muted">
        <Link to="/app/portfolio" className="font-medium text-cridora-gold-light hover:underline">
          View vault summary →
        </Link>
      </p>
    </div>
  )
}
