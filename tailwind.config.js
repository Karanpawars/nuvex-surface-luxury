/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0c0c0d',       // near-black backgrounds
        charcoal: '#151517',
        gold: '#c6963a',      // primary brand accent
        'gold-light': '#e0bc72',
        cream: '#f6f1e7',     // light section background
        sand: '#e9dfc9',      // warm secondary background
        clay: '#d8c9a3',
        ivory: '#fbf9f4',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      maxWidth: {
        'content': '1400px',
      },
    },
  },
  plugins: [],
}
