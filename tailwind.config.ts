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
        sml: "15.625rem",
      },
      fontFamily: {
        stylish: "var(--font-stylish)",
        "josefin-sans": "var(--font-josefin-sans)",
      },
      backgroundColor: {
        primary: "#2373EB",
        dark: "#121212",
        light: "#FFFFFF",
        design: "#E3E3E3",
        "design-dark": "#1E1E1E",
      },
      textColor: {
        primary: "#2373EB",
        secondary: "#E7C027",
        surface: "#1E1E1E",
        "primary-light": "#111317",
        "secondary-light": "#6B7280",
        "primary-dark": "#F9FAFB",
      },
      borderColor: {
        primary: "#2373EB",
      },
      stroke: {
        primary: "#2373EB",
        secondary: "#E7C027",
      },
      boxShadow: {
        light: "0px 3px 16px rgba(0, 0, 0, 0.25)",
        dark: "0px 3px 16px rgba(255, 255, 255, 0.25)",
      },
    },
  },
  darkMode: "selector",
  plugins: [fluid],
};
export default config;
