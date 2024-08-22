/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      maxWidth: '1020px',
      center: true,
      padding: '0.5rem',
      screens: {
        sm: '100%', // or any custom value
        md: '720px', // or any custom value
        lg: '960px', // or any custom value
        xl: '1280px', // This sets max-w-xl to 1280px
        '2xl': '1280px' // If you want to set it for 2xl too
      }
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      paprika: ['Paprika', 'system-ui']
    },
    extend: {
      colors: {
        primary: '#FF7628',
        slate: '#6C7D93',
        gray: '#C4C4C4',
        dgray: "#413F45"
      }
    }
  },
  plugins: []
}
