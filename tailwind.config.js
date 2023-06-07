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
      ivory: '#edeae7',
      acadia: "#383634",
      paradiso: "#4c7c7d",
      roman: "#e45959",
      desertStorm: "#edeae7",
      seaShell: "#f6f4f2",
      white: "#ffffff",
      dawn: "#a4a2a0",
      

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

