import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/features/auth/AuthContext'

type DemoKey = 'saver' | 'jeweller' | 'admin'

const demos: { key: DemoKey; title: string; body: string }[] = [
  {
    key: 'saver',
    title: 'Saver app',
    body: 'Consumer home, portfolio shortcuts, and quick actions (demo data).',
  },
  {
    key: 'jeweller',
    title: 'Jeweller workspace',
    body: 'Queue, customers, settlements — merchant dashboard (demo data).',
  },
  {
    key: 'admin',
    title: 'Cridora admin',
    body: 'Network overview, settlements, jewellers, KYC queue (demo data).',
  },
]

const DEMO_PASSWORD = 'CridoraDemo2026!'

export function DemoGatewaysPage() {
  const { login, logout, session, usesApi } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function openDemo(key: DemoKey) {
    setError('')
    setBusy(true)
    logout()

    if (usesApi) {
      const email =
        key === 'saver'
          ? 'saver@cridora.test'
          : key === 'jeweller'
            ? 'jeweller@cridora.test'
            : 'ops@cridora.test'
      const role =
        key === 'saver'
          ? ('consumer' as const)
          : key === 'jeweller'
            ? ('merchant_admin' as const)
            : ('admin' as const)
      const result = await login({ email, password: DEMO_PASSWORD, role })
      setBusy(false)
      if (!result.ok) {
        setError(
          result.error +
            ' — Run: cd backend && python manage.py seed_demo_accounts — and keep the API running.',
        )
        return
      }
      const path = key === 'saver' ? '/app' : key === 'jeweller' ? '/merchant' : '/admin'
      navigate(path, { replace: true })
      return
    }

    let ok: Awaited<ReturnType<typeof login>> = { ok: false, error: 'Unknown' }
    if (key === 'saver') {
      ok = await login({
        email: 'demo.saver@cridora.test',
        password: 'demo',
        role: 'consumer',
        displayName: 'Demo Saver',
        phone: '9999999999',
        city: 'Bengaluru',
      })
    } else if (key === 'jeweller') {
      ok = await login({
        email: 'demo.jeweller@cridora.test',
        password: 'demo',
        role: 'merchant_admin',
        displayName: 'Demo Store Owner',
        shopName: 'Demo Jewellers — Hyderabad',
        phone: '9888888888',
        city: 'Hyderabad',
      })
    } else {
      ok = await login({
        email: 'demo.admin@cridora.test',
        password: 'demo',
        role: 'admin',
        displayName: 'Demo Ops Admin',
        city: 'Mumbai',
      })
    }
    setBusy(false)
    if (!ok.ok) {
      setError(
        'Could not write a demo session. Turn off strict blocking of storage/cookies for this site, or try another browser profile.',
      )
      return
    }
    const path = key === 'saver' ? '/app' : key === 'jeweller' ? '/merchant' : '/admin'
    navigate(path, { replace: true })
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <header className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cridora-gold">Demo</p>
        <h1 className="font-display mt-6 text-3xl font-semibold tracking-tight text-cridora-text sm:text-4xl">
          Open a dashboard in one click
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-cridora-muted sm:text-base">
          {usesApi
            ? 'API mode: uses seeded test accounts from the Django backend (see /auth/login for emails).'
            : 'Offline demo: a browser session is saved so you can click through the UI.'}
        </p>
        {session ? (
          <p className="mx-auto mt-4 max-w-xl text-xs text-cridora-muted">
            You are signed in as <strong className="text-cridora-text">{session.displayName}</strong> (
            {session.role}). Opening a demo below will replace that session.
          </p>
        ) : null}
      </header>

      {error ? (
        <p
          className="mx-auto mt-8 max-w-xl rounded-xl border border-cridora-error/40 bg-cridora-error/10 px-4 py-3 text-center text-sm text-cridora-error"
          role="alert"
        >
          {error}
        </p>
      ) : null}

      <ul className="mt-12 grid gap-4 sm:grid-cols-1">
        {demos.map((d) => (
          <li key={d.key} className="ui-card motion-reduce:hover:translate-y-0">
            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-display text-xl font-semibold text-cridora-text">{d.title}</h2>
                <p className="mt-2 text-sm text-cridora-muted">{d.body}</p>
              </div>
              <button
                type="button"
                disabled={busy}
                onClick={() => void openDemo(d.key)}
                className="ui-btn-primary min-h-12 shrink-0 justify-center px-6 text-sm disabled:opacity-60 sm:min-w-[10rem]"
              >
                {busy ? 'Opening…' : 'Open'}
              </button>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-12 text-center text-sm text-cridora-muted">
        Prefer a form?{' '}
        <Link to="/auth/login" className="text-cridora-gold-light hover:underline">
          Sign in
        </Link>{' '}
        or{' '}
        <Link to="/auth/signup" className="text-cridora-gold-light hover:underline">
          Create account
        </Link>
        .
      </p>
    </div>
  )
}
