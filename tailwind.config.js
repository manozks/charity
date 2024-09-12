/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      
      colors: {
        'primary': '#D7FF2B',
        'secondary': '#1e1e1e',
        'normal': '#ebf3ee',
        'lsky': '#B7FFFF',
        'dsky': '#A4E1FD',
        'skybtnbg': '#E6FCFF',
        'skybtnbor': '#3CC2CA'
      }
    },
    fontFamily: {
      'work': ['Work Sans', 'sans-serif']
    }
  },
  

  plugins: [],
}

