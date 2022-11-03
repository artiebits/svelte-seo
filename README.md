# Svelte SEO

[![Build Status](https://travis-ci.org/artiebits/svelte-seo.svg?branch=master)](https://travis-ci.org/artiebits/svelte-seo)

Svelte SEO is a plugin that makes managing your SEO easier in Svelte projects.

**Sponsor Svelte SEO**

If you rely on Svelte SEO, please consider supporting it.

<a href="https://www.buymeacoffee.com/artiebits" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## Installing

Do note that this library must be installed as a `devDependency`

Install using `yarn`:

`yarn add -D svelte-seo`

or `npm`:

`npm install -D svelte-seo`

or `pnpm`

`pnpm install -D svelte-seo`


## Usage

### Add SEO to Page

Import SvelteSEO and add the desired properties. This will render out the tags in the `<head>` for SEO. At a bare minimum, you should add a title and description.

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

| Property | Type | Default | Description |
-----------| ---------| -----------| ---------|
| title | string | undefined | defines the title of the document |
| description | string | undefined | Define a description of your web page |
| base | string | undefined | specifies the base URL to use for all relative URLs in a document |
| applicationName | string | undefined | Name of web application (only should be used if the website is used as an app) |
| themeColor | string | undefined | Theme color for your website |
| noindex | Boolean | false | Sets whether page should be indexed or not. [More Info](#no-index) |
| nofollow | Boolean | false | Sets whether page should be followed or not. [More Info](#no-follow) | 
