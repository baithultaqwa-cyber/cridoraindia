/**
 * Unsplash URLs — jewellery / gold visuals for demo marketplace UI.
 * Pagereference-aligned IDs noted where matched.
 */

export const STOCK_MARKETPLACE_HERO =
  'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=82&w=1600'

export const STOCK_SHOP_WINDOW =
  'https://images.unsplash.com/photo-1589674780689-aae314b67aac?auto=format&fit=crop&q=82&w=1200'

export const STOCK_GOLD_TEXTURE =
  'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=82&w=1200'

/** Hero / marketing — savings + jewellery */
export const STOCK_HERO_JEWELLERY =
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=82&w=1200'

const NECKLACE =
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=82&w=800'
const BANGLES =
  'https://images.unsplash.com/photo-1535633302704-c02fbcaf8c51?auto=format&fit=crop&q=82&w=800'
const RING =
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=82&w=800'
const COIN =
  'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=82&w=800'

const POOL_EXTRA = [
  'https://images.unsplash.com/photo-1603561596112-eae39e533656?auto=format&fit=crop&q=82&w=800',
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=82&w=800',
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=82&w=800',
]

const DEFAULT_POOL = [NECKLACE, BANGLES, RING, COIN, ...POOL_EXTRA]

const BY_CATEGORY: Record<string, string[]> = {
  Chains: [NECKLACE, ...POOL_EXTRA],
  Necklaces: [NECKLACE, RING],
  Bangles: [BANGLES],
  Rings: [RING],
  Earrings: [BANGLES, NECKLACE],
  Bullion: [COIN, STOCK_GOLD_TEXTURE],
  Coins: [COIN],
  Pendants: [RING, NECKLACE],
}

function hashSeed(seed: string): number {
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0
  return h
}

/** Stable image per product row for grids and cart thumbnails */
export function stockImageForProduct(category: string, jewellerId: string, productId: string): string {
  const pool = BY_CATEGORY[category] ?? DEFAULT_POOL
  const idx = hashSeed(`${jewellerId}:${productId}:${category}`) % pool.length
  return pool[idx]!
}

/** Directory cards — distinct mood per jeweller */
export const JEWELLER_CARD_IMAGE_BY_ID: Record<string, string> = {
  'lakshmi-jayanagar':
    'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=82&w=900',
  'heritage-indiranagar':
    'https://images.unsplash.com/photo-1535632787350-4e68ef8dd211?auto=format&fit=crop&q=82&w=900',
  'demo-gold-ernakulam':
    'https://images.unsplash.com/photo-1496317256774-1fa032ca27db?auto=format&fit=crop&q=82&w=900',
  'silvercraft-thrissur':
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=82&w=900',
}

export function stockImageForJeweller(jewellerId: string): string {
  return JEWELLER_CARD_IMAGE_BY_ID[jewellerId] ?? DEFAULT_POOL[hashSeed(jewellerId) % DEFAULT_POOL.length]!
}

/** Marketplace hub tiles */
export const MARKETPLACE_TILE_IMAGES = {
  jewellers: STOCK_SHOP_WINDOW,
  products: NECKLACE,
  cart: RING,
} as const
