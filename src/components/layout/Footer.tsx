import { Link, NavLink } from 'react-router-dom'
import { CridoraLogoMark } from '../branding/CridoraLogoMark'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-silk/10 bg-navy-silk/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <CridoraLogoMark size="md" />
              <p className="font-display text-2xl font-semibold text-cridora-text">Cridora</p>
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-cridora-muted">
              A modern gold savings & redemption ecosystem — connecting users and trusted jewellers across
              India. Awareness and pilot access; not a deposit or guaranteed-return product.
            </p>
          </div>
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-silk/80">Explore</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li>
                <NavLink className="ui-link-foot" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="ui-link-foot" to="/how-it-works">
                  How it works
                </NavLink>
              </li>
              <li>
                <NavLink className="ui-link-foot" to="/for-jewellers">
                  For jewellers
                </NavLink>
              </li>
              <li>
                <NavLink className="ui-link-foot" to="/faq">
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-silk/80">Early access</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li>
                <Link className="ui-link-foot" to="/#waitlist">
                  User waitlist
                </Link>
              </li>
              <li>
                <NavLink className="ui-link-foot" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-silk/80">Note</p>
            <p className="mt-4 text-xs leading-relaxed text-cridora-muted">
              Gold is market-linked. Features depend on rollout, partners, and applicable rules.
            </p>
          </div>
        </div>
        <p className="mt-12 border-t border-silk/10 pt-8 text-center text-xs text-cridora-muted/90">
          © {new Date().getFullYear()} Cridora — pre-launch public site.
        </p>
      </div>
    </footer>
  )
}
