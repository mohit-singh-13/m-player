/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nigerian: ["Mukta"]
      }
    },
    screens: {
      'max-sm': { 'max': '430px' },
    }
  },
  plugins: [],
}

