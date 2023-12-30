/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
      },

      gridTemplateColumns: {
        'cartGrid': '0.5fr 1.8fr 0.5fr 0.5fr 0.5fr 0.5fr',
      },

      backgroundImage: {
        'hero' : "url('/src/components/Assets/Collection-Header.jpg')",
        'collection' : "url('/src/components/Assets/Collection-Header.jpg')",
        'coats' : "url('/src/components/Assets/Coats/Collection1-1.jpg')",
        'coop' : "url('/src/components/Assets//CO-ORD/CoordHeader.jpeg')",
        'coop-header' : "url('/src/components/Assets/Coords-Header.png')",
        'pants' : "url('/src/components/Assets/Pants_Shorts/Pants.jpg')",
        'topdress' : "url('/src/components/Assets//Top-Dress/top.jpg')",
      }
    },
  },
  plugins: [],
}

