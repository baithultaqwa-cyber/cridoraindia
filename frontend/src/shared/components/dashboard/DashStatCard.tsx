import type { ReactNode } from 'react'

type DashStatCardProps = {
  label: string
  value: ReactNode
  sub?: string
  className?: string
}

export function DashStatCard({ label, value, sub, className = '' }: DashStatCardProps) {
  return (
    <div
      className={`rounded-2xl border border-cridora-gold/15 bg-gradient-to-br from-navy-silk/85 to-navy-deep/65 px-4 py-4 shadow-[var(--shadow-card)] ${className}`}
    >
      <p className="text-[0.65rem] font-medium uppercase tracking-wide text-cridora-muted">{label}</p>
      <div className="font-display mt-2 text-xl font-semibold tabular-nums text-cridora-text sm:text-2xl">
        {value}
      </div>
      {sub ? <p className="mt-1 text-xs text-cridora-muted/90">{sub}</p> : null}
    </div>
  )
}
