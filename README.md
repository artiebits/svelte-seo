# Svelte SEO

Optimize your Svelte app for search engines and social media with meta tags, Open Graph, and JSON-LD.

Svelte SEO is a powerful and easy-to-use package designed to optimize your Svelte app for search engines and social media. By adding essential meta tags, Open Graph, Twitter Card tags, and JSON-LD to your pages, Svelte SEO improves your website's visibility and ranking in search results.

**Sponsor Svelte SEO**

If you rely on Svelte SEO and find it useful, please consider supporting it. Maintaining an open source project takes time and your support would be greatly appreciated.

<a href="https://www.buymeacoffee.com/artiebits" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
  - [Basic Usage](#basic-usage)
  - [Advanced Usage](#advanced-usage)
- [Svelte SEO Properties](#svelte-seo-properties)
  - [Open Graph](#open-graph)
  - [Twitter](#twitter)
  - [Facebook](#facebook)
  - [JSON-LD](#json-ld)
- [Setting Default SEO Properties](#setting-default-seo-properties)
- [Acknowledgements](#acknowledgements)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

- npm  
  `npm install -D svelte-seo`
- or yarn  
  `yarn add -D svelte-seo`
- or pnpm  
  `pnpm add -D svelte-seo`

## Usage

### Basic Usage

To add basic meta tags like "title" and "description" you can import the package and use it like this:

```svelte
<script>
  import SvelteSeo from "svelte-seo";
</script>

<SvelteSeo
  title="Simple page title"
  description="Simple description about a page"
/>
```

### Advanced Usage

You can provide additional properties to SvelteSeo component. Here is an example:

```svelte
<script>
  import SvelteSeo from "svelte-seo";
</script>

<SvelteSeo
  title="Primal Movement | Natural Movement for Better Health"
  description="Learn about primal movement exercises and how they can benefit your fitness."
  canonical="https://www.primal-movement.com/"
  keywords="primal movement, natural movement, squatting, lunging, crawling, jumping, fitness"
  openGraph={{
    title: "Primal Movement | Natural Movement for Better Health",
    description:
      "Learn about primal movement exercises and how they can benefit your fitness.",
    image: "https://www.primal-movement.com/images/squatting.jpg",
    url: "https://www.primal-movement.com/",
    type: "website",
    images: [
      {
        url: "https://www.primal-movement.com/images/squatting.jpg",
        width: 800,
        height: 600,
        alt: "Squatting",
      },
      {
        url: "https://www.primal-movement.com/images/lunging.jpg",
        width: 900,
        height: 800,
        alt: "Crawling",
      },
      {
        url: "https://www.primal-movement.com/images/crawling.jpg",
        alt: "Jumping",
      },
      {
        url: "https://www.primal-movement.com/images/jumping.jpg",
      },
    ],
    site_name: "Primal Movement",
  }}
  twitter={{
    card: "summary_large_image",
    site: "@primalmovement",
    title: "Primal Movement | Natural Movement for Better Health",
    description:
      "Learn about primal movement exercises and how they can benefit your fitness.",
    image: "https://www.primal-movement.com/images/squatting.jpg",
  }}
  facebook={{
    appId: "1234567890",
  }}
/>
```

## Svelte SEO Properties

| Property                  | Type                                                 | Description                                                                                                                                                  |
| ------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `title`                   | `string`                                             | A page title that will appear in search results.                                                                                                             |
| `description`             | `string`                                             | A page description that will appear in search results.                                                                                                       |
| `keywords`                | `string`                                             | Keywords that give search engines more information about the content of the page.                                                                            |
| `base`                    | `string`                                             | A default URL and target for all links on a page.                                                                                                            |
| `applicationName`         | `string`                                             | The name of the web application that the page represents.                                                                                                    |
| `themeColor`              | `string`                                             | A suggested color that user agents should use to customize the display of the page or the surrounding user interface.                                        |
| `nofollow`                | `boolean` (default `false`)                          | Prevents Googlebot from following any links on the page.                                                                                                     |
| `noindex`                 | `boolean` (default `false`)                          | Prevents the page from being included in the index.                                                                                                          |
| `nositelinkssearchbox`    | `boolean` (default `false`)                          | Opt out of Google's Sitelinks search box.                                                                                                                    |
| `notranslate`             | `boolean`                                            | Prevents Google from translating the page.                                                                                                                   |
| `canonical`               | `string`                                             | The canonical URL of the page.                                                                                                                               |
| `amp`                     | `string`                                             | A URL to the AMP version of the webpage.                                                                                                                     |
| `manifest`                | `string`                                             | The URL to a JSON file that tells the browser about your Progressive Web App and how it should behave when installed on the user's desktop or mobile device. |
| `languageAlternates`      | `Array<{ hreflang: string; href: string }>`          | Provides Google with information about the variations of your content in other languages.                                                                    |
| `twitter.title`           | `string`                                             | The title of the content, maximum 70 characters.                                                                                                             |
| `twitter.description`     | `string`                                             | A description of the content, maximum 200 characters.                                                                                                        |
| `twitter.image`           | `string`                                             | The URL of an image to use in the Twitter card. Images must be less than 5MB in size.                                                                        |
| `twitter.imageAlt`        | `string`                                             | A text description of the image conveying its essential nature to visually impaired users. Maximum 420 characters.                                           |
| `twitter.card`            | "summary" , "summary_large_image" , "player" , "app" | The type of Twitter card to use.                                                                                                                             |
| `twitter.site`            | `string`                                             | The @username of the website.                                                                                                                                |
| `twitter.creator`         | `string`                                             | The @username of the content creator.                                                                                                                        |
| `twitter.player`          | `string`                                             | The HTTPS URL of the player iframe.                                                                                                                          |
| `twitter.playerWidth`     | `string`                                             | The width of the iframe in pixels.                                                                                                                           |
| `twitter.playerHeight`    | `string`                                             | The height of the iframe in pixels.                                                                                                                          |
| `twitter.playerStream`    | `string`                                             | The URL to the raw video or audio stream.                                                                                                                    |
| `twitter.appNameIphone`   | `string`                                             | The name of your iPhone app.                                                                                                                                 |
| twitter.appUrlIphone      | `string`                                             | The custom URL scheme for your app on iPhone (include ”://” after your scheme name)                                                                          |
| twitter.appNameIpad       | `string`                                             | The name of your iPad-optimized app                                                                                                                          |
| twitter.appIdIpad         | `string`                                             | Your app's ID in the iTunes App Store                                                                                                                        |
| twitter.appNameGoogleplay | `string`                                             | The name of your Android app                                                                                                                                 |
| twitter.appIdGoogleplay   | `string`                                             | Your app's ID in the Google Play Store                                                                                                                       |
| twitter.appUrlGoogleplay  | `string`                                             | The custom URL scheme for your app on Google Play                                                                                                            |
| facebook.appId            | `string`                                             | A unique number that identifies your app when you request ads from Audience Network, known as a Facebook App ID                                              |
| openGraph.title           | `string`                                             | The title of your object as it should appear within the graph                                                                                                |
| openGraph.type            | `string`                                             | The type of your object, such as "video.movie". Depending on the type, other properties may also be required.                                                |
| openGraph.url             | `string`                                             | The canonical URL of your object that will be used as its permanent ID in the graph                                                                          |
| openGraph.audio           | `string`                                             | An audio file to accompany the content.                                                                                                                      |
| openGraph.audioSecure_url | `string`                                             | An alternate URL to use if the webpage requires HTTPS                                                                                                        |
| openGraph.audioType       | `string`                                             | The MIME type for the audio                                                                                                                                  |
| openGraph.description     | `string`                                             | A one- or two-sentence description of your object                                                                                                            |
| openGraph.determiner      | `string`                                             | The word that appears before the title, e.g., "the" or "a".                                                                                                  |
| openGraph.locale          | `string`                                             | The locale of the content, e.g., "en_US".                                                                                                                    |
| openGraph.localeAlternate | `string[]`                                           | Alternate locales for the content. https://ogp.me/#array                                                                                                     |
| openGraph.site_name       | `string`                                             | The name of the website where the content is hosted.                                                                                                         |
| openGraph.images          | `Array`                                              | Properties about images related to the web page.                                                                                                             |
| openGraph.videos          | [`OpenGraphVideo`](./src/lib/types.d.ts)             | Properties about videos related to the web page.                                                                                                             |
| openGraph.music           | [`OpenGraphMusic`](./src/lib/types.d.ts)             | OpenGraph for music files.                                                                                                                                   |
| openGraph.movie           | [`OpenGraphMovie`](./src/lib/types.d.ts)             | OpenGraph for a movie.                                                                                                                                       |
| openGraph.article         | [`OpenGraphArticle`](./src/lib/types.d.ts)           | OpenGraph for an article.                                                                                                                                    |
| openGraph.book            | [`OpenGraphBook`](./src/lib/types.d.ts)              | OpenGraph for a book.                                                                                                                                        |
| openGraph.profile         | [`OpenGraphProfile`](./src/lib/types.d.ts)           | OpenGraph for a profile.                                                                                                                                     |

### Open Graph

Svelte SEO supports the following Open Graph object types: basic, music, movie, article, book, and profile. For the full specification, please check out http://ogp.me/.

### Twitter

Svelte SEO supports all Twitter Card Tags. For more information, check out the Twitter documentation at https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup.

```svelte
twitter={{
  card: "summary_large_image",
  site: "@primalmovement",
  title: "Primal Movement | Natural Movement for Better Health",
  description:
    "Learn about primal movement exercises and how they can benefit your fitness.",
  image: "https://www.primal-movement.com/images/squatting.jpg",
  imageAlt: "Squatting",
}}
```

### Facebook

```svelte
facebook={{
  appId: "1234567890",
}}
```

### JSON-LD

JSON-LD provides a more customizable and detailed representation of content in search results. With Svelte SEO, you can implement all available JSON-LD types. Here is a basic example:

```svelte
jsonLd={{
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Primal Movement | Natural Movement for Better Health",
  description:
    "Learn about primal movement exercises and how they can benefit your fitness.",
  url: "https://www.primal-movement.com",
}}
```

## Setting Default SEO Properties

You can set default SEO properties that will appear on every page without needing to add them individually. Common meta tags like `theme-color`, `manifest`, and `base` can be present on every page. If you configure the Svelte SEO in your `+layout.svelte`, these properties will stay fixed for every page. They can be changed on a per-page basis if necessary. For more information on using layouts and routing with SvelteKit, please refer to the official documentation at https://kit.svelte.dev/docs/routing#layout.

## Acknowledgements

This is inspired by [Next SEO](https://github.com/garmeeh/next-seo) by [@garmeeh](https://github.com/garmeeh).

## License

MIT
