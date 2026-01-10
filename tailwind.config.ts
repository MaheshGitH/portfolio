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
      screens: {
        sml: "20rem",
      },
    },
  },
  darkMode: ["selector", "class"],
  plugins: [fluid, require("tailwindcss-animate")],
};
export default config;
