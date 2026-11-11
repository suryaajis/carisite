# Implementation architecture

## Rendering and routes

Astro builds 51 static HTML pages. JSON demo collections and MDX articles are validated at build time. Marketing pages use `BaseLayout`; live demos use an isolated `DemoLayout` so brand styles cannot leak into each other. Case study and legacy demo detail routes share `CaseStudy.astro`.

Services and packages are maintained in `src/data/services.ts`. Contact details and the WhatsApp destination are centralized in `src/config/site.ts`. No backend, authentication, database, CMS or payment gateway has been added.

The viewer is a separate, small HTML shell. A same-origin iframe gets an actual viewport width of 1440, 768 or 390 px. The outer holder scales it to fit the available space without changing the viewport used by demo media queries. Reload and demo changes have loading/error states. Shell links in an embedded demo use `_top`, avoiding nested viewers or marketing pages inside the frame. A direct-page link remains available on mobile.

## Visual foundations

- Forest `#103d2e`, paper `#f4f3eb`, lime `#d7f876`, ink `#132c25`.
- Inter body and Plus Jakarta Sans headings, locally served. Georgia supplies editorial italics.
- Tokens and the shared main-site class system live in `src/styles/global.css`.
- Each demo owns its palette, composition and scoped CSS. Stock images are optimized WebP files stored locally.
- Text colors were adjusted against measured foreground/background pairs using Axe. Screenshots were inspected after rendering.

## Motion and 3D

Motion is the single JavaScript animation library. It handles small entrance, hover and filter transitions. Initial content is visible in HTML; no shared CSS hides content until a script succeeds. Reduced motion disables or shortens animation.

The hero showreel changes real demo screenshots. It starts paused, supports next/play/pause, and stops when the document is hidden. It is an HTML/JS animation, not a generated video file.

Three.js is dynamically imported only when an eligible desktop visitor approaches the interactive studio or explicitly enables 3D. The scene contains an actual textured website browser, mobile device, frame geometry, lighting and subtle pointer depth. Mobile, reduced motion and data saver begin with an HTML poster. Unsupported WebGL and lost contexts restore that poster.

The renderer caps DPR at 1.5. Intersection and page visibility stop animation work. Pause/reduced motion leave a single rendered frame. Page lifecycle cleanup disposes textures, geometry, materials, observers, listeners and the renderer. Navigation remains ordinary static navigation; no client router introduces repeated initialization.

## Brief and data

The form validates required inputs and constructs a text-only summary using `textContent`. A URL-encoded WhatsApp link carries the selected package/demo and needs. Editing the form hides a stale summary. Opening the link prepares a message in WhatsApp; sending remains the visitor's action.

Main site forms do not persist or transmit leads to a Carisite server. Demo forms and transactions use local sample data; the CSV export contains synthetic records. No analytics or marketing cookies are installed.

## Search and delivery

Marketing pages have canonical, description, OG/Twitter metadata and a generated sitemap. Demo live/viewer pages intentionally have `noindex, follow` and are omitted from the sitemap. A generated 1200×630 OG PNG is used by default. No fictional client proof is in structured data.

Docker builds with Node 24 and serves only `dist/` using Nginx. The runtime image has no Node/Astro server. Unknown routes return the custom page with HTTP 404. Fingerprinted `/_astro/` bundles have immutable cache; unhashed public images revalidate daily. Same-origin iframe embedding is permitted.

## Verification and limits

See `qa/verification.json`, `qa/routes.json`, `qa/accessibility.json`, `qa/nginx.json` and `qa/lighthouse/summary.json`. Browser tests use local Microsoft Edge through Playwright. Viewports 360, 390, 768, 1024 and 1440 px are checked; no-JS, reduced motion, unavailable WebGL, real 3D, dialog and form flows are included.

Lighthouse scores are lab measurements with simulated mobile throttling. They do not establish field Core Web Vitals. Demo SEO is intentionally reduced by noindex. Automated Axe passes do not certify every accessibility requirement; screenshots and keyboard flows are also reviewed.

The original baseline could not start until dependencies were reinstalled (missing Astro executable). Baseline source findings were recorded, but there is no fabricated before/after Lighthouse comparison.

The retained Astro 5 build toolchain still has advisories after non-breaking audit fixes; upgrading to a patched major and migrating its integrations is separate maintenance. Dependency data is recorded honestly in `qa/dependency-audit.json`. This implementation does not expose the development server publicly or deploy the site.
