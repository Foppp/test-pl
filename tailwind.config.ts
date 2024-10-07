import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      minHeight: {
        "52": "100px",
      },
      fontFamily: {
        quick: ["PT Mono", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
