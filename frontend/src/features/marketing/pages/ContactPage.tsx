import { useState, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ExternalOrContactCta } from '@/shared/components/marketing/ExternalOrContactCta'

const topicHint: Record<string, string> = {
  'user-waitlist': 'You’re on the user waitlist path — use the Google Form when configured, or send a note below.',
  jeweller: 'Jeweller partnership — we’ll route you to the partner form or follow up from your message.',
  investor: 'Investor relations — optional form plus secure follow-up.',
  media: 'Media — share your outlet, deadline, and angle in the form below.',
}

export function ContactPage() {
  const [params] = useSearchParams()
  const topic = params.get('topic') ?? ''
  const hint = topic && topicHint[topic]

  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cridora-gold">Contact</p>
        <h1 className="font-display mt-6 text-4xl font-semibold tracking-tight text-cridora-text sm:text-5xl">
          We’re here to talk
        </h1>
        <p className="mt-6 text-base leading-relaxed text-cridora-muted sm:text-lg">
          General questions, jeweller partnerships, investors, and media — pick a lane, or write freely.
        </p>
      </header>

      {hint ? (
        <p
          className="mx-auto mt-8 max-w-2xl rounded-2xl border border-cridora-gold/25 bg-navy-silk/45 px-5 py-4 text-center text-sm text-cridora-muted"
          role="status"
        >
          {hint}
        </p>
      ) : null}

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        <div className="ui-card p-6">
          <h2 className="font-display text-lg font-semibold text-cridora-text">General enquiries</h2>
          <p className="mt-2 text-sm text-cridora-muted">Product questions, pilots, and regional interest.</p>
          <a href="#contact-form" className="ui-btn-secondary mt-6 inline-flex min-h-11 px-5 text-sm">
            Use the form below
          </a>
        </div>
        <div className="ui-card p-6">
          <h2 className="font-display text-lg font-semibold text-cridora-text">Jeweller partnerships</h2>
          <p className="mt-2 text-sm text-cridora-muted">Stores, chains, and buying groups exploring the network.</p>
          <ExternalOrContactCta
            urlKey="jewellerNetwork"
            className="ui-btn-primary mt-6 inline-flex min-h-11 px-5 text-sm"
            fallbackTo="/contact?topic=jeweller"
          >
            Partner form
          </ExternalOrContactCta>
        </div>
        <div className="ui-card p-6">
          <h2 className="font-display text-lg font-semibold text-cridora-text">Investor relations</h2>
          <p className="mt-2 text-sm text-cridora-muted">Funds, strategics, and angels focused on India fintech.</p>
          <ExternalOrContactCta
            urlKey="investorRelations"
            className="ui-btn-primary mt-6 inline-flex min-h-11 px-5 text-sm"
            fallbackTo="/contact?topic=investor"
          >
            Investor form
          </ExternalOrContactCta>
        </div>
        <div className="ui-card p-6">
          <h2 className="font-display text-lg font-semibold text-cridora-text">Media enquiries</h2>
          <p className="mt-2 text-sm text-cridora-muted">Press, podcasts, and event briefings.</p>
          <a href="#contact-form" className="ui-btn-secondary mt-6 inline-flex min-h-11 px-5 text-sm">
            Message the team
          </a>
        </div>
      </div>

      <div id="contact-form" className="mx-auto mt-16 max-w-lg scroll-mt-28">
        {sent ? (
          <p
            className="ui-card border-cridora-success/35 p-8 text-center text-sm leading-relaxed text-cridora-text"
            role="status"
          >
            Thanks — connect this form to your backend or inbox when you go live.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="ui-card p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-cridora-text">Quick message</h2>
            <p className="mt-2 text-sm text-cridora-muted">Name, email, and how we can help — we’ll respond from the right workstream.</p>
            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-medium text-cridora-muted">
                  Name
                </label>
                <input id="contact-name" name="name" required className="ui-input mt-1.5" />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-medium text-cridora-muted">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="ui-input mt-1.5"
                />
              </div>
              <div>
                <label htmlFor="contact-topic" className="block text-xs font-medium text-cridora-muted">
                  Topic
                </label>
                <select id="contact-topic" name="topic" className="ui-input mt-1.5" defaultValue={topic || 'general'}>
                  <option value="general">General</option>
                  <option value="jeweller">Jeweller partnership</option>
                  <option value="investor">Investor</option>
                  <option value="media">Media</option>
                  <option value="user-waitlist">User waitlist</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-cridora-muted">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  className="ui-input mt-1.5 resize-y py-3"
                />
              </div>
            </div>
            <button type="submit" className="ui-btn-primary mt-8 min-h-12 w-full px-8 text-sm sm:w-auto">
              Send
            </button>
          </form>
        )}
        <p className="mt-8 text-center text-sm text-cridora-muted">
          <Link to="/faq" className="text-cridora-gold-light underline decoration-cridora-gold/35 underline-offset-4 hover:text-cridora-gold">
            FAQ
          </Link>{' '}
          ·{' '}
          <Link to="/" className="text-cridora-gold-light underline decoration-cridora-gold/35 underline-offset-4 hover:text-cridora-gold">
            Home
          </Link>
        </p>
      </div>
    </div>
  )
}
