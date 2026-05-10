import { type FormEvent } from 'react'

export function ConsumerRedeemPage() {
  function onSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-semibold text-cridora-text">Redeem</h1>
      <p className="text-sm text-cridora-muted">
        Choose jeweller, product type, and review making charges + GST before you confirm.
      </p>
      <form className="ui-card space-y-4 p-6" onSubmit={onSubmit}>
        <div>
          <label className="text-xs font-medium text-cridora-muted">Jeweller</label>
          <select className="ui-input mt-1" defaultValue="">
            <option value="" disabled>
              Select participating store
            </option>
            <option>Demo Gold House — Ernakulam</option>
            <option>Demo Silvercraft — Thrissur</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-medium text-cridora-muted">Product</label>
          <select className="ui-input mt-1" defaultValue="jewellery">
            <option value="jewellery">Jewellery</option>
            <option value="coin">Coin</option>
            <option value="bar">Bar</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-medium text-cridora-muted">Grams to redeem</label>
          <input type="number" step="0.001" className="ui-input mt-1" placeholder="e.g. 2.5" />
        </div>
        <p className="text-xs text-cridora-muted">
          Immediate vs network redemption timing will follow jeweller availability and pilot rules.
        </p>
        <button type="submit" className="ui-btn-primary min-h-12 w-full justify-center text-sm">
          Review quote
        </button>
      </form>
    </div>
  )
}
