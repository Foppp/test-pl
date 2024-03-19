import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minHeight: {
        "52": "100px",
      },
    },
  },
  plugins: [],
} satisfies Config;
