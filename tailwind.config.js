/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        inter:['Inter']
      },
      colors: {
        wpu: '#bada55',
        kopi: '#c0ffee'
      }
    },
  },
  plugins: [],
}

