/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'organic-base': '#F7F5F0',
        'organic-green': '#2F855A',
        'organic-green-light': '#48BB78',
        'organic-red': '#C05621',
        'organic-dark': '#2D3748',
        'organic-card': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}
