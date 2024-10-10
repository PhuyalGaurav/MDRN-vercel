/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      opacity: {
        '41': '0.41',
      },
      colors: {
        primary: "#F3F3F3",
        secondary: "#932432",
        accent: "#3C1874",
        britrSec: "#DE354C",
        additional: "#283747",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Set Inter as the default sans-serif font
      },
      keyframes: {
        grow: {
          '0%': { width: '0%' },
          '100%': { width: '20%' },
        },
      },
      animation: {
        grow: 'grow 2s ease-in-out forwards',
      },
      clipPath: {
        'pointy-edges': 'polygon(0% 50%, 5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%)',
      },
    },
    fontFamily: {
      inter: ["Inter"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.clip-pointy-edges': {
          'clip-path': 'polygon(0% 50%, 5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%)',
        },
      });
    },
  ],
};
