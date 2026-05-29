export function cridoraUserIdFromEmail(email: string | undefined): string {
  if (!email?.trim()) return 'CR-DEMO'
  const tail = email.replace(/[^a-zA-Z0-9]/g, '').slice(-5).toUpperCase()
  return tail.length >= 3 ? `CR-${tail}` : `CR-${email.slice(0, 5).toUpperCase().replace(/[^A-Z0-9]/g, 'X')}`
}

/** Demo directory for transfer verification (prod: API lookup). */
export const DEMO_TRANSFER_DIRECTORY: Record<string, string> = {
  'CR-FRIEND': 'Meera K. (demo)',
  'CR-SISTER': 'Ananya S. (demo)',
  'CR-BROTHER': 'Rahul V. (demo)',
}

export function normalizeCridoraTransferId(raw: string): string {
  return raw.trim().toUpperCase().replace(/\s+/g, '')
}

export function isWellFormedTransferId(id: string): boolean {
  return /^CR-[A-Z0-9]{4,14}$/.test(normalizeCridoraTransferId(id))
}

export function lookupDemoRecipient(id: string): string | null {
  const n = normalizeCridoraTransferId(id)
  return DEMO_TRANSFER_DIRECTORY[n] ?? null
}
