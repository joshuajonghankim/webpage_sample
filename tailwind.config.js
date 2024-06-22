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
        MapoGoldenPier: ['MapoGoldenPier', 'sans-serif'],
      },

      spacing: {
        '1/10': '10%', // top-1/10
        '1.5/10': '15%', // top-1.5/10
        '2/10': '20%', // top-2/10
        '3/10': '30%', // top-3/10
        '4/10': '40%', // top-4/10
        '5/10': '50%', // top-5/10
        '6/10': '60%', // top-6/10
        '7/10': '70%', // top-7/10
        '8/10': '80%', // top-8/10
        '9/10': '90%', // top-9/10
      },

      maxHeight: {
        '1/2': '50%', // max-h-1/2
        '1/3': '33%', // max-h-1/2
        '4/10': '40%', // max-h-5/10
        '5/10': '50%', // max-h-5/10
        '6/10': '60%', // max-h-6/10
        '6.5/10': '65%', 
        '7/10': '70%', // max-h-6/10
        '8/10': '80%', // max-h-6/10
      },

      minHeight: {
        '1/2': '50%', // min-h-1/2
        '6/10': '60%', // min-h-6/10
      },

      colors: {
        'bgcolor-sky': '#f2f7fb',
        'custom-blue': '#81acdb',
      },
    },
  },
  plugins: ['tailwind-scrollbar-hide'],
};
