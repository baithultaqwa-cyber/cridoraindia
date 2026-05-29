export function MerchantSellbackPage() {
  return (
    <div className="space-y-4">
      <h1 className="font-display text-2xl font-semibold text-cridora-text">Sell-back</h1>
      <p className="text-sm text-cridora-muted">Review customer sell-back requests and confirm rates before payout.</p>
      <div className="rounded-2xl border border-dashed border-cridora-gold/35 bg-navy-silk/45 p-6 text-center text-sm text-cridora-muted">
        No pending sell-back requests in demo mode.
      </div>
    </div>
  )
}
