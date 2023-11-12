
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#325219',
        accent: '#B67E34',
        footer: '#885B1F',
      },

      fontFamily: {
        title: ['Libre Bodoni'],
        content: ['Laila'],
      },

      fontWeight: {
        thin: '400',
        normal: '500',
        bold: '600',
      }
    },
  },
  plugins: [],
}

