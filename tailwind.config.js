module.exports = {
  purge: [
    './*.html',
    './view/*.html',
    './view/content/Js/*.js'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: { 
      backgroundImage: {
        'MainVideo': "url('View\\content\\Medias\\Videos\\Shoes.jpg')",
      },
      fontFamily: {
      'lato' :['lato'],
      'Chakra-Petch' :['Chakra Petch']
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
