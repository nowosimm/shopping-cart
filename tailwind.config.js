module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  theme: {
    fontFamily: {
      'cursive' : ['"Liu Jian Mao Cao"', 'cursive'],
    }
  } 
}


