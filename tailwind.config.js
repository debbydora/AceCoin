/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        logoBlue: "#035fff",
        logoColor: "#05365c",
        editColor: "#8e96a3",
        lightBlue: "#1da1f2",
      },
    },
  },
  plugins: [],
};
