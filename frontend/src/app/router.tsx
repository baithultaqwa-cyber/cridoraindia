import { Navigate, Route, Routes } from 'react-router-dom'
import { RequireAuth } from '@/features/auth/RequireAuth'
import { AdminLayout } from '@/features/admin/AdminLayout'
import { ConsumerLayout } from '@/features/consumer/ConsumerLayout'
import { MerchantLayout } from '@/features/merchant/MerchantLayout'
import { AdminJewellersPage } from '@/features/admin/pages/AdminJewellersPage'
import { AdminKycQueuePage } from '@/features/admin/pages/AdminKycQueuePage'
import { AdminOverviewPage } from '@/features/admin/pages/AdminOverviewPage'
import { AdminSettlementsPage } from '@/features/admin/pages/AdminSettlementsPage'
import { AdminTransactionsPage } from '@/features/admin/pages/AdminTransactionsPage'
import { ForgotPasswordPage } from '@/features/auth/pages/ForgotPasswordPage'
import { LoginPage } from '@/features/auth/pages/LoginPage'
import { SignupPage } from '@/features/auth/pages/SignupPage'
import { ConsumerBuyPage } from '@/features/consumer/pages/ConsumerBuyPage'
import { ConsumerCreditPage } from '@/features/consumer/pages/ConsumerCreditPage'
import { ConsumerHomePage } from '@/features/consumer/pages/ConsumerHomePage'
import { ConsumerJewellerDirectoryPage } from '@/features/consumer/pages/ConsumerJewellerDirectoryPage'
import { ConsumerJewellerProductsPage } from '@/features/consumer/pages/ConsumerJewellerProductsPage'
import { ConsumerKycPage } from '@/features/consumer/pages/ConsumerKycPage'
import { ConsumerLedgerPage } from '@/features/consumer/pages/ConsumerLedgerPage'
import { ConsumerMarketplaceCartPage } from '@/features/consumer/pages/ConsumerMarketplaceCartPage'
import { ConsumerMarketplaceHubPage } from '@/features/consumer/pages/ConsumerMarketplaceHubPage'
import { ConsumerMarketplaceProductPage } from '@/features/consumer/pages/ConsumerMarketplaceProductPage'
import { ConsumerMarketplaceProductsPage } from '@/features/consumer/pages/ConsumerMarketplaceProductsPage'
import { ConsumerOrnamentsCatalogPage } from '@/features/consumer/pages/ConsumerOrnamentsCatalogPage'
import { ConsumerPortfolioPage } from '@/features/consumer/pages/ConsumerPortfolioPage'
import { ConsumerProfilePage } from '@/features/consumer/pages/ConsumerProfilePage'
import { ConsumerRedeemPage } from '@/features/consumer/pages/ConsumerRedeemPage'
import { ConsumerSchemesPage } from '@/features/consumer/pages/ConsumerSchemesPage'
import { ConsumerSellbackPage } from '@/features/consumer/pages/ConsumerSellbackPage'
import { ConsumerSupportPage } from '@/features/consumer/pages/ConsumerSupportPage'
import { ConsumerTransactionsPage } from '@/features/consumer/pages/ConsumerTransactionsPage'
import { ConsumerTransferPage } from '@/features/consumer/pages/ConsumerTransferPage'
import { LegalDocPage } from '@/features/marketing/legal/LegalDocPage'
import { ComparePage } from '@/features/marketing/pages/ComparePage'
import { ContactPage } from '@/features/marketing/pages/ContactPage'
import { DemoGatewaysPage } from '@/features/marketing/pages/DemoGatewaysPage'
import { FaqPage } from '@/features/marketing/pages/FaqPage'
import { ForCustomersPage } from '@/features/marketing/pages/ForCustomersPage'
import { ForJewellersPage } from '@/features/marketing/pages/ForJewellersPage'
import { HomePage } from '@/features/marketing/pages/HomePage'
import { HowItWorksPage } from '@/features/marketing/pages/HowItWorksPage'
import { InvestorRelationsPage } from '@/features/marketing/pages/InvestorRelationsPage'
import { JewellerPartnershipPage } from '@/features/marketing/pages/JewellerPartnershipPage'
import { RedemptionExplainedPage } from '@/features/marketing/pages/RedemptionExplainedPage'
import { SavingsExplainedPage } from '@/features/marketing/pages/SavingsExplainedPage'
import { SecurityTrustPage } from '@/features/marketing/pages/SecurityTrustPage'
import { WaitlistPage } from '@/features/marketing/pages/WaitlistPage'
import { WhatIsCridoraPage } from '@/features/marketing/pages/WhatIsCridoraPage'
import { MerchantBillingPage } from '@/features/merchant/pages/MerchantBillingPage'
import { MerchantCustomersPage } from '@/features/merchant/pages/MerchantCustomersPage'
import { MerchantInventoryPage } from '@/features/merchant/pages/MerchantInventoryPage'
import { MerchantOverviewPage } from '@/features/merchant/pages/MerchantOverviewPage'
import { MerchantQueuePage } from '@/features/merchant/pages/MerchantQueuePage'
import { MerchantReportsPage } from '@/features/merchant/pages/MerchantReportsPage'
import { MerchantSellbackPage } from '@/features/merchant/pages/MerchantSellbackPage'
import { MerchantSettingsPage } from '@/features/merchant/pages/MerchantSettingsPage'
import { MerchantSettlementsPage } from '@/features/merchant/pages/MerchantSettlementsPage'
import { MerchantStaffPage } from '@/features/merchant/pages/MerchantStaffPage'
import { PublicLayout } from '@/shared/components/layout/PublicLayout'

const merchantRoles = ['merchant_staff', 'merchant_admin'] as const

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/signup" element={<SignupPage />} />
      <Route path="/auth/forgot" element={<ForgotPasswordPage />} />

      <Route
        path="/admin"
        element={
          <RequireAuth roles={['admin']}>
            <AdminLayout />
          </RequireAuth>
        }
      >
        <Route index element={<AdminOverviewPage />} />
        <Route path="settlements" element={<AdminSettlementsPage />} />
        <Route path="jewellers" element={<AdminJewellersPage />} />
        <Route path="kyc-queue" element={<AdminKycQueuePage />} />
        <Route path="transactions" element={<AdminTransactionsPage />} />
      </Route>

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
        <Route path="ledger" element={<ConsumerLedgerPage />} />
        <Route path="ornaments" element={<ConsumerOrnamentsCatalogPage />} />
        <Route path="schemes" element={<ConsumerSchemesPage />} />
        <Route path="credit" element={<ConsumerCreditPage />} />
        <Route path="redeem" element={<ConsumerRedeemPage />} />
        <Route path="transactions" element={<ConsumerTransactionsPage />} />
        <Route path="profile" element={<ConsumerProfilePage />} />
        <Route path="buy" element={<ConsumerBuyPage />} />
        <Route path="transfer" element={<ConsumerTransferPage />} />
        <Route path="sellback" element={<ConsumerSellbackPage />} />
        <Route path="jewellers" element={<ConsumerJewellerDirectoryPage />} />
        <Route path="jewellers/:jewellerId/products" element={<ConsumerJewellerProductsPage />} />
        <Route path="marketplace" element={<ConsumerMarketplaceHubPage />} />
        <Route path="marketplace/products" element={<ConsumerMarketplaceProductsPage />} />
        <Route path="marketplace/product/:jewellerId/:productId" element={<ConsumerMarketplaceProductPage />} />
        <Route path="marketplace/cart" element={<ConsumerMarketplaceCartPage />} />
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
        <Route path="/demo" element={<DemoGatewaysPage />} />
        <Route path="/what-is-cridora" element={<WhatIsCridoraPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/for-customers" element={<ForCustomersPage />} />
        <Route path="/for-jewellers" element={<ForJewellersPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/savings-explained" element={<SavingsExplainedPage />} />
        <Route path="/redemption-explained" element={<RedemptionExplainedPage />} />
        <Route path="/trust" element={<SecurityTrustPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/investors" element={<InvestorRelationsPage />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
        <Route path="/partners" element={<JewellerPartnershipPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/legal/:doc" element={<LegalDocPage />} />
        <Route path="/about" element={<Navigate to="/what-is-cridora" replace />} />
        <Route path="/for-users" element={<Navigate to="/for-customers" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
