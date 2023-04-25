/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./pages/*.html"],
  theme: {
    extend: {
      colors: {
        burger: "rgb(57, 72, 103)",
      },
    },
  },
  plugins: [],
};
