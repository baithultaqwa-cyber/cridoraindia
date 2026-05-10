import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { RequireAuth } from './auth/RequireAuth'
import { PublicLayout } from './components/layout/PublicLayout'
import { ConsumerLayout } from './layouts/ConsumerLayout'
import { MerchantLayout } from './layouts/MerchantLayout'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { FaqPage } from './pages/FaqPage'
import { ForJewellersPage } from './pages/ForJewellersPage'
import { HomePage } from './pages/HomePage'
import { HowItWorksPage } from './pages/HowItWorksPage'
import { ForgotPasswordPage } from './pages/auth/ForgotPasswordPage'
import { LoginPage } from './pages/auth/LoginPage'
import { SignupPage } from './pages/auth/SignupPage'
import { ConsumerBuyPage } from './pages/app/ConsumerBuyPage'
import { ConsumerHomePage } from './pages/app/ConsumerHomePage'
import { ConsumerJewellersPage } from './pages/app/ConsumerJewellersPage'
import { ConsumerKycPage } from './pages/app/ConsumerKycPage'
import { ConsumerPortfolioPage } from './pages/app/ConsumerPortfolioPage'
import { ConsumerProfilePage } from './pages/app/ConsumerProfilePage'
import { ConsumerRedeemPage } from './pages/app/ConsumerRedeemPage'
import { ConsumerSellbackPage } from './pages/app/ConsumerSellbackPage'
import { ConsumerSupportPage } from './pages/app/ConsumerSupportPage'
import { ConsumerTransactionsPage } from './pages/app/ConsumerTransactionsPage'
import { ConsumerTransferPage } from './pages/app/ConsumerTransferPage'
import { MerchantBillingPage } from './pages/merchant/MerchantBillingPage'
import { MerchantCustomersPage } from './pages/merchant/MerchantCustomersPage'
import { MerchantInventoryPage } from './pages/merchant/MerchantInventoryPage'
import { MerchantOverviewPage } from './pages/merchant/MerchantOverviewPage'
import { MerchantQueuePage } from './pages/merchant/MerchantQueuePage'
import { MerchantReportsPage } from './pages/merchant/MerchantReportsPage'
import { MerchantSellbackPage } from './pages/merchant/MerchantSellbackPage'
import { MerchantSettingsPage } from './pages/merchant/MerchantSettingsPage'
import { MerchantSettlementsPage } from './pages/merchant/MerchantSettlementsPage'
import { MerchantStaffPage } from './pages/merchant/MerchantStaffPage'

const merchantRoles = ['merchant_staff', 'merchant_admin'] as const

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
        <Route path="/auth/forgot" element={<ForgotPasswordPage />} />

        <Route
          path="/app"
          element={
            <RequireAuth roles={['consumer']}>
              <ConsumerLayout />
            </RequireAuth>
          }
        >
          <Route index element={<ConsumerHomePage />} />
          <Route path="portfolio" element={<ConsumerPortfolioPage />} />
          <Route path="redeem" element={<ConsumerRedeemPage />} />
          <Route path="transactions" element={<ConsumerTransactionsPage />} />
          <Route path="profile" element={<ConsumerProfilePage />} />
          <Route path="buy" element={<ConsumerBuyPage />} />
          <Route path="transfer" element={<ConsumerTransferPage />} />
          <Route path="sellback" element={<ConsumerSellbackPage />} />
          <Route path="jewellers" element={<ConsumerJewellersPage />} />
          <Route path="kyc" element={<ConsumerKycPage />} />
          <Route path="support" element={<ConsumerSupportPage />} />
        </Route>

        <Route
          path="/merchant"
          element={
            <RequireAuth roles={[...merchantRoles]}>
              <MerchantLayout />
            </RequireAuth>
          }
        >
          <Route index element={<MerchantOverviewPage />} />
          <Route path="queue" element={<MerchantQueuePage />} />
          <Route path="customers" element={<MerchantCustomersPage />} />
          <Route path="settlements" element={<MerchantSettlementsPage />} />
          <Route path="sellback" element={<MerchantSellbackPage />} />
          <Route path="inventory" element={<MerchantInventoryPage />} />
          <Route path="reports" element={<MerchantReportsPage />} />
          <Route path="billing" element={<MerchantBillingPage />} />
          <Route path="settings" element={<MerchantSettingsPage />} />
          <Route path="staff" element={<MerchantStaffPage />} />
        </Route>

        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/for-jewellers" element={<ForJewellersPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/for-users" element={<Navigate to="/#why-users" replace />} />
          <Route path="/trust" element={<Navigate to="/about" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
