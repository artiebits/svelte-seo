# Svelte SEO

[![Build Status](https://travis-ci.org/artiebits/svelte-seo.svg?branch=master)](https://travis-ci.org/artiebits/svelte-seo)

Writing SEO can be confusing and overwhelming. Svelte SEO does it easily for you and makes it effortless to ensure your content is optimized for search engine rankings.

Quickly add meta tags, Structured Data Markup, and Open Graph tags to your web page so your content is viewable and searchable by search engines.

**Sponsor Svelte SEO**

If you rely on Svelte SEO, please consider supporting it.

<a href="https://www.buymeacoffee.com/artiebits" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>



## Installation

This module must be installed as a `devDependency`

* npm
`npm install -D svelte-seo`
* yarn
`yarn add -D svelte-seo`
* pnpm
  `pnpm add -D svelte-seo`



## Usage

There are many ways in which you can use this component.

* Basic usage

  The basic meta tags required for every page is a "title" and "description". This is how you can implement it in Svelte SEO.

  

  ```html
  <script>
  	import Head from "svelte-seo";
      // You can choose to use any name apart from 'Head'
  </script>
  
  <Head
    title = "Simple page title"
    description = "Simple description about a page"
    />
  ```

  The statement above would insert the title tag and the description tag inside the head element.

  

* The component also allows you to insert elements and contents inside the `<head>` of your document.

  ```html
  <script>
  	import Head from "svelte-seo"
  </script>
  
  <Head>
      <link rel="stylesheet" href="/tutorial/dark-theme.css">
      <script>
      	// your javascript can go here
      </script>
  </Head>
  ```

  

### Setting default SEO properties

There are some properties which will stayed fixed for every page on your website; examples are the `them-color`, `manifest` and `<base/>` tag or you might want to set a default title for every page. Svelte SEO makes it easy to set defaults for these properties or for any properties which you want to have defaults for.

The secret to doing is this by using layouts. Configuring the component in your layout will ensure that those properties will remain fixed for every page but can be overridden in per page basis.

Let's say we had this tree structure with the following code below.

```
src/
├─ routes/
│  ├─ +layout.svelte
│  ├─ +page.svelte
│  ├─ other/
│  │  ├─ +page.svelte

```



```html
<!-- src/routes/+layout.svelte -->
<script>
    import Head from "svelte-seo";
</script>

<Head
    title = "Default Title"
    themeColor = "red"
    notranslate = {true}
/>

<slot/>
<!------------->

<!-- src/routes/+page.svelte -->
<script>
	import Head from "svelte-seo";
</script>

<Head
  title = "Home page"
  themeColor = "blue"
/>
<!----------------->

<!-- src/routes/other/+page.svelte -->
 <!-- Contents go here -->
<!--------------------->
```

In the project structure above, `src/routes/+page.svelte` would not inherit the default `title` and `themeColor` but `src/routes/other/+page.svelte`  would inherit those properties since it was overridden in the page.
