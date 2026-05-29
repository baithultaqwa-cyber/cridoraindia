import { Link } from 'react-router-dom'
import {
  aggregateLedgerByJeweller,
  LEDGER_HOLDINGS_DEMO,
} from '@/features/consumer/data/ledger-holdings-demo'
import { DashPageHeader } from '@/shared/components/dashboard/DashPageHeader'
import { formatInrPerGram } from '@/shared/lib/demo-gold-rate'
import { useDemoLiveSpot } from '@/shared/lib/use-demo-live-spot'

export function ConsumerPortfolioPage() {
  const { ratePerGram, lastUpdated } = useDemoLiveSpot()
  const totalGrams = LEDGER_HOLDINGS_DEMO.reduce((s, r) => s + r.grams, 0)
  const redeemableGrams = LEDGER_HOLDINGS_DEMO.filter((r) => r.kind !== 'goldnest').reduce((s, r) => s + r.grams, 0)
  const schemeGrams = totalGrams - redeemableGrams
  const bookCostInr = LEDGER_HOLDINGS_DEMO.reduce((s, r) => s + r.grams * r.bookRatePerGram, 0)
  const marketValueInr = totalGrams * ratePerGram
  const plInr = marketValueInr - bookCostInr
  const plPct = bookCostInr > 0 ? (plInr / bookCostInr) * 100 : 0
  const byJeweller = aggregateLedgerByJeweller(LEDGER_HOLDINGS_DEMO)

  const updatedLabel = new Date(lastUpdated).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })

  return (
    <div className="space-y-8">
      <DashPageHeader
        eyebrow="Vault"
        title="Portfolio & live value"
        description="Totals use the demo live spot ticker for illustration. Book cost comes from your ledger rows; production will bind to invoices and settlement."
      />

      <div className="rounded-2xl border border-cridora-gold/20 bg-cridora-gold/10 px-4 py-3 text-sm">
        <p className="font-semibold text-cridora-gold-light">Live spot (demo)</p>
        <p className="mt-1 font-display text-xl font-bold tabular-nums text-cridora-text">
          {formatInrPerGram(ratePerGram)}{' '}
          <span className="text-xs font-normal font-sans text-cridora-muted">· updated {updatedLabel}</span>
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl border border-silk/15 bg-navy-silk/50 p-4">
          <p className="text-[0.65rem] font-bold uppercase text-cridora-muted">Total metal</p>
          <p className="mt-1 font-display text-2xl font-bold tabular-nums text-cridora-text">
            {totalGrams.toFixed(3)} g
          </p>
          <p className="mt-1 text-xs text-cridora-muted">BIS 916 · ledger roll-up</p>
        </div>
        <div className="rounded-3xl border border-silk/15 bg-navy-silk/50 p-4">
          <p className="text-[0.65rem] font-bold uppercase text-cridora-muted">Market value</p>
          <p className="mt-1 font-display text-2xl font-bold tabular-nums text-cridora-gold-light">
            ₹{Math.round(marketValueInr).toLocaleString('en-IN')}
          </p>
          <p className="mt-1 text-xs text-cridora-muted">@ live demo spot</p>
        </div>
        <div className="rounded-3xl border border-silk/15 bg-navy-silk/50 p-4">
          <p className="text-[0.65rem] font-bold uppercase text-cridora-muted">P/L (illustrative)</p>
          <p
            className={`mt-1 font-display text-2xl font-bold tabular-nums ${
              plInr >= 0 ? 'text-cridora-success' : 'text-cridora-error'
            }`}
          >
            {plInr >= 0 ? '+' : ''}₹{Math.round(plInr).toLocaleString('en-IN')}
          </p>
          <p className="mt-1 text-xs text-cridora-muted">
            {plPct >= 0 ? '+' : ''}
            {plPct.toFixed(1)}% vs book
          </p>
        </div>
        <div className="rounded-3xl border border-silk/15 bg-navy-silk/50 p-4">
          <p className="text-[0.65rem] font-bold uppercase text-cridora-muted">Redeemable (demo)</p>
          <p className="mt-1 font-display text-2xl font-bold tabular-nums text-cridora-text">
            {redeemableGrams.toFixed(3)} g
          </p>
          <p className="mt-1 text-xs text-cridora-muted">
            Excludes ~{schemeGrams.toFixed(3)} g in active GoldNest credits
          </p>
        </div>
      </div>

      <section>
        <h2 className="font-display text-lg font-bold text-cridora-text">By jeweller</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {byJeweller.map((j) => {
            const jRows = LEDGER_HOLDINGS_DEMO.filter((r) => r.jewellerId === j.jewellerId)
            const jVal = j.grams * ratePerGram
            const jBook = jRows.reduce((s, r) => s + r.grams * r.bookRatePerGram, 0)
            const jPl = jVal - jBook
            return (
              <li key={j.jewellerId} className="rounded-3xl border border-silk/10 bg-navy-silk/45 p-5">
                <p className="font-display text-base font-bold text-cridora-text">{j.jewellerName}</p>
                <p className="mt-3 text-[0.65rem] font-bold uppercase text-cridora-muted">Metal</p>
                <p className="text-lg font-bold tabular-nums text-cridora-text">{j.grams.toFixed(3)} g</p>
                <p className="mt-2 text-[0.65rem] font-bold uppercase text-cridora-muted">Value @ live spot</p>
                <p className="tabular-nums text-cridora-gold-light">₹{Math.round(jVal).toLocaleString('en-IN')}</p>
                <p className="mt-2 text-[0.65rem] font-bold uppercase text-cridora-muted">P/L vs book</p>
                <p className={`font-bold tabular-nums ${jPl >= 0 ? 'text-cridora-success' : 'text-cridora-error'}`}>
                  {jPl >= 0 ? '+' : ''}₹{Math.round(jPl).toLocaleString('en-IN')}
                </p>
                <Link
                  to="/app/ledger"
                  className="mt-4 inline-block text-sm font-medium text-cridora-gold-light hover:underline"
                >
                  Ledger lines →
                </Link>
              </li>
            )
          })}
        </ul>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link to="/app/ledger" className="ui-btn-secondary min-h-11 justify-center px-5 text-sm">
          Full ledger
        </Link>
        <Link to="/app/redeem" className="ui-btn-primary min-h-11 justify-center px-5 text-sm">
          Redeem options
        </Link>
      </div>

      <p className="text-center text-sm text-cridora-muted">
        <Link to="/app" className="font-medium text-cridora-gold-light hover:underline">
          ← Dashboard
        </Link>
      </p>
    </div>
  )
}
