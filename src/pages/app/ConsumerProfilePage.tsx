import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../auth/AuthContext'

export function ConsumerProfilePage() {
  const { session, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-semibold text-cridora-text">Profile</h1>
      <div className="ui-card space-y-3 p-6 text-sm">
        <p>
          <span className="text-cridora-muted">Name</span>
          <br />
          <span className="font-medium text-cridora-text">{session?.displayName}</span>
        </p>
        <p>
          <span className="text-cridora-muted">Email</span>
          <br />
          <span className="font-medium text-cridora-text">{session?.email}</span>
        </p>
      </div>
      <nav className="flex flex-col gap-2">
        <Link to="/app/kyc" className="ui-card block p-4 text-sm font-medium text-cridora-text">
          KYC & limits →
        </Link>
        <Link to="/app/support" className="ui-card block p-4 text-sm font-medium text-cridora-text">
          Support →
        </Link>
      </nav>
      <button
        type="button"
        onClick={() => {
          logout()
          navigate('/')
        }}
        className="text-sm font-medium text-cridora-error hover:underline"
      >
        Sign out
      </button>
    </div>
  )
}
