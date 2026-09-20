import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom plugin to inject the dev entrypoint when running dev server
const devHtmlPlugin = () => ({
  name: 'dev-html-plugin',
  transformIndexHtml(html, ctx) {
    if (ctx.server) {
      // In development server, replace the production scripts with the development source entrypoint
      return html
        .replace(/<script type="module" crossorigin src=".*?assets\/index-.*?\.js"><\/script>/, '<script type="module" crossorigin src="/src/main.jsx"></script>')
        .replace(/<link rel="stylesheet" crossorigin href=".*?assets\/index-.*?\.css">\s*/, '')
        .replace(/type="image\/svg\+xml"/g, 'type="image/png"')
        .replace(/href=".*?assets\/favicon-.*?\.(?:svg|png)"/, 'href="/portfolio/favicon.png"');
    }
    return html;
  }
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), devHtmlPlugin()],
  base: process.env.VERCEL ? '/' : '/portfolio/',
})

