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
    },
  },
  plugins: [fluid, require("tailwindcss-animate")],
};
export default config;
