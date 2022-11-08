/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#B2DD4C",
          secondary: "#333D17",
          accent: "#F6F9C8",
          neutral: "#191A3E",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "lemonade",
    ],
  },
  
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
