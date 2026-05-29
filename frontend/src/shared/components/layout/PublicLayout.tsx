import { Outlet } from 'react-router-dom'
import { GoldRateTicker } from '@/shared/components/marketing/GoldRateTicker'
import { Footer } from './Footer'
import { Header } from './Header'

export function PublicLayout() {
  return (
    <div className="flex min-h-svh min-w-0 flex-col overflow-x-hidden">
      <Header />
      <GoldRateTicker />
      <main className="min-w-0 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
