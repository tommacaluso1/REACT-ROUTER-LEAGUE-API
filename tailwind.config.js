const colors = require('tailwindcss/colors')



module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "Friz": ['Friz Quadrata']
     },
    colors:{
      "gold":"#DAA520",
      "lightgold":"#ffcf80",
      "darkgold":"#B8860B", 
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
