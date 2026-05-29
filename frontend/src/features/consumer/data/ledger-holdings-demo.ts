export type HoldingKind = 'fractional' | 'deposit' | 'goldnest'

export type LedgerHoldingDemo = {
  id: string
  jewellerId: string
  jewellerName: string
  kind: HoldingKind
  grams: number
  /** Demo book cost ₹/g for P/L illustration */
  bookRatePerGram: number
  creditedAt: string
  ref: string
  note?: string
}

export const LEDGER_HOLDINGS_DEMO: LedgerHoldingDemo[] = [
  {
    id: 'LH-01',
    jewellerId: 'lakshmi-jayanagar',
    jewellerName: 'Lakshmi Gold',
    kind: 'fractional',
    grams: 4.2,
    bookRatePerGram: 6940,
    creditedAt: '12 Mar 2026',
    ref: 'FRAC-LG-001',
    note: 'Micro-buy stack',
  },
  {
    id: 'LH-02',
    jewellerId: 'lakshmi-jayanagar',
    jewellerName: 'Lakshmi Gold',
    kind: 'goldnest',
    grams: 8.1,
    bookRatePerGram: 6888,
    creditedAt: '01 Feb 2026',
    ref: 'NEST-W11-02',
    note: 'Wedding 11 instalments',
  },
  {
    id: 'LH-03',
    jewellerId: 'heritage-indiranagar',
    jewellerName: 'Heritage Bullion',
    kind: 'deposit',
    grams: 3.6,
    bookRatePerGram: 7010,
    creditedAt: '18 Jan 2026',
    ref: 'DEP-HB-889',
    note: 'Counter lump deposit',
  },
  {
    id: 'LH-04',
    jewellerId: 'demo-gold-ernakulam',
    jewellerName: 'Demo Gold House',
    kind: 'fractional',
    grams: 2.55,
    bookRatePerGram: 6995,
    creditedAt: '28 Feb 2026',
    ref: 'FRAC-DGH-12',
  },
]

export function holdingKindLabel(k: HoldingKind): string {
  if (k === 'fractional') return 'Fractional purchase'
  if (k === 'deposit') return 'Deposit'
  return 'GoldNest scheme'
}

export function aggregateLedgerByJeweller(rows: LedgerHoldingDemo[]) {
  const m = new Map<string, { name: string; grams: number }>()
  for (const r of rows) {
    const cur = m.get(r.jewellerId) ?? { name: r.jewellerName, grams: 0 }
    cur.grams += r.grams
    m.set(r.jewellerId, cur)
  }
  return [...m.entries()].map(([id, v]) => ({ jewellerId: id, jewellerName: v.name, grams: v.grams }))
}
