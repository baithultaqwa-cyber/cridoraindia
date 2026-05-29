import { FaqAccordion } from '@/shared/components/marketing/FaqAccordion'

const faqItems = [
  {
    q: 'What is Cridora?',
    a: 'Cridora is a unified gold savings and redemption network: users save digitally in grams and redeem through participating jewellers — with tools that help stores serve customers better.',
  },
  {
    q: 'Is this digital gold?',
    a: 'You hold a digital record of your gold balance that is designed to connect to physical redemption at jewellers in the network. It is not promoted as an abstract screen-only asset.',
  },
  {
    q: 'Can users redeem physically?',
    a: 'Yes — that is the point. Redemption is through participating jewellers, subject to their policies, stock, and charges you see before you confirm.',
  },
  {
    q: 'Can jewellers participate?',
    a: 'Yes. Jewellers can apply to join the early network, use partner tools, and serve savers who discover them through Cridora.',
  },
  {
    q: 'How is gold tracked?',
    a: 'Balances are tracked in grams with transparent history in the product — alongside the jeweller’s fulfilment and invoicing responsibilities.',
  },
  {
    q: 'Is this linked to jewellery stores?',
    a: 'Yes. Jewellers remain key redemption and service partners; Cridora is not positioned as a faceless substitute for your trusted counter.',
  },
  {
    q: 'Can users transfer gold?',
    a: 'The product direction includes transfers for family gifting and shared savings, within limits and policies configured for your market.',
  },
  {
    q: 'Is there a waitlist?',
    a: 'Yes — savers, jewellers, and investors each have early-access paths (Google Forms when configured, or contact as fallback).',
  },
  {
    q: 'Which cities launch first?',
    a: 'Rollout is intentionally phased — starting with focused pilots and expanding as operations and partnerships mature. Join a waitlist to hear when your city opens.',
  },
]

export function FaqPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cridora-gold">FAQ</p>
        <h1 className="font-display mt-6 text-4xl font-semibold tracking-tight text-cridora-text sm:text-5xl">
          Simple answers
        </h1>
        <p className="mt-6 text-base leading-relaxed text-cridora-muted sm:text-lg">
          Plain language for families and jewellers — detailed terms arrive in-product and in formal
          agreements at launch.
        </p>
      </header>
      <div className="mt-14">
        <FaqAccordion items={faqItems} />
      </div>
    </div>
  )
}
