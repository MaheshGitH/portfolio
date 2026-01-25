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
    extend: {
      fontSize,
      screens: {
        sml: "20rem",
        ...screens,
      },
      fontFamily: {
        lato: "var(--font-lato)",
      },
      colors: {
        primary: "#00E0E0",
        "primary-faded": "rgba(0 224 224 / 0.06)",
        tag: "#23272C",
        border: "rgba(255 255 255 / 0.12)",
        secondary: "#9CA3AF",
        surface: "#14191F",
        background: "#0B0F14",
      },
    },
  },
  plugins: [fluid, require("tailwindcss-animate")],
};
export default config;
