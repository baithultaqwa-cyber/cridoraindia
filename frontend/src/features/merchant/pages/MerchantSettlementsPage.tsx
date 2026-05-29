export function MerchantSettlementsPage() {
  return (
    <div className="space-y-4">
      <h1 className="font-display text-2xl font-semibold text-cridora-text">Settlements</h1>
      <p className="text-sm text-cridora-muted">Daily batches, payout confirmations, and reconciliation.</p>
      <div className="rounded-2xl border border-silk/15 bg-navy-silk/50 p-5 text-sm">
        <p className="font-medium text-cridora-text">Next run</p>
        <p className="mt-2 text-cridora-muted">
          Demo: exports to CSV and invoice references connect when the settlement API is live.
        </p>
      </div>
    </div>
  )
}
