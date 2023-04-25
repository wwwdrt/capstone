/* eslint-disable */
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        burger: "#545454",
        topbar: "#3e3e3e",
        navfont: "#ababab",
        corange: "#ec5242"
      },
    },
  },
  plugins: [],
};
