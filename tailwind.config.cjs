/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00ff80',
        'charcoal': '#020202',
        'charcoal-light': '#1a1a1a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Assuming Inter might be available or fallback
        mono: ['JetBrains Mono', 'monospace'], // Tech feel
      },
    },
  },
  plugins: [],
}
