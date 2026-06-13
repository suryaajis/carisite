# PRD — Website Development Services for SMEs
**Reference:** jagoweb.site
**Tech Stack:** Astro + Tailwind CSS
**Date:** 2026-06-13
**Status:** Draft

---

## 1. Product Overview

A company-profile website for a web development service targeting the **Indonesian SME (UMKM) segment**. The primary goal is to convert visitors into prospective clients through the flow: educate about the problem → present the solution → showcase portfolio demos → transparent pricing → direct order form to WhatsApp.

**Target Users:** Small and medium business owners who do not yet have a business website.

---

## 2. Goals & Success Metrics

| Goal | Metric |
|---|---|
| Increase order conversions | Number of clicks on "Order Now" / "Send Order" buttons |
| Build trust | Time on page > 2 minutes |
| Google visibility | All Core Web Vitals green, Lighthouse Score > 90 |
| Ease of contact | Clicks on the WhatsApp floating button |

---

## 3. Sitemap & Navigation

```
/                     → Landing Page (single-page scroll)
/demo/[slug]          → Client demo website detail page
/articles             → Blog article listing
/articles/[slug]      → Article detail
```

**Navigation (Mobile Hamburger Menu):**
- Home
- Demo Websites
- Advantages
- Pricing
- Articles
- FAQ
- Order

---

## 4. Section-by-Section Specification

### 4.1 Navbar
- Text logo: `Jago**web**.site` (the word "web" in blue)
- Hamburger menu on mobile
- Sticky on scroll
- Navigation links scroll to anchor sections

---

### 4.2 Hero Section
**Elements:**
- Main headline: *"Professional Websites for SMEs Ready to Level Up"*
- Subheadline: supporting copy about the benefits of a website
- 2 CTA buttons:
  - `View Demo` → scroll to Demo section (filled blue)
  - `Free Consultation` → open WhatsApp (outlined)
- Badge row: ✓ Mobile Friendly | ✓ .COM Domain | ✓ SEO Friendly | ✓ WhatsApp Support
- Mockup visual: laptop + smartphone illustration (SVG or static image)
- Background: light blue / lavender gradient

**Behavior:**
- Fade-in animation on the headline at page load
- CTA button hover effects

---

### 4.3 Stats Section
**4 stat items:**
| Label | Value |
|---|---|
| Demo Websites | dynamic count (from data) |
| Fast Response | 24 Hours |
| Mobile Friendly | 100% |
| Google Ready | SEO |

**Behavior:**
- Count-up animation when the section enters the viewport
- 2x2 grid layout

---

### 4.4 Problem Section
**Label chip:** `Problem`
**Headline:** *"Still Relying on Social Media Alone?"*

**4 pain-point cards** (icon + title + description):
1. Hard to be found on Google
2. Prospects find it hard to trust you
3. Incomplete business information
4. No professional business profile

**Layout:** 2x2 grid, icons in pink/orange tones

---

### 4.5 Solution Section
**Label chip:** `Solution`
**Headline:** *"A Website That Works for Your Business 24/7"*

**6 feature cards** (icon + title + description):
1. Professional Website — modern & responsive design
2. Direct WhatsApp Button — one-click contact
3. SEO Friendly — easy to find on Google
4. Mobile Friendly — looks great on every device
5. Product & Service Gallery — showcase your portfolio visually
6. Order Form — customers can order directly

**Layout:** 2x3 grid (mobile: 2 columns)

---

### 4.6 Demo / Portfolio Section
**Label chip:** `Demo`
**Headline:** *"See Example SME Websites"*
**Subheadline:** short descriptive copy

**Portfolio items** (extensible):
| Niche | Description |
|---|---|
| Laundry | Professional website for laundry and dry-cleaning businesses |
| Construction | Company profile website for contractors and construction firms |
| Cafe | Modern website for cafes and restaurants with a digital menu |
| Catering | Website for catering businesses with a menu catalog and online ordering |
| Travel | Website for travel and tour agents with travel packages |
| Workshop | Website for car and motorcycle workshops with services and booking |

**Each card:**
- Thumbnail image (landscape)
- Niche label (text)
- One-line description
- `View Demo` button → links to the demo page or external demo URL

**Layout:** 2-column grid, with infinite scroll or a "View All" button

---

### 4.7 Advantages Section
**Label chip:** `Advantages`
**Headline:** *"Why Choose [brand name]?"*
**Background:** Dark navy / dark blue

**8 checklist items** (2 columns):
- Modern and professional design
- Mobile friendly
- Fast loading
- SEO friendly
- .COM domain
- Support after the website is completed
- Suitable for various types of SMEs
- WhatsApp integration

---

### 4.8 Pricing Section
**Label chip:** `Pricing`
**Headline:** *"Choose the Best Package"*
**Subheadline:** affordable pricing copy

**2 pricing cards:**

**Package 1 — Landing Page**
- Price: IDR 699,000
- Features: .COM Domain, Hosting, 1 Page, WhatsApp Button, Mobile Friendly, Basic SEO
- CTA: `Order Now` (outline button) → scroll to order form

**Package 2 — Company Profile** *(badge: Most Popular)*
- Price: IDR 1,990,000
- Features: .COM Domain, Hosting, Multiple Pages, Company Profile, Gallery, Contact Form, Basic SEO, Mobile Friendly
- CTA: `Order Now` (filled blue button) → scroll to order form

**Behavior:**
- The popular package gets a blue border/highlight
- "Most Popular" badge in the top-right corner

---

### 4.9 Blog / Articles Section
**Label chip:** `Articles`
**Headline:** *"Articles & Business Tips"*

**Article card format:**
- Thumbnail image
- Category chip (e.g., SME, Pricing, National, Order)
- Article title
- Short 1–2 line description

**Initial content (seed articles):**
1. Website Development Services for SMEs
2. SME Website Development Pricing 2026
3. Professional SME Website Services in Indonesia
4. Order Online SME Website Development Services

**Layout:** 2-column grid
**Link:** Each card → `/articles/[slug]`

---

### 4.10 FAQ Section
**Label chip:** `FAQ`
**Headline:** *"Frequently Asked Questions"*

**5 accordion questions:**
1. How long does website development take?
2. Are the domain and hosting included?
3. Can the website be opened on a phone?
4. Can the website appear on Google?
5. How do I order a website?

**Behavior:** Click a question → expand the answer (smooth animation)

---

### 4.11 Order Form Section
**Label chip:** `Order`
**Headline:** *"Order Your Website Now"*
**Subheadline:** fill in the form below and we will contact you shortly

**Fields:**
- Full Name (text input, required)
- Business Name (text input, required)
- Desired Domain Name (text input, placeholder: e.g. mybusiness.com)

**Submit button:** `Send Order` → redirect to WhatsApp with a pre-filled message containing the form data

**Behavior:**
- Client-side validation before submit
- WhatsApp message format:
  ```
  Hello, I would like to order a website.
  Name: [name]
  Business: [business name]
  Domain: [domain]
  ```

---

### 4.12 Final CTA Section
**Background:** Dark navy
**Headline:** *"It's Time for Your Business to Look More Professional"*
**Subheadline:** short benefit copy
**CTA button:** `Get a Free Consultation Now` → open WhatsApp

---

### 4.13 Footer
- Logo + short tagline
- Navigation links
- Contact information (WhatsApp number, optional email)
- Copyright

---

### 4.14 Global Components
**Floating WhatsApp Button:**
- Position: fixed bottom-right
- Green WhatsApp icon
- Always visible on every page
- Click → open the wa.me link

**Sticky Bottom Navbar (Mobile only):**
- 3 items: MENU | MORE | CONTACT US
- Visible only on screens < 768px
- CONTACT US → open WhatsApp

---

## 5. Demo Detail Page (/demo/[slug])

Each portfolio item has a detail page with:
- Screenshot / preview of the demo website
- Short niche description
- Highlighted features
- Link to the external demo website preview
- CTA: "Order a Similar Website"

---

## 6. Articles Pages (/articles & /articles/[slug])

**Article listing (`/articles`):**
- Grid of all articles
- Filter by category

**Article detail (`/articles/[slug]`):**
- Title, category, publish date
- Article content (Markdown/MDX)
- CTA at the end of the article → order form

---

## 7. Tech Stack

| Layer | Technology | Reason |
|---|---|---|
| Framework | **Astro 4+** | Static-first, optimal SEO, zero JS by default |
| Styling | **Tailwind CSS v4** | Utility-first, consistent, fast |
| Interactive components | **Astro Islands** (React/Preact) | Load JS only for FAQ accordion, counters, form |
| Blog/Content | **Astro Content Collections** | MDX for articles, type-safe |
| Form | **Native HTML form** + wa.me redirect | No backend, simple |
| Animation | **CSS + Intersection Observer** | Counter animation, section fade-in |
| Icons | **astro-icon + iconify** | Lightweight SVG icons |
| Fonts | **Google Fonts via @fontsource** | Inter / Plus Jakarta Sans |
| Deployment | **Vercel** | Free tier, automatic CI/CD from GitHub |
| Domain | **Registrar of choice** | .site / .com domain |
| CDN & SSL | **Cloudflare** | Free, performance & protection |
| Image Optimization | **Astro built-in `<Image />`** | Automatic compression & lazy loading |

---

## 8. Project Folder Structure

```
/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── demo/           ← portfolio thumbnails
│       └── articles/       ← blog thumbnails
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
│   │   ├── config.ts       ← Content Collections definitions
│   │   ├── articles/       ← .mdx file per article
│   │   └── demo/           ← .json file per portfolio item
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ArticleLayout.astro
│   ├── pages/
│   │   ├── index.astro     ← main landing page
│   │   ├── demo/
│   │   │   └── [slug].astro
│   │   └── articles/
│   │       ├── index.astro
│   │       └── [slug].astro
│   ├── styles/
│   │   └── global.css
│   └── config/
│       ├── site.ts         ← global config (brand name, WA number, etc.)
│       └── navigation.ts   ← navigation items
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## 9. Site Configuration (site.ts)

Data that can be changed easily without touching components:

```typescript
export const SITE = {
  name: "Jagoweb.site",
  tagline: "Professional Websites for SMEs",
  whatsapp: "628xxxxxxxxxx",
  whatsappMessage: "Hello, I would like to consult about website development",
  email: "hello@domain.com",
  domain: "jagoweb.site",
}
```

---

## 10. Content Data (Content Collections)

### Demo/Portfolio (`src/content/demo/*.json`)
```json
{
  "title": "Laundry Website",
  "slug": "laundry",
  "description": "Professional website for laundry and dry-cleaning businesses.",
  "image": "/images/demo/laundry.jpg",
  "demoUrl": "https://demo-laundry.vercel.app",
  "category": "Laundry"
}
```

### Article (`src/content/articles/*.mdx`)
```mdx
---
title: "Website Development Services for SMEs"
slug: "website-development-services-for-smes"
category: "SME"
publishDate: 2026-06-01
image: "/images/articles/sme.jpg"
description: "Professional websites for SMEs across Indonesia..."
---

Article content in Markdown format...
```

---

## 11. Design & Branding

| Element | Value |
|---|---|
| Primary Color | `#2563EB` (blue) |
| Accent Color | `#7C3AED` (purple, for text highlights) |
| Dark Section BG | `#0F172A` (dark navy) |
| Background | `#F8FAFF` (very light blue) |
| Heading Font | Plus Jakarta Sans (Bold) |
| Body Font | Inter (Regular / Medium) |
| Border Radius | `rounded-xl` (12px) |
| Shadow | `shadow-sm` to `shadow-md` |

---

## 12. SEO & Performance

- Each page: `<title>`, `<meta description>`, Open Graph tags
- Automatic sitemap via `@astrojs/sitemap`
- Robots.txt
- Schema markup (LocalBusiness JSON-LD) on the home page
- All images: `loading="lazy"`, `width`/`height` required
- Lighthouse targets: Performance > 90, SEO = 100, Accessibility > 90

---

## 13. Development Phases

| Phase | Scope | Estimate |
|---|---|---|
| **Phase 1** | Project setup + base layout (Navbar, Footer, FloatingWA) | 0.5 day |
| **Phase 2** | Hero + Stats + Problem + Solution sections | 1 day |
| **Phase 3** | Demo/Portfolio + Advantages + Pricing sections | 1 day |
| **Phase 4** | FAQ + Order Form + Final CTA | 0.5 day |
| **Phase 5** | Articles pages (list + detail) + Content Collections | 1 day |
| **Phase 6** | Demo detail page + dummy data | 0.5 day |
| **Phase 7** | SEO, sitemap, performance optimization | 0.5 day |
| **Phase 8** | Deploy to Vercel + custom domain + Cloudflare | 0.5 day |
| **Total** | | **~5–6 days** |

---

## 14. Out of Scope (Not Built)

- Admin panel / CMS dashboard (content managed via MDX files)
- Login / authentication system
- Payment gateway
- Database / backend API
- Live chat other than WhatsApp

---

## 15. Package Dependencies

```json
{
  "dependencies": {
    "astro": "^4.x",
    "@astrojs/tailwind": "^5.x",
    "@astrojs/mdx": "^3.x",
    "@astrojs/sitemap": "^3.x",
    "tailwindcss": "^4.x",
    "@fontsource/inter": "^5.x",
    "@fontsource/plus-jakarta-sans": "^5.x",
    "astro-icon": "^1.x",
    "@iconify-json/lucide": "^1.x"
  }
}
```

---

*This document is the single source of truth during development. Update it as requirements change.*
