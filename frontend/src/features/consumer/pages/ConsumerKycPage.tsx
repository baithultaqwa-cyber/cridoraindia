import { Link } from 'react-router-dom'
import { useAuth } from '@/features/auth/AuthContext'

export function ConsumerKycPage() {
  const { session } = useAuth()

  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-semibold text-cridora-text">KYC</h1>
      <div className="ui-card p-6">
        <p className="text-sm text-cridora-muted">Status</p>
        <p className="mt-1 text-lg font-semibold capitalize text-cridora-text">{session?.kycStatus}</p>
        <p className="mt-4 text-sm text-cridora-muted">
          Document upload, verification states, and limits will connect to your KYC provider and Django.
        </p>
        <button type="button" className="ui-btn-primary mt-6 min-h-12 text-sm">
          Continue verification (demo)
        </button>
      </div>
      <Link to="/app/profile" className="text-sm text-cridora-gold-light hover:underline">
        ← Profile
      </Link>
    </div>
  )
}
