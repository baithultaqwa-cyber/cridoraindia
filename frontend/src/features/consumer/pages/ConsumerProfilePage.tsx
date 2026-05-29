import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/features/auth/AuthContext'
import { cridoraUserIdFromEmail } from '@/features/consumer/lib/cridora-user-id'
import { getDefaultJewellerId } from '@/features/consumer/lib/default-jeweller'
import { NETWORK_JEWELLERS_DEMO } from '@/shared/data/network-jewellers-demo'

export function ConsumerProfilePage() {
  const { session, logout } = useAuth()
  const navigate = useNavigate()
  const cridoraId = cridoraUserIdFromEmail(session?.email)
  const defId = getDefaultJewellerId()
  const defName = defId ? NETWORK_JEWELLERS_DEMO.find((j) => j.id === defId)?.name : null

  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-semibold text-cridora-text">Profile</h1>

      <div className="ui-card space-y-3 p-6 text-sm">
        <div className="rounded-xl border border-cridora-gold/20 bg-cridora-gold/10 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-cridora-gold">Your Cridora ID</p>
          <p className="mt-1 font-mono text-lg font-bold text-cridora-text">{cridoraId}</p>
          <p className="mt-2 text-xs text-cridora-muted">Share this ID to receive gram transfers after the recipient verifies you.</p>
        </div>
        {defName ? (
          <p>
            <span className="text-cridora-muted">Default jeweller</span>
            <br />
            <span className="font-medium text-cridora-text">{defName}</span>{' '}
            <Link to="/app/jewellers" className="text-xs font-medium text-cridora-gold-light hover:underline">
              Change
            </Link>
          </p>
        ) : null}
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
        {session?.phone ? (
          <p>
            <span className="text-cridora-muted">Mobile</span>
            <br />
            <span className="font-medium text-cridora-text">{session.phone}</span>
          </p>
        ) : null}
        {session?.city ? (
          <p>
            <span className="text-cridora-muted">City</span>
            <br />
            <span className="font-medium text-cridora-text">{session.city}</span>
          </p>
        ) : null}
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
