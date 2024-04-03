/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'theme-white': '#F7F7F7'
      },
      gridTemplateRows: {
        layout: '4rem 1fr 4rem'
      },
      gridTemplateColumns: {
        body: '35rem 1fr'
      }
    }
  },
  plugins: []
}
