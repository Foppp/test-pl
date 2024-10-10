import { test, expect } from "@playwright/test";
import { setTimeout } from "timers/promises";

test("has title", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("domcontentloaded");

  await expect(page).toHaveTitle(/titleContent/);
  await setTimeout(1000);

  await expect(page).toHaveScreenshot();
});
