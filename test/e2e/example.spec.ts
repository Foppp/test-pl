import { test, expect } from "@playwright/test";

test("has title", async ({ page }, testinfo) => {
  testinfo.snapshotSuffix = "";
  await page.goto("/sdfgs");

  await expect(page).toHaveTitle(/titleContent/);
  expect(await page.screenshot()).toMatchSnapshot("content.png", {
    maxDiffPixels: 2,
  });
});
