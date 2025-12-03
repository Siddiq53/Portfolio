/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        surface: "#111111",
        accent: "#A855F7",
        "text-primary": "#FFFFFF",
        "text-secondary": "#B3B3B3",
        "border-subtle": "#1F1F1F"
      },
      boxShadow: {
        card: "0 24px 80px rgba(0,0,0,0.9)"
      },
      maxWidth: {
        "7xl": "80rem"
      }
    }
  },
  plugins: []
};



