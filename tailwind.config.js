/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#6DA8E7',
      'pink': '#E76F6D',
      'black': '#000',
      'white': '#fff'
    },
    // fontFamily: {
    //   sans: ['Inter', 'sans-serif',],
    // },
    extend: {
      borderRadius: {
      '4xl': '2rem',
    }},
  },
  plugins: [],
}

