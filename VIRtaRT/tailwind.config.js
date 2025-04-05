/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      darkBlue: "#232f66",
      purpleBlue: "#3A478D",
      blue: "#053B8C",
      yellow: "#dea94d",
      gray: "#b3b4b3",
      darkGray: "#606161",
      black: "#101010",
      white: "#fff"
    },
    screens: {
      'max-xss' : { max: '500px'},
      'max-sm' : { max: '650px'},
      'max-md' : { max: '800px'},
      'max-2md' : { max: '950px'},
      'max-lg' : { max: '1024px'},
      'max-xl' : { max: '1200px'},
    },
    extend: {},
  },
  plugins: [],
}

