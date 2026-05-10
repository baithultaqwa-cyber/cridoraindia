export function ConsumerPortfolioPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-semibold text-cridora-text">Portfolio</h1>
      <p className="text-sm text-cridora-muted">Detailed holdings and history will sync from your ledger API.</p>
      <div className="ui-card p-6">
        <p className="font-display text-3xl font-semibold tabular-nums text-cridora-text">12.486 g</p>
        <p className="mt-2 text-sm text-cridora-muted">Average buy ₹6,980/g · Unrealized view only; not tax advice.</p>
      </div>
      <div className="ui-card flex h-40 items-center justify-center text-sm text-cridora-muted">
        Chart placeholder — minimal line chart per design system
      </div>
    </div>
  )
}
