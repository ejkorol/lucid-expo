/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'sans-serif'],
        space: ['spaceMono', 'serif'],
        roboto: ['robotoMono', 'monospace']
      }
    },
    colors: {
      'primary': '#2962FF'
    }
  },
  plugins: [],
}

