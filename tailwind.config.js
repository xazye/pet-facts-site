/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#370C9B",
        "accent": "#16DEA5",
        "secondary": "#7A8B99",
        "background": "#111213",
        "tertiary": "#EF8354",
        "text": "#FFFFFF",
      },
      fontFamily: {
        sans: ['Poppins'],
        ubuntu: ['Ubuntu'],
      },
      fontSize:{
        "title":"3rem",
        "body":"1rem",
        "small":"0.7rem",
      }
    },
  },
  plugins: [],
}

