export function MerchantSettingsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-serif font-semibold text-cridora-navy">Merchant settings</h2>
      <p className="text-sm text-cridora-muted">
        Store profile, payout accounts, notification channels, and integration keys (admin-controlled).
      </p>
      <form className="space-y-3 rounded-2xl border border-cridora-sand/80 bg-white p-5 shadow-sm">
        <label className="block text-sm">
          <span className="text-cridora-muted">Display name</span>
          <input
            type="text"
            defaultValue="Demo Jewellers — MG Road"
            className="mt-1 w-full rounded-xl border border-cridora-sand/80 px-3 py-2 text-cridora-navy"
            readOnly
          />
        </label>
        <label className="block text-sm">
          <span className="text-cridora-muted">Settlement email</span>
          <input
            type="email"
            defaultValue="ops@example.com"
            className="mt-1 w-full rounded-xl border border-cridora-sand/80 px-3 py-2 text-cridora-navy"
            readOnly
          />
        </label>
        <p className="text-xs text-cridora-muted">Editable fields wire to API in production.</p>
      </form>
    </div>
  )
}
