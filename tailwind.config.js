/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './component/**/*.{html,js,jsx}',
    './subComponent/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        SpaceMono: ["Space-Mono"],
        WorkSans: ["Work-Sans"]
      }
    },
  },
  plugins: [],
}

