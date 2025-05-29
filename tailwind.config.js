/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a3d62',     // biru tua
        success: '#2ecc71',     // hijau desa
        gold: '#f1c40f'         // emas
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [],
}
