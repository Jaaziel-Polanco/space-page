/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '700px',
      'lg': '1200px'
    },
    fontFamily: {
      BarlowC: ['Barlow Condensed'],
      Barlow: ['Barlow'],
      Bellefair: ['Bellefair']
    },
    extend: {
      boxShadow: {
        custom: '0 10px 20px rgba(0, 0, 0, 0.25), 0 6px 6px rgba(0, 0, 0, 0.23)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

