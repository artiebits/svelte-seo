import { test, expect } from "@playwright/test";

test.describe("Loads twitter tags", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Loads twitter title tag correctly", async ({ page }) => {
    expect(
      await page.locator("meta[name='twitter:title']").getAttribute("content")
    ).toBe("Open Graph Article Title");
  });

  test("Loads twitter description tag correctly", async ({ page }) => {
    expect(
      await page
        .locator("meta[name='twitter:description']")
        .getAttribute("content")
    ).toBe("Description of open graph article");
  });

  test("Loads twitter card correctly", async ({ page }) => {
    expect(
      await page.locator("meta[name='twitter:card']").getAttribute("content")
    ).toBe("app");
  });

  test("Loads twitter image correctly", async ({ page }) => {
    expect(
      await page.locator("meta[name='twitter:image']").getAttribute("content")
    ).toBe("https://image.com");
  });

  test("Loads twitter image alt correctly", async ({ page }) => {
    expect(
      await page
        .locator("meta[name='twitter:image:alt']")
        .getAttribute("content")
    ).toBe("image Alt");
  });

  test("Loads twitter site tag correctly", async ({ page }) => {
    expect(
      await page.locator("meta[name='twitter:site']").getAttribute("content")
    ).toBe("@svelteseo");
  });

  test("Loads twitter creator tag correctly", async ({ page }) => {
    expect(
      await page.locator("meta[name='twitter:creator']").getAttribute("content")
    ).toBe("@artiebits");
  });

  test("Loads twitter player  tags correctly", async ({ page }) => {
    expect(
      await page.locator("meta[name='twitter:player']").getAttribute("content")
    ).toBe("https://wakey.io/embed/26");
  });

  test("Loads twitter player width tag correctly", async ({ page }) => {
    expect(
      await page
        .locator("meta[name='twitter:player:width']")
        .getAttribute("content")
    ).toBe("720");
  });

  test("Loads twtter player height tag correctly", async ({ page }) => {
    expect(
      await page
        .locator("meta[name='twitter:player:height']")
        .getAttribute("content")
    ).toBe("720");
  });

  test("Loads twitter player stream tag correctly", async ({ page }) => {
    expect(
      await page
        .locator("meta[name='twitter:player:stream']")
        .getAttribute("content")
    ).toBe("https://wakey.io/public/vid/26.mp4");
  });

  test("Loads twitter app name Iphone tag correctly", async ({ page }) => {
    expect(
      await page
        .locator("meta[name='twitter:app:name:iphone']")
        .getAttribute("content")
    ).toBe("Svelte SEO");
  });

  test("Loads twitter app Id Iphone tag correctly", async ({ page }) => {
    expect(
      await page
        .locator("meta[name='twitter:app:id:iphone']")
        .getAttribute("content")
    ).toBe("23232");
  });

  test("Loads twitter app url iphone tag correctly", async ({ page }) => {
    expect(
      await page
        .locator("meta[name='twitter:app:url:iphone']")
        .getAttribute("content")
    ).toBe("applenews://");
  });

  test("Loads twitter app name ipad tag correctly", async ({ page }) => {
    expect(
      await page
        .locator("meta[name='twitter:app:name:ipad']")
        .getAttribute("content")
    ).toBe("Svelte SEO");
  });

  test("Loads twitter googleplay app id tag correctly", async ({ page }) => {
    expect(
      await page
        .locator("meta[name='twitter:app:id:googleplay']")
        .getAttribute("content")
    ).toBe("svelte.seo.com");
  });

  test("Loads twitter googleplay app name tag correctly", async ({ page }) => {
    expect(
      await page
        .locator("meta[name='twitter:app:name:googleplay']")
        .getAttribute("content")
    ).toBe("Svelte SEO");
  });

  test("Loads twitter googleplay app url correctly", async ({ page }) => {
    expect(
      await page
        .locator("meta[name='twitter:app:url:googleplay']")
        .getAttribute("content")
    ).toBe("https://play.google.com/store/apps/details?id=com.sega.sonicdash");
  });
});
