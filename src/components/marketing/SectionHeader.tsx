type SectionHeaderProps = {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  large?: boolean
}

export function SectionHeader({ eyebrow, title, subtitle, align = 'center', large }: SectionHeaderProps) {
  const wrap =
    align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-left'
  const titleCls = large
    ? 'font-display text-3xl font-semibold tracking-tight text-cridora-text sm:text-4xl md:text-[2.75rem] md:leading-[1.15]'
    : 'font-display text-2xl font-semibold tracking-tight text-cridora-text sm:text-3xl'

  return (
    <div className={wrap}>
      <p
        className="gold-line text-xs font-semibold uppercase tracking-[0.2em] text-cridora-gold"
        data-align={align}
      >
        {eyebrow}
      </p>
      <h2 className={`mt-4 ${titleCls}`}>{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-cridora-muted sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  )
}
