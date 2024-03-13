import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/sdfgs");

  // Expect a title "to contain" a substring.
  expect(await page.screenshot()).toMatchSnapshot('sss.png')
});
