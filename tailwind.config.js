const { Hahmlet, Hi_Melody } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "background-pattern": "url('/images/paper1.jpg')",
        "main-1": "url('/images/main.jpg')",
        "main-2": "url('/images/main2.jpg')"
      },

      fontFamily: {
        Hahmlet: ["Hahmlet", "sans-serif"],
        Hi_Melody: ["Hi Melody", "sans-serif"],
        MapoGoldenPier: ['MapoGoldenPier', 'sans-serif'],
      },

      maxHeight: {
        '1/2': '50%', // max-h-1/2
        '6/10': '60%', // max-h-6/10
      },

      colors: {
        'bgcolor-sky': '#f2f7fb',
        'custom-blue': '#81acdb',
      },
    },
  },
  plugins: ['tailwind-scrollbar-hide'],
};
