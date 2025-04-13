/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#f5f7ff',
            100: '#ebf0fe',
            200: '#d6e0fd',
            300: '#b3c5fc',
            400: '#8aa3f9',
            500: '#6177f4',
            600: '#4b59ea',
            700: '#3e45d2',
            800: '#343bab',
            900: '#2f3588',
          },
          secondary: {
            50: '#f6f8f9',
            100: '#eaeef1',
            200: '#dae1e9',
            300: '#b9c7d5',
            400: '#8fa7bd',
            500: '#6a87a4',
            600: '#526c88',
            700: '#425770',
            800: '#394a5e',
            900: '#2d394a',
          },
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        },
        animation: {
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }
      },
    },
    plugins: [],
  }