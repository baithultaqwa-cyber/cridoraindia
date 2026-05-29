/** Rows for public marketing comparison table (PRODUCT_ARCHITECTURE §3.6.6). */
export type ComparisonRow = [feature: string, schemes: string, digitalGold: string, etfEtc: string, cridora: string]

export const publicComparisonRows: ComparisonRow[] = [
  ['Fractional gold savings', 'Limited', 'Yes', 'Yes', 'Yes'],
  ['Physical jewellery redemption', 'Mostly same shop', 'Limited', 'No', 'Yes'],
  ['Multiple jeweller access', 'No', 'No', 'No', 'Yes (network vision)'],
  ['User-to-user transfers', 'No', 'No', 'No', 'Yes'],
  ['Local jeweller integration', 'Yes', 'No', 'No', 'Yes'],
  ['Nationwide redemption vision', 'No', 'No', 'No', 'Yes (rolled out over time)'],
  ['Live gold value tracking', 'Limited', 'Yes', 'Yes', 'Yes'],
  ['Digital + physical ecosystem', 'Partial', 'Mostly digital', 'Investment-focused', 'Yes'],
  ['Designed for jewellery economy', 'Yes', 'No', 'No', 'Yes'],
  ['Customer flexibility', 'Low', 'Medium', 'Medium', 'High'],
]
