export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["Roboto", 'sans-serif'],
      secondary: ["Great Vibes", 'cursive'],
    },
    extend: {
      colors: {
        white: '#FFFFFF',
        black: {
          DEFAULT: '#333333',
          dark: '#000000',
          light: '#666666',
        },
      }
    },
  },
  plugins: [],
}