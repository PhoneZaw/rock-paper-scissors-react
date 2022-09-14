/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        scissors:
          "linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
        paper:
          "linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
        rock: "linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
        radial:
          "linear-gradient(to bottom, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
      },
      colors: {
        dark: "hsl(229, 25%, 31%)",
        score: "hsl(229, 64%, 46%)",
        outline: "hsl(217, 16%, 45%)",
      },
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
