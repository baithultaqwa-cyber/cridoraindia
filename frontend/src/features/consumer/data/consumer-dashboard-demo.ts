/** Demo dashboard content — illustrative only; aligns with DPR-style surfaces without claiming live pricing. */

export type DemoPortfolio = {
  totalValue: string
  totalWeight: string
  unrealizedGain: string
  gainPercent: string
  lockedGold: string
  availableToSell: string
  purityLabel: string
}

export const demoPortfolio: DemoPortfolio = {
  totalValue: '₹1,42,850.40',
  totalWeight: '18.450 g',
  unrealizedGain: '+₹12,400',
  gainPercent: '8.5%',
  lockedGold: '2.500 g',
  availableToSell: '15.950 g',
  purityLabel: 'BIS 916',
}

export const demoJewellerAllocations = [
  { name: 'Malabar Gold', weight: '10.250 g', location: 'Kochi hub', status: 'In vault' as const },
  { name: 'Joyalukkas', weight: '5.200 g', location: 'Network node', status: 'In transit' as const },
  { name: 'Kalyan Jewellers', weight: '3.000 g', location: 'Mumbai central', status: 'In vault' as const },
]

export const demoGoldLoans = [
  {
    id: 'L-882',
    amount: '₹25,000',
    collateral: '4.200 g',
    feeNote: 'Fee disclosed pre-disbursal · demo',
    status: 'Active' as const,
  },
]

export const demoGoldNestSchemes = [
  {
    id: 1,
    name: 'Marriage GoldNest',
    partner: 'Malabar Gold',
    progress: 65,
    target: '50 g',
    current: '32.5 g',
    bonus: '1 month bonus',
    nextSip: '14 May',
  },
  {
    id: 2,
    name: 'Annual savings',
    partner: 'Joyalukkas',
    progress: 30,
    target: '10 g',
    current: '3.0 g',
    bonus: '0% making window (promo)',
    nextSip: '21 May',
  },
] as const

export const demoPulseBars = [40, 70, 45, 90, 65, 80, 50, 100, 85, 95, 75, 110]

export const demoMarketQuote = {
  display: '₹7,245',
  delta: '+0.42%',
  low24h: '₹7,112',
  high24h: '₹7,288',
}

export const demoPriceAlert =
  'Indicative move: demo spot near a 30-day low on this chart — not advice. Review your Nest schedule at the counter.'
