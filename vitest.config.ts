import * as path from "path";
import * as VitestConfig from "vitest/config";
import react from "@vitejs/plugin-react";

export default VitestConfig.defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    watch: false,
    includeSource: ["app/**/*.{ts,tsx}"],
    exclude: ["node_modules", "test/e2e"],
    coverage: {
      exclude: ["app/mocks.tsx"],
      reporter: process.env.CI ? "json" : "html-spa",
    },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "app"),
    },
  },
  plugins: [react()],
});
