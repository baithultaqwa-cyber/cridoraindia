import { Navigate } from 'react-router-dom'
import { useAuth } from '../../auth/AuthContext'

export function MerchantStaffPage() {
  const { session } = useAuth()

  if (session?.role !== 'merchant_admin') {
    return <Navigate to="/merchant" replace />
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-serif font-semibold text-cridora-navy">Staff &amp; roles</h2>
      <p className="text-sm text-cridora-muted">
        Invite counter staff, assign maker-checker limits, and revoke devices. Admin only.
      </p>
      <div className="rounded-2xl border border-cridora-sand/80 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-cridora-navy">Team (demo)</p>
        <ul className="mt-3 space-y-2 text-sm text-cridora-muted">
          <li className="flex justify-between gap-2">
            <span>you@merchant.com</span>
            <span className="text-cridora-navy">Admin</span>
          </li>
          <li className="flex justify-between gap-2">
            <span>counter1@merchant.com</span>
            <span className="text-cridora-navy">Staff</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
