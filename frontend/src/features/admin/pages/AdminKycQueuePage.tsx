const queue = [
  { id: 'KYC-441', subject: 'User · A. Sharma', state: 'Docs received' },
  { id: 'KYC-440', subject: 'Jeweller · Silverline LLP', state: 'GST pending' },
  { id: 'KYC-439', subject: 'User · P. Menon', state: 'Video pending' },
] as const

export function AdminKycQueuePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-cridora-text">KYC queue</h1>
        <p className="mt-1 text-sm text-cridora-muted">Reviewer assignments and SLA clocks (demo).</p>
      </div>
      <ul className="space-y-2">
        {queue.map((q) => (
          <li
            key={q.id}
            className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-silk/15 bg-navy-silk/40 px-4 py-3 text-sm"
          >
            <span className="font-medium text-cridora-text">{q.id}</span>
            <span className="text-cridora-muted">{q.subject}</span>
            <span className="text-cridora-gold-light">{q.state}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
