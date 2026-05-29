import { Navigate, useParams } from 'react-router-dom'
import { legalDocs, type LegalDocId } from './legalDocs'

function isLegalDocId(value: string | undefined): value is LegalDocId {
  return value !== undefined && value in legalDocs
}

export function LegalDocPage() {
  const { doc } = useParams()
  if (!isLegalDocId(doc)) {
    return <Navigate to="/legal/terms" replace />
  }
  const { title, summary, paragraphs } = legalDocs[doc]

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cridora-gold">Legal</p>
        <h1 className="font-display mt-6 text-4xl font-semibold tracking-tight text-cridora-text sm:text-5xl">
          {title}
        </h1>
      </header>

      <aside
        className="mt-10 rounded-2xl border border-cridora-gold/25 bg-navy-silk/50 p-6 text-sm leading-relaxed text-cridora-muted"
        aria-label="Plain-language summary"
      >
        <p className="font-medium text-cridora-text">Plain-language summary</p>
        <p className="mt-2">{summary}</p>
      </aside>

      <div className="mt-12 space-y-6 text-sm leading-relaxed text-cridora-muted sm:text-base">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  )
}
