/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'first-color-c': 'rgb(2, 9, 22)',
        'yellow-color-c': 'rgb(255, 185, 45) ',
        'first-color-alt-c': 'rgb(20, 27, 36)',
        'text-color-light-c': 'rgb(102, 101, 103)'
      }
    },
    screens: {

      'mb': { 'max': '739px' },
      //Mobile => @media (max-width: 639px) { ... }
      'tb': { 'min': '740px', 'max': '1023px' },
      //Table => @media (min-width: 740px and max-width: 1023px) { ... }
      'dt': { 'min': '1024px' }
      //Desktop=> @media (min-width: 1024px) { ... }
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false // <== disable this! React, AntD and Tailwind: fix CSS conflicts
  // }
}

