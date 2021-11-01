module.exports = {
  purge: [
    './*.html',
    './view/*.html',
    './view/content/Js/*.js'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: { 

      fontFamily: {
      'title' : ['Goldman'],
      'text' : ['Sawarabi Gothic'],
     },

      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
