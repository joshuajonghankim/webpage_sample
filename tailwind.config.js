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
      },

      fontFamily: {        
        MapoGoldenPier: ['MapoGoldenPier', 'sans-serif'],
        Charter: ['Charter', 'sans-serif'],
        NotoSansKR: ['NotoSansKR', 'sans-serif'],
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

      height:{
        '0.5/10': '5%', // 0.5/10
        '6/10': '60%', // h-6/10
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
        'button-blue': '#d8e6f4',
      },
    },
  },
  plugins: ['tailwind-scrollbar-hide'],
};
