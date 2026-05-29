import { type FormEvent, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import type { UserRole } from '@/features/auth/AuthContext'
import { useAuth } from '@/features/auth/AuthContext'
import { AuthBrandedShell } from '@/shared/components/AuthBrandedShell'

const roleTabs: { id: UserRole; label: string; hint: string }[] = [
  { id: 'consumer', label: 'Saver', hint: 'Buy, redeem, transfer' },
  { id: 'merchant_admin', label: 'Jeweller', hint: 'Store admin' },
  { id: 'merchant_staff', label: 'Jeweller staff', hint: 'Counter access' },
  { id: 'admin', label: 'Cridora admin', hint: 'Operations console' },
]

function nextPathForRole(role: UserRole): string {
  if (role === 'consumer') return '/app'
  if (role === 'admin') return '/admin'
  return '/merchant'
}

const SEED_HINT =
  'Seeded test accounts (when the API is running): saver@, jeweller@, counter@, ops@, django_admin@ — all @cridora.test, password CridoraDemo2026!'

export function LoginPage() {
  const { login, usesApi } = useAuth()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const nextRaw = params.get('next')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<UserRole>('consumer')
  const [showPassword, setShowPassword] = useState(false)
  const [formError, setFormError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setFormError('')
    const eTrim = email.trim()
    if (!eTrim) {
      setFormError('Enter your email address.')
      return
    }
    if (!password) {
      setFormError('Enter your password.')
      return
    }

    setSubmitting(true)
    const result = await login({
      email: eTrim,
      password,
      role,
      shopName: role === 'merchant_admin' || role === 'merchant_staff' ? 'Demo Jewellers' : undefined,
    })
    setSubmitting(false)

    if (!result.ok) {
      setFormError(result.error)
      return
    }

    if (nextRaw && nextRaw.startsWith('/') && !nextRaw.startsWith('//')) {
      navigate(nextRaw, { replace: true })
      return
    }
    navigate(nextPathForRole(role), { replace: true })
  }

  return (
    <AuthBrandedShell
      title="Sign in"
      subtitle={
        usesApi
          ? 'Your email, password, and account type must match your Cridora profile (API-backed).'
          : 'Demo mode — session is stored only in this browser until you connect the API.'
      }
      footer={
        <p className="mt-6 text-center text-xs text-cridora-muted">
          <Link to="/" className="hover:text-cridora-text">
            ← Back to public site
          </Link>
        </p>
      }
    >
      <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
        {usesApi ? (
          <p className="rounded-xl border border-silk/15 bg-navy-silk/40 px-4 py-3 text-xs leading-relaxed text-cridora-muted">
            {SEED_HINT} For Django’s built-in admin UI, open{' '}
            <a
              href="http://127.0.0.1:8000/admin/"
              target="_blank"
              rel="noreferrer"
              className="text-cridora-gold-light underline"
            >
              http://127.0.0.1:8000/admin/
            </a>{' '}
            and sign in as <strong className="text-cridora-text">django_admin@cridora.test</strong> (same password).
          </p>
        ) : null}
        {formError ? (
          <p className="rounded-xl border border-cridora-error/40 bg-cridora-error/10 px-4 py-3 text-sm text-cridora-error">
            {formError}
          </p>
        ) : null}
        <div>
          <label htmlFor="login-email" className="text-xs font-medium text-cridora-muted">
            Email
          </label>
          <input
            id="login-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="ui-input mt-1"
          />
        </div>
        <div>
          <div className="flex items-center justify-between gap-2">
            <label htmlFor="login-password" className="text-xs font-medium text-cridora-muted">
              Password
            </label>
            <button
              type="button"
              className="text-xs font-medium text-cridora-gold-light hover:underline"
              onClick={() => setShowPassword((v) => !v)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <input
            id="login-password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="ui-input mt-1"
          />
        </div>

        <fieldset>
          <legend className="text-xs font-medium text-cridora-muted">Account type</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {roleTabs.map((t) => (
              <label
                key={t.id}
                className={`flex cursor-pointer flex-col rounded-2xl border px-3 py-2.5 text-left transition-colors ${
                  role === t.id
                    ? 'border-cridora-gold/50 bg-navy-shine/50'
                    : 'border-cridora-border hover:border-silk/30'
                }`}
              >
                <span className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    checked={role === t.id}
                    onChange={() => setRole(t.id)}
                    className="accent-cridora-gold"
                  />
                  <span className="text-sm font-medium text-cridora-text">{t.label}</span>
                </span>
                <span className="mt-0.5 pl-6 text-[0.7rem] text-cridora-muted">{t.hint}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <button
          type="submit"
          disabled={submitting}
          className="ui-btn-primary min-h-12 w-full justify-center text-sm disabled:opacity-60"
        >
          {submitting ? 'Signing in…' : 'Continue'}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-cridora-muted">
        <Link to="/demo" className="text-cridora-gold-light hover:underline">
          Quick demo dashboards
        </Link>
        {' · '}
        <Link to="/auth/forgot" className="text-cridora-gold-light hover:underline">
          Forgot password
        </Link>
        {' · '}
        <Link to="/auth/signup" className="text-cridora-gold-light hover:underline">
          Create account
        </Link>
      </p>
    </AuthBrandedShell>
  )
}
