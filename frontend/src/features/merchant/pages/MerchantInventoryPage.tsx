export function MerchantInventoryPage() {
  return (
    <div className="space-y-4">
      <h1 className="font-display text-2xl font-semibold text-cridora-text">Inventory</h1>
      <p className="text-sm text-cridora-muted">
        Vault stock mapped to customer holdings. Partner feeds sync here when live.
      </p>
      <div className="rounded-2xl border border-silk/15 bg-navy-silk/50 p-5 text-sm">
        <p className="font-medium text-cridora-text">Vault snapshot (demo)</p>
        <ul className="mt-3 list-inside list-disc space-y-1 text-cridora-muted marker:text-cridora-gold">
          <li>24K bars — 420g allocated</li>
          <li>22K coin SKUs — 180g allocated</li>
        </ul>
      </div>
    </div>
  )
}
