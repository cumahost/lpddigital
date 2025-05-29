/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Cari file HTML dan JS di dalam folder src
    "./*.{html,js}",       // Cari file HTML dan JS di root proyek (jika ada)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}