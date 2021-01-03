const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.coolGray,
        teal: colors.teal,
        cyan: colors.cyan,
        'light-blue': colors.lightBlue,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
