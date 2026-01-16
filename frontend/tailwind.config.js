/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        maintext: "#2f3542",
        subtext: "#455c7d",
        darkmaintext: "#8f94fb",
        darksubtext: "#3a99c8",
        mainbg: "rgba(54, 19, 84, 0.6);",
        overlay: "rgba(0,0,0,0.5)",
        "bg-overlay": "rgba(0,0,0,0.3)",
        "image-costums": "url('../assets/bg1.jpg')",
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
};
