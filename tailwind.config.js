/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,jsx,tsx}',
    './mainPage/*.{html,js,ts,jsx,tsx}',
    './circulation/*.{html,js,ts,jsx,tsx}',
    './product/*.{html,js,ts,jsx,tsx}',
    './exclusive/*.{html,js,ts,jsx,tsx}',
    './project/*.{html,js,ts,jsx,tsx}',
    './academy/*.{html,js,ts,jsx,tsx}',
    './newHobby/*.{html,js,ts,jsx,tsx}',
    './study-studio/*.{html,js,ts,jsx,tsx}',
    './mk-studio/*.{html,js,ts,jsx,tsx}',
    './online-learn/*.{html,js,ts,jsx,tsx}',
    './mk-online/*.{html,js,ts,jsx,tsx}',
    './individual-learning/*.{html,js,ts,jsx,tsx}',
    './individual-order/*.{html,js,ts,jsx,tsx}',
    './about-studio/*.{html,js,ts,jsx,tsx}',
    './leonid/*.{html,js,ts,jsx,tsx}',
    './team/*.{html,js,ts,jsx,tsx}',
    './blog-news/*.{html,js,ts,jsx,tsx}',
    './cart/*.{html,js,ts,jsx,tsx}',
    './modals/*.{html,js,ts,jsx,tsx}',
    './order/*.{html,js,ts,jsx,tsx}',
  ],
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
        'primary-dark': '#1F2C4E',
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
        marianna: ['Marianna, sans-serif'],
      },
      backgroundImage: {
        'hero-main-page': "url('/img/images/hero-main-page.jpg')",
        'order-map': "url('/img/images/order/order-map-2xl.jpg')",
        'hero-secondary-sm':
          "url('/img/images/header-secondary/header-secondary-sm-hero.jpg')",
        'hero-secondary-md':
          "url('/img/images/header-secondary/header-secondary-md-hero.jpg')",
        'hero-secondary-xl':
          "url('/img/images/header-secondary/header-secondary-2xl-hero.jpg')",
        'hero-secondary-2xl':
          "url('/img/images/header-secondary/header-secondary-2xl-hero.jpg')",
        'hero-team-2xl': "url('/img/images/team/team-hero.jpg')",
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
