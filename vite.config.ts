import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function githubPagesBase(): string {
  const raw = (process.env.GITHUB_PAGES_BASE || '/').trim()
  if (!raw || raw === '/') return '/'
  const inner = raw.replace(/^\/+|\/+$/g, '')
  return inner ? `/${inner}/` : '/'
}

export default defineConfig({
  base: githubPagesBase(),
  plugins: [react(), tailwindcss()],
})
