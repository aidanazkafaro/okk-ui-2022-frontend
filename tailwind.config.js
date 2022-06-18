const { clamp } = require("react-slick/lib/utils/innerSliderUtils");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
<<<<<<< HEAD
        "empty-book-bg": "url('/src/assets/BookSVG.svg')",
=======
>>>>>>> c2fdb4c01d219da60898684edae08c6be68c3655
      },
    },
    fontFamily: {
      signika: ["Signika"],
      poppins: ["Poppins"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
