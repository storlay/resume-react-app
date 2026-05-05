import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const PROD_CSP =
  "default-src 'self'; " +
  "script-src 'self'; " +
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
  "font-src 'self' https://fonts.gstatic.com; " +
  "img-src 'self' data:; " +
  "connect-src 'self'; " +
  "object-src 'none'; " +
  "base-uri 'self'; " +
  "frame-ancestors 'none'; " +
  "form-action 'self'"

function tightenCspOnBuild(): Plugin {
  return {
    name: 'tighten-csp-on-build',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        return html.replace(
          /<meta http-equiv="Content-Security-Policy" content="[^"]*"\s*\/?>/,
          `<meta http-equiv="Content-Security-Policy" content="${PROD_CSP}" />`,
        )
      },
    },
  }
}

export default defineConfig({
  plugins: [react(), tightenCspOnBuild()],
  build: {
    sourcemap: false,
  },
})
