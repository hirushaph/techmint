/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      aspectRatio: {
        slider: '12 / 5',
        showcase: '12 / 6',
        offer: '12 / 5',
        category: '5 / 3',
        verticle: '8 / 10',
      },
      gridTemplateColumns: {
        'custom-2fr-1fr': '2fr 1fr',
        'custom-repeat': 'repeat(2, minmax(200px, 1fr))',
        'custom-category': '1fr 2fr',
      },
      colors: {
        dark: {
          50: 'var(--dark-50)',
          100: 'var(--dark-100)',
          200: 'var(--dark-200)',
          300: 'var(--dark-300)',
          400: 'var(--dark-400)',
          500: 'var(--dark-500)',
          600: 'var(--dark-600)',
          700: 'var(--dark-700)',
          800: 'var(--dark-800)',
          900: 'var(--dark-900)',
          950: 'var(--dark-950)',
        },
        lightDark: 'rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
};
