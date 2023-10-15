/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.vue',
  ],
  theme: {
    screens: {
      'mm': '375px',
      'amm': '445px',
      'sm': '640px',
      'md': '768px',
      'mmd': '850px',
      'lg': '1024px',
      'xl': '1280px'
    },
    fontFamily: {
      'NexaBook': ['NexaBook', 'sans-serif'],
      'NexaLight': ['NexaLight', 'sans-serif'],
      'NexaHeavy': ['NexaHeavy', 'sans-serif'],
      'PhonkRegular': ['PhonkRegular', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

