/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00FFA3', // Keep the brand accent
        'brand-neon': '#00FFA3',
        'charcoal': '#000000',   // Deepest Black
        'charcoal-light': '#09090b', // Zinc-950/900 for cards (Hierarchy of Darkness)
        'zinc-900': '#18181b',   // Explicit Zinc-900 for reference
        'zinc-800': '#27272a',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'], // Cleaner sans-serif
        mono: ['Space Mono', 'JetBrains Mono', 'monospace'], // Cleaner monospace
        display: ['Space Grotesk', 'sans-serif'], // For large titles
      },
    },
  },
  plugins: [],
}
