export function MerchantReportsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-serif font-semibold text-cridora-navy">Reports</h2>
      <p className="text-sm text-cridora-muted">
        Downloadable reports for compliance, GST, and partner audits. Exports will connect to backend
        jobs.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {['Daily flow', 'KYC aged pendings', 'Platform fee ledger', 'Vault reconciliation'].map(
          (title) => (
            <button
              key={title}
              type="button"
              className="rounded-2xl border border-cridora-sand/80 bg-white px-4 py-4 text-left text-sm font-medium text-cridora-navy shadow-sm transition hover:border-cridora-gold/60"
            >
              {title}
              <span className="mt-1 block text-xs font-normal text-cridora-muted">Coming soon</span>
            </button>
          ),
        )}
      </div>
    </div>
  )
}
