import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'

// https://astro.build
export default defineConfig({
  site: 'https://carisite.id',
  integrations: [tailwind(), mdx(), sitemap({ filter: (page) => !page.includes('/demo/live/') && !page.includes('/demo/preview/') && !page.endsWith('/404/') }), icon()],
})
