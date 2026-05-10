import { type FormEvent } from 'react'

export function ConsumerTransferPage() {
  function onSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-semibold text-cridora-text">Transfer / gift</h1>
      <form className="ui-card space-y-4 p-6" onSubmit={onSubmit}>
        <div>
          <label className="text-xs font-medium text-cridora-muted">Recipient phone or Cridora ID</label>
          <input className="ui-input mt-1" placeholder="+91…" />
        </div>
        <div>
          <label className="text-xs font-medium text-cridora-muted">Grams</label>
          <input type="number" step="0.001" className="ui-input mt-1" />
        </div>
        <div>
          <label className="text-xs font-medium text-cridora-muted">Note (optional)</label>
          <input className="ui-input mt-1" placeholder="Wedding gift" />
        </div>
        <button type="submit" className="ui-btn-primary min-h-12 w-full justify-center text-sm">
          Review transfer
        </button>
      </form>
    </div>
  )
}
