export type LegalDocId =
  | 'terms'
  | 'privacy'
  | 'refund'
  | 'grievance'
  | 'aml-kyc'
  | 'disclosures'

export type LegalDocContent = {
  title: string
  summary: string
  paragraphs: string[]
}

export const legalDocs: Record<LegalDocId, LegalDocContent> = {
  terms: {
    title: 'Terms of Service',
    summary:
      'Plain-language summary: Cridora’s public website and future apps are offered under policies you accept by using them. Final legal language below is a draft placeholder for counsel review.',
    paragraphs: [
      'Draft placeholder — replace with executed Terms of Service before launch. This section will describe eligibility, acceptable use, limitation of liability, dispute resolution, and governing law for India.',
      'Until published, do not rely on this page as a binding contract.',
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    summary:
      'Plain-language summary: We describe what personal data we collect, why we use it, how long we keep it, and whom we share it with — including service providers and regulators where required.',
    paragraphs: [
      'Draft placeholder — replace with counsel-approved Privacy Notice covering cookies, analytics, marketing, retention, DPDP alignment, and contact details for the data protection officer.',
    ],
  },
  refund: {
    title: 'Refund Policy',
    summary:
      'Plain-language summary: Refunds follow the nature of your transaction — digital gold purchases, redemption fees, and SaaS subscriptions may each have different rules shown at checkout.',
    paragraphs: [
      'Draft placeholder — replace with precise refund timelines, chargeback handling, and partner jeweller responsibilities once products are live.',
    ],
  },
  grievance: {
    title: 'Grievance Redressal',
    summary:
      'Plain-language summary: You can escalate issues through a named grievance officer, channels, and response SLAs. Serious complaints may be logged for regulatory reporting.',
    paragraphs: [
      'Draft placeholder — insert officer name, address, email, phone, and working hours. Mirror RBI/consumer portal guidance when applicable.',
    ],
  },
  'aml-kyc': {
    title: 'AML / KYC Policy',
    summary:
      'Plain-language summary: Cridora and its partners verify identity, monitor transactions, and may pause or exit relationships that present unacceptable financial crime risk.',
    paragraphs: [
      'Draft placeholder — align with PMLA programme documentation and partner bank covenants.',
    ],
  },
  disclosures: {
    title: 'Disclosures and Risks',
    summary:
      'Plain-language summary: Gold is volatile; digital layers add custodial and partner risk. We do not promise returns, insurance coverage, or unlimited redemption capacity.',
    paragraphs: [
      'Draft placeholder — enumerate market risk, operational risk, technology risk, jeweller/partner risk, regulatory change risk, and insurance posture in clear bullets.',
    ],
  },
}
