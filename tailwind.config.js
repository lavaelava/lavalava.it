const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        sen: ['Sen', ...defaultTheme.fontFamily.sans],
        gilroy: ['Gilroy', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: colors.coolGray,
        amber: colors.amber,
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
