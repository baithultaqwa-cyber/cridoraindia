import type { ReactNode } from 'react'

type DashPageHeaderProps = {
  eyebrow: string
  title: string
  description?: ReactNode
}

export function DashPageHeader({ eyebrow, title, description }: DashPageHeaderProps) {
  return (
    <header className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wider text-cridora-gold">{eyebrow}</p>
      <h1 className="font-display text-2xl font-semibold text-cridora-text sm:text-3xl">{title}</h1>
      {description ? (
        <div className="max-w-2xl text-sm leading-relaxed text-cridora-muted">{description}</div>
      ) : null}
    </header>
  )
}
