# Owner checklist

Website dan demo dapat dijalankan lokal. Informasi di bawah memerlukan keputusan/data pemilik sebelum publikasi komersial; tidak diisi dengan klaim buatan.

- [ ] Pastikan nomor WhatsApp, email, domain, dan nama brand di `src/config/site.ts` benar dan dimiliki/dikelola Carisite.
- [ ] Konfirmasi harga acuan Rp699.000 dan Rp1.990.000; tentukan jumlah halaman, masa domain/hosting, biaya perpanjangan, revisi, dukungan, pajak, dan cara pembayaran dalam penawaran.
- [ ] Konfirmasi jadwal pengerjaan dan kapasitas layanan. Website tidak menjanjikan SLA atau tenggat yang belum disepakati.
- [ ] Jika ingin menambahkan proyek klien, siapkan izin publikasi, atribusi, screenshot yang boleh ditampilkan, serta bukti untuk setiap metrik/testimoni. Koleksi saat ini seluruhnya konsep/demo.
- [ ] Tinjau penggunaan foto stok Unsplash sebagai ilustrasi. Sumber dan referensi lisensi disimpan di `asset-sources.json`; jangan menganggap lokasi/model dalam foto sebagai bisnis atau tim Carisite.
- [ ] Jika mengaktifkan layanan produksi seperti pembayaran, booking, login, database, atau analitik, susun scope, keamanan, privasi, backend, serta pengujian tersendiri. Demo tidak memproses transaksi nyata.
- [ ] Rencanakan migrasi dependency build dari Astro 5 ke versi major yang memperbaiki advisory tersisa. Detail audit aktual di `qa/dependency-audit.json`.
- [ ] Setelah hosting dipilih, verifikasi canonical/domain, HTTPS, DNS, pemilik kontak, sitemap, respons 404, dan cache pada host tersebut. Belum ada deployment yang dilakukan.

Tidak diperlukan data tambahan untuk mencoba seluruh fitur lokal.
