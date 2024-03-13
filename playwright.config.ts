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
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  updateSnapshots: "missing",
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  outputDir: "./test/e2e/__snapshots__/output",
  snapshotPathTemplate:
    "./test/e2e/__snapshots__/snaps/{projectName}/{testFilePath}/{arg}{ext}",
  testMatch: "*.spec.{ts,tsx}",

  reporter: [
    [
      "html",
      {
        outputFolder: "./test/e2e/__snapshots__/results",
        open: "never",
      },
    ],
    process.env.CI ? ["github"] : ["line"],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "http://127.0.0.1:3000",
    screenshot: "only-on-failure",
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "Desktop Chrome (1920x1080)",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: "Desktop Firefox (1920x1080)",
      use: {
        ...devices["Desktop Firefox"],
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: "Desktop Safari (1920x1080)",
      use: {
        ...devices["Desktop Safari"],
        viewport: { width: 1920, height: 1080 },
      },
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: "npm run dev",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: !process.env.CI,
  },
});
