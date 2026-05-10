const customers = [
  { name: 'R. Nair', kyc: 'Verified', holdings: '12.4g across 2 cards' },
  { name: 'S. Kapoor', kyc: 'Pending', holdings: '3.1g' },
]

export function MerchantCustomersPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-serif font-semibold text-cridora-navy">Customers</h2>
      <p className="text-sm text-cridora-muted">
        Assigned customers for this location. Use search and filters once live APIs are connected.
      </p>
      <ul className="space-y-3">
        {customers.map((c) => (
          <li
            key={c.name}
            className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-cridora-sand/80 bg-white p-4 shadow-sm"
          >
            <div>
              <p className="font-medium text-cridora-navy">{c.name}</p>
              <p className="text-sm text-cridora-muted">{c.holdings}</p>
            </div>
            <span className="rounded-full bg-cridora-cream px-3 py-1 text-xs font-medium text-cridora-navy">
              KYC {c.kyc}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
