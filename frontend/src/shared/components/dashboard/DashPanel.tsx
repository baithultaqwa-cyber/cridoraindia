import type { ReactNode } from 'react'

type DashPanelProps = {
  title: string
  subtitle?: string
  headerAside?: ReactNode
  children: ReactNode
  flush?: boolean
  className?: string
}

export function DashPanel({ title, subtitle, headerAside, children, flush, className = '' }: DashPanelProps) {
  return (
    <section className={`ui-card overflow-hidden motion-reduce:hover:translate-y-0 ${className}`}>
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-silk/10 px-5 py-4">
        <div className="min-w-0">
          <h2 className="font-display text-lg font-semibold text-cridora-text">{title}</h2>
          {subtitle ? <p className="mt-1 text-xs text-cridora-muted">{subtitle}</p> : null}
        </div>
        {headerAside ? <div className="shrink-0">{headerAside}</div> : null}
      </div>
      {flush ? children : <div className="p-5">{children}</div>}
    </section>
  )
}
