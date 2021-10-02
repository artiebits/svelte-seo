# Svelte SEO

[![Build Status](https://travis-ci.org/artiebits/svelte-seo.svg?branch=master)](https://travis-ci.org/artiebits/svelte-seo)

Svelte SEO is a plugin that makes managing your SEO easier in Svelte projects.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installing](#installing)
- [Usage](#usage)
  - [Add SEO to Page](#add-seo-to-page)
  - [Svelte SEO options](#svelte-seo-options)
  - [Open Graph](#open-graph)
    - [Basic Example](#basic-example)
    - [Article Example](#article-example)
  - [Twitter Link Preview Card](#twitter-link-preview-card)
    - [Twitter Example](#twitter-example)
  - [JSON-LD](#json-ld)
    - [JSON-LD Example](#json-ld-example)
- [Acknowledgements](#acknowledgements)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installing

Install using `yarn`:

`yarn add svelte-seo`

or `npm`:

`npm install --save svelte-seo`

## Usage

### Add SEO to Page

Import Svelte SEO and add the desired properties. This will render out the tags in the `<head>` for SEO. At a bare minimum, you should add a title and description.

```svelte
<script>
  import SvelteSeo from "svelte-seo";
</script>

<SvelteSeo
  title="Simple Usage Example"
  description="A short description goes here."
/>
```

### Svelte SEO options

| Property                           | Type                    | Description                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`                            | string                  | Sets the page meta title.                                                                                                                                                                                                                                                                                                                            |
| `description`                      | string                  | Sets the page meta description.                                                                                                                                                                                                                                                                                                                      |
| `noindex`                          | boolean (default false) | Sets whether page should be indexed or not. [More Info](#no-index).                                                                                                                                                                                                                                                                                  |
| `nofollow`                         | boolean (default false) | Sets whether page should be followed or not. [More Info](#no-follow).                                                                                                                                                                                                                                                                                |
| `keywords`                         | string                  | Set the page keywords.                                                                                                                                                                                                                                                                                                                               |
| `canonical`                        | string                  | Set the page canonical url.                                                                                                                                                                                                                                                                                                                          |
| `openGraph.type`                   | string                  | The type of your object. Depending on the type you specify, other properties may also be required [More Info](#open-graph).                                                                                                                                                                                                                          |
| `openGraph.title`                  | string                  | The open graph title, this can be different than your meta title.                                                                                                                                                                                                                                                                                    |
| `openGraph.description`            | string                  | The open graph description, this can be different than your meta description.                                                                                                                                                                                                                                                                        |
| `openGraph.url`                    | string                  | The canonical URL of your object that will be used as its permanent ID in the graph.                                                                                                                                                                                                                                                                 |
| `openGraph.images`                 | object[]                | An array of images to be used as a preview. If multiple supplied you can choose one when sharing. [See Examples](#open-graph-examples)                                                                                                                                                                                                               |
| `openGraph.article.publishedTime`  | datetime                | When the article was first published. [See Examples](#open-graph-examples).                                                                                                                                                                                                                                                                          |
| `openGraph.article.modifiedTime`   | datetime                | When the article was last changed.                                                                                                                                                                                                                                                                                                                   |
| `openGraph.article.expirationTime` | datetime                | When the article is out of date after.                                                                                                                                                                                                                                                                                                               |
| `openGraph.article.authors`        | string[]                | Writers of the article.                                                                                                                                                                                                                                                                                                                              |
| `openGraph.article.section`        | string                  | A high-level section name. E.g. Technology                                                                                                                                                                                                                                                                                                           |
| `openGraph.article.tags`           | string[]                | Tag words associated with this article.                                                                                                                                                                                                                                                                                                              |
| `twitter.site`                     | string                  | The Twitter @username the card should be attributed to.                                                                                                                                                                                                                                                                                              |
| `twitter.title`                    | string                  | A concise title for the related content. Note- iOS, Android: Truncated to two lines in timeline and expanded Tweet ; Web: Truncated to one line in timeline and expanded Tweet                                                                                                                                                                       |
| `twitter.description`              | string                  | A description that concisely summarizes the content as appropriate for presentation within a Tweet. You should not re-use the title as the description or use this field to describe the general services provided by the website. Note- iOS, Android: Not displayed ; Web: Truncated to three lines in timeline and expanded Tweet                  |
| `twitter.image`                    | string(url)             | A URL to a unique image representing the content of the page. Images for this Card support an aspect ratio of 2:1 with minimum dimensions of 300x157 or maximum of 4096x4096 pixels. Images must be less than 5MB in size. JPG, PNG, WEBP and GIF formats are supported. Only the first frame of an animated GIF will be used. SVG is not supported. |
| `twitter.imageAlt`                 | string                  | A text description of the image conveying the essential nature of an image to users who are visually impaired. Maximum 420 characters.                                                                                                                                                                                                               |
| `jsonLd`                           | object                  | Data in `ld+json` format. [See Examples](#json-dl-example).                                                                                                                                                                                                                                                                                          |

### Open Graph

For the full specification please check out http://ogp.me/

Svelte SEO currently supports:

- [basic](#basic-example)
- [article](#article-example)

#### Basic Example

```svelte
<script>
  import SvelteSeo from "svelte-seo";
</script>

<SvelteSeo
  openGraph={{
    title: 'Open Graph Title',
    description: 'Open Graph Description',
    url: 'https://www.example.com/page',
    type: 'website',
    images: [
      {
        url: 'https://www.example.com/images/og-image.jpg',
        width: 850,
        height: 650,
        alt: 'Og Image Alt'
      }
     ]
  }}
/>
```

#### Article Example

```svelte
<script>
  import SvelteSeo from "svelte-seo";
</script>

<SvelteSeo
  openGraph={{
    title: "Open Graph Article Title",
    description: "Description of open graph article",
    type: "article",
    url: "https://www.example.com/articles/article-title",
    article: {
      publishedTime: "2020-08-03T17:31:37Z",
      modifiedTime: "2020-08-20T09:31:37Z",
      expirationTime: "2025-12-21T17:31:37Z",
      section: "Section II",
      authors: [
        "https://www.example.com/authors/@firstnameA-lastnameA",
        "https://www.example.com/authors/@firstnameB-lastnameB",
      ],
      tags: ["Tag A", "Tag B", "Tag C"],
    },
    images: [
      {
        url: "https://www.example.com/images/cover.jpg",
        width: 850,
        height: 650,
        alt: "Og Image Alt",
      },
    ],
  }}
/>
```

### Twitter Link Preview Card

Allows Twitter Link Preview Cards (otherwise known as a Summary Card with Large Image) to be rendered. For more info check [here](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image)

#### Twitter Example

```svelte
<script>
  import SvelteSeo from "svelte-seo";
</script>

<SvelteSeo
  twitter={{
    site: "@username",
    title: "Twitter Card Title",
    description: "Description of Twitter Card",
    image: "https://www.example.com/images/cover.jpg",
    imageAlt: "Alt text for the card!",
  }}
/>
```

### JSON-LD

JSON-LD allow for more customized and rich representation for example in search results.

To discover all the different content types JSON-LD offers check out: https://developers.google.com/search/docs/guides/search-gallery

#### JSON-LD Example

```svelte
<script>
  import SvelteSeo from "svelte-seo";
</script>

<SvelteSeo
  jsonLd={{
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://example.com/article'
    },
    headline: 'Article headline',
    image: [
      'https://example.com/photos/1x1/photo.jpg',
      'https://example.com/photos/4x3/photo.jpg',
      'https://example.com/photos/16x9/photo.jpg'
    ],
    datePublished: '2020-08-03T17:31:37Z',
    dateModified: '2020-08-20T09:31:37Z',
    author: {
      '@type': 'Person',
      name: 'John Doe'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Google',
      logo: {
        '@type': 'ImageObject',
        url: 'https://example.com/logo.jpg'
      }
    }
  }}
/>
```


## Acknowledgements

This is inspired by [Next SEO](https://github.com/garmeeh/next-seo) by [@garmeeh](https://github.com/garmeeh).

## License

MIT
