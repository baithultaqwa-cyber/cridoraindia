import type { ReactNode } from 'react'
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from 'react'

export type MarketplaceCartLine = {
  jewellerId: string
  jewellerName: string
  productId: string
  productName: string
  category: string
  purity: string
  indicativeFromInr: number
  qty: number
}

const STORAGE_KEY = 'cridora-marketplace-cart-v1'

function cartKey(line: Pick<MarketplaceCartLine, 'jewellerId' | 'productId'>): string {
  return `${line.jewellerId}:${line.productId}`
}

function parseStored(raw: string | null): MarketplaceCartLine[] {
  if (!raw) return []
  try {
    const data = JSON.parse(raw) as unknown
    if (!Array.isArray(data)) return []
    return data.filter(
      (row): row is MarketplaceCartLine =>
        typeof row === 'object' &&
        row !== null &&
        typeof (row as MarketplaceCartLine).jewellerId === 'string' &&
        typeof (row as MarketplaceCartLine).productId === 'string' &&
        typeof (row as MarketplaceCartLine).qty === 'number',
    )
  } catch {
    return []
  }
}

function readCart(): MarketplaceCartLine[] {
  if (typeof sessionStorage === 'undefined') return []
  return parseStored(sessionStorage.getItem(STORAGE_KEY))
}

function writeCart(lines: MarketplaceCartLine[]): void {
  if (typeof sessionStorage === 'undefined') return
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
}

let memoryCart: MarketplaceCartLine[] = readCart()
const listeners = new Set<() => void>()

function emit(): void {
  for (const cb of listeners) cb()
}

function setCart(lines: MarketplaceCartLine[]): void {
  memoryCart = lines
  writeCart(lines)
  emit()
}

function subscribe(cb: () => void): () => void {
  listeners.add(cb)
  return () => listeners.delete(cb)
}

function getSnapshot(): MarketplaceCartLine[] {
  return memoryCart
}

function getServerSnapshot(): MarketplaceCartLine[] {
  return []
}

type MarketplaceCartContextValue = {
  lines: MarketplaceCartLine[]
  itemCount: number
  subtotalInr: number
  addItem: (input: Omit<MarketplaceCartLine, 'qty'> & { qty?: number }) => void
  setQty: (jewellerId: string, productId: string, qty: number) => void
  removeItem: (jewellerId: string, productId: string) => void
  clearCart: () => void
}

const MarketplaceCartContext = createContext<MarketplaceCartContextValue | null>(null)

export function MarketplaceCartProvider({ children }: { children: ReactNode }) {
  const lines = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const itemCount = useMemo(() => lines.reduce((n, l) => n + l.qty, 0), [lines])

  const subtotalInr = useMemo(
    () => lines.reduce((sum, l) => sum + l.indicativeFromInr * l.qty, 0),
    [lines],
  )

  const addItem = useCallback((input: Omit<MarketplaceCartLine, 'qty'> & { qty?: number }) => {
    const qty = Math.min(99, Math.max(1, Math.floor(input.qty ?? 1)))
    const key = cartKey(input)
    const next = [...memoryCart]
    const idx = next.findIndex((l) => cartKey(l) === key)
    if (idx >= 0) {
      const merged = Math.min(99, next[idx]!.qty + qty)
      next[idx] = { ...next[idx]!, qty: merged }
    } else {
      next.push({
        jewellerId: input.jewellerId,
        jewellerName: input.jewellerName,
        productId: input.productId,
        productName: input.productName,
        category: input.category,
        purity: input.purity,
        indicativeFromInr: input.indicativeFromInr,
        qty,
      })
    }
    setCart(next)
  }, [])

  const setQty = useCallback((jewellerId: string, productId: string, qty: number) => {
    const q = Math.floor(qty)
    if (q <= 0) {
      setCart(memoryCart.filter((l) => !(l.jewellerId === jewellerId && l.productId === productId)))
      return
    }
    const capped = Math.min(99, q)
    setCart(
      memoryCart.map((l) =>
        l.jewellerId === jewellerId && l.productId === productId ? { ...l, qty: capped } : l,
      ),
    )
  }, [])

  const removeItem = useCallback((jewellerId: string, productId: string) => {
    setCart(memoryCart.filter((l) => !(l.jewellerId === jewellerId && l.productId === productId)))
  }, [])

  const clearCart = useCallback(() => setCart([]), [])

  const value = useMemo(
    () => ({
      lines,
      itemCount,
      subtotalInr,
      addItem,
      setQty,
      removeItem,
      clearCart,
    }),
    [lines, itemCount, subtotalInr, addItem, setQty, removeItem, clearCart],
  )

  return <MarketplaceCartContext.Provider value={value}>{children}</MarketplaceCartContext.Provider>
}

export function useMarketplaceCart(): MarketplaceCartContextValue {
  const ctx = useContext(MarketplaceCartContext)
  if (!ctx) {
    throw new Error('useMarketplaceCart must be used within MarketplaceCartProvider')
  }
  return ctx
}
