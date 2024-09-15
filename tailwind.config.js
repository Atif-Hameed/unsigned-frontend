/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1800px',

    },
    extend: {
      fontFamily: {
        dinNext: ['var(--font-dinNext)'],
      },
      colors: {
        background: '#E6E6E6',
        dark: '#464754',
        labelColor: '#464754b2',
        lightBlue: '#4a6dac',
        lightBlueText: '#4a6d8c',
        cardColor: '#EEEEEE',
        bgColor: '#6b7280'
      },
    },
  },
  plugins: [],
};
