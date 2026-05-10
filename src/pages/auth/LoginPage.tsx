import { type FormEvent, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import type { UserRole } from '../../auth/AuthContext'
import { useAuth } from '../../auth/AuthContext'

export function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const nextRaw = params.get('next')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<UserRole>('consumer')

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    login({
      email,
      password,
      role,
      shopName: role !== 'consumer' ? 'Demo Jewellers' : undefined,
    })
    if (nextRaw && nextRaw.startsWith('/')) {
      navigate(nextRaw, { replace: true })
      return
    }
    navigate(role === 'consumer' ? '/app' : '/merchant', { replace: true })
  }

  return (
    <div className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-4 py-16">
      <Link to="/" className="mb-8 text-center font-display text-2xl font-semibold text-cridora-gold-light">
        Cridora
      </Link>
      <div className="ui-card p-8">
        <h1 className="font-display text-2xl font-semibold text-cridora-text">Sign in</h1>
        <p className="mt-2 text-sm text-cridora-muted">Demo login — no server validation yet.</p>
        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <div>
            <label htmlFor="login-email" className="text-xs font-medium text-cridora-muted">
              Email
            </label>
            <input
              id="login-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="ui-input mt-1"
            />
          </div>
          <div>
            <label htmlFor="login-password" className="text-xs font-medium text-cridora-muted">
              Password
            </label>
            <input
              id="login-password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="ui-input mt-1"
            />
          </div>
          <fieldset>
            <legend className="text-xs font-medium text-cridora-muted">Account type</legend>
            <div className="mt-2 flex flex-wrap gap-3">
              <label className="flex cursor-pointer items-center gap-2 text-sm text-cridora-text">
                <input
                  type="radio"
                  name="role"
                  checked={role === 'consumer'}
                  onChange={() => setRole('consumer')}
                  className="accent-cridora-gold"
                />
                Saver
              </label>
              <label className="flex cursor-pointer items-center gap-2 text-sm text-cridora-text">
                <input
                  type="radio"
                  name="role"
                  checked={role === 'merchant_admin'}
                  onChange={() => setRole('merchant_admin')}
                  className="accent-cridora-gold"
                />
                Jeweller (admin demo)
              </label>
              <label className="flex cursor-pointer items-center gap-2 text-sm text-cridora-text">
                <input
                  type="radio"
                  name="role"
                  checked={role === 'merchant_staff'}
                  onChange={() => setRole('merchant_staff')}
                  className="accent-cridora-gold"
                />
                Jeweller staff
              </label>
            </div>
          </fieldset>
          <button type="submit" className="ui-btn-primary mt-2 min-h-12 w-full justify-center text-sm">
            Continue
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-cridora-muted">
          <Link to="/auth/forgot" className="text-cridora-gold-light hover:underline">
            Forgot password
          </Link>
          {' · '}
          <Link to="/auth/signup" className="text-cridora-gold-light hover:underline">
            Create account
          </Link>
        </p>
        <p className="mt-4 text-center text-xs text-cridora-muted">
          <Link to="/" className="hover:text-cridora-text">
            ← Public site
          </Link>
        </p>
      </div>
    </div>
  )
}
