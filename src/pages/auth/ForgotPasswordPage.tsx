import { type FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setDone(true)
  }

  return (
    <div className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-4 py-16">
      <Link to="/" className="mb-8 text-center font-display text-2xl font-semibold text-cridora-gold-light">
        Cridora
      </Link>
      <div className="ui-card p-8">
        <h1 className="font-display text-2xl font-semibold text-cridora-text">Reset password</h1>
        {done ? (
          <p className="mt-4 text-sm text-cridora-muted" role="status">
            If an account exists for this email, you’ll receive instructions once email delivery is
            connected. (Demo placeholder.)
          </p>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={onSubmit}>
            <div>
              <label htmlFor="fp-email" className="text-xs font-medium text-cridora-muted">
                Email
              </label>
              <input
                id="fp-email"
                type="email"
                required
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
      </div>
    </div>
  )
}
