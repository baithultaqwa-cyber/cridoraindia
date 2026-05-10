import { type FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../auth/AuthContext'

type Tab = 'consumer' | 'jeweller'

export function SignupPage() {
  const { signupConsumer, signupMerchant } = useAuth()
  const navigate = useNavigate()
  const [tab, setTab] = useState<Tab>('consumer')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [shopName, setShopName] = useState('')
  const [asAdmin, setAsAdmin] = useState(true)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim() || !password || !displayName.trim()) return
    if (tab === 'consumer') {
      signupConsumer({ email, password, displayName: displayName.trim() })
      navigate('/app', { replace: true })
    } else {
      if (!shopName.trim()) return
      signupMerchant({
        email,
        password,
        displayName: displayName.trim(),
        shopName: shopName.trim(),
        asAdmin,
      })
      navigate('/merchant', { replace: true })
    }
  }

  return (
    <div className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-4 py-16">
      <Link to="/" className="mb-8 text-center font-display text-2xl font-semibold text-cridora-gold-light">
        Cridora
      </Link>
      <div className="ui-card p-8">
        <h1 className="font-display text-2xl font-semibold text-cridora-text">Create account</h1>
        <p className="mt-2 text-sm text-cridora-muted">Pilot signup UI — connect to Django when ready.</p>

        <div className="mt-6 flex rounded-2xl border border-silk/15 p-1">
          <button
            type="button"
            className={`flex-1 rounded-xl py-2 text-sm font-medium transition-colors ${
              tab === 'consumer' ? 'bg-navy-shine text-cridora-text' : 'text-cridora-muted'
            }`}
            onClick={() => setTab('consumer')}
          >
            Saver
          </button>
          <button
            type="button"
            className={`flex-1 rounded-xl py-2 text-sm font-medium transition-colors ${
              tab === 'jeweller' ? 'bg-navy-shine text-cridora-text' : 'text-cridora-muted'
            }`}
            onClick={() => setTab('jeweller')}
          >
            Jeweller
          </button>
        </div>

        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <div>
            <label htmlFor="su-name" className="text-xs font-medium text-cridora-muted">
              Full name
            </label>
            <input
              id="su-name"
              required
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="ui-input mt-1"
            />
          </div>
          {tab === 'jeweller' ? (
            <div>
              <label htmlFor="su-shop" className="text-xs font-medium text-cridora-muted">
                Shop name
              </label>
              <input
                id="su-shop"
                required
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
                className="ui-input mt-1"
              />
            </div>
          ) : null}
          <div>
            <label htmlFor="su-email" className="text-xs font-medium text-cridora-muted">
              Email
            </label>
            <input
              id="su-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="ui-input mt-1"
            />
          </div>
          <div>
            <label htmlFor="su-password" className="text-xs font-medium text-cridora-muted">
              Password
            </label>
            <input
              id="su-password"
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="ui-input mt-1"
            />
          </div>
          {tab === 'jeweller' ? (
            <label className="flex cursor-pointer items-center gap-2 text-sm text-cridora-text">
              <input
                type="checkbox"
                checked={asAdmin}
                onChange={(e) => setAsAdmin(e.target.checked)}
                className="accent-cridora-gold"
              />
              This account is store owner / admin
            </label>
          ) : null}
          <button type="submit" className="ui-btn-primary min-h-12 w-full justify-center text-sm">
            Create account
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-cridora-muted">
          Already have an account?{' '}
          <Link to="/auth/login" className="text-cridora-gold-light hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
