/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        navy: {
          900: '#0B1120',
          950: '#060913',
        },
      },
    },
  },
  plugins: [],
};