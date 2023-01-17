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
        blackPrimary: `#1e272e`,

        // Secondary
        blueSecondary: `#135de5`,
        whiteSecondary: `#f3eded`,
        blackSecondary: `#292a70`,

        // Tertiary
        blueTertiary: `#135de5`,
        whiteTertiary: `#f3eded`,
        blackTertiary: `#626262`,

        // low-opacity
        blueAlpha: `#135de560`,
        whiteAlpha: `#f3eded57`,
        blackAlpha: `#2f354257`,
      },
    },
  },
  plugins: [],
}