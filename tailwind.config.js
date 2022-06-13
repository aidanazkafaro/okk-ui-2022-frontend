const { clamp } = require("react-slick/lib/utils/innerSliderUtils");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        signika: ["Signika", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        underlineOrange: "#E1AA43",
      },
      height: {
        cardheight: "450px",
      },
      lineClamp: {
        10: "10",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
