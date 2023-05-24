/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,tsx,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy'],
      },
    },
    colors: {
      //Main Colors
      brown: '#383634',
      green: '#4c7c7d',
      red: '#e45959',
      ivory: '#edeae7'
      

      //Other Colors

      
    },
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... },
      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }
      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}

