/**
 * Pre-launch Google Forms — set in `.env` (see keys below) or leave empty to fall back to /contact.
 *
 * VITE_PUBLIC_FORM_USER_WAITLIST=
 * VITE_PUBLIC_FORM_JEWELLER=
 * VITE_PUBLIC_FORM_INVESTOR=
 */
const fromEnv = (key: string) => (import.meta.env[key] as string | undefined)?.trim() ?? ''

export const googleFormUrls = {
  userWaitlist: fromEnv('VITE_PUBLIC_FORM_USER_WAITLIST'),
  jewellerNetwork: fromEnv('VITE_PUBLIC_FORM_JEWELLER'),
  investorRelations: fromEnv('VITE_PUBLIC_FORM_INVESTOR'),
} as const

export type GoogleFormKey = keyof typeof googleFormUrls

export function externalFormHref(url: string): string | null {
  if (url && /^https?:\/\//i.test(url)) return url
  return null
}
