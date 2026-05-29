import { Link } from 'react-router-dom'
import { DashPageHeader } from '@/shared/components/dashboard/DashPageHeader'
import { IconArrowRight, IconBanknote, IconGift, IconRefreshCw } from '@/features/consumer/icons/ConsumerNavIcons'

const options = [
  {
    to: '/app/sellback',
    title: 'Cash (sellback)',
    body: 'See live-linked quote, spreads, fees, and GST on the sellback screen before you confirm.',
    icon: IconBanknote,
    accent: 'from-navy-shine/40 to-navy-deep/60',
  },
  {
    to: '/app/credit',
    title: 'Loan / liquidity',
    body: 'Emergency liquidity against pledged grams — fees and collateral are disclosed up front (demo).',
    icon: IconBanknote,
    accent: 'from-navy-shine/30 to-navy-deep/50',
  },
  {
    to: '/app/ornaments',
    title: 'Ornament / product',
    body: 'Browse ornaments and showcase SKUs across jewellers, then redeem into jewellery with making charges.',
    icon: IconRefreshCw,
    accent: 'from-cridora-gold/15 to-navy-deep/60',
  },
  {
    to: '/app/transfer',
    title: 'Transfer grams',
    body: 'Send to another user’s Cridora ID — verify the recipient and confirm twice before grams move.',
    icon: IconGift,
    accent: 'from-navy-silk/50 to-navy-deep/55',
  },
] as const

export function ConsumerRedeemPage() {
  return (
    <div className="space-y-8">
      <DashPageHeader
        eyebrow="Redeem"
        title="Choose how to use your balance"
        description="Cash, liquidity, physical product, or transfer — each path shows jeweller rules, taxes, and confirmations before settlement."
      />

      <ul className="grid gap-4 sm:grid-cols-2">
        {options.map(({ to, title, body, icon: Icon, accent }) => (
          <li key={to}>
            <Link
              to={to}
              className={`flex h-full flex-col rounded-3xl border border-silk/10 bg-gradient-to-br p-6 transition-colors hover:border-cridora-gold/25 ${accent}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="rounded-xl border border-silk/15 bg-navy-deep/40 p-2 text-cridora-gold-light">
                  <Icon className="h-6 w-6" />
                </div>
                <IconArrowRight className="h-5 w-5 shrink-0 text-cridora-muted" />
              </div>
              <h2 className="mt-4 font-display text-lg font-bold text-cridora-text">{title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-cridora-muted">{body}</p>
              <span className="mt-4 text-sm font-bold text-cridora-gold-light">Continue →</span>
            </Link>
          </li>
        ))}
      </ul>

      <p className="text-sm text-cridora-muted">
        Classic counter redemption with a chosen jeweller is also available from your{' '}
        <Link to="/app/jewellers" className="font-medium text-cridora-gold-light hover:underline">
          network shops
        </Link>
        .
      </p>
    </div>
  )
}
