export function ConsumerJewellersPage() {
  const stores = [
    { name: 'Demo Gold House', city: 'Ernakulam', tag: 'Immediate redemption' },
    { name: 'Demo Silvercraft', city: 'Thrissur', tag: 'Standard network' },
  ]

  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-semibold text-cridora-text">Participating jewellers</h1>
      <ul className="space-y-3">
        {stores.map((s) => (
          <li key={s.name} className="ui-card p-5">
            <p className="font-medium text-cridora-text">{s.name}</p>
            <p className="text-sm text-cridora-muted">{s.city}</p>
            <p className="mt-2 text-xs text-cridora-gold-light">{s.tag}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
