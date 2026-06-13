# PRD — Website Jasa Pembuatan Website UMKM
**Referensi:** jagoweb.site  
**Tech Stack:** Astro + Tailwind CSS  
**Tanggal:** 2026-06-13  
**Status:** Draft

---

## 1. Ringkasan Produk

Website profil jasa pembuatan website yang menyasar segmen **UMKM Indonesia**. Tujuan utama situs adalah mengkonversi pengunjung menjadi calon klien melalui alur: edukasi masalah → tunjukkan solusi → demo portofolio → harga transparan → form order langsung ke WhatsApp.

**Target Pengguna:** Pemilik usaha kecil menengah (UMKM) yang belum memiliki website bisnis.

---

## 2. Tujuan & Metrik Keberhasilan

| Tujuan | Metrik |
|---|---|
| Meningkatkan konversi order | Jumlah klik tombol "Pesan Sekarang" / "Kirim Pesanan" |
| Membangun kepercayaan | Waktu di halaman > 2 menit |
| Visibilitas Google | Core Web Vitals hijau semua, Lighthouse Score > 90 |
| Kemudahan kontak | Klik WhatsApp floating button |

---

## 3. Sitemap & Navigasi

```
/                     → Landing Page (single-page scroll)
/demo/[slug]          → Halaman detail demo website klien
/artikel              → Daftar artikel blog
/artikel/[slug]       → Detail artikel
```

**Navigasi (Hamburger Menu Mobile):**
- Home
- Demo Website
- Keunggulan
- Harga
- Artikel
- FAQ
- Order

---

## 4. Spesifikasi Section per Section

### 4.1 Navbar
- Logo teks: `Jago**web**.site` (huruf "web" berwarna biru)
- Hamburger menu di mobile
- Sticky di atas saat scroll
- Link navigasi scroll ke anchor section

---

### 4.2 Hero Section
**Elemen:**
- Headline utama: *"Website Profesional untuk UMKM yang Ingin Naik Kelas"*
- Subheadline: teks pendukung manfaat website
- 2 CTA button:
  - `Lihat Demo` → scroll ke section Demo (filled blue)
  - `Konsultasi Gratis` → buka WhatsApp (outlined)
- Badge row: ✓ Mobile Friendly | ✓ Domain .COM | ✓ SEO Friendly | ✓ Support WhatsApp
- Mockup visual: ilustrasi laptop + smartphone (SVG atau gambar statis)
- Background: gradient biru muda / lavender

**Behavior:**
- Fade-in animasi pada headline saat halaman load
- CTA button hover effect

---

### 4.3 Stats Section
**4 item stat:**
| Label | Value |
|---|---|
| Demo Website | angka dinamis (dari data) |
| Respon Cepat | 24 Jam |
| Mobile Friendly | 100% |
| Siap Google | SEO |

**Behavior:**
- Counter animasi (count-up) saat section masuk viewport
- Layout 2x2 grid

---

### 4.4 Problem Section
**Label chip:** `Masalah`  
**Headline:** *"Masih Mengandalkan Media Sosial Saja?"*

**4 pain-point card** (icon + judul + deskripsi):
1. Sulit ditemukan di Google
2. Calon pelanggan sulit percaya
3. Informasi usaha tidak lengkap
4. Tidak memiliki profil bisnis profesional

**Layout:** 2x2 grid, icon berwarna merah muda/oranye

---

### 4.5 Solution Section
**Label chip:** `Solusi`  
**Headline:** *"Website yang Bekerja untuk Bisnis Anda 24 Jam"*

**6 feature card** (icon + judul + deskripsi):
1. Website Profesional — desain modern & responsif
2. Tombol WhatsApp Langsung — 1 klik hubungi
3. SEO Friendly — mudah ditemukan Google
4. Mobile Friendly — tampil di semua perangkat
5. Galeri Produk & Jasa — tampilkan portfolio visual
6. Form Pemesanan — pelanggan bisa pesan langsung

**Layout:** 2x3 grid (mobile: 2 kolom)

---

### 4.6 Demo / Portfolio Section
**Label chip:** `Demo`  
**Headline:** *"Lihat Contoh Website UMKM"*  
**Subheadline:** teks deskripsi singkat

**Item portofolio** (bisa dikembangkan):
| Niche | Deskripsi |
|---|---|
| Laundry | Website profesional untuk usaha laundry kiloan dan dry cleaning |
| Konstruksi | Website company profile untuk kontraktor dan perusahaan konstruksi |
| Cafe | Website modern untuk cafe dan restoran dengan menu digital |
| Catering | Website untuk usaha catering dengan katalog menu dan pemesanan online |
| Travel | Website untuk agen travel dan tour dengan paket wisata |
| Bengkel | Website untuk bengkel motor dan mobil dengan layanan dan booking |

**Setiap card:**
- Gambar thumbnail (landscape)
- Label niche (teks)
- Deskripsi 1 baris
- Tombol `Lihat Demo` → link ke halaman demo atau URL demo eksternal

**Layout:** 2 kolom grid, infinite scroll atau "Lihat Semua" button

---

### 4.7 Keunggulan Section
**Label chip:** `Keunggulan`  
**Headline:** *"Mengapa Memilih [nama brand]?"*  
**Background:** Dark navy / dark blue

**8 item checklist** (2 kolom):
- Desain modern dan profesional
- Mobile friendly
- Cepat diakses
- SEO friendly
- Domain .COM
- Support setelah website selesai
- Cocok untuk berbagai jenis UMKM
- Integrasi WhatsApp

---

### 4.8 Pricing Section
**Label chip:** `Harga`  
**Headline:** *"Pilih Paket Terbaik"*  
**Subheadline:** teks harga terjangkau

**2 paket pricing card:**

**Paket 1 — Landing Page**
- Harga: Rp699.000
- Fitur: Domain .COM, Hosting, 1 Halaman, Tombol WhatsApp, Mobile Friendly, SEO Dasar
- CTA: `Pesan Sekarang` (outline button) → scroll ke form order

**Paket 2 — Company Profile** *(badge: Paling Populer)*
- Harga: Rp1.990.000
- Fitur: Domain .COM, Hosting, Multi Halaman, Profil Perusahaan, Galeri, Form Kontak, SEO Dasar, Mobile Friendly
- CTA: `Pesan Sekarang` (filled blue button) → scroll ke form order

**Behavior:**
- Paket populer mendapat border/highlight biru
- Badge "Paling Populer" di pojok kanan atas

---

### 4.9 Blog / Artikel Section
**Label chip:** `Artikel`  
**Headline:** *"Artikel & Tips Bisnis"*

**Format artikel card:**
- Thumbnail gambar
- Chip kategori (contoh: UMKM, Harga, Nasional, Order)
- Judul artikel
- Deskripsi singkat 1-2 baris

**Content awal (seed articles):**
1. Jasa Pembuatan Website untuk UMKM
2. Harga Pembuatan Website UMKM 2026
3. Jasa Website UMKM Profesional Indonesia
4. Pesan Jasa Pembuatan Website UMKM Online

**Layout:** 2 kolom grid  
**Link:** Setiap card → `/artikel/[slug]`

---

### 4.10 FAQ Section
**Label chip:** `FAQ`  
**Headline:** *"Pertanyaan yang Sering Ditanyakan"*

**5 pertanyaan accordion:**
1. Berapa lama pengerjaan website?
2. Apakah domain dan hosting sudah termasuk?
3. Apakah website bisa dibuka di HP?
4. Apakah website bisa tampil di Google?
5. Bagaimana cara memesan website?

**Behavior:** Klik pertanyaan → expand jawaban (animasi smooth)

---

### 4.11 Order Form Section
**Label chip:** `Order`  
**Headline:** *"Pesan Website Sekarang"*  
**Subheadline:** form di bawah, kami akan segera menghubungi

**Fields:**
- Nama Lengkap (text input, required)
- Nama Bisnis (text input, required)
- Nama Domain yang Diinginkan (text input, placeholder: contoh: bisnisku.com)

**Submit button:** `Kirim Pesanan` → redirect ke WhatsApp dengan pesan pre-filled berisi data form

**Behavior:**
- Validasi client-side sebelum submit
- Pesan WhatsApp format:
  ```
  Halo, saya ingin pesan website.
  Nama: [nama]
  Bisnis: [nama bisnis]
  Domain: [domain]
  ```

---

### 4.12 Final CTA Section
**Background:** Dark navy  
**Headline:** *"Saatnya Bisnis Anda Tampil Lebih Profesional"*  
**Subheadline:** teks manfaat singkat  
**CTA button:** `Konsultasi Gratis Sekarang` → buka WhatsApp

---

### 4.13 Footer
- Logo + tagline singkat
- Link navigasi
- Informasi kontak (nomor WhatsApp, email opsional)
- Copyright

---

### 4.14 Komponen Global
**Floating WhatsApp Button:**
- Posisi: fixed bottom-right
- Ikon WhatsApp hijau
- Selalu tampil di semua halaman
- Klik → buka wa.me link

**Sticky Bottom Navbar (Mobile only):**
- 3 item: MENU | LAINNYA | HUBUNGI KAMI
- Tampil hanya di layar < 768px
- HUBUNGI KAMI → buka WhatsApp

---

## 5. Halaman Detail Demo (/demo/[slug])

Setiap item portfolio memiliki halaman detail dengan:
- Screenshot / preview website demo
- Deskripsi singkat niche
- Fitur yang ditonjolkan
- Link preview website demo (eksternal)
- CTA: "Pesan Website Serupa"

---

## 6. Halaman Artikel (/artikel & /artikel/[slug])

**Daftar artikel (`/artikel`):**
- Grid semua artikel
- Filter per kategori

**Detail artikel (`/artikel/[slug]):**
- Judul, kategori, tanggal publish
- Konten artikel (Markdown/MDX)
- CTA di akhir artikel → form order

---

## 7. Tech Stack

| Layer | Teknologi | Alasan |
|---|---|---|
| Framework | **Astro 4+** | Static-first, SEO optimal, zero JS by default |
| Styling | **Tailwind CSS v4** | Utility-first, konsisten, cepat |
| Komponen interaktif | **Astro Islands** (React/Preact) | Hanya load JS untuk FAQ accordion, counter, form |
| Blog/Konten | **Astro Content Collections** | MDX untuk artikel, type-safe |
| Form | **Native HTML form** + redirect wa.me | Tanpa backend, simpel |
| Animasi | **CSS + Intersection Observer** | Counter animasi, fade-in section |
| Icons | **astro-icon + iconify** | SVG icons ringan |
| Fonts | **Google Fonts via @fontsource** | Inter / Plus Jakarta Sans |
| Deployment | **Vercel** | Free tier, CI/CD otomatis dari GitHub |
| Domain | **Registrar pilihan** | Domain .site / .com |
| CDN & SSL | **Cloudflare** | Gratis, performa & proteksi |
| Image Optimization | **Astro built-in `<Image />`** | Otomatis compress & lazy load |

---

## 8. Struktur Folder Project

```
/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── demo/           ← thumbnail portofolio
│       └── artikel/        ← thumbnail blog
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
│   │   │   ├── Keunggulan.astro
│   │   │   ├── Pricing.astro
│   │   │   ├── Artikel.astro
│   │   │   ├── FAQ.astro
│   │   │   ├── OrderForm.astro
│   │   │   └── FinalCTA.astro
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── Badge.astro
│   │       ├── Card.astro
│   │       └── SectionLabel.astro
│   ├── content/
│   │   ├── config.ts       ← definisi Content Collections
│   │   ├── artikel/        ← file .mdx per artikel
│   │   └── demo/           ← file .json per item portfolio
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ArticleLayout.astro
│   ├── pages/
│   │   ├── index.astro     ← landing page utama
│   │   ├── demo/
│   │   │   └── [slug].astro
│   │   └── artikel/
│   │       ├── index.astro
│   │       └── [slug].astro
│   ├── styles/
│   │   └── global.css
│   └── config/
│       ├── site.ts         ← konfigurasi global (nama brand, no WA, dll)
│       └── navigation.ts   ← item navigasi
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## 9. Konfigurasi Site (site.ts)

Data yang mudah diubah tanpa menyentuh komponen:

```typescript
export const SITE = {
  name: "Jagoweb.site",
  tagline: "Website Profesional untuk UMKM",
  whatsapp: "628xxxxxxxxxx",
  whatsappMessage: "Halo, saya ingin konsultasi pembuatan website",
  email: "hello@domain.com",
  domain: "jagoweb.site",
}
```

---

## 10. Data Konten (Content Collections)

### Demo/Portfolio (`src/content/demo/*.json`)
```json
{
  "title": "Website Laundry",
  "slug": "laundry",
  "description": "Website profesional untuk usaha laundry kiloan dan dry cleaning.",
  "image": "/images/demo/laundry.jpg",
  "demoUrl": "https://demo-laundry.vercel.app",
  "category": "Laundry"
}
```

### Artikel (`src/content/artikel/*.mdx`)
```mdx
---
title: "Jasa Pembuatan Website untuk UMKM"
slug: "jasa-pembuatan-website-umkm"
category: "UMKM"
publishDate: 2026-06-01
image: "/images/artikel/umkm.jpg"
description: "Website profesional untuk UMKM di seluruh Indonesia..."
---

Konten artikel dalam format Markdown...
```

---

## 11. Desain & Branding

| Elemen | Nilai |
|---|---|
| Primary Color | `#2563EB` (biru) |
| Accent Color | `#7C3AED` (ungu, untuk highlight teks) |
| Dark Section BG | `#0F172A` (navy gelap) |
| Background | `#F8FAFF` (biru sangat muda) |
| Font Heading | Plus Jakarta Sans (Bold) |
| Font Body | Inter (Regular / Medium) |
| Border Radius | `rounded-xl` (12px) |
| Shadow | `shadow-sm` hingga `shadow-md` |

---

## 12. SEO & Performance

- Setiap halaman: `<title>`, `<meta description>`, Open Graph tags
- Sitemap otomatis via `@astrojs/sitemap`
- Robots.txt
- Schema markup (LocalBusiness JSON-LD) di halaman utama
- Semua gambar: `loading="lazy"`, `width`/`height` wajib diisi
- Target Lighthouse: Performance > 90, SEO = 100, Accessibility > 90

---

## 13. Fase Development

| Fase | Scope | Estimasi |
|---|---|---|
| **Fase 1** | Setup project + layout dasar (Navbar, Footer, FloatingWA) | 0.5 hari |
| **Fase 2** | Hero + Stats + Problem + Solution sections | 1 hari |
| **Fase 3** | Demo/Portfolio + Keunggulan + Pricing sections | 1 hari |
| **Fase 4** | FAQ + Order Form + Final CTA | 0.5 hari |
| **Fase 5** | Halaman Artikel (list + detail) + Content Collections | 1 hari |
| **Fase 6** | Halaman Demo detail + data dummy | 0.5 hari |
| **Fase 7** | SEO, sitemap, performance optimization | 0.5 hari |
| **Fase 8** | Deploy ke Vercel + custom domain + Cloudflare | 0.5 hari |
| **Total** | | **~5-6 hari** |

---

## 14. Out of Scope (Tidak Dibangun)

- Panel admin / CMS dashboard (konten dikelola via file MDX)
- Sistem login / autentikasi
- Payment gateway
- Database / backend API
- Live chat selain WhatsApp

---

## 15. Dependensi Package

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

*Dokumen ini menjadi acuan tunggal selama development. Update sesuai perubahan requirement.*
