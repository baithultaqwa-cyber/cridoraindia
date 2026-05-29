import { DEMO_SPOT_INR_PER_GRAM } from '@/shared/lib/demo-gold-rate'

export type DemoGoldScheme = {
  name: string
  tenure: string
  highlight: string
}

export type DemoJewellerProduct = {
  id: string
  name: string
  category: string
  purity: string
  makingNote: string
  indicativeFromInr: number
}

export type NetworkJewellerDemo = {
  id: string
  name: string
  city: string
  area: string
  /** Street / locality for search */
  addressLine: string
  pincode?: string
  tagline: string
  /** Shown buy-side indication; stores may quote around spot + policy. */
  indicativeRatePerGram: number
  /** 0–100 network credibility index (demo). */
  credibilityScore: number
  /** Onboarding / KYC complete for this pilot listing. */
  networkVerified: boolean
  schemes: DemoGoldScheme[]
  facilities: string[]
  services: string[]
  sameDayRedemption: boolean
  hallmarkingNote: string
  products: DemoJewellerProduct[]
}

function r(offset: number): number {
  return DEMO_SPOT_INR_PER_GRAM + offset
}

export const NETWORK_JEWELLERS_DEMO: NetworkJewellerDemo[] = [
  {
    id: 'lakshmi-jayanagar',
    name: 'Lakshmi Gold',
    city: 'Bengaluru',
    area: 'Jayanagar 4th Block',
    addressLine: '487 30th Cross, 4th Block Jayanagar',
    pincode: '560011',
    tagline: 'Full‑service counter with GoldNest schemes and gift registry.',
    indicativeRatePerGram: r(-12),
    credibilityScore: 92,
    networkVerified: true,
    schemes: [
      { name: 'Wedding 11', tenure: '11 months', highlight: 'Bonus grams on maturity · T&Cs at store' },
      { name: 'Festival Flex', tenure: '6 months', highlight: 'Optional early close with disclosed fee' },
    ],
    facilities: ['In‑store rate board', 'GoldNest desk', 'Secure locker consult', 'Instant invoice SMS'],
    services: ['Same‑day redemption quotes', 'Cross‑network settlement (pilot cities)', 'BIS 916 buy‑back line'],
    sameDayRedemption: true,
    hallmarkingNote: 'BIS 916 · Hallmark display on counter',
    products: [
      {
        id: 'lg-chain-1',
        name: 'Classic wheat chain',
        category: 'Chains',
        purity: '916',
        makingNote: 'Making % quoted before bill',
        indicativeFromInr: 128_000,
      },
      {
        id: 'lg-bangle-1',
        name: 'Temple motif bangle pair',
        category: 'Bangles',
        purity: '916',
        makingNote: 'Wastage per policy',
        indicativeFromInr: 186_000,
      },
      {
        id: 'lg-ring-1',
        name: 'Signet ring (custom size)',
        category: 'Rings',
        purity: '916',
        makingNote: 'Sizing in 48h',
        indicativeFromInr: 42_000,
      },
    ],
  },
  {
    id: 'heritage-indiranagar',
    name: 'Heritage Bullion',
    city: 'Bengaluru',
    area: 'Indiranagar',
    addressLine: '100 Feet Rd, next to Metro pillar 12',
    pincode: '560038',
    tagline: 'Bullion‑forward counter with transparent slab making charges.',
    indicativeRatePerGram: r(8),
    credibilityScore: 88,
    networkVerified: true,
    schemes: [
      { name: 'Stack 12', tenure: '12 months', highlight: 'Monthly gram credit · lock‑in disclosed' },
    ],
    facilities: ['Live rate LED', 'Settlement receipts', 'Corporate gifting desk'],
    services: ['Sellback quotes', 'HUF‑style documentation assist (demo)', 'Weekend counters'],
    sameDayRedemption: true,
    hallmarkingNote: '916 stock · third‑party assay on request',
    products: [
      {
        id: 'hb-bar-20',
        name: 'Minted bar 20g (sealed)',
        category: 'Bullion',
        purity: '916',
        makingNote: 'Premium over spot shown',
        indicativeFromInr: 145_000,
      },
      {
        id: 'hb-coin-8',
        name: 'Lakshmi coin 8g',
        category: 'Coins',
        purity: '916',
        makingNote: 'Collectible series',
        indicativeFromInr: 62_000,
      },
    ],
  },
  {
    id: 'demo-gold-ernakulam',
    name: 'Demo Gold House',
    city: 'Ernakulam',
    area: 'Marine Drive',
    addressLine: 'Marine Drive, near boat jetty signal',
    pincode: '682031',
    tagline: 'Coastal network partner · pilot redemption timings.',
    indicativeRatePerGram: r(-4),
    credibilityScore: 79,
    networkVerified: true,
    schemes: [{ name: 'Coastal 9', tenure: '9 months', highlight: 'Festival top‑up windows' }],
    facilities: ['Malayalam desk', 'Parking tie‑up', 'SMS rate alert'],
    services: ['Express KYC assist', 'NRI purchase notes (demo)', 'Courier‑to‑store (soon)'],
    sameDayRedemption: false,
    hallmarkingNote: 'BIS 916 · batch certificates on file',
    products: [
      {
        id: 'dgh-necklace-1',
        name: 'Kerala neckline set',
        category: 'Necklace',
        purity: '916',
        makingNote: 'Stone charges separate if any',
        indicativeFromInr: 210_000,
      },
      {
        id: 'dgh-ear-1',
        name: 'Jhumka light (pair)',
        category: 'Earrings',
        purity: '916',
        makingNote: 'Hypoallergenic posts option',
        indicativeFromInr: 68_000,
      },
    ],
  },
  {
    id: 'silvercraft-thrissur',
    name: 'Demo Silvercraft',
    city: 'Thrissur',
    area: 'Round South',
    addressLine: 'Round South, ground floor showroom',
    pincode: '680001',
    tagline: 'Mixed‑metal house with gold savings counter.',
    indicativeRatePerGram: r(0),
    credibilityScore: 71,
    networkVerified: false,
    schemes: [],
    facilities: ['Gold savings window', 'Repairs & polish'],
    services: ['Order‑from‑catalog', 'Engraving'],
    sameDayRedemption: false,
    hallmarkingNote: 'Gold line is 916 only (per pilot)',
    products: [
      {
        id: 'ds-pendant-1',
        name: 'Deity pendant 6g',
        category: 'Pendants',
        purity: '916',
        makingNote: 'Chain optional',
        indicativeFromInr: 52_000,
      },
    ],
  },
]

export function getDemoJeweller(id: string): NetworkJewellerDemo | undefined {
  return NETWORK_JEWELLERS_DEMO.find((j) => j.id === id)
}

export function getDemoProduct(
  jewellerId: string,
  productId: string,
): { jeweller: NetworkJewellerDemo; product: DemoJewellerProduct } | undefined {
  const jeweller = getDemoJeweller(jewellerId)
  if (!jeweller) return undefined
  const product = jeweller.products.find((p) => p.id === productId)
  if (!product) return undefined
  return { jeweller, product }
}

export type MarketplaceProductRow = DemoJewellerProduct & {
  jewellerId: string
  jewellerName: string
  city: string
  verified: boolean
  score: number
}

export function flattenDemoMarketplaceProducts(): MarketplaceProductRow[] {
  return NETWORK_JEWELLERS_DEMO.flatMap((j) =>
    j.products.map((p) => ({
      ...p,
      jewellerId: j.id,
      jewellerName: j.name,
      city: j.city,
      verified: j.networkVerified,
      score: j.credibilityScore,
    })),
  )
}

export function demoMarketplaceCategories(): string[] {
  const set = new Set<string>()
  for (const j of NETWORK_JEWELLERS_DEMO) {
    for (const p of j.products) {
      set.add(p.category)
    }
  }
  return [...set].sort((a, b) => a.localeCompare(b))
}
export function demoJewellerCities(): string[] {
  return [...new Set(NETWORK_JEWELLERS_DEMO.map((j) => j.city))].sort((a, b) => a.localeCompare(b))
}
