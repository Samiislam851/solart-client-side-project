/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    extend: {
      fontFamily :{
        'Saira':['Saira Semi Condensed']
      },
      colors: {
        
        primaryDonkeyBrown :  '#B98E75',
        primaryDark : '#252531',
        secondaryDarkGray : '#343438',
        secondaryDarkGray : '#343438',
        secondaryAshGray : '#D5D2DA',

      },
    },
  },
  

  plugins: [require("daisyui")],
}
