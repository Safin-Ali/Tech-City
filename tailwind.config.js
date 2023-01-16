/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        mincho: `var(--font-mincho)`,
      }
    },
  },
  plugins: [],
}