/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      // 'numberfa': 'numberfa'
    },
    extend: {
      colors: {
        'primary': 'rgb(41, 151, 101)',
        'secondary': '#191f2d'
      },
    }
  },
  plugins: [
  ],
}

