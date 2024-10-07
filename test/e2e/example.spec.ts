import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/titleContent/);

  expect(await page.screenshot()).toMatchSnapshot("content.png", {
    maxDiffPixels: 2,
  });
});
