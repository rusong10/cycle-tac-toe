/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "tron-blue": {
          light: "#93EAFE",
          DEFAULT: "#00CFFF"
        },
        "tron-orange": {
          light: "#FFC57E",
          DEFAULT: "#FF8C00"
        },
        "sunshine-yellow": "#FFF44F",
      }
    },
  },
  plugins: [],
};
