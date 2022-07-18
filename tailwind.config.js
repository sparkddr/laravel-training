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
        larablack: "#232323",
      },
      keyframes: {
        updown: {
          "0%, 100%": { transform: "translateY(7px)" },
          "50%": { transform: "translateY(-7px)" },
        },
      },
      animation: {
        updown: "updown 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
