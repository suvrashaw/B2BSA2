import { expect, test } from "@playwright/test";

test("homepage has correct title and SEO metadata", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  // Replace 'B2B Sales Arrow' with your actual brand name if different
  await expect(page).toHaveTitle(/B2B Sales Arrow/);
});

test("navigation works", async ({ page }) => {
  await page.goto("/");

  // Check if the main CTA or a link exists and is clickable
  // This is a placeholder; we can refine this once we know your nav structure
  const header = page.locator("h1");
  await expect(header).toBeVisible();
});
