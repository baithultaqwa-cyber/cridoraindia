import { Link } from 'react-router-dom'

const demoRate = 7120
const demoGrams = 12.486
const demoInr = Math.round(demoGrams * demoRate * 100) / 100

export function ConsumerHomePage() {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-xs font-semibold uppercase tracking-wider text-cridora-gold">Portfolio</p>
        <p className="font-display mt-2 text-4xl font-semibold tabular-nums text-cridora-text sm:text-5xl">
          {demoGrams.toFixed(3)} g
        </p>
        <p className="mt-1 text-sm text-cridora-muted">
          Indicative value ₹{demoInr.toLocaleString('en-IN')} · Live rate ~₹{demoRate.toLocaleString('en-IN')}
          /g
        </p>
      </section>
      <section>
        <h2 className="font-display text-lg font-semibold text-cridora-text">Quick actions</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            { to: '/app/buy', label: 'Buy gold' },
            { to: '/app/redeem', label: 'Redeem' },
            { to: '/app/transfer', label: 'Transfer / gift' },
            { to: '/app/sellback', label: 'Sellback' },
            { to: '/app/jewellers', label: 'Find jewellers' },
            { to: '/app/transactions', label: 'Activity' },
          ].map((a) => (
            <Link
              key={a.to}
              to={a.to}
              className="ui-card flex min-h-[4.5rem] items-center justify-center p-4 text-center text-sm font-medium text-cridora-text"
            >
              {a.label}
            </Link>
          ))}
        </div>
      </section>
      <section className="ui-card p-5">
        <h3 className="text-sm font-semibold text-cridora-text">Recent activity</h3>
        <ul className="mt-3 space-y-2 text-sm text-cridora-muted">
          <li className="flex justify-between gap-4">
            <span>Purchase</span>
            <span className="text-cridora-text">+0.12 g</span>
          </li>
          <li className="flex justify-between gap-4">
            <span>Gift out</span>
            <span className="text-cridora-text">−0.05 g</span>
          </li>
        </ul>
        <Link to="/app/transactions" className="mt-4 inline-block text-sm font-medium text-cridora-gold-light hover:underline">
          View all →
        </Link>
      </section>
    </div>
  )
}
