/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#a259ff",
        secondary: {
          100: "#ff6f61",
          200: "#7eff5a",
        },
      },
    },
  },
  plugins: [],
};
