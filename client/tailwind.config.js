/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "pup-red": "#800000",
      "pup-red-light": "#B36666",
      "pup-white": "#FFFFFF",
      "pup-blue": "#17A2B8",
      "pup-blue-light": "#45B5C6",
      "background" :"#D9D9D9"

    },
    extend: {
      backgroundImage: {
        'pup-img2': "url('./public/assets/img2.jpg')"
      }
    },
  },
  plugins: [],
}

