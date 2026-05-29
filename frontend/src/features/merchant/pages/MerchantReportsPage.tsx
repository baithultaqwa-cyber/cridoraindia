export function MerchantReportsPage() {
  return (
    <div className="space-y-4">
      <h1 className="font-display text-2xl font-semibold text-cridora-text">Reports</h1>
      <p className="text-sm text-cridora-muted">
        Exports for compliance, GST, and audits. Backend jobs will populate this list.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {['Daily flow', 'KYC pendings', 'Platform fees', 'Vault reconciliation'].map((title) => (
          <button
            key={title}
            type="button"
            className="rounded-2xl border border-silk/15 bg-navy-silk/50 px-4 py-4 text-left text-sm font-medium text-cridora-text transition-colors hover:border-cridora-gold/35"
          >
            {title}
            <span className="mt-1 block text-xs font-normal text-cridora-muted">Coming soon</span>
          </button>
        ))}
      </div>
    </div>
  )
}
