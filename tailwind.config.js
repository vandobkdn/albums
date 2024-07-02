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
      'ipPro': '390px',
      'sm': '435px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'mobile': '414px',
      'tablet': '768px',
      'pc': '1024px',
    },
    extend: {
      height: {
        'content-height': 'calc(100vh - 5rem)',
      },
      colors: {
        header: '#f5f5f7',
        white: {
          DEFAULT: '#FFF',
          dark: '#f5f5f7',
        },
        black: {
          DEFAULT: '#333333',
          dark: '#000000',
          light: '#f1f1f1',
        },
        blue: "#0071e3",
      }
    },
  },
  plugins: [],
}