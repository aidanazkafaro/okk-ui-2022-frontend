module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/src/assets/hero-bg.svg')",
        "hero-loop": "url('/src/assets/LOOP.png')",
        "empty-book-bg": "url('/src/assets/BookSVG.svg')",
      },
    },
    fontFamily: {
      'signika': ['Signika'],
      'poppins': ['Poppins'],
    }
  },
  plugins: [],
}