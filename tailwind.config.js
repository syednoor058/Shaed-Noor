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
        handFont: ["Satisfy", "sans-serif"],
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
        darkBG1: "#00171F",
        // primaryColor1: "#35A7FF",
        primaryColor1: "#6D72C3",
        accentColor1: "#FF3366",
        titleColor1: "#F6F7F8",
        textColo1: "#E3DFFF",
        

        darkBG2: "#F6E8EA",
        primaryColor2: "#6D72C3",
        accentColor2: "#FF3366",
        titleColor2: "#22181C",
        textColo2: "#312F2F",

        darkBG3: "#D3D4EE",
        primaryColor3: "#00171F",
        accentColor3: "#FF3366",
        titleColor3: "#22181C",
        textColo3: "#312F2F",
      },
      boxShadow: {
        shadow1: "0px -12.5px 0 0 rgb(20 22 24)",
        shadow2: "0px -8px 0 0 rgb(20 22 24)",
      }
    },
  },
  plugins: [],
}

