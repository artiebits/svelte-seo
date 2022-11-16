import { expect, test } from '@playwright/test';
import data from '../routes/index.js';



test.describe('Testing OpenGraph meta tags', async () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('Loads og:title tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='og:title']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.title);
	});

	test('Loads og:type tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='og:type']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.type);
	});

	test('Loads og:url tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='og:url']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.url);
	});

	test('Loads og:image:url tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='og:image:url']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.count(), 'Loads the right amount of tags').toBe(
			data.openGraph?.images?.length
		);
	});

	test('Loads og:image:secure_url tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='og:image:secure_url']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.count(), 'Loads the right amount of tags').toBe(
			data.openGraph?.images?.length
		);
	});

	test('Loads og:image:type tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='og:image:type']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.count(), 'Loads the right amount of tags').toBe(
			data.openGraph?.images?.length
		);
	});

	test('Loads og:image:width tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='og:image:width']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.count(), 'Loads the right amount of tags').toBe(
			data.openGraph?.images?.length
		);
	});

	test('Loads og:image:height tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='og:image:height']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.count(), 'Loads the right amount of tags').toBe(
			data.openGraph?.images?.length
		);
	});

	test('Loads og:image:alt tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='og:image:alt']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.count(), 'Loads the right amount of tags').toBe(
			data.openGraph?.images?.length
		);
	});

	test('Loads og:audio tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='og:audio']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.audio);
	});

	test('Loads og:audio:secure_url tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='og:audio:secure_url']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.audioSecure_url);
	});

	test('Loads og:audio:type tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='og:audio:type']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.audioType);
	});

	test('Loads og:description tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='og:description']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.description);
	});

	test('Loads og:determiner tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='og:determiner']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.determiner);
	});

	test('Loads og:locale tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='og:locale']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.locale);
	});

	test('Loads og:locale:alternate tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='og:locale:alternate']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.count(), 'Loads the right amount of tags').toBe(
			data.openGraph?.localeAlternate?.length
		);
	});

	test('Loads og:site_name tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='og:site_name']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.site_name);
	});

	test('Loads og:video tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='og:video']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.count(), 'Loads the right amount of tags').toBe(
			data.openGraph?.videos?.length
		);
	});

	test('Loads og:video:secure_url tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='og:video:secure_url']");
		expect(element, 'The tag must exist').toBeDefined();
	});

	test('Loads og:video:type tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='og:video:type']");
		expect(element, 'The tag must exist').toBeDefined();
	});

	test('Loads og:video:width tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='og:video:width']");
		expect(element, 'The tag must exist').toBeDefined();
	});

	test('Loads og:video:height tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='og:video:height']");
		expect(element, 'The tag must exist').toBeDefined();
	});

	test('Loads music:duration tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='music:duration']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.music?.duration?.toString());
	});

	test('Loads music:album tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='music:album']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.music?.album);
	});

	test('Loads music:album:disc tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='music:album:disc']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(
			data.openGraph?.music?.albumDisc?.toString()
		);
	});

	test('Loads music:album:track tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='music:album:track']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(
			data.openGraph?.music?.albumTrack?.toString()
		);
	});

	test('Loads music:musician tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='music:musician']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.music?.musician);
	});

	test('Loads music:song tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='music:song']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.music?.song);
	});

	test('Loads music:song:disc tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='music:song:disc']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.music?.songDisc);
	});

	test('Loads music:creator tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='music:creator']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.music?.creator);
	});

	test('Loads video:actor tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='video:actor']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.count(), 'Loads the right amount of tags').toBe(
			data.openGraph?.movie?.actor?.length
		);
	});

	test('Loads video:actor:role tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='video:actor:role']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.movie?.actorRole);
	});

	test('Loads video:director tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='video:director']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.count(), 'Loads the right amount of tags').toBe(
			data.openGraph?.movie?.director?.length
		);
	});

	test('Loads video:writer tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='video:writer']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.count(), 'Loads the right amount of tags').toBe(
			data.openGraph?.movie?.writer?.length
		);
	});

	test('Loads video:duration tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='video:duration']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.movie?.duration);
	});

	test('Loads video:release_date tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='video:release_date']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.movie?.release_date);
	});

	test('Loads video:tag tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='video:tag']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.count(), 'Loads the right amount of tags').toBe(
			data.openGraph?.movie?.tag?.length
		);
	});

	test('Loads video:series tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='video:series']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.movie?.series);
	});

	test('Loads article:published_time tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='article:published_time']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.article?.published_time);
	});

	test('Loads article:modified_time tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='article:modified_time']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.article?.modified_time);
	});

	test('Loads article:expiration_time tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='article:expiration_time']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.article?.expiration_time);
	});

	test('Loads article:author tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='article:author']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.count(), 'Loads the right amount of tags').toBe(
			data.openGraph?.article?.author?.length
		);
	});

	test('Loads article:section tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='article:section']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.article?.section);
	});

	test('Loads article:tag tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='article:tag']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.count(), 'Loads the right amount of tags').toBe(
			data.openGraph?.article?.tag?.length
		);
	});

	test('Loads book:author tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='book:author']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.count(), 'Loads the right amount of tags').toBe(
			data.openGraph?.book?.author?.length
		);
	});

	test('Loads book:isbn tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='book:isbn']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.book?.isbn?.toString());
	});

	test('Loads book:release_date tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='book:release_date']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.book?.release_date?.toString());
	});

	test('Loads book:tag tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='book:tag']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.count(), 'Loads the right amount of tags').toBe(
			data.openGraph?.book?.tag?.length
		);
	});


	test('Loads profile:first_name tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='profile:first_name']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.profile?.first_name);
	});

	test('Loads profile:last_name tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='profile:last_name']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.profile?.last_name);
	});

	test('Loads profile:username tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='profile:username']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.profile?.username);
	});

	test('Loads profile:gender tag correctly', async ({ page }) => {
		const element = page.locator("meta[property='profile:gender']");
		expect(element, 'The tag must exist').toBeDefined();
		expect(await element.getAttribute('content')).toBe(data.openGraph?.profile?.gender);
	});

});
