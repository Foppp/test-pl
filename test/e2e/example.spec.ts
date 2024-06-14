import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/sdfgs");

  expect(await page.screenshot()).toMatchSnapshot("sss.png");
});
