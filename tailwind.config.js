const { clamp } = require("react-slick/lib/utils/innerSliderUtils");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        underlineOrange: "#E1AA43",
      },
      height: {
        cardheight: "450px",
        cardheightmobile: "560px",
      },
      top: {
        topOfAbsoluteButton: "92.5%",
      },
      lineClamp: {
        10: "10",
      },
      backgroundImage: {
        "hero-bg": "url('/src/assets/hero-bg.svg')",
        "hero-loop": "url('/src/assets/LOOP.png')",
        "header-carikelompok": "url('/src/assets/header-bg-carikelompok.svg')",
      },
      screens: {
        "3xl": "1800px",
      },
    },
    fontFamily: {
      signika: ["Signika"],
      poppins: ["Poppins"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require('tw-elements/dist/plugin')],
};
