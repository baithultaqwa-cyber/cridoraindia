const customers = [
  { name: 'R. Nair', kyc: 'Verified', holdings: '12.4g across 2 cards' },
  { name: 'S. Kapoor', kyc: 'Pending', holdings: '3.1g' },
]

export function MerchantCustomersPage() {
  return (
    <div className="space-y-4">
      <h1 className="font-display text-2xl font-semibold text-cridora-text">Customers</h1>
      <p className="text-sm text-cridora-muted">
        Customers linked to this store. Search and filters arrive with live APIs.
      </p>
      <ul className="space-y-3">
        {customers.map((c) => (
          <li
            key={c.name}
            className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-silk/15 bg-navy-silk/50 p-4"
          >
            <div>
              <p className="font-medium text-cridora-text">{c.name}</p>
              <p className="text-sm text-cridora-muted">{c.holdings}</p>
            </div>
            <span className="rounded-full border border-silk/25 bg-navy-shine/40 px-3 py-1 text-xs font-medium text-cridora-gold-light">
              KYC {c.kyc}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
