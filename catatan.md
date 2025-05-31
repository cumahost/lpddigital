/public
  ├── index.html      <-- Halaman Beranda
  ├── layanan.html    <-- Pemilihan Paket
  ├── login.html      <-- Login/Daftar (JS ke Supabase)
  ├── dashboard.html  <-- Upload konten, lihat invoice, dll
  ├── domain-check.html <-- Khusus Paket Lite/Pro
  ├── img/
  |     └── images
  |     └── auth.js
  └── js/
        └── supabaseClient.js
        └── auth.js
        └── dashboard.js
        └── invoice.js

lpddigital.id/
├── assets/
│   ├── img/
│   └── js/          <-- 🆕 Di sini tempat file JS seperti supabaseClient.js, auth.js, dll
        └── supabaseClient.js
        └── auth.js
        └── dashboard.js
        └── invoice.js
├── src/
│   ├── input.css
│   └── output.css
├── tailwind.config.js
├── package.json
├── node_modules/
├── index.html
├── tentang.html
├── layanan.html
├── portofolio.html
├── testimoni.html
├── kontak.html
├── login.html       <-- 🆕 Halaman login & registrasi
├── dashboard.html   <-- 🆕 Halaman pelanggan setelah login
├── domain-check.html  <-- 🆕 Khusus untuk Paket Lite & Pro


lpddigital.id/               <-- Folder project website static kamu
supabase/                    <-- Folder terpisah untuk function Supabase
├── functions/
│   └── send-invoice/
│       └── index.ts         <-- File yang tadi aku buat
└── config.toml              <-- Nanti otomatis dibuat Supabase CLI
