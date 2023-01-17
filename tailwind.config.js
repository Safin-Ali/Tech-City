/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: `class`,
  theme: {
    extend: {
      fontFamily:{
        mincho: `var(--font-mincho)`,
      },
      colors:{
        // Primary
        bluePrimary: `#0058fb`,
        whitePrimary: `#f1f1f1`,
        blackPrimary: `#383838`,

        // Secondary
        blueSecondary: `#135de5`,
        whiteSecondary: `#f3eded`,
        blackSecondary: `#383838`,
      },
    },
  },
  plugins: [],
}