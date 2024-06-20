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
      'xs': '320px',
      'sm': '435px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'mobile': '435px',
      'tablet': '768px',
      'pc': '1024px',
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
          light: '#374151',
        },
        blue: {
          DEFAULT: '#1F4788',
          dark: '#003171',
        },
      }
    },
  },
  plugins: [],
}