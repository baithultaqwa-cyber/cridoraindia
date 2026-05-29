import { type FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthBrandedShell } from '@/shared/components/AuthBrandedShell'

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [formError, setFormError] = useState('')

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setFormError('')
    if (!email.trim()) {
      setFormError('Enter the email for your account.')
      return
    }
    setDone(true)
  }

  return (
    <AuthBrandedShell
      title="Reset password"
      subtitle="We’ll email a reset link when outbound mail is connected."
      footer={
        <p className="mt-6 text-center text-xs text-cridora-muted">
          <Link to="/" className="hover:text-cridora-text">
            ← Back to public site
          </Link>
        </p>
      }
    >
      {done ? (
        <p className="mt-6 text-sm leading-relaxed text-cridora-muted" role="status">
          If an account exists for <strong className="font-medium text-cridora-text">{email.trim()}</strong>,
          you’ll receive instructions shortly. This step is a demo placeholder.
        </p>
      ) : (
        <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
          {formError ? (
            <p className="rounded-xl border border-cridora-error/40 bg-cridora-error/10 px-4 py-3 text-sm text-cridora-error">
              {formError}
            </p>
          ) : null}
          <div>
            <label htmlFor="fp-email" className="text-xs font-medium text-cridora-muted">
              Email
            </label>
            <input
              id="fp-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="ui-input mt-1"
            />
          </div>
          <button type="submit" className="ui-btn-primary min-h-12 w-full justify-center text-sm">
            Send reset link
          </button>
        </form>
      )}
      <p className="mt-6 text-center text-sm">
        <Link to="/auth/login" className="text-cridora-gold-light hover:underline">
          Back to sign in
        </Link>
      </p>
    </AuthBrandedShell>
  )
}
