
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef8ff",
          100: "#d7ecff",
          200: "#b6dbff",
          300: "#85c4ff",
          400: "#4aa6ff",
          500: "#1a86ff",
          600: "#0b69db",
          700: "#0c56b2",
          800: "#0f478f",
          900: "#103b74"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)"
      }
    },
  },
  plugins: [],
}
