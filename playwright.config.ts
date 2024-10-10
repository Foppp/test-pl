import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./test/e2e",
  fullyParallel: true,
  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

  // Retry on CI only.
  retries: process.env.CI ? 2 : 0,
  snapshotPathTemplate:
    "./test/e2e/snaps/{projectName}/{testFilePath}/{arg}{ext}",
  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,

  // Reporter to use
  reporter: [["html", { open: "never" }]],
  expect: {
    toHaveScreenshot: { maxDiffPixelRatio: 0.5 },
  },
  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: "http://127.0.0.1:3000",

    // Collect trace when retrying the failed test.
    trace: "on-first-retry",
  },
  // Configure projects for major browsers.
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        bypassCSP: true,
        launchOptions: {
          args: ["--disable-web-security"],
        },
      },
    },
  ],
  // Run your local dev server before starting the tests.
  webServer: {
    command: "npm run dev",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: !process.env.CI,
  },
});
