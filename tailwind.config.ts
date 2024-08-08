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
        brief: "#1B263B",
        rest: "#0D1B2A",
      },
      textColor: {
        accent: "#CBCBCB",
      },
    },
  },
  plugins: [],
};
export default config;
