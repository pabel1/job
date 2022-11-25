/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    screens:{
      sm:'576px',
      md:'764px',
      lg:'992px',
      xl:'1200px'
    },
    container:{

      center:true,
      padding:"16px"
    },
    extend: {
      colors:{
       textSecondary:"#606060",
       primary:"#FFAE5D"

      },
      fontFamily:{
        popins:["Poppins","sans-serif"]
      },
    },
  },
  plugins: [],
}
