const STORAGE_KEY = 'cridora_default_jeweller_id'

export function getDefaultJewellerId(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

export function setDefaultJewellerId(jewellerId: string): void {
  try {
    localStorage.setItem(STORAGE_KEY, jewellerId)
    window.dispatchEvent(new Event('cridora-default-jeweller'))
  } catch {
    /* ignore */
  }
}

export function clearDefaultJewellerId(): void {
  try {
    localStorage.removeItem(STORAGE_KEY)
    window.dispatchEvent(new Event('cridora-default-jeweller'))
  } catch {
    /* ignore */
  }
}
