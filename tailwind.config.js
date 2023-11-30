/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      brightness: {
        25: '.25',
      },
      colors: {
        'blue-1': '#10108E',
        'blue-2': '#151551',
        'blue-3': '#131326',
        'red-1': '#AE0F0A',
        'red-2': '#830B07',
        'orange-1': '#F09F5D',
        'orange-2': '#E9700C',
        'white-1': '#F6F6FE',
        'white-2': '#D4D4E8',
        'white-3': '#B3B3CC',
      },
      backgroundImage: (theme) => ({
        'gradient-yellowred': 'linear-gradient(90deg, #FF616A 0%, #FFC837 100%)',
        'mobile-home': "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      s: '500px',
      sm: '768px',
      m: '990px',
      md: '1060px',
    },
  },
  plugins: [],
}
