# Carisite — Digital Atelier

Website studio desain dan pengembangan website, dibuat dengan **Astro 5, Tailwind CSS 3, TypeScript, MDX, Motion, dan Three.js**. Semua halaman di-render statis. Tidak ada backend, akun pengguna, database lead, atau pembayaran produksi.

## Jalankan lokal

Gunakan Node.js 24 LTS dan npm. Dari folder ini:

```sh
npm ci
npm run dev
```

Buka `http://localhost:4321`. Untuk hasil produksi:

```sh
npm run check
npm run build
npm run preview
```

`build` menghasilkan `dist/`; pemeriksaan TypeScript dijalankan terpisah dengan `check`.

## Pengalaman utama

- Desain Emerald Digital Atelier: forest green, warm white, lime, tipografi editorial, dan komposisi karya besar.
- Homepage dengan karya pilihan, studio 3D, layanan, proses, harga acuan, jurnal, FAQ, dan brief proyek.
- Delapan demo konsep dengan identitas dan interaksi berbeda.
- Katalog dengan pencarian, filter kategori, hasil, serta empty state.
- Studi konsep dengan konteks bisnis, tantangan, pendekatan, fitur, dan screenshot desktop/mobile.
- Viewer same-origin dengan ukuran viewport desktop/tablet/mobile yang sesungguhnya, skala yang menyesuaikan layar, reload, pilihan demo, dan tautan buka langsung.
- Form brief dengan validasi, referensi demo/paket dari URL, ringkasan aman, lalu tautan WhatsApp. Membuka WhatsApp belum mengirim pesan.
- Showreel HTML/JS yang diputar atas pilihan pengguna, dapat dijeda, dan berhenti saat tab tidak aktif.
- Three.js dimuat bertahap pada desktop ketika studio mendekati viewport. Mobile, reduced motion, dan data saver memakai poster ringan; 3D tetap dapat diaktifkan secara eksplisit.
- Fallback tanpa JavaScript dan WebGL; navigasi keyboard, dialog native, serta reduced motion.

## Demo yang dapat dicoba

Semua bisnis/data di bawah adalah **konsep/simulasi**, bukan klaim proyek klien.

| Slug | Konsep | Interaksi |
| --- | --- | --- |
| `company-profile` | Artha Solusi Mandiri | Pilih layanan → brief konsultasi simulasi |
| `kriya-kayu` | Kriya Kayu Abadi | Filter, detail, shortlist, hapus pilihan |
| `restoran` | Rasa Nusantara | Filter menu, tanggal/waktu, ringkasan reservasi |
| `sekolah` | Sekolah Harapan Bangsa | Tab program dengan keyboard, rencana kunjungan |
| `properti` | Ruang | Filter kota/tipe, detail listing, kunjungan simulasi |
| `hotel` | SÉLA | Tanggal/tamu, pilihan kamar, total, reservasi simulasi |
| `ecommerce` | COMMON | Filter/sort, varian, keranjang, jumlah, checkout simulasi |
| `dashboard` | Pulse Workspace | Periode/grafik, pencarian/status, detail, ekspor CSV |

Tidak ada transaksi, pemesanan, pendaftaran, atau pengiriman data nyata di dalam demo.

## Route

| Route | Fungsi |
| --- | --- |
| `/` | Homepage |
| `/layanan`, `/layanan/[slug]` | Enam layanan dan detail cakupan |
| `/karya`, `/karya/[slug]` | Katalog dan studi konsep |
| `/demo` | Katalog demo |
| `/demo/[slug]` | Detail konsep, mempertahankan URL lama |
| `/demo/preview/[slug]` | Viewer perangkat |
| `/demo/live/[slug]` | Website demo mandiri |
| `/articles`, `/articles/[slug]` | Jurnal dan artikel MDX |
| `/tentang`, `/kontak`, `/privasi` | Profil, brief, dan alur data |
| `/404.html` | Halaman tidak ditemukan |

Demo live dan viewer diberi `noindex, follow` serta dikeluarkan dari sitemap agar merek fiktif tidak tampil sebagai bisnis nyata di pencarian. Detail konsep tetap dapat diindeks.

## Struktur dan pengelolaan konten

- `src/config/site.ts`: kontak, nomor WhatsApp, domain. Verifikasi kepemilikan sebelum publikasi.
- `src/data/services.ts`: layanan dan harga acuan terpusat.
- `src/content/config.ts`: schema artikel dan demo.
- `src/content/demo/*.json`: kategori, status, screenshot, tantangan, solusi, fitur, dan interaksi.
- `src/content/articles/*.mdx`: artikel.
- `src/styles/global.css`: design tokens dan shell utama.
- `src/styles/demo.css`, `src/layouts/DemoLayout.astro`: layout demo terisolasi.
- `src/scripts/scene.ts`: renderer 3D, lifecycle, resource disposal, pause/visibility.
- `public/images/demo-assets`: foto WebP lokal.
- `public/images/previews`: screenshot aktual demo.
- `docs/asset-sources.json`: asal dan lisensi foto.

Tambahkan demo sebagai file Astro di `src/pages/demo/live/` dan JSON di content collection. Gunakan `DemoLayout`, berikan `title`, `slug`, dan `description`. Implementasikan interaksi lokal yang jelas, lalu jalankan screenshot dan build. Jangan melabeli konsep sebagai proyek klien.

## QA dan aset

Dengan production preview aktif di port 4321:

```sh
npm run test:e2e
npm run capture:demos
npm run test:performance
```

Skrip memakai Microsoft Edge lokal melalui Playwright pada Windows. Untuk mesin lain, sesuaikan channel/browser path. Environment variable `PREVIEW_URL` dapat mengganti URL preview. `capture:demos` memakai Sharp; setelah memperbarui screenshot, jalankan build kembali.

- `docs/qa/verification.json`: hasil alur interaksi dan fallback.
- `docs/qa/routes.json`: pemeriksaan route produksi.
- `docs/qa/accessibility.json`: hasil Axe WCAG A/AA pada halaman representatif dan kedelapan demo.
- `docs/qa/lighthouse/`: laporan HTML/JSON serta skor lab mobile.
- `docs/qa/nginx.json`: status route, 404, dan cache pada container lokal.
- `docs/qa/*.png`: screenshot desktop/mobile, viewer, case study, dan 3D.

Lighthouse adalah pengukuran lab pada mesin lokal, bukan Core Web Vitals lapangan. Demo `noindex` sengaja tidak mendapat skor SEO penuh. Audit otomatis tidak menggantikan pemeriksaan visual/keyboard.

Foto berasal dari Unsplash; URL sumber dan referensi lisensinya dicatat di `docs/asset-sources.json`. Screenshot dan komposisi 3D dibuat dari demo di repo ini. Showreel berupa animasi web, bukan file video yang dihasilkan.

## Container lokal

```sh
docker build -t carisite-local .
docker run --rm -p 127.0.0.1:8080:80 carisite-local
```

Image akhir hanya berisi Nginx dan hasil statis; Node/dependency build tidak ikut masuk. `.dockerignore` mengecualikan dependency Windows, Git, environment files, dan artefak QA. Nginx mengembalikan 404 yang benar; hanya bundle `/_astro/` memakai cache immutable, aset publik yang dapat berubah memakai cache satu hari.

## Batas dan checklist pemilik

Lihat `docs/owner-checklist.md`, `docs/architecture.md`, dan `docs/implementation-progress.md`. PRD.md serta SYSTEM-DESIGN.md adalah dokumen awal dan belum mencerminkan seluruh pengembangan ini.

`npm audit fix` tanpa major upgrade telah diterapkan. Audit terakhir masih mencatat advisory pada rangkaian Astro 5 dan beberapa dependency build; detail ada di `docs/qa/dependency-audit.json`. Perbaikan penuh memerlukan migrasi major Astro dan integrasi terkait. Jangan mengekspos dev server ke jaringan publik; output publik yang dihasilkan adalah file statis tanpa runtime Astro.

Pekerjaan ini tidak melakukan deploy, push, pengiriman pesan, atau transaksi.
