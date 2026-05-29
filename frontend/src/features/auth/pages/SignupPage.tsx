import { type FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/features/auth/AuthContext'
import { AuthBrandedShell } from '@/shared/components/AuthBrandedShell'

type Tab = 'consumer' | 'jeweller'

function digitsOnly(s: string): string {
  return s.replace(/\D/g, '')
}

export function SignupPage() {
  const { signupConsumer, signupMerchant, usesApi } = useAuth()
  const navigate = useNavigate()
  const [tab, setTab] = useState<Tab>('consumer')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [shopName, setShopName] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [asAdmin, setAsAdmin] = useState(true)
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [formError, setFormError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setFormError('')

    if (!displayName.trim()) {
      setFormError('Enter your full name.')
      return
    }
    if (!email.trim()) {
      setFormError('Enter a valid email.')
      return
    }
    if (password.length < 8) {
      setFormError('Password must be at least 8 characters.')
      return
    }
    if (password !== confirmPassword) {
      setFormError('Passwords do not match.')
      return
    }
    const phoneDigits = digitsOnly(phone)
    if (phoneDigits.length < 10) {
      setFormError('Enter a 10-digit mobile number.')
      return
    }
    if (!city.trim()) {
      setFormError('Enter your city.')
      return
    }
    if (!acceptedTerms) {
      setFormError('Accept the terms to continue.')
      return
    }

    if (tab === 'consumer') {
      setSubmitting(true)
      const res = await signupConsumer({
        email: email.trim(),
        password,
        displayName: displayName.trim(),
        phone: phoneDigits,
        city: city.trim(),
      })
      setSubmitting(false)
      if (!res.ok) {
        setFormError(res.error)
        return
      }
      navigate('/app', { replace: true })
      return
    }

    if (!shopName.trim()) {
      setFormError('Enter your shop name.')
      return
    }
    setSubmitting(true)
    const res = await signupMerchant({
      email: email.trim(),
      password,
      displayName: displayName.trim(),
      shopName: shopName.trim(),
      phone: phoneDigits,
      city: city.trim(),
      asAdmin,
    })
    setSubmitting(false)
    if (!res.ok) {
      setFormError(res.error)
      return
    }
    navigate('/merchant', { replace: true })
  }

  return (
    <AuthBrandedShell
      title="Create account"
      subtitle={
        usesApi
          ? 'Creates a real account on the API (same look as demo when the server is off).'
          : 'Savers and jewellers — local demo session only. Cridora platform admin stays invite-only.'
      }
      footer={
        <p className="mt-6 text-center text-xs text-cridora-muted">
          <Link to="/" className="hover:text-cridora-text">
            ← Back to public site
          </Link>
        </p>
      }
    >
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

      <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
        {formError ? (
          <p className="rounded-xl border border-cridora-error/40 bg-cridora-error/10 px-4 py-3 text-sm text-cridora-error">
            {formError}
          </p>
        ) : null}

        <div>
          <label htmlFor="su-name" className="text-xs font-medium text-cridora-muted">
            Full name
          </label>
          <input
            id="su-name"
            name="name"
            autoComplete="name"
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
              name="organization"
              autoComplete="organization"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              className="ui-input mt-1"
            />
          </div>
        ) : null}

        <div>
          <label htmlFor="su-phone" className="text-xs font-medium text-cridora-muted">
            Mobile number
          </label>
          <input
            id="su-phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="10-digit mobile"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="ui-input mt-1"
          />
        </div>

        <div>
          <label htmlFor="su-city" className="text-xs font-medium text-cridora-muted">
            City
          </label>
          <input
            id="su-city"
            name="city"
            autoComplete="address-level2"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="ui-input mt-1"
          />
        </div>

        <div>
          <label htmlFor="su-email" className="text-xs font-medium text-cridora-muted">
            Email
          </label>
          <input
            id="su-email"
            name="email"
            type="email"
            autoComplete="email"
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
            name="password"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="ui-input mt-1"
          />
          <p className="mt-1 text-[0.7rem] text-cridora-muted">Minimum 8 characters.</p>
        </div>

        <div>
          <label htmlFor="su-confirm" className="text-xs font-medium text-cridora-muted">
            Confirm password
          </label>
          <input
            id="su-confirm"
            name="confirm-password"
            type="password"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="ui-input mt-1"
          />
        </div>

        {tab === 'jeweller' ? (
          <label className="flex cursor-pointer items-start gap-2 text-sm text-cridora-text">
            <input
              type="checkbox"
              checked={asAdmin}
              onChange={(e) => setAsAdmin(e.target.checked)}
              className="accent-cridora-gold"
            />
            <span>I am the store owner or admin creating this workspace</span>
          </label>
        ) : null}

        <label className="flex cursor-pointer items-start gap-2 text-sm text-cridora-muted">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            className="accent-cridora-gold"
          />
          <span>
            I agree to the{' '}
            <Link to="/legal/terms" className="text-cridora-gold-light hover:underline" target="_blank">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/legal/privacy" className="text-cridora-gold-light hover:underline" target="_blank">
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        <button type="submit" disabled={submitting} className="ui-btn-primary min-h-12 w-full justify-center text-sm disabled:opacity-60">
          {submitting ? 'Creating…' : 'Create account'}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-cridora-muted">
        Already have an account?{' '}
        <Link to="/auth/login" className="text-cridora-gold-light hover:underline">
          Sign in
        </Link>
      </p>
    </AuthBrandedShell>
  )
}
