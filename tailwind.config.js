/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#6CB4EE",
          200: "#6495ED",
          300: "#468FEA",
          400: "#0070FF",
          500: "#246BCE",
          600: "#0047AB",
          700: "#003262",
          800: "#444444",
          900: "#1F305E",
        },
        secondary: {
          100: "#ffba08",
          200: "#faa307",
          300: "#f48c06",
          400: "#e85d04",
          500: "#dc2f02",
          600: "#d00000",
          700: "#9d0208",
          800: "#9a031e",
          900: "#5f0f40",
        },
        gray: {
          100: "#f8f9fa",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#adb5bd",
          600: "#6c757d",
          700: "#495057",
          800: "#343a40",
          900: "#212529",
        },
        black: "#03071e",
        white: "ffffff",
      },
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
    },
    screens: {
      ssm: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
