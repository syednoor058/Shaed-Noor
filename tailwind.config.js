/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "480px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        darkBG: "#2a414d",
        lightBG: "#fff0d4",
        darkAccent: "#365b7c",
        lightAccent: "#f2e85e",
        darkTitle: "#0f393d",
        lightTitle: "#ffe4ea",
        darkText: "#636e6e",
        lightText: "#f7f6f7",
      },
    },
  },
  plugins: [],
}

