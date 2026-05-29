const jewellers = [
  { name: 'Lakshmi Sons', city: 'Thrissur', tier: 'Growth', trust: 'A' },
  { name: 'Royal Ornaments', city: 'Surat', tier: 'Free', trust: 'B' },
  { name: 'Heritage Bullion Co.', city: 'Delhi', tier: 'Chain', trust: 'A' },
] as const

export function AdminJewellersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-cridora-text">Jewellers</h1>
        <p className="mt-1 text-sm text-cridora-muted">Network directory, tier, and trust snapshot.</p>
      </div>
      <ul className="space-y-3">
        {jewellers.map((j) => (
          <li key={j.name} className="ui-card flex flex-wrap items-center justify-between gap-3 p-5 motion-reduce:hover:translate-y-0">
            <div>
              <p className="font-medium text-cridora-text">{j.name}</p>
              <p className="text-xs text-cridora-muted">{j.city}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full border border-silk/20 px-3 py-1 text-cridora-muted">{j.tier}</span>
              <span className="rounded-full bg-cridora-gold/15 px-3 py-1 font-medium text-cridora-gold-light">
                Trust {j.trust}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
