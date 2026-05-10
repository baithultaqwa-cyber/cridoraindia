import { type FormEvent } from 'react'

export function ConsumerSellbackPage() {
  function onSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-semibold text-cridora-text">Sellback (cash)</h1>
      <p className="text-sm text-cridora-muted">
        Quotes and spreads depend on the partner jeweller. Cridora does not guarantee liquidity.
      </p>
      <form className="ui-card space-y-4 p-6" onSubmit={onSubmit}>
        <div>
          <label className="text-xs font-medium text-cridora-muted">Partner jeweller</label>
          <select className="ui-input mt-1" defaultValue="">
            <option value="" disabled>
              Select store
            </option>
            <option>Demo Gold House</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-medium text-cridora-muted">Grams</label>
          <input type="number" step="0.001" className="ui-input mt-1" />
        </div>
        <button type="submit" className="ui-btn-primary min-h-12 w-full justify-center text-sm">
          Get quote
        </button>
      </form>
    </div>
  )
}
