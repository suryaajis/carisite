# Agent Prompt — Frontend Implementation (calonweb.site)

You are tasked with building the complete frontend for **calonweb.site**, a
web-development-services landing page targeting Indonesian SMEs. This is a
**static-first JAMstack site** — no backend, no database. Everything is
pre-rendered at build time and served from a CDN.

Read every section of this prompt carefully before writing a single file.
When done, all files must be committed and pushed to branch `calonweb/frontend-setup`.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Astro 4+ (App Router, SSG mode) |
| Styling | Tailwind CSS v4 |
| Interactive islands | Vanilla JS (no React) via `<script>` in .astro or inline |
| Content | Astro Content Collections (MDX for articles, JSON for demo) |
| Icons | `astro-icon` + `@iconify-json/lucide` |
| Fonts | `@fontsource/inter` + `@fontsource/plus-jakarta-sans` |
| Image optimization | Astro built-in `<Image />` |

Do NOT install React, Vue, or any UI framework — keep islands as plain JS.

---

## Branding & Design Tokens

| Token | Value |
|---|---|
| Primary | `#2563EB` (blue) |
| Accent | `#7C3AED` (purple — for highlighted text spans) |
| Dark BG | `#0F172A` (dark navy — used in Advantages, FinalCTA, Footer) |
| Page BG | `#F8FAFF` (very light blue) |
| Heading font | Plus Jakarta Sans, Bold |
| Body font | Inter, Regular/Medium |
| Border radius | 12px (`rounded-xl`) |
| Shadow | `shadow-sm` to `shadow-md` |

Configure these as Tailwind CSS custom tokens in `tailwind.config.mjs`.

---

## Site Configuration

Create `src/config/site.ts`:

```typescript
export const SITE = {
  name: "Calonweb.site",
  tagline: "Professional Websites for SMEs",
  whatsapp: import.meta.env.PUBLIC_WHATSAPP ?? "628xxxxxxxxxx",
  whatsappMessage: "Halo, saya ingin konsultasi pembuatan website",
  email: "hello@calonweb.site",
  domain: "calonweb.site",
  url: "https://calonweb.site",
}
```

Create `src/config/navigation.ts`:

```typescript
export const NAV_ITEMS = [
  { label: "Home",          href: "/#hero" },
  { label: "Demo Websites", href: "/#demo" },
  { label: "Advantages",    href: "/#advantages" },
  { label: "Pricing",       href: "/#pricing" },
  { label: "Articles",      href: "/articles" },
  { label: "FAQ",           href: "/#faq" },
  { label: "Order",         href: "/#order" },
]
```

---

## Project Structure

Create exactly this structure (no extra files):

```
/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
│       ├── demo/          ← placeholder SVG thumbnails
│       └── articles/      ← placeholder SVG thumbnails
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.astro
│   │   │   ├── Footer.astro
│   │   │   ├── FloatingWhatsApp.astro
│   │   │   └── BottomNavMobile.astro
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── Stats.astro
│   │   │   ├── Problem.astro
│   │   │   ├── Solution.astro
│   │   │   ├── Demo.astro
│   │   │   ├── Advantages.astro
│   │   │   ├── Pricing.astro
│   │   │   ├── Articles.astro
│   │   │   ├── FAQ.astro
│   │   │   ├── OrderForm.astro
│   │   │   └── FinalCTA.astro
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── Badge.astro
│   │       ├── Card.astro
│   │       └── SectionLabel.astro
│   ├── content/
│   │   ├── config.ts
│   │   ├── articles/
│   │   │   ├── website-development-for-smes.mdx
│   │   │   ├── sme-website-pricing-2026.mdx
│   │   │   ├── professional-sme-website-services.mdx
│   │   │   └── order-sme-website-online.mdx
│   │   └── demo/
│   │       ├── laundry.json
│   │       ├── construction.json
│   │       ├── cafe.json
│   │       ├── catering.json
│   │       ├── travel.json
│   │       └── workshop.json
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ArticleLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── demo/
│   │   │   └── [slug].astro
│   │   └── articles/
│   │       ├── index.astro
│   │       └── [slug].astro
│   ├── styles/
│   │   └── global.css
│   └── config/
│       ├── site.ts
│       └── navigation.ts
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

---

## Phase 1 — Project Bootstrap

Run in order:

```bash
npm create astro@latest . -- --template minimal --typescript strict --no-install
npm install
npx astro add tailwind mdx sitemap
npm install @fontsource/inter @fontsource/plus-jakarta-sans
npm install astro-icon @iconify-json/lucide
```

`astro.config.mjs`:

```js
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://calonweb.site',
  integrations: [tailwind(), mdx(), sitemap()],
})
```

`tsconfig.json` — set `"strict": true` and path alias `@/*` → `./src/*`.

---

## Phase 2 — Content Collections Schema

`src/content/config.ts`:

```typescript
import { defineCollection, z } from 'astro:content'

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    publishDate: z.coerce.date(),
    image: z.string(),
  }),
})

const demo = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
    demoUrl: z.string().url(),
    features: z.array(z.string()).optional(),
  }),
})

export const collections = { articles, demo }
```

Seed all 6 demo JSON files and 4 article MDX files with realistic
Indonesian-relevant content (not lorem ipsum).

Demo JSON example (`laundry.json`):
```json
{
  "title": "Laundry Website",
  "description": "Professional website for laundry and dry-cleaning businesses.",
  "category": "Laundry",
  "image": "/images/demo/laundry.svg",
  "demoUrl": "https://calonweb.site",
  "features": ["Digital price list", "WhatsApp order button", "Location map"]
}
```

Article MDX example frontmatter:
```mdx
---
title: "Website Development Services for SMEs"
description: "Professional websites for SMEs across Indonesia starting from IDR 699,000."
category: "SME"
publishDate: 2026-06-01
image: "/images/articles/sme.svg"
---
```

---

## Phase 3 — UI Primitives

### Button.astro

Props: `variant` (`"primary"` | `"outline"`), `href` (optional), `class` (optional).
- `primary`: filled blue bg, white text, hover darkens
- `outline`: transparent bg, blue border and text, hover fills blue
- Renders `<a>` if `href` provided, else `<button>`

### Badge.astro

Props: `label` (string). Small rounded pill chip for section labels.
Style: light blue/purple bg, small uppercase text, border.

### SectionLabel.astro

Wraps `Badge` and centers it. Used at the top of every section.

### Card.astro

Generic card wrapper: white bg, `rounded-xl`, `shadow-sm`, padding. Accepts
default slot.

---

## Phase 4 — Layout Components

### BaseLayout.astro

- Props: `title`, `description`, `ogImage` (optional), `isHome` (boolean)
- Renders full `<html>` with charset, viewport, canonical, OG tags, Twitter card
- Font imports via @fontsource
- Global CSS import
- Renders: `<Navbar />`, `<slot />`, `<Footer />`, `<FloatingWhatsApp />`, `<BottomNavMobile />`
- When `isHome` is true: inject LocalBusiness JSON-LD `<script type="application/ld+json">`

### Navbar.astro

- Logo: `Calon<span class="text-primary">web</span>.site`
- Desktop: horizontal nav links from `NAV_ITEMS`
- Mobile: hamburger button → slide-in drawer (plain JS toggle via `<script>`)
- Sticky top, white bg, subtle bottom border
- Scroll spy: Intersection Observer highlights active nav link

### Footer.astro

- Dark navy background (`#0F172A`), white text
- 3 columns: brand/tagline | nav links | contact (WhatsApp + email)
- Bottom bar: `© {year} Calonweb.site. All rights reserved.`

### FloatingWhatsApp.astro

- `fixed bottom-6 right-6 z-50`
- Green circle, WhatsApp SVG icon
- Click → `window.open('https://wa.me/${SITE.whatsapp}?text=...', '_blank')`
- CSS pulse animation ring

### BottomNavMobile.astro

- `fixed bottom-0 w-full z-40`, white bg, border-top
- `md:hidden` (mobile only)
- 3 items: MENU (triggers nav drawer) | MORE (scrolls to #faq) | CONTACT US (opens WhatsApp)

---

## Phase 5 — Section Components

All sections must:
- Have an `id` matching the anchor in `navigation.ts`
- Use `<SectionLabel>` chip at top
- Be mobile-first responsive
- Fade in on scroll via CSS + Intersection Observer `<script>`

### Hero.astro (`id="hero"`)

- Background: gradient `#F8FAFF` → `#EEF2FF`
- Desktop: 2-col (text left, mockup right). Mobile: stacked.
- Headline: "Professional Websites for SMEs Ready to **Level Up**" — "Level Up" in `text-accent`
- Subheadline: "Boost customer trust, appear on Google, and receive orders 24/7 with a professional business website."
- Badge row: ✓ Mobile Friendly | ✓ .COM Domain | ✓ SEO Friendly | ✓ WhatsApp Support
- CTAs: `View Demo` (primary, href="#demo") + `Free Consultation` (outline, href=wa.me)
- Mockup: inline SVG wireframe of laptop + phone

### Stats.astro (`id="stats"`)

- 2×2 grid, centered text
- 4 items: `50+` Demo Websites | `24` Hours Response | `100%` Mobile Friendly | `SEO` Google Ready
- `data-count-up` on animatable numbers; Intersection Observer count-up animation over 1.5s

### Problem.astro (`id="problem"`)

- Chip: "Problem" | Headline: "Still Relying on Social Media Alone?"
- 4 cards (2×2): icon circle (pink/orange) + title + description
  1. Hard to be found on Google — lucide `search`
  2. Prospects hard to trust — lucide `heart`
  3. Incomplete business info — lucide `layout`
  4. No professional profile — lucide `user`

### Solution.astro (`id="solution"`)

- Chip: "Solution" | Headline: "A Website That Works for Your Business 24/7"
- 6 cards (2×3 desktop, 2 col mobile): colored icon circle + title + description
  1. Professional Website — `monitor`
  2. Direct WhatsApp Button — `message-circle`
  3. SEO Friendly — `search`
  4. Mobile Friendly — `smartphone`
  5. Product & Service Gallery — `image`
  6. Order Form — `file-text`

### Demo.astro (`id="demo"`)

- Chip: "Demo" | Headline: "See Example SME Websites"
- Read all entries from `demo` Content Collection
- 2-col grid: thumbnail + category + description + `View Demo` button → `/demo/[slug]`

### Advantages.astro (`id="advantages"`)

- **Background `#0F172A`**, white text
- Chip: "Advantages" (light variant) | Headline: "Why Choose **Calonweb.site**?"
- 8 checklist items (2×4 grid): blue ✓ + label
  1. Modern and professional design  2. Mobile friendly
  3. Fast loading  4. SEO friendly
  5. .COM domain included  6. After-sales support
  7. Suitable for all SME types  8. WhatsApp integration

### Pricing.astro (`id="pricing"`)

- Chip: "Pricing" | Headline: "Choose the Best Package"
- 2 cards (side by side desktop, stacked mobile):
  - **Landing Page** Rp699.000 — 6 features — outline button
  - **Company Profile** Rp1.990.000 — 8 features — primary button + "Most Popular" badge

### Articles.astro (`id="articles"`)

- Chip: "Articles" | Headline: "Articles & Business Tips"
- Latest 4 from `articles` collection, sorted by `publishDate` desc
- 2-col grid: thumbnail + `<Badge>` category + title (linked) + description

### FAQ.astro (`id="faq"`)

- Chip: "FAQ" | Headline: "Frequently Asked Questions"
- 5 `<details>/<summary>` accordion items with CSS smooth animation
  1. How long does website development take?
  2. Are domain and hosting included?
  3. Can the website be opened on a phone?
  4. Can the website appear on Google?
  5. How do I order a website?
- Write 2–3 sentence realistic answers per question

### OrderForm.astro (`id="order"`)

- Chip: "Order" | Headline: "Order Your Website Now"
- Fields: Full Name, Business Name, Desired Domain (all required)
- `<form id="order-form" data-wa={SITE.whatsapp}>`
- `<script>` block: preventDefault → validate → build wa.me URL → window.open
- Per-field `<span data-error="fieldName">` for inline error messages
- WhatsApp message format:
  ```
  Halo, saya ingin pesan website.
  Nama: [name]
  Bisnis: [business]
  Domain: [domain]
  ```

### FinalCTA.astro

- Background `#0F172A`
- Headline: "It's Time for Your Business to Look More Professional"
- CTA: `Get a Free Consultation Now` → wa.me link

---

## Phase 6 — Pages

### src/pages/index.astro

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro'
import Hero from '@/components/sections/Hero.astro'
// ... all other sections
---
<BaseLayout title="Calonweb.site — Professional Websites for SMEs"
            description="Professional website development for Indonesian SMEs starting IDR 699,000."
            isHome>
  <Hero /><Stats /><Problem /><Solution /><Demo />
  <Advantages /><Pricing /><Articles /><FAQ /><OrderForm /><FinalCTA />
</BaseLayout>
```

### src/pages/demo/[slug].astro

- `getStaticPaths()` from demo collection
- Show: large image, title, description, features list, external demo link, CTA "Order a Similar Website" → `/#order`

### src/pages/articles/index.astro

- All articles sorted by date desc
- 2-col grid + client-side category filter (JS, `data-category` attribute)

### src/pages/articles/[slug].astro

- `getStaticPaths()` from articles collection
- `ArticleLayout`: hero image, title, category badge, date, `<Content />`, CTA at end

---

## Phase 7 — SEO & Performance

- `public/robots.txt`: allow all, sitemap URL
- JSON-LD LocalBusiness schema on home page (via `isHome` prop in BaseLayout)
- All images: `width`, `height`, `loading="lazy"`, `alt` required
- Use `<Image />` from `astro:assets` for all content images
- Verify: `astro build` = 0 errors, `astro check` = 0 type errors
- WCAG AA: keyboard nav, aria-expanded on FAQ, aria-label on menu toggle

---

## Phase 8 — Placeholder Assets

Create SVG placeholders (800×500, solid color bg, white centered text):
- `public/images/demo/`: laundry, construction, cafe, catering, travel, workshop
- `public/images/articles/`: sme, pricing, national, order
- `public/favicon.svg`: simple "C" lettermark in primary blue

---

## Deliverables Checklist

- [ ] `npm run build` — 0 errors
- [ ] `npx astro check` — 0 type errors
- [ ] All 11 sections visible at localhost:4321
- [ ] `/articles`, `/articles/[slug]`, `/demo/[slug]` render correctly
- [ ] Order form opens WhatsApp with correct pre-filled message
- [ ] Floating WhatsApp button works on mobile + desktop
- [ ] No `console.error` in browser devtools
- [ ] All files committed to branch `calonweb/frontend-setup`

Commit format: `feat: [what was built]`

---

## Hard Constraints

- No React, Vue, Svelte, or any component framework
- No `client:only` — use `client:visible` or `client:load`
- No lorem ipsum — write real English/Indonesian copy
- All Tailwind classes must be valid v4
- Max 150 lines per component file
- No extra files beyond the structure above
