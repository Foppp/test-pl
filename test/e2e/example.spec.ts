import { test, expect } from "@playwright/test";
import { setTimeout } from "timers/promises";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/titleContent/);
  await setTimeout(1000);
  expect(await page.screenshot()).toMatchSnapshot("content.png", {
    maxDiffPixels: 2,
    
  });
  await expect(page).toHaveScreenshot();
});
