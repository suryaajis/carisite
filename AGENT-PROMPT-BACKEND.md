# Agent Prompt — Backend / Server-Side (calonweb.site)

## Architecture Context

**calonweb.site is a static-first JAMstack site. There is intentionally no
traditional backend in v1.**

All "backend logic" is handled in two ways:
1. **Build-time** — Astro generates static HTML from content files
2. **Client-side islands** — small JS snippets run in the browser (form
   validation, WhatsApp redirect, counter animation)

This document covers:
- **Part A** — The client-side order logic (implement now, lives in frontend)
- **Part B** — Future backend upgrade paths (document only, do NOT build yet)

---

## Part A — Client-Side Order Logic (v1, implement now)

This is the only "backend logic" in v1. It lives inside
`src/components/sections/OrderForm.astro` as a `<script>` block.

### Responsibility

Accept form input → validate → construct a WhatsApp deep link → open it.
No data is stored. The "backend" is WhatsApp itself.

### Implementation Spec

The `<form>` element must have:
- `id="order-form"`
- `data-wa={SITE.whatsapp}` — WA number injected at build time from `site.ts`
  **Never hardcode the number in JS.**

`<script>` block (plain JS, no framework):

```typescript
const form = document.getElementById('order-form') as HTMLFormElement
const wa = form.dataset.wa!

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const name     = (form.querySelector('[name="fullName"]') as HTMLInputElement).value.trim()
  const business = (form.querySelector('[name="businessName"]') as HTMLInputElement).value.trim()
  const domain   = (form.querySelector('[name="domain"]') as HTMLInputElement).value.trim()

  // Clear previous errors
  form.querySelectorAll('[data-error]').forEach(el => (el.textContent = ''))

  // Validate
  const errors: Record<string, string> = {}
  if (!name)     errors.fullName     = 'Full name is required'
  if (!business) errors.businessName = 'Business name is required'
  if (!domain)   errors.domain       = 'Desired domain is required'

  if (Object.keys(errors).length > 0) {
    Object.entries(errors).forEach(([field, msg]) => {
      const el = form.querySelector(`[data-error="${field}"]`)
      if (el) el.textContent = msg
    })
    return
  }

  // Build WhatsApp message
  const message = [
    'Halo, saya ingin pesan website.',
    `Nama: ${name}`,
    `Bisnis: ${business}`,
    `Domain: ${domain}`,
  ].join('\n')

  const url = `https://wa.me/${wa}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank', 'noopener,noreferrer')
})
```

Each form field needs a sibling `<span data-error="fieldName" class="text-red-500 text-sm">` for inline errors.

### Manual Test Checklist

1. `npm run dev` → navigate to `/#order`
2. Submit empty → 3 inline error messages appear
3. Fill all fields → WhatsApp opens with:
   ```
   Halo, saya ingin pesan website.
   Nama: [entered name]
   Bisnis: [entered business]
   Domain: [entered domain]
   ```
4. Phone number in URL matches `SITE.whatsapp` in `site.ts`
5. Test on mobile browser — WhatsApp app should open directly

---

## Part B — Future Backend Upgrade Paths (v2+, do NOT build now)

Only implement when a concrete business need arises.

---

### B.1 — Lead Capture API (store orders)

**Trigger:** Owner needs a dashboard or CRM to track leads.

**Stack to add:**
- Astro output: `hybrid` + `@astrojs/vercel` adapter
- Supabase (PostgreSQL, free tier)
- Resend (transactional email)

**Endpoint:** `POST /api/order`

Request:
```typescript
{ fullName: string; businessName: string; domain: string; package?: 'landing-page' | 'company-profile' }
```

Response: `{ success: true; id: string }` (201) or `{ error: string }` (400/500)

Implementation outline (`src/pages/api/order.ts`):
```typescript
import type { APIRoute } from 'astro'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_SERVICE_ROLE_KEY,
)
const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json()
  // 1. Validate with Zod
  // 2. Insert to Supabase
  // 3. Send email via Resend
  const { data, error } = await supabase
    .from('leads')
    .insert({ ...body, created_at: new Date().toISOString() })
    .select('id').single()
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  await resend.emails.send({
    from: 'noreply@calonweb.site',
    to: 'owner@calonweb.site',
    subject: `New order: ${body.businessName}`,
    text: `Name: ${body.fullName}\nBusiness: ${body.businessName}\nDomain: ${body.domain}`,
  })
  return new Response(JSON.stringify({ success: true, id: data.id }), { status: 201 })
}
```

Supabase schema:
```sql
create table leads (
  id          uuid primary key default gen_random_uuid(),
  full_name   text not null,
  business    text not null,
  domain      text not null,
  package     text,
  created_at  timestamptz default now()
);
```

`astro.config.mjs` change:
```js
output: 'hybrid',
adapter: vercel(),
```

Required env vars:
```
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...
RESEND_API_KEY=re_...
```

---

### B.2 — CMS Integration (non-technical content editing)

**Trigger:** Owner wants to add articles/demos without touching code.

**Recommended:** Decap CMS (Git-based, free) — commits MDX/JSON back to GitHub
via GitHub API → Vercel detects push → rebuilds in ~30s. No extra hosting needed.

---

### B.3 — Payment Gateway

**Trigger:** Business needs online payment for packages.

**Stack:** Midtrans (most common Indonesian gateway) + Vercel Serverless Function
+ Supabase `payments` table. ~2–3 days dev effort.

---

## Environment Variables Reference

| Variable | Used in | Required now |
|---|---|---|
| `PUBLIC_WHATSAPP` | build-time, site.ts | ✅ Yes |
| `SUPABASE_URL` | Part B.1 | No |
| `SUPABASE_SERVICE_ROLE_KEY` | Part B.1 | No |
| `RESEND_API_KEY` | Part B.1 | No |
| `MIDTRANS_SERVER_KEY` | Part B.3 | No |

For v1, set in `.env.local`:
```
PUBLIC_WHATSAPP=628xxxxxxxxxx
```

---

## Security Rules (apply to all phases)

- Never expose `SUPABASE_SERVICE_ROLE_KEY` to the client
- Validate all API input with Zod before touching the DB
- Rate-limit `/api/*` via Vercel Edge Config
- Never log personal data (name, business) in production
- Restrict CORS on `/api/*` to `https://calonweb.site` only

---

## Part A Deliverables Checklist

- [ ] `data-wa` attribute on `<form>` is injected from `SITE.whatsapp` at build time
- [ ] Inline per-field validation (not alert())
- [ ] WhatsApp URL opens in new tab with correct message
- [ ] No hardcoded phone number in JS
- [ ] Works on mobile (opens WhatsApp app directly)
- [ ] Committed to branch `calonweb/frontend-setup`
