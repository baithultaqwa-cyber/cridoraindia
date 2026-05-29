import { useId } from 'react'

const sizeClass = {
  sm: 'h-8 w-8 min-h-8 min-w-8 p-1',
  md: 'h-12 w-12 min-h-12 min-w-12 p-1.5',
  lg: 'h-24 w-24 min-h-24 min-w-24 p-3',
} as const

export type CridoraLogoMarkProps = {
  size?: keyof typeof sizeClass
  className?: string
}

export function CridoraLogoMark({ size = 'sm', className = '' }: CridoraLogoMarkProps) {
  const gradId = `cridora-logo-gold-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-[22%] border border-silk/20 bg-navy-deep shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:scale-105 hover:border-cridora-gold/35 hover:shadow-[0_0_24px_-4px_rgba(200,162,77,0.55)] motion-reduce:transition-none motion-reduce:hover:scale-100 group-hover:scale-105 group-hover:border-cridora-gold/35 group-hover:shadow-[0_0_24px_-4px_rgba(200,162,77,0.55)] motion-reduce:group-hover:scale-100 ${sizeClass[size]} ${className}`}
      aria-hidden
    >
      <svg className="h-full w-full" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke={`url(#${gradId})`} strokeWidth="2.5" />
        <path
          d="M14 20C14 16.6863 16.6863 14 20 14"
          stroke="#e8c97a"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M26 20C26 23.3137 23.3137 26 20 26"
          stroke="#c8a24d"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id={gradId} x1="2" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#e8c97a" />
            <stop offset="100%" stopColor="#8b5a1a" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
