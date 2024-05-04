/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#DCB4B8',
      'white': '#fff',
      'gr': '#A5A5A5',
     
    },
    extend: {
      fontFamily: {
        'Poppins': ['Poppins'],
       
      },
      backgroundImage: {
        'boardBg': "url('https://img.freepik.com/free-vector/floral-pattern-with-color-year-2022_23-2149217390.jpg?w=2000')",
      },
    },
  },
  plugins: [],
}

