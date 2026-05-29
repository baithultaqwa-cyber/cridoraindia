import { DEMO_SPOT_INR_PER_GRAM, formatInrPerGram } from '@/shared/lib/demo-gold-rate'

const TICKER_SEGMENTS = [
  { key: 'bis', text: 'BIS 916 · India savings network' },
  { key: 'spot', text: `Indicative demo spot ${formatInrPerGram(DEMO_SPOT_INR_PER_GRAM)}` },
  { key: 'vary', text: 'Store rates & making charges vary — confirm before you pay' },
  { key: 'nest', text: 'GoldNest schemes: lock‑ins shown before enrolment' },
  { key: 'pilot', text: 'Pre‑launch demo · not live bullion data' },
] as const

function SegmentRow() {
  return (
    <>
      {TICKER_SEGMENTS.map((s) => (
        <span
          key={s.key}
          className="inline-flex shrink-0 items-center gap-2 px-6 text-[0.7rem] font-medium uppercase tracking-wider text-cridora-muted sm:text-xs"
        >
          <span className="h-1 w-1 shrink-0 rounded-full bg-cridora-gold/80" aria-hidden />
          {s.text}
        </span>
      ))}
    </>
  )
}

export function GoldRateTicker() {
  return (
    <div
      className="border-b border-silk/10 bg-navy-silk/95 py-2.5"
      role="region"
      aria-label="Indicative gold rate and network notices"
    >
      <div className="relative overflow-hidden">
        <div className="gold-rate-ticker-track flex">
          <div className="flex">
            <SegmentRow />
          </div>
          <div className="flex" aria-hidden="true">
            <SegmentRow />
          </div>
        </div>
      </div>
    </div>
  )
}
