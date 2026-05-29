import { NavLink } from 'react-router-dom'
import { CridoraLogoMark } from '../branding/CridoraLogoMark'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-silk/10 bg-navy-silk/95">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <CridoraLogoMark size="md" />
              <p className="font-display text-2xl font-semibold text-cridora-text">Cridora</p>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cridora-muted">
              India’s trusted digital gold savings &amp; redemption network — pre-launch public site.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-cridora-muted/90">
              Registered office and GSTIN will be published before commercial launch.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-silk/80">Product</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li>
                <NavLink className="ui-link-foot" to="/for-customers">
                  Customers
                </NavLink>
              </li>
              <li>
                <NavLink className="ui-link-foot" to="/for-jewellers">
                  Jewellers
                </NavLink>
              </li>
              <li>
                <NavLink className="ui-link-foot" to="/partners">
                  Jeweller partnership
                </NavLink>
              </li>
              <li>
                <span className="text-cridora-muted/60">Marketplace · GoldNest · Family Vault — in-product</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-silk/80">Learn</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li>
                <NavLink className="ui-link-foot" to="/how-it-works">
                  How it works
                </NavLink>
              </li>
              <li>
                <NavLink className="ui-link-foot" to="/compare">
                  Compare
                </NavLink>
              </li>
              <li>
                <NavLink className="ui-link-foot" to="/savings-explained">
                  Savings explained
                </NavLink>
              </li>
              <li>
                <NavLink className="ui-link-foot" to="/redemption-explained">
                  Redemption explained
                </NavLink>
              </li>
              <li>
                <NavLink className="ui-link-foot" to="/faq">
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-silk/80">Company</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li>
                <NavLink className="ui-link-foot" to="/what-is-cridora">
                  What is Cridora
                </NavLink>
              </li>
              <li>
                <NavLink className="ui-link-foot" to="/investors">
                  Investor relations
                </NavLink>
              </li>
              <li>
                <NavLink className="ui-link-foot" to="/demo">
                  Demo dashboards
                </NavLink>
              </li>
              <li>
                <NavLink className="ui-link-foot" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li>
                <span className="text-cridora-muted/60">Press · Careers — Phase 2</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-silk/80">Legal</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li>
                <NavLink className="ui-link-foot" to="/legal/terms">
                  Terms
                </NavLink>
              </li>
              <li>
                <NavLink className="ui-link-foot" to="/legal/privacy">
                  Privacy
                </NavLink>
              </li>
              <li>
                <NavLink className="ui-link-foot" to="/legal/refund">
                  Refund
                </NavLink>
              </li>
              <li>
                <NavLink className="ui-link-foot" to="/legal/grievance">
                  Grievance
                </NavLink>
              </li>
              <li>
                <NavLink className="ui-link-foot" to="/legal/aml-kyc">
                  AML / KYC
                </NavLink>
              </li>
              <li>
                <NavLink className="ui-link-foot" to="/legal/disclosures">
                  Disclosures
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-silk/10 pt-8 text-center text-xs text-cridora-muted/90">
          © {new Date().getFullYear()} Cridora — pre-launch public site ·{' '}
          <span className="text-cridora-muted/80">Made in India</span>
        </p>
      </div>
    </footer>
  )
}
