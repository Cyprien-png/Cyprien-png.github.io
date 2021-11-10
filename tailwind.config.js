module.exports = {
  purge: [
    './*.html',
    './view/*.html',
    './view/content/Js/*.js'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    boxShadow: {
      outline: '0px 0px 10px 2px yellow',
    },
    extend: { 
      backgroundImage: {
        'Cypriens-face' : "url('/View/content/images/Cyprien-face-zoom.png')",
      },
      fontFamily: {
      'lato' :['lato'],
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
