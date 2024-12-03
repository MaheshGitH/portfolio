import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        stylish: "var(--font-stylish)",
        "josefin-sans": "var(--font-josefin-sans)",
      },
      backgroundColor: {
        primary: "#5615A5",
        secondary: "#32B621",
        "primary-light": "#EDE6F4",
        dark: "#0B0A0D",
        light: "#EEEDEF",
        gradient:
          "linear-gradient(98.33deg, #231848 -53.48%, #0C1A1D 72.82%, #11282D 133.89%)",
      },
      textColor: {
        primary: "#5615A5",
        secondary: "#32B621",
      },
      borderColor: {
        primary: "#5615A5",
        secondary: "#32B621",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
export default config;
