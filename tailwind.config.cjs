/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        accent: "#0ea5a4"
      },
      boxShadow: {
        card: "0 14px 40px rgba(15,23,42,0.8)"
      }
    }
  },
  plugins: []
};



