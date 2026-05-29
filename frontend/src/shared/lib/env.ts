/** Django API origin, e.g. http://127.0.0.1:8000 — no trailing slash. */
export const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/$/, '') ?? ''

export const isApiConfigured = apiBaseUrl.length > 0
