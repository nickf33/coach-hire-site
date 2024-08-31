/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2xs": "0.6rem",
      },
      colors: {
        primary: "#303030",
        secondary: "#3B3B3B",
        light: "#F7F7F7",
        grayLight: "#E4E4E4",
        grayDark: "#E4E3E3",
        accent: "#23B798",
        accentDark: "#028E8E",
        primaryOp: "rgba(48, 48, 48, 0.4)",
      },
      maxWidth: {
        container: "1024px",
      },
      width: {
        "9/10": "90%",
      },
      boxShadow: {
        light: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
    plugins: [],
  },
};
