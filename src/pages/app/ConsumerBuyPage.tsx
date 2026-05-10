import { type FormEvent } from 'react'
import { Link } from 'react-router-dom'

export function ConsumerBuyPage() {
  function onSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-2xl font-semibold text-cridora-text">Buy gold</h1>
        <p className="text-sm text-cridora-muted">~₹7,120/g indicative</p>
      </div>
      <form className="ui-card space-y-4 p-6" onSubmit={onSubmit}>
        <div>
          <label className="text-xs font-medium text-cridora-muted">Amount (₹)</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {[100, 500, 1000, 10000].map((amt) => (
              <button
                key={amt}
                type="button"
                className="rounded-xl border border-silk/20 px-3 py-2 text-sm text-cridora-text hover:border-cridora-gold/40"
              >
                ₹{amt.toLocaleString('en-IN')}
              </button>
            ))}
          </div>
          <input type="number" className="ui-input mt-3" placeholder="Custom amount" />
        </div>
        <p className="text-xs text-cridora-muted">
          Quote, GST, and payment partner redirect will wire to Django + PSP.
        </p>
        <button type="submit" className="ui-btn-primary min-h-12 w-full justify-center text-sm">
          Continue to pay
        </button>
      </form>
      <Link to="/app" className="text-sm text-cridora-gold-light hover:underline">
        ← Home
      </Link>
    </div>
  )
}
