/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './english.html', './*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        customGreen: '#4DCC1D',
        btnPurple: '#621280',
        modalColor: '#884D9E',
      },
      fontFamily: {
        onest: ['onest', 'san-serif'],
      },
    },
  },
  plugins: [],
}
