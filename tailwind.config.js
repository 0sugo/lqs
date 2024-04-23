/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customRed: '#952900',
        customRed2: '#D53E00',
        customgrey: '#907066',
        customblue: '#B2CCEF',
        customBrown: '#281813',
        customBlack: '#1D1B20',

      },
    },
  },
  plugins: [],
};
