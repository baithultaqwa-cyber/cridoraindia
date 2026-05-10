export function MerchantSettlementsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-serif font-semibold text-cridora-navy">Settlements</h2>
      <p className="text-sm text-cridora-muted">
        Daily settlement batching, payout confirmations, and reconciliation for partner jewellers.
      </p>
      <div className="rounded-2xl border border-cridora-sand/80 bg-white p-5 text-sm shadow-sm">
        <p className="font-medium text-cridora-navy">Next settlement run</p>
        <p className="mt-2 text-cridora-muted">
          Demo: scheduled settlement window with export to CSV and invoice references when backend is
          live.
        </p>
      </div>
    </div>
  )
}
