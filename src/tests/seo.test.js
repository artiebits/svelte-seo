import { test, expect } from "@playwright/test";

test.describe("Testing SEO and meta tags", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Loads the title", async ({ page }) => {
    await expect(page).toHaveTitle("Open Graph Article Title");
  });

  test("Loads description tag meta[name='description']", async ({ page }) => {
    expect(
      await page.locator("meta[name='description']").getAttribute("content")
    ).toBe("Description of open graph article");
  });

  test("Loads the base tag correctly", async ({ page }) => {
    expect(await page.locator("head base").getAttribute("href")).toBe(
      "https://www.example.com"
    );
  });

  test("Loads the keywords tag correctly", async ({ page }) => {
    const element = page.locator("meta[name='keywords']");
    const keywords = await element.getAttribute("content");
    expect(keywords, "Must render keywords tag").toBe("svelte,sveltekit,web");
    expect(
      keywords?.split(",").length,
      "Loads the right number of keywords"
    ).toBe(3);
  });

  test("Loads the 'application-name' meta tag correctly", async ({ page }) => {
    expect(
      await page
        .locator("meta[name='application-name']")
        .getAttribute("content")
    ).toBe("Svelte SEO");
  });

  test("Loads the canonical link tag correctly", async ({ page }) => {
    expect(
      await page.locator("link[rel='canonical']").getAttribute("href")
    ).toBe("https://www.example.com");
  });

  test("Loads the theme color tag correctly", async ({ page }) => {
    expect(
      await page.locator("meta[name='theme-color']").getAttribute("content")
    ).toBe("red");
  });

  test("Loads the nositelinkssearchbox meta tag correctly", async ({
    page,
  }) => {
    expect(
      await page
        .locator("meta[content='nositelinkssearchbox']")
        .getAttribute("content")
    ).toBe("nositelinkssearchbox");
  });

  test("Loads the notranslate tag correctly", async ({ page }) => {
    expect(
      await page.locator("meta[content='notranslate']").getAttribute("content")
    ).toBe("notranslate");
  });

  test("Loads the amp tag correctly", async ({ page }) => {
    expect(await page.locator("link[rel='amphtml']").getAttribute("href")).toBe(
      "https://www.example.com/url/to/amp/document.html"
    );
  });

  test("Loads manifest correctly", async ({ page }) => {
    expect(
      await page.locator("link[rel='manifest']").getAttribute("href")
    ).toBe("/manifest.json");
  });

  test("Loads language alternates tags correctly", async ({ page }) => {
    const element = page.locator("link[rel='alternate']");
    expect(await element.count(), "Loads the right number of tags").toBe(2);
  });
});
