export function MerchantSettingsPage() {
  return (
    <div className="space-y-4">
      <h1 className="font-display text-2xl font-semibold text-cridora-text">Settings</h1>
      <p className="text-sm text-cridora-muted">
        Store profile, payouts, and notifications. Values are read-only in demo.
      </p>
      <form className="space-y-4 rounded-2xl border border-silk/15 bg-navy-silk/50 p-5">
        <label className="block text-sm">
          <span className="text-cridora-muted">Display name</span>
          <input
            type="text"
            defaultValue="Demo Jewellers — MG Road"
            className="ui-input mt-1"
            readOnly
          />
        </label>
        <label className="block text-sm">
          <span className="text-cridora-muted">Settlement email</span>
          <input type="email" defaultValue="ops@example.com" className="ui-input mt-1" readOnly />
        </label>
        <p className="text-xs text-cridora-muted">Editable fields connect to your API in production.</p>
      </form>
    </div>
  )
}
