/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      white: "#fff",
      e1e: "#f56e1e",
      cfc: " #fcfcfc",
      bc: "#a0a3bc",
      a191: "#6e7191",
      f1: "#f1f1f1",
      bd:' #a0a3bd',
    },
    extend: {
      fontFamily: {
        sans: ["Golos Text"],
        pop: ["Poppins"],
        pro: ["SF Pro Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
