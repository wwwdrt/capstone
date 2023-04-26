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
        corange: "#ec5242",
        herobox: "#f7f7f7",
        date: "#505050",
        place: "#787878",

      },
      backgroundImage: {
        'hero-pattern': "url('../capstone/public/bg-hero.png')",
      }
    },
  },
  plugins: [],
};
