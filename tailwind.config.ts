import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
      colors: {
        "bluish": "rgb(63, 114, 175)",
        "darkBluish": "rgb(17, 45, 78)",
        "silvery": "rgb(219, 226, 239)",
        "whity": "rgb(249, 247, 247)"
      }
    },
  },
  plugins: [],
};
export default config;
