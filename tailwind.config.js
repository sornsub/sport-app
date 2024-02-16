// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#6DA8E7',
      'pink': '#E76F6D',
      'pink-light': '#FFE9E8',
      'black': '#000',
      'white': '#fff',
      'grey': '#9D9D9D',
      'red': '#FF0101'
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
        'otp': '15px',
        'main': '20px',
        'card': '20px 20px 0 0',
        'summary': '0 0 17px 17px'
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class', // You can choose either 'base' or 'class' strategy
    }),
    require("daisyui"),
  ],
};
