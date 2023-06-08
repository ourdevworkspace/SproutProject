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
      whiteBg:"#f4f2f0"

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
    fontSize: {
      xs:['.5rem', '1rem'],
      sm: ['.75rem', '1rem'], // [fontSize, lineHeight] <- this format is used in this theme
      base: ['1rem', '1.5rem'], // [fontSize, { lineHeight?, letterSpacing?, fontWeight? }] <- this one not(though it can be)
      lg: ['1.2rem', '1.75rem'],
      'xl': ['1.5rem', '2rem'],
      '2xl': ['1.875rem', '2.25rem'],
      '3xl':['2.25rem', '2.5rem'],
      '4xl':['3rem', '1'],
      '5xl':['3.75rem', '1'],
      '6xl':['4.5rem','1'],
      '7xl':['6rem', '1'],
      '8xl':['8rem','1']
    }
  },
  plugins: [],
}

