import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        intro: "#415A77",
        rest: "#0D1B2A",
      },
      textColor: {
        accent: "#CBCBCB",
        link: "#415A77",
      },
      borderColor: {
        link: "#415A77",
        accent: "#CBCBCB",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
