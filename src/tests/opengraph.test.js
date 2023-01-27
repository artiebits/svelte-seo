import { expect, test } from "@playwright/test";

test.describe("Testing OpenGraph meta tags", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Loads og:title tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='og:title']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe(
      "Open Graph Article Title"
    );
  });

  test("Loads og:type tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='og:type']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe("website");
  });

  test("Loads og:url tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='og:url']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe(
      "https://www.example.com"
    );
  });

  test("Loads og:image:url tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='og:image:url']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.count(), "Loads the right amount of tags").toBe(2);
  });

  test("Loads og:image:secure_url tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='og:image:secure_url']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.count(), "Loads the right amount of tags").toBe(2);
  });

  test("Loads og:image:type tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='og:image:type']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.count(), "Loads the right amount of tags").toBe(2);
  });

  test("Loads og:image:width tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='og:image:width']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.count(), "Loads the right amount of tags").toBe(2);
  });

  test("Loads og:image:height tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='og:image:height']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.count(), "Loads the right amount of tags").toBe(2);
  });

  test("Loads og:image:alt tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='og:image:alt']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.count(), "Loads the right amount of tags").toBe(2);
  });

  test("Loads og:audio tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='og:audio']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe(
      "http://www.example.com.audio"
    );
  });

  test("Loads og:audio:secure_url tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='og:audio:secure_url']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe(
      "https://www.example.com.audio"
    );
  });

  test("Loads og:audio:type tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='og:audio:type']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe("audio/mpeg");
  });

  test("Loads og:description tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='og:description']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe(
      "Description of open graph article"
    );
  });

  test("Loads og:determiner tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='og:determiner']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe("the");
  });

  test("Loads og:locale tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='og:locale']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe("en_US");
  });

  test("Loads og:locale:alternate tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='og:locale:alternate']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.count(), "Loads the right amount of tags").toBe(2);
  });

  test("Loads og:site_name tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='og:site_name']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe("Svelte SEO");
  });

  test("Loads og:video tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='og:video']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.count(), "Loads the right amount of tags").toBe(3);
  });

  test("Loads og:video:secure_url tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='og:video:secure_url']");
    expect(element, "The tag must exist").toBeDefined();
  });

  test("Loads og:video:type tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='og:video:type']");
    expect(element, "The tag must exist").toBeDefined();
  });

  test("Loads og:video:width tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='og:video:width']");
    expect(element, "The tag must exist").toBeDefined();
  });

  test("Loads og:video:height tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='og:video:height']");
    expect(element, "The tag must exist").toBeDefined();
  });

  test("Loads music:duration tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='music:duration']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe("236");
  });

  test("Loads music:album tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='music:album']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe(
      "http://open.spotify.com/album/7rq68qYz66mNdPfidhIEFa"
    );
  });

  test("Loads music:album:disc tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='music:album:disc']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe("1");
  });

  test("Loads music:album:track tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='music:album:track']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe("3");
  });

  test("Loads music:musician tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='music:musician']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe(
      "https://your-profile.com"
    );
  });

  test("Loads music:song tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='music:song']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe(
      "http://open.spotify.com/track/0pfHfdUNVwlXA0WDXznm2C"
    );
  });

  test("Loads music:song:disc tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='music:song:disc']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe("1");
  });

  test("Loads music:creator tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='music:creator']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe(
      "https://creator-profile.com"
    );
  });

  test("Loads video:actor tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='video:actor']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.count(), "Loads the right amount of tags").toBe(3);
  });

  test("Loads video:actor:role tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='video:actor:role']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe("Cameo");
  });

  test("Loads video:director tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='video:director']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.count(), "Loads the right amount of tags").toBe(3);
  });

  test("Loads video:writer tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='video:writer']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.count(), "Loads the right amount of tags").toBe(3);
  });

  test("Loads video:duration tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='video:duration']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe("300");
  });

  test("Loads video:release_date tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='video:release_date']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe("2011-04-19");
  });

  test("Loads video:tag tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='video:tag']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.count(), "Loads the right amount of tags").toBe(2);
  });

  test("Loads video:series tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='video:series']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe(
      "https://www.series.com"
    );
  });

  test("Loads article:published_time tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='article:published_time']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe("2020-08-03T17:31:37Z");
  });

  test("Loads article:modified_time tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='article:modified_time']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe("2020-08-20T09:31:37Z");
  });

  test("Loads article:expiration_time tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='article:expiration_time']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe("2025-12-21T17:31:37Z");
  });

  test("Loads article:author tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='article:author']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.count(), "Loads the right amount of tags").toBe(2);
  });

  test("Loads article:section tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='article:section']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe("Section II");
  });

  test("Loads article:tag tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='article:tag']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.count(), "Loads the right amount of tags").toBe(3);
  });

  test("Loads book:author tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='book:author']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.count(), "Loads the right amount of tags").toBe(3);
  });

  test("Loads book:isbn tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='book:isbn']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe("1234567910");
  });

  test("Loads book:release_date tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='book:release_date']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe("2022-12-12");
  });

  test("Loads book:tag tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='book:tag']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.count(), "Loads the right amount of tags").toBe(2);
  });

  test("Loads profile:first_name tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='profile:first_name']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe("John");
  });

  test("Loads profile:last_name tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='profile:last_name']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe("Doe");
  });

  test("Loads profile:username tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='profile:username']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe("johndoe");
  });

  test("Loads profile:gender tag correctly", async ({ page }) => {
    const element = page.locator("meta[property='profile:gender']");
    expect(element, "The tag must exist").toBeDefined();
    expect(await element.getAttribute("content")).toBe("male");
  });
});
