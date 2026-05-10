import { Link } from 'react-router-dom'

export function ConsumerSupportPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-semibold text-cridora-text">Support</h1>
      <div className="ui-card space-y-4 p-6 text-sm text-cridora-muted">
        <p>FAQs, tickets, and dispute flows will live here.</p>
        <Link to="/faq" className="font-medium text-cridora-gold-light hover:underline">
          Open public FAQ
        </Link>
      </div>
    </div>
  )
}
