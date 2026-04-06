/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: 'var(--cream)',
        paper: 'var(--paper)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        gold: 'var(--gold)',
        'gold-2': 'var(--gold-2)',
        pink: 'var(--pink)',
        'pink-2': 'var(--pink-2)',
        sky: 'var(--sky)',
        burgundy: 'var(--burgundy)',
        navy: 'var(--navy)',
      },
      fontFamily: {
        sans: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        accent: ['"IM Fell English"', 'serif'],
      }
    },
  },
  plugins: [],
}
