/** Indicative demo spot for UI only — not a live quote (see PRODUCT_ARCHITECTURE / compliance). */
export const DEMO_SPOT_INR_PER_GRAM = 7120

export function formatInrPerGram(value: number): string {
  return `₹${Math.round(value).toLocaleString('en-IN')}/g`
}
