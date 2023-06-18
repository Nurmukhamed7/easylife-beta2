/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './english.html', './*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        customGreen: '#4DCC1D',
      },
      fontFamily: {
        onest: ['onest', 'san-serif'],
      },
    },
  },
  plugins: [],
}
