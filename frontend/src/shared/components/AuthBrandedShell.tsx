import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type AuthBrandedShellProps = {
  title: string
  subtitle?: string
  children: ReactNode
  footer?: ReactNode
}

export function AuthBrandedShell({ title, subtitle, children, footer }: AuthBrandedShellProps) {
  return (
    <div className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-4 py-16">
      <Link
        to="/"
        className="mb-8 text-center font-display text-2xl font-semibold text-cridora-gold-light transition-colors hover:text-cridora-gold"
      >
        Cridora
      </Link>
      <div className="ui-card p-8 motion-reduce:hover:translate-y-0">
        <h1 className="font-display text-2xl font-semibold text-cridora-text">{title}</h1>
        {subtitle ? <p className="mt-2 text-sm text-cridora-muted">{subtitle}</p> : null}
        {children}
        {footer}
      </div>
    </div>
  )
}
