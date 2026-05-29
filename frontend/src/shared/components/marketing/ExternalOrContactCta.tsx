import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { externalFormHref, googleFormUrls, type GoogleFormKey } from '@/shared/config/public-forms'

type ExternalOrContactProps = {
  urlKey: GoogleFormKey
  className: string
  children: ReactNode
  fallbackTo?: string
}

export function ExternalOrContactCta({ urlKey, className, children, fallbackTo = '/contact' }: ExternalOrContactProps) {
  const href = externalFormHref(googleFormUrls[urlKey])
  if (href) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }
  return (
    <Link to={fallbackTo} className={className}>
      {children}
    </Link>
  )
}
