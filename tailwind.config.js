/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Montserrat"],
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '21/8' : '21 / 8',
      },
    },
  },
  plugins: [],
}