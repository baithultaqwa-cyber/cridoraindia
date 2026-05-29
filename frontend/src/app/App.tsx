import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from '@/app/router.tsx'

export default function App() {
  const base = import.meta.env.BASE_URL
  const basename = base === '/' ? undefined : base.replace(/\/$/, '')

  return (
    <BrowserRouter basename={basename}>
      <AppRoutes />
    </BrowserRouter>
  )
}
