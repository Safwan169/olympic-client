/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  colors: {
    gold: {
      200: '#FFD700',
      300: '#FFCC00',
      400: '#FFB800',
      500: '#FFA500',
      600: '#DAA520',
      700: '#B8860B',
    },
    // add others as needed
  },
  
  plugins: [],
};
