/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        light: '#ffffff',
        dark: '#050122',
        'semi-dark': '#050122',
        primary: '#033260',
        secondary: '#CED6DD',
        accent: '#D99E31',
        grey: '#7d7e7d',
        'semi-grey': '#E0E5E9',
        'deep-grey': '#35424F',
        'light-grey': '#78848F',
        'lighter-grey': '#F3F5F6',
      },
      fontFamily: {
        'stem-regular': ['Stem-regular', 'sans-serif'],
        'stem-light': ['Stem-light', 'sans-serif'],
        'stem-extra-light': ['Stem-extra-light', 'sans-serif'],
        'stem-light-italic': ['Stem-light-italic', 'sans-serif'],
        'stem-extra-light-italic': ['Stem-extra-light-italic', 'sans-serif'],
        Marianna: ['Marianna, sans-serif'],
      },
      backgroundImage: {
        'hero-main-page': "url('/src/img/images/hero-main-page.jpg')",
      },
      boxShadow: {},
      screens: {
        xs: '360px',
        sm: '576px',
        md: '768px',
        lg: '1024px',
        xl: '1366px',
        '2xl': '1920px',
        '3xl': '2560px',
      },
      keyframes: {
        animation: {},
      },
    },
    plugins: [
      require('tailwindcss-animate'),
      require('@tailwindcss/typography'),
    ],
  },
}
