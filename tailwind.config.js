/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-20': '#F8F4EB',
        'gray-50': '#EFE6E6',
        'gray-100': '#DFCCCC',
        'gray-500': '#5E0000',
        'primary-100': '#FFE1E0',
        'primary-300': '#FFA6A3',
        'primary-500': '#FF6B66',
        'secondary-400': '#FFCD5B',
        'secondary-500': '#FFC132',
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
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
    },
  },
  plugins: [],
}
