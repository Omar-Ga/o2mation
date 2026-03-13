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
        // Brand green — refined, not radioactive
        'brand': '#00ff80',
        'brand-muted': '#10B981',
        // Legacy alias
        'neon-green': '#00ff80',
        // Rich darks
        'charcoal': '#0A0A0A',
        'charcoal-light': '#141414',
        // Warm surfaces for light mode
        'surface': '#FAFAF9',
        'surface-raised': '#F3F2F0',
        'surface-dim': '#E8E6E3',
        // Ink
        'ink': '#1A1A1A',
        'ink-muted': '#6B7280',
        'ink-faint': '#9CA3AF',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 4.5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(1.5rem, 3.5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-in': 'slide-in 0.5s ease-out forwards',
        'ticker': 'ticker 60s linear infinite',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'ticker': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
