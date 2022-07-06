/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "green-white-0": "fdfeff",
        "green-white-1": "#e6fbf1",
        "green-white-2": "#adf4d1",
        "green-white-3": "#35E48F",
        "green-white-4": "#1AC370",
        "green-white-5": "#16A25E",
        "green-white-6": "#12844D",
        "green-white-7": "#0E6B3E",
        "green-white-8": "#0B5431",
        "green-white-9": "#083E24",
        "green-white-10": "#042113",
        "green-white-11": "#111111",
      },
    },
  },
  plugins: [],
};
