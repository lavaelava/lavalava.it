const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sen: ['Sen', ...defaultTheme.fontFamily.sans],
        gilroy: ['Gilroy', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: '360px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
