export function DisclaimerStrip({ dense }: { dense?: boolean }) {
  return (
    <p
      className={`border-b border-silk/10 bg-navy-silk/50 px-4 py-2 text-center text-cridora-muted ${dense ? 'text-[0.65rem] leading-snug' : 'text-xs'}`}
    >
      Gold values are <strong className="font-medium text-cridora-text">market-linked</strong>, not
      guaranteed. Redemption depends on participating jewellers and applicable terms.
    </p>
  )
}
