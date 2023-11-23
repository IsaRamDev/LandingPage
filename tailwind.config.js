/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // Añade aquí tu patrón de zigzag SVG
        "zigzag-pattern": "url('/path-to-your-zigzag-pattern.svg')", // Asegúrate de tener un SVG zigzag
      },
      animation: {
        "fade-right": "fade-right 2s ease-in-out",
        // Añade aquí tu animación personalizada
        moveZigzag: "moveZigzag 10s infinite linear",
      },
      keyframes: {
        moveZigzag: {
          "0%, 100%": { transform: "translateX(100%)" },
          "50%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
