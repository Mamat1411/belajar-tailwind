/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/public/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter:['Inter']
      },
      colors: {
        wpu: '#bada55',
        kopi: '#c0ffee'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite'
      },
      keyframes: {
        'wiggle': {
          '0%, 100%' : {transform: 'rotate(-3deg)'},
          '50%' : {transform: 'rotate(3deg)'}
        }
      }
    },
  },
  plugins: [],
}

