// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // Update to include .jsx files too
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        primary: "#fea928",
        secondary: "#fea928",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
}
