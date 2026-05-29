import { type FormEvent, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { DashPageHeader } from '@/shared/components/dashboard/DashPageHeader'

const GST_TOTAL_RATE = 0.03

function splitGstFromTotal(inr: number) {
  const taxable = inr / (1 + GST_TOTAL_RATE)
  const gst = inr - taxable
  const half = gst / 2
  return {
    taxable,
    cgst: half,
    sgst: half,
    gstTotal: gst,
    total: inr,
  }
}

export function ConsumerBuyPage() {
  const [inr, setInr] = useState(10_000)
  const breakdown = useMemo(() => splitGstFromTotal(inr), [inr])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <div className="space-y-6">
      <DashPageHeader
        eyebrow="Buy"
        title="Fractional gold purchase"
        description="You buy metal in fractional grams (BIS 916). Indian GST applies on the taxable value — rates follow RBI/GST law in production; below is an illustrative 3% intra-state split."
      />

      <form className="ui-card space-y-5 p-6" onSubmit={onSubmit}>
        <div>
          <label className="text-xs font-medium text-cridora-muted">Amount (₹) including GST (demo)</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {[1000, 5000, 10_000, 25_000].map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => setInr(amt)}
                className={`rounded-xl border px-3 py-2 text-sm transition-colors ${
                  inr === amt
                    ? 'border-cridora-gold/50 bg-cridora-gold/10 text-cridora-gold-light'
                    : 'border-silk/20 text-cridora-text hover:border-cridora-gold/40'
                }`}
              >
                ₹{amt.toLocaleString('en-IN')}
              </button>
            ))}
          </div>
          <input
            type="number"
            min={100}
            className="ui-input mt-3"
            value={inr || ''}
            onChange={(e) => setInr(Number(e.target.value) || 0)}
          />
        </div>

        <div className="rounded-2xl border border-silk/10 bg-navy-deep/40 p-4 text-sm">
          <p className="font-semibold text-cridora-text">GST illustration (3% total · CGST + SGST)</p>
          <ul className="mt-3 space-y-2 tabular-nums text-cridora-muted">
            <li className="flex justify-between">
              <span>Taxable value (metal)</span>
              <span className="text-cridora-text">₹{breakdown.taxable.toFixed(2)}</span>
            </li>
            <li className="flex justify-between">
              <span>CGST @ 1.5%</span>
              <span>₹{breakdown.cgst.toFixed(2)}</span>
            </li>
            <li className="flex justify-between">
              <span>SGST @ 1.5%</span>
              <span>₹{breakdown.sgst.toFixed(2)}</span>
            </li>
            <li className="flex justify-between border-t border-silk/10 pt-2 font-medium text-cridora-text">
              <span>You pay</span>
              <span>₹{breakdown.total.toFixed(2)}</span>
            </li>
          </ul>
          <p className="mt-3 text-xs text-cridora-muted">
            Inter-state purchases may show IGST instead of CGST/SGST. Final tax lines come from your invoice.
          </p>
        </div>

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
