import { Link } from 'react-router-dom'
import { DashPageHeader } from '@/shared/components/dashboard/DashPageHeader'
import { demoGoldLoans } from '@/features/consumer/data/consumer-dashboard-demo'
import { IconArrowRight, IconBanknote } from '@/features/consumer/icons/ConsumerNavIcons'

export function ConsumerCreditPage() {
  return (
    <div className="space-y-8">
      <DashPageHeader
        eyebrow="Liquidity"
        title="Gold credit & sellback"
        description="Cridora positions emergency liquidity as a disclosed fee — not interest-based lending. Below is demo UI only."
      />

      <div className="relative overflow-hidden rounded-[2rem] border border-navy-shine/35 bg-navy-shine/15 p-6 md:p-8">
        <IconBanknote className="pointer-events-none absolute -bottom-4 -right-4 h-28 w-28 text-navy-shine/25" />
        <div className="relative z-10 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-display text-xl font-bold italic text-cridora-text">Active facilities (demo)</h2>
            <span className="rounded-full border border-silk/20 bg-navy-deep/60 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-cridora-muted">
              Eligibility at counter
            </span>
          </div>

          <ul className="space-y-3">
            {demoGoldLoans.map((loan) => (
              <li
                key={loan.id}
                className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-silk/10 bg-navy-deep/55 p-4"
              >
                <div>
                  <p className="text-[0.65rem] font-bold uppercase text-silk">Ref {loan.id}</p>
                  <p className="text-xl font-bold text-cridora-text">{loan.amount}</p>
                  <p className="mt-1 text-xs text-cridora-muted">{loan.feeNote}</p>
                </div>
                <div className="text-right">
                  <p className="text-[0.65rem] font-bold uppercase text-cridora-muted">Collateral</p>
                  <p className="text-sm font-bold text-cridora-gold-light">{loan.collateral}</p>
                  <p className="mt-1 text-[0.65rem] font-bold uppercase text-cridora-success">{loan.status}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            to="/app/sellback"
            className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-cridora-gold py-4 text-sm font-bold text-cridora-ink shadow-[var(--shadow-gold)]"
          >
            Start sellback quote
            <IconArrowRight className="h-4 w-4" />
          </Link>

          <p className="text-xs leading-relaxed text-cridora-muted">
            For regulated rollouts, copy and flows follow India compliance review — do not treat this screen as a
            credit offer.
          </p>
        </div>
      </div>
    </div>
  )
}
