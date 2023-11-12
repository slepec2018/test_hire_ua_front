/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(217, 28%, 15%)",
      },
      fontFamily: {
        sans: ["Mulish", "sans-serif"],
        serif: ["Rokkitt", "monospace"],
      },
    },
  },
  plugins: [],
};
