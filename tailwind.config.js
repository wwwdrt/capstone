/* eslint-disable */
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.{html,js}", "./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
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
        mainprogram: "#272a32",
        sponsors: "#414246",
        "sponsors-font": "#e8e8e7",
        footer: "#2e2e2e",
        programbg: "rgba(60, 63, 70, 0.6)",
        gorange: "#f65d1a",
      },
      backgroundImage: {
        "hero-pattern": "url(/public/bg-hero.png)",
        "main-program":
          "url(/public/main-program/main-program-pattern.png)",
        chessboard: "url(../public/speakers/speaker-squares.png)",
      },
      screens: {
        xs: "300px",
      },
    },
  },
  plugins: [],
};
