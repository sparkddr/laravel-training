/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Scandia: ["Scandia", "sans-serif"],
        sans: ["Scandia", "sans-serif"],
      },
      colors: {
        larared: "#F9322C",
        laragrey: "#565454",
      },
    },
  },
  plugins: [],
};
