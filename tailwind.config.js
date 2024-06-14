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
    screens: {
      'xs': '340px',
      'sm': '435px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      height: {
        'content-height': 'calc(100vh - 5rem)',
      },
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