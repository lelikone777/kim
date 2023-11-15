/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
      container: {
        center: true,
        padding: '2rem',
      },
      extend: {
        colors: {
          "light": "#ffffff",
          "dark": "#050122",
          "semi-dark": "#050122",
          "primary": "#033260",
          "secondary": "#CED6DD",
          "accent": "#D99E31",
          "grey": "#7d7e7d",
        },
        fontFamily: {
          Stem: ["var(--font-stem)"],
          Marianna: ["var(--font-marianna)"],
        },
        backgroundImage: {
          'hero-main-page': "url('/src/img/images/hero-main-page.jpg')",
        },
        boxShadow: {},
        screens: {
          'xs': '360px',
          'sm': '576px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1366px',
          '2xl': '1920px',
          '3xl': '2560px',
        },
        keyframes: {
        animation: {},
      },
    },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
  }
}