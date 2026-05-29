const stats = [
  { label: 'Active jewellers', value: '128', hint: 'live + sandbox' },
  { label: 'Pending settlements', value: '₹2.4 Cr', hint: 'escrow window' },
  { label: 'Open KYC reviews', value: '34', hint: 'SLA mix' },
  { label: '24h volume', value: '7.2k g', hint: 'network legs' },
] as const

const alerts = [
  { id: '1', text: '3 jewellers near concentration threshold (south zone)', tone: 'warning' as const },
  { id: '2', text: 'Settlement batch #882 cleared — escrow legs matched', tone: 'ok' as const },
  { id: '3', text: 'New circular: review invoice wording for cross-jeweller fees', tone: 'neutral' as const },
] as const

const settlements = [
  { batch: 'ST-99104', corridor: 'Chennai → Mumbai', amount: '₹14.2 L', state: 'In progress' },
  { batch: 'ST-99103', corridor: 'Kochi → Hyderabad', amount: '₹8.0 L', state: 'Matched' },
  { batch: 'ST-99102', corridor: 'Surat → Delhi', amount: '₹21.5 L', state: 'Queued' },
] as const

const jewellersWatch = [
  { name: 'Royal Ornaments', city: 'Surat', tier: 'Free', health: 'Watch', grams: '62k g liab.' },
  { name: 'Lakshmi Sons', city: 'Thrissur', tier: 'Growth', health: 'Stable', grams: '48k g liab.' },
  { name: 'Silverline LLP', city: 'Jaipur', tier: 'Growth', health: 'Stable', grams: '31k g liab.' },
] as const

const feed = [
  { t: '10:42', msg: 'Fraud queue: 2 low-confidence device joins (Bengaluru cluster)' },
  { t: '09:18', msg: 'Settlement engine: nostro pull confirmed for ST-99103' },
  { t: 'Yesterday', msg: 'Trust score refresh complete — 4 jewellers nudged' },
] as const

export function AdminOverviewPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-display text-2xl font-semibold text-cridora-text sm:text-3xl">Network overview</h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-cridora-muted">
          One screen for pilot operations: volume, risk hints, settlement pipes, and jeweller health. All values
          are fiction until the admin BFF is wired.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="ui-card p-5 motion-reduce:hover:translate-y-0">
            <p className="text-xs font-medium uppercase tracking-wide text-cridora-muted">{s.label}</p>
            <p className="font-display mt-2 text-2xl font-semibold tabular-nums text-cridora-text">{s.value}</p>
            <p className="mt-1 text-xs text-cridora-muted/80">{s.hint}</p>
          </div>
        ))}
      </div>

      <section className="ui-card p-6 motion-reduce:hover:translate-y-0">
        <h2 className="font-display text-lg font-semibold text-cridora-text">Signals & policy</h2>
        <ul className="mt-4 space-y-3">
          {alerts.map((a) => (
            <li
              key={a.id}
              className={`flex gap-3 rounded-xl border px-4 py-3 text-sm ${
                a.tone === 'warning'
                  ? 'border-cridora-warning/35 bg-cridora-warning/10'
                  : a.tone === 'ok'
                    ? 'border-cridora-success/35 bg-cridora-success/10'
                    : 'border-silk/20 bg-navy-deep/40'
              }`}
            >
              <span aria-hidden className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-current opacity-80" />
              <span className={a.tone === 'neutral' ? 'text-cridora-muted' : 'text-cridora-text'}>{a.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="grid gap-4 xl:grid-cols-2">
        <section className="ui-card overflow-hidden p-0 motion-reduce:hover:translate-y-0">
          <div className="border-b border-silk/10 px-5 py-4">
            <h2 className="font-display text-lg font-semibold text-cridora-text">Settlement pipe</h2>
            <p className="mt-1 text-xs text-cridora-muted">Batches in flight across the network</p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[480px] w-full text-left text-sm">
              <thead className="border-b border-silk/10 text-xs uppercase tracking-wide text-cridora-muted">
                <tr>
                  <th className="px-5 py-3">Batch</th>
                  <th className="px-5 py-3">Corridor</th>
                  <th className="px-5 py-3">Notional</th>
                  <th className="px-5 py-3">State</th>
                </tr>
              </thead>
              <tbody>
                {settlements.map((r) => (
                  <tr key={r.batch} className="border-b border-silk/10 last:border-0">
                    <td className="px-5 py-3 font-mono text-xs text-cridora-gold-light">{r.batch}</td>
                    <td className="px-5 py-3 text-cridora-muted">{r.corridor}</td>
                    <td className="px-5 py-3 tabular-nums text-cridora-text">{r.amount}</td>
                    <td className="px-5 py-3 text-cridora-gold-light">{r.state}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="ui-card overflow-hidden p-0 motion-reduce:hover:translate-y-0">
          <div className="border-b border-silk/10 px-5 py-4">
            <h2 className="font-display text-lg font-semibold text-cridora-text">Jeweller watchlist</h2>
            <p className="mt-1 text-xs text-cridora-muted">Trust + liability snapshot (demo)</p>
          </div>
          <ul className="divide-y divide-silk/10">
            {jewellersWatch.map((j) => (
              <li key={j.name} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
                <div>
                  <p className="font-medium text-cridora-text">{j.name}</p>
                  <p className="text-xs text-cridora-muted">{j.city} · {j.tier} tier</p>
                </div>
                <div className="text-right">
                  <p
                    className={`text-xs font-semibold ${
                      j.health === 'Watch' ? 'text-cridora-warning' : 'text-cridora-success'
                    }`}
                  >
                    {j.health}
                  </p>
                  <p className="text-xs text-cridora-muted">{j.grams}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="ui-card p-6 motion-reduce:hover:translate-y-0">
        <h2 className="font-display text-lg font-semibold text-cridora-text">Ops feed</h2>
        <ul className="mt-4 space-y-4">
          {feed.map((f, i) => (
            <li key={i} className="flex gap-4 border-l-2 border-cridora-gold/35 pl-4">
              <span className="w-16 shrink-0 text-xs font-medium text-cridora-gold-light">{f.t}</span>
              <p className="text-sm text-cridora-muted">{f.msg}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
