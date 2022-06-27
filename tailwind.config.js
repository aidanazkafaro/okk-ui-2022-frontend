module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/src/assets/hero-bg.svg')",
        "hero-loop": "url('/src/assets/LOOP.png')",
        "header-carikelompok": "url('/src/assets/header-bg-carikelompok.svg')",
      },
    },
    fontFamily: {
      signika: ["Signika"],
      poppins: ["Poppins"],
    },
  },
  plugins: [],
};
