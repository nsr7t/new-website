/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      xs: '350px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'Pink': 'hsl(322, 100%, 66%)',
        'VeryPaleCyan': 'hsl(193, 100%, 96%)',
        'VeryDarkCyan': 'hsl(192, 100%, 9%)',
        'GrayishBlue': 'hsl(208, 11%, 55%)'
      },
    },
    fontFamily: {
      body: ['Open Sans'],
      heading: ['Poppins']
    }
  },
  plugins: [],
}
