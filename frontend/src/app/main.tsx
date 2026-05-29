import { createRoot } from 'react-dom/client'
import { AuthProvider } from '@/features/auth/AuthContext'
import { ErrorBoundary } from '@/shared/components/ErrorBoundary'
import '@/shared/styles/index.css'
import App from '@/app/App.tsx'

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ErrorBoundary>,
)
