import { Navigate } from 'react-router-dom'
import { useAuth } from '@/features/auth/AuthContext'

export function MerchantStaffPage() {
  const { session } = useAuth()

  if (session?.role !== 'merchant_admin') {
    return <Navigate to="/merchant" replace />
  }

  return (
    <div className="space-y-4">
      <h1 className="font-display text-2xl font-semibold text-cridora-text">Staff</h1>
      <p className="text-sm text-cridora-muted">Invite counter staff and manage roles. Admin only.</p>
      <div className="rounded-2xl border border-silk/15 bg-navy-silk/50 p-5">
        <p className="text-sm font-medium text-cridora-text">Team (demo)</p>
        <ul className="mt-3 space-y-2 text-sm text-cridora-muted">
          <li className="flex justify-between gap-2 border-b border-silk/10 pb-2">
            <span className="text-cridora-text">you@merchant.com</span>
            <span className="font-medium text-cridora-gold-light">Admin</span>
          </li>
          <li className="flex justify-between gap-2 pt-1">
            <span className="text-cridora-text">counter1@merchant.com</span>
            <span className="font-medium text-cridora-gold-light">Staff</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
