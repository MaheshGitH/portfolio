import type { Config } from "tailwindcss";
import fluid, { extract, screens, fontSize } from "fluid-tailwind";

const config: Config = {
  content: {
    files: [
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    screens,
    fontSize,
    extend: {
      screens: {
        sml: "3.125rem",
      },
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
      },
      backgroundImage: {
        gradient:
          "linear-gradient(98.33deg, #231848 -53.48%, #0C1A1D 72.82%, #11282D 133.89%)",
        gradientLight: "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)",
      },

      textColor: {
        primary: "#5615A5",
        secondary: "#32B621",
        "primary-light": "#EDE6F4",
      },
      borderColor: {
        primary: "#5615A5",
        secondary: "#32B621",
      },
    },
  },
  darkMode: "selector",
  plugins: [fluid],
};
export default config;
