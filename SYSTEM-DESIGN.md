# System Design Diagrams

Visual companion to [`PRD.md`](./PRD.md). All diagrams use Mermaid and render
natively on GitHub. They describe a **static-first (JAMstack)** architecture with
no backend or database of our own.

---

## 1. High-Level System Architecture

```mermaid
flowchart LR
    Dev["👨‍💻 Developer<br/>(local dev)"] -->|git push| Repo["📦 GitHub Repo<br/>source + content"]
    Repo -->|CI/CD trigger| Build["⚙️ Vercel Build<br/>astro build"]
    Build -->|static output /dist| Edge["🌐 Vercel Edge<br/>static CDN"]

    Visitor["🧑 Visitor<br/>(browser)"] <-->|HTTPS request| CF["☁️ Cloudflare<br/>CDN / SSL"]
    CF <-->|serve static HTML| Edge

    Visitor -->|form submit / CTA| WA["💬 WhatsApp<br/>wa.me (external)"]

    classDef ours fill:#2563EB,stroke:#1e40af,color:#fff
    classDef ext fill:#7C3AED,stroke:#5b21b6,color:#fff
    classDef infra fill:#0F172A,stroke:#000,color:#fff
    class Repo,Build,Edge ours
    class WA ext
    class CF infra
```

> **No application server, no runtime database.** Everything is pre-rendered at
> build time and served from a CDN. Orders are delegated to WhatsApp.

---

## 2. Build & Deployment Pipeline

```mermaid
flowchart TD
    A["Commit to feature branch<br/>calonweb/feature-x"] --> B["Open Pull Request → main"]
    B --> C["Vercel Preview Deployment<br/>unique *.vercel.app URL"]
    C --> D{"Review & QA<br/>passes?"}
    D -->|No| A
    D -->|Yes| E["Merge to main"]
    E --> F["Production build<br/>npm install → astro build"]
    F --> G["Upload static assets<br/>Vercel Edge + Cloudflare"]
    G --> H["Live at jagoweb.site<br/>via DNS"]

    classDef start fill:#2563EB,stroke:#1e40af,color:#fff
    classDef live fill:#16a34a,stroke:#15803d,color:#fff
    class A start
    class H live
```

| Environment | Trigger | URL | Purpose |
|---|---|---|---|
| Local | `npm run dev` | localhost:4321 | Development |
| Preview | PR opened/updated | `*-preview.vercel.app` | QA / review |
| Production | merge to `main` | jagoweb.site | Live |

---

## 3. Request Lifecycle & Rendering

```mermaid
sequenceDiagram
    participant B as Browser
    participant CF as Cloudflare CDN
    participant E as Vercel Edge
    participant I as Client Islands (JS)

    B->>CF: GET / (HTTPS)
    CF->>E: cache miss → fetch
    E-->>CF: pre-built static HTML
    CF-->>B: HTML + CSS (cached)
    Note over B: Full page visible immediately<br/>(no loading spinner)
    B->>I: hydrate islands on scroll/interaction
    Note over I: StatsCounter, FaqAccordion,<br/>OrderForm, MobileMenu only
```

**Build-time vs request-time split:**

```mermaid
flowchart LR
    subgraph BuildTime["⚙️ Build Time (once per deploy)"]
        MDX["MDX / JSON<br/>content files"] --> Gen["Astro generates<br/>static routes"]
        Cfg["site.ts config"] --> Gen
        Gen --> HTML["Static HTML +<br/>hashed CSS/JS"]
    end
    subgraph RunTime["🧑 Request Time (per visitor)"]
        HTML --> Serve["CDN serves HTML<br/>(zero compute)"]
        Serve --> Hydrate["Islands hydrate<br/>where needed"]
    end
```

---

## 4. Component & Island Architecture

```mermaid
flowchart TD
    Base["BaseLayout.astro"] --> Nav["Navbar"]
    Base --> Foot["Footer"]
    Base --> FWA["FloatingWhatsApp"]
    Base --> BNav["BottomNavMobile"]
    Base --> Page["index.astro (page)"]

    Page --> S1["Hero"]
    Page --> S2["Stats ⚡"]
    Page --> S3["Problem"]
    Page --> S4["Solution"]
    Page --> S5["Demo"]
    Page --> S6["Advantages"]
    Page --> S7["Pricing"]
    Page --> S8["Articles"]
    Page --> S9["FAQ ⚡"]
    Page --> S10["OrderForm ⚡"]
    Page --> S11["FinalCTA"]

    Nav -.-> MM["MobileMenu ⚡"]

    classDef island fill:#7C3AED,stroke:#5b21b6,color:#fff
    classDef static fill:#e0e7ff,stroke:#2563EB,color:#1e3a8a
    class S2,S9,S10,MM island
    class S1,S3,S4,S5,S6,S7,S8,S11,Nav,Foot,FWA,BNav static

    Legend["⚡ = hydrated island (ships JS)<br/>others = static (0 JS)"]
```

**Hydration directives:**
- `client:visible` → `Stats`, `FAQ` (hydrate when scrolled into view)
- `client:load` → `MobileMenu`, `OrderForm` (ready on interaction)

---

## 5. Order Flow (No Backend)

```mermaid
sequenceDiagram
    actor V as Visitor
    participant F as OrderForm Island
    participant W as WhatsApp (wa.me)
    participant O as Business Owner

    V->>F: Fill name / business / domain
    V->>F: Click "Send Order"
    F->>F: Validate fields (client-side)
    F->>F: Build & URL-encode message
    F->>W: Open wa.me/<number>?text=...
    W->>O: Chat opens with pre-filled order
    Note over F,W: No data stored anywhere —<br/>lead lives in owner's WhatsApp
```

---

## 6. Data Classification

```mermaid
flowchart LR
    subgraph Static["Static Config (edit → redeploy)"]
        SC["site.ts<br/>brand, WA number"]
        PR["Pricing packages"]
    end
    subgraph Content["Content Collections (add file → redeploy)"]
        DM["demo/*.json<br/>portfolio"]
        AR["articles/*.mdx<br/>blog"]
    end
    subgraph Transient["Transient (not stored)"]
        OR["Order submissions<br/>→ WhatsApp"]
    end

    Static --> BuildOut["Static HTML"]
    Content --> BuildOut
    OR -.->|real-time, no persistence| WAExt["WhatsApp"]

    classDef t fill:#fee2e2,stroke:#dc2626,color:#7f1d1d
    class OR,WAExt t
```

> **No write path** exists into the system. Every content change is a Git commit
> that triggers a rebuild — keeping the attack surface minimal and hosting free.

---

## 7. Future Scalability Paths (v2+, not in v1)

```mermaid
flowchart TD
    V1["v1: Static + Stateless"] --> N1["Need: store leads?"]
    V1 --> N2["Need: non-tech editing?"]
    V1 --> N3["Need: online payment?"]
    V1 --> N4["Need: multi-language?"]

    N1 --> S1["+ Serverless Function<br/>+ Supabase DB"]
    N2 --> S2["+ Headless CMS<br/>(Sanity / Decap)"]
    N3 --> S3["+ Payment gateway<br/>(Midtrans / Xendit)<br/>+ webhooks"]
    N4 --> S4["Astro i18n routing<br/>(build-time only)"]

    classDef v1 fill:#16a34a,stroke:#15803d,color:#fff
    classDef future fill:#f59e0b,stroke:#b45309,color:#fff
    class V1 v1
    class S1,S2,S3,S4 future
```

**Design principle:** keep v1 static and stateless; add infrastructure only when a
concrete requirement justifies it.

---

*See [`PRD.md`](./PRD.md) §16–§23 for the written explanation behind each diagram.*
