/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light:"#F5F5F5",
        text: {
          light:"#F5F5F5",
          dark:"",
        },

      }
    },
  },
  plugins: [],
};
