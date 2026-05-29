import { type FormEvent, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { getDefaultJewellerId } from '@/features/consumer/lib/default-jeweller'
import { DashPageHeader } from '@/shared/components/dashboard/DashPageHeader'
import { NETWORK_JEWELLERS_DEMO } from '@/shared/data/network-jewellers-demo'
import { formatInrPerGram } from '@/shared/lib/demo-gold-rate'
import { useDemoLiveSpot } from '@/shared/lib/use-demo-live-spot'

export function ConsumerSellbackPage() {
  const { ratePerGram, lastUpdated } = useDemoLiveSpot()
  const demoGrams = 2.5
  const spreadPct = 0.012
  const quotePerGram = Math.round(ratePerGram * (1 - spreadPct))
  const estimate = Math.round(demoGrams * quotePerGram)
  const updatedLabel = new Date(lastUpdated).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
  const preferredJewellerId = useMemo(() => getDefaultJewellerId() ?? NETWORK_JEWELLERS_DEMO[0]?.id ?? '', [])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <div className="space-y-6">
      <DashPageHeader
        eyebrow="Sellback"
        title="Cash against your grams"
        description="Quotes depend on partner jeweller, spreads, and GST on charges. Cridora does not guarantee liquidity — review the full quote at checkout."
      />

      <div className="rounded-2xl border border-cridora-gold/25 bg-cridora-gold/10 p-4 text-sm">
        <p className="font-semibold text-cridora-gold-light">Live reference (demo)</p>
        <p className="mt-1 tabular-nums font-display text-lg font-bold text-cridora-text">
          {formatInrPerGram(ratePerGram)}{' '}
          <span className="text-xs font-normal text-cridora-muted">· {updatedLabel}</span>
        </p>
        <p className="mt-2 text-xs text-cridora-muted">
          Illustrative bid after demo spread ~{(spreadPct * 100).toFixed(1)}%:{' '}
          <strong className="text-cridora-text">{formatInrPerGram(quotePerGram)}</strong> — not a firm quote.
        </p>
        <p className="mt-2 text-xs text-cridora-muted">
          Example on {demoGrams} g: <strong className="text-cridora-text">~₹{estimate.toLocaleString('en-IN')}</strong>{' '}
          before taxes/fees.
        </p>
      </div>

      <form className="ui-card space-y-4 p-6" onSubmit={onSubmit}>
        <div>
          <label className="text-xs font-medium text-cridora-muted">Partner jeweller</label>
          <select className="ui-input mt-1" defaultValue={preferredJewellerId}>
            {NETWORK_JEWELLERS_DEMO.map((j) => (
              <option key={j.id} value={j.id}>
                {j.name} — {j.city}
                {j.networkVerified ? ' · Verified' : ''}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs font-medium text-cridora-muted">Grams</label>
          <input type="number" step="0.001" className="ui-input mt-1" placeholder="e.g. 2.5" defaultValue={demoGrams} />
        </div>
        <p className="text-xs text-cridora-muted">
          Final cash-in-hand includes TDS / GST on service components where applicable — shown on the invoice.
        </p>
        <button type="submit" className="ui-btn-primary min-h-12 w-full justify-center text-sm">
          Get firm quote
        </button>
      </form>

      <Link to="/app/redeem" className="text-sm text-cridora-gold-light hover:underline">
        ← Redeem hub
      </Link>
    </div>
  )
}
