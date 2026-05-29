import { useEffect, useState } from 'react'
import { DEMO_SPOT_INR_PER_GRAM } from '@/shared/lib/demo-gold-rate'

const FLOOR = 6980
const CEIL = 7280

export function useDemoLiveSpot(pollMs = 12000) {
  const [ratePerGram, setRatePerGram] = useState(DEMO_SPOT_INR_PER_GRAM)
  const [lastUpdated, setLastUpdated] = useState(() => Date.now())

  useEffect(() => {
    const tick = () => {
      setRatePerGram((r) => {
        const n = Math.round(r + (Math.random() - 0.5) * 6)
        return Math.min(CEIL, Math.max(FLOOR, n))
      })
      setLastUpdated(Date.now())
    }
    const id = window.setInterval(tick, pollMs)
    return () => window.clearInterval(id)
  }, [pollMs])

  return { ratePerGram, lastUpdated }
}
