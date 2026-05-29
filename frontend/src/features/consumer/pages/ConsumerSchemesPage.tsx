import { Link } from 'react-router-dom'
import { DashPageHeader } from '@/shared/components/dashboard/DashPageHeader'
import { demoGoldNestSchemes } from '@/features/consumer/data/consumer-dashboard-demo'
import { IconChevronRight } from '@/features/consumer/icons/ConsumerNavIcons'

export function ConsumerSchemesPage() {
  return (
    <div className="space-y-8">
      <DashPageHeader
        eyebrow="GoldNest"
        title="Your savings schemes"
        description="Progress, targets, and next instalments — illustrative until schemes sync from partner jewellers."
      />

      <ul className="space-y-4">
        {demoGoldNestSchemes.map((scheme) => (
          <li
            key={scheme.id}
            className="rounded-[1.75rem] border border-silk/10 bg-navy-silk/45 p-5 md:p-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="font-display text-lg font-bold text-cridora-text">{scheme.name}</h2>
                <p className="text-xs font-bold uppercase text-silk">{scheme.partner}</p>
              </div>
              <span className="rounded-lg border border-cridora-gold/25 bg-cridora-gold/10 px-3 py-1 text-sm font-bold text-cridora-gold-light">
                {scheme.progress}%
              </span>
            </div>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-navy-deep">
              <div className="h-full rounded-full bg-cridora-gold" style={{ width: `${scheme.progress}%` }} />
            </div>
            <div className="mt-2 flex justify-between text-xs font-bold uppercase text-cridora-muted">
              <span>{scheme.current}</span>
              <span>Target {scheme.target}</span>
            </div>
            <p className="mt-3 text-sm text-cridora-muted">{scheme.bonus}</p>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-silk/10 bg-navy-deep/40 px-3 py-2">
              <span className="text-xs font-semibold text-cridora-muted">Next: {scheme.nextSip}</span>
              <IconChevronRight className="h-4 w-4 text-cridora-muted" aria-hidden />
            </div>
          </li>
        ))}
      </ul>

      <p className="text-center text-sm text-cridora-muted">
        <Link to="/app/jewellers" className="font-medium text-cridora-gold-light hover:underline">
          Browse jewellers with schemes →
        </Link>
      </p>
    </div>
  )
}
