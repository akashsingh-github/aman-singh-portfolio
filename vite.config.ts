import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { content } from './src/content.ts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      // Fills the <title> and meta description in index.html from src/content.ts
      name: 'inject-site-meta',
      transformIndexHtml: (html) =>
        html
          .replace('%SITE_TITLE%', content.site.title)
          .replace('%SITE_DESCRIPTION%', content.site.description),
    },
  ],
})
