export function MerchantInventoryPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-serif font-semibold text-cridora-navy">Inventory &amp; SKUs</h2>
      <p className="text-sm text-cridora-muted">
        Map vault stock to consumer holdings, manage SKU purity, and sync with partner feeds.
      </p>
      <div className="rounded-2xl border border-cridora-sand/80 bg-white p-5 text-sm shadow-sm">
        <p className="font-medium text-cridora-navy">Vault snapshot (demo)</p>
        <ul className="mt-3 list-inside list-disc space-y-1 text-cridora-muted">
          <li>24K bars — 420g allocated</li>
          <li>22K coin SKUs — 180g allocated</li>
        </ul>
      </div>
    </div>
  )
}
