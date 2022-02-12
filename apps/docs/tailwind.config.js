module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bhagwa": {
        700: "#ff421a",
        600: "#FF5733",
        500: "#ff9680",
        400: "#ffc0b3",
        300: "#ffeae5",
        },
        "background": "#121121",
        "editorBackground": "#333",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
