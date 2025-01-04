/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#00a7e1",
          200: "#004e68",
          300: "#00171f",
        },
        light: "#f1f1f1",
        green: "#56e39f",
      },
    },
  },
  plugins: [],
};
