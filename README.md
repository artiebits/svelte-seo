# 	Svelte SEO

[![Build Status](https://travis-ci.org/artiebits/svelte-seo.svg?branch=master)](https://travis-ci.org/artiebits/svelte-seo)

Writing SEO can be confusing and overwhelming. Svelte SEO does it easily for you and makes it effortless to ensure your content is optimised for search engine rankings.

Quickly add meta tags, structured data markup, and open graph tags to your web page so your content is viewable and searchable by search engines.

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

  The basic meta tags required for every page are "title" and "description." This is how you can implement it in Svelte SEO.

  

  ```svelte
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

  ```svelte
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

There are some properties that will stay fixed for every page on your website; examples are the `theme-color`, `manifest`, and `<base/>` tags, or you might want to set a default title for every page. Svelte SEO makes it easy to set defaults for these properties or for any properties that you want to have defaults for.

The secret to doing this is using layouts. Configuring the component in your layout will ensure that those properties will remain fixed for every page but can be overridden on a per page basis.

Let's say we have this tree structure with the following code below.

```
src/
├─ routes/
│  ├─ +layout.svelte
│  ├─ +page.svelte
│  ├─ other/
│  │  ├─ +page.svelte

```



```svelte
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

In the project structure above, `src/routes/+page.svelte` will not inherit the default `title` and `themeColor` because we override them but `src/routes/other/+page.svelte`  will inherit those properties since we did not override them inside the page.



### Configuring the component inside your layout

There are instances where you might not want to import the component for every page but still set the SEO properties. We can accomplish this with the use of layout and page data. 

Using this method, we will return an object inside our load function that contains SEO properties.

```javascript
// src/routes/+page.js
export const load = async()=>{
    return {
        SEO: {
            title: "My page title",
            description: "My page description"
            themeColor: "red"
            canonical: "www.example.com"
        }
    }
}
```

```svelte
<!-- src/routes/+layout.svelte -->
<script>
	import Head from "svelte-seo";
    import { page } from "$app/stores";
</script>

<Head
    title={$page.data.SEO.title}
    description={$page.data.SEO.description}
    themeColor={$page.data.SEO.themeColor}
    canonical={$page.data.SEO.canonical}
 />
```



## Component Properties

| Property                  | Type                                                         | Default   | Description                                                  |
| ------------------------- | ------------------------------------------------------------ | --------- | ------------------------------------------------------------ |
| title                     | string                                                       | undefined | The page's title which will appear in search results         |
| description               | string                                                       | undefined | The page's description which will appear in search results   |
| keywords                  | string                                                       | undefined | These are keywords which give search engines extra information about a page's content. [It's not necessary to use it these days](https://www.semrush.com/blog/meta-keywords/). |
| base                      | string                                                       | undefined | Specifies a default URL and a default target for all links on a page |
| applicationName           | string                                                       | undefined | The value must be a short free-form string giving the name of the web application that the page represents. |
| themeColor                | string                                                       | undefined | Indicates a suggested color that user agents should use to customize the display of the page or of the surrounding user interface. |
| nofollow                  | Boolean                                                      | false     | prevents Googlebot from following any links on the page.     |
| noindex                   | Boolean                                                      | false     | prevents the page from being included in the index.          |
| nositelinkssearchbox      | Boolean                                                      | false     | Opt out of Google's Sitelinks search box                     |
| notranslate               | Boolean                                                      | undefined | Prevents Google from translating the page                    |
| canonical                 | string                                                       | undefined | Value is the canonical URL of the page                       |
| amp                       | string                                                       | undefined | A URL to the amp version of the webpage                      |
| manifest                  | string                                                       | undefined | The URL to a a JSON file that tells the browser about your Progressive Web App and how it should behave when installed on the user's desktop or mobile device. |
| languageAlternates        | *Array*<{ hreflang: *string*; href: *string* }>              | undefined | Tell Google about the variations of your content in other languages |
| twitter.title             | string                                                       | undefined | Title of content (max 70 characters)                         |
| twitter.description       | string                                                       | undefined | Description of content (maximum 200 characters)              |
| twitter.image             | string                                                       | undefined | URL of image to use in the card. Images must be less than 5MB in size. JPG, PNG, WEBP and GIF formats are supported. Only the first frame of an animated GIF will be used. SVG is not supported. |
| twitter.imageAlt          | string                                                       | undefined | A text description of the image conveying the essential nature of an image to users who are visually impaired. Maximum 420 characters. |
| twitter.card              | "summary" , "summary_large_image" , "player" , "app"         | undefined | The card type                                                |
| twitter.site              | string                                                       | undefined | @username of website.                                        |
| twitter.creator           | string                                                       | undefined | @username of content creator                                 |
| twitter.player            | string                                                       | undefined | HTTPS URL of player iframe                                   |
| twitter.playerWidth       | string                                                       | undefined | Width of iframe in pixels                                    |
| twitter.playerHeight      | string                                                       | undefined | Height of iframe in pixels                                   |
| twitter.playerStream      | string                                                       | undefined | URL to raw video or audio stream                             |
| twitter.appNameIphone     | string                                                       | undefined | Name of your iPhone app                                      |
| twitter.appIdIphone       | string                                                       | undefined | Your app ID in the iTunes App Store (Note: NOT your bundle ID) |
| twitter.appUrlIphone      | string                                                       | undefined | Your app’s custom URL scheme (you must include ”://” after your scheme name) |
| twitter.appNameIpad       | string                                                       | undefined | Name of your iPad optimized app                              |
| twitter.appIdIpad         | string                                                       | undefined | Your app ID in the iTunes App Store                          |
| twitter.appNameGoogleplay | string                                                       | undefined | Name of your Android app                                     |
| twitter.appIdGoogleplay   | string                                                       | undefined | Your app ID in the Google Play Store                         |
| twitter.appUrlGoogleplay  | string                                                       | undefined | Your app’s custom URL scheme                                 |
| facebook.appId            | string                                                       | undefined | A Facebook App ID is a unique number that identifies your app when you request ads from Audience Network. |
| openGraph.title           | string                                                       | undefined | The title of your object as it should appear within the graph |
| openGraph.type            | string                                                       | undefined | The type of your object, e.g., "video.movie". Depending on the type you specify, other properties may also be required. |
| openGraph.url             | string                                                       | undefined | The canonical URL of your object that will be used as its permanent ID in the graph |
| openGraph.audio           | string                                                       | undefined | A URL to an audio file to accompany this object.             |
| openGraph.audioSecure_url | string                                                       | undefined | An alternate URL to use if the webpage requires HTTPS.       |
| openGraph.audioType       | string                                                       | undefined | The mime type for the audio                                  |
| openGraph.description     | string                                                       | undefined | A one to two sentence description of your object.            |
| openGraph.determiner      | string                                                       | undefined | The word that appears before this object's title in a sentence. An enum of (a, an, the, "", auto). If |
| openGraph.locale          | string                                                       | undefined | The locale these tags are marked up in. Of the format `language_TERRITORY`. Default is `en_US`. |
| openGraph.localeAlternate | string[]                                                     | undefined | An [array](https://ogp.me/#array) of other locales this page is available in. |
| openGraph.site_name       | string                                                       | undefined | If your object is part of a larger web site, the name which should be displayed for the overall site. e.g., "IMDb". |
| openGraph.videos          | `Array<{url: string; secure_url?: string; type?: string; alt?:  string; width?: number \| string; height?: number \| string}>` | undefined | Contains properties about videos pertaining to the web page  |
| openGraph.images          | `Array<{  url?: string;secure_url?: string; type?: string; alt?: string; width?: number \| string; height?: number \| string}>` | undefined | Contains properties about images pertaining to the web page  |
| openGraph.music           | `{ duration?: number \| string; album?: string; albumDisc?: number; albumTrack?: number; musician?: string; creator?: string; song?: string; songDisc?: number \| string; songTrack?: number \| string; release_date?: string;}` | undefined | OpenGraph for music files                                    |
| openGraph.movie           | `{ actor?: string[]; actorRole?: string; director?: string[]; writer?: string[]; duration?: number \| string; release_date?: string; tag?: string[]; series?: string;}` | undefined | OpenGraph for a movie                                        |
| openGraph.article         | `{published_time?: string; modified_time?: string; expiration_time?: string; author?: string[]; section?: string; tag?: string[];}` | undefined | OpenGraph  for an article                                    |
| openGraph.book            | `{ author?: string[]; isbn?: string \| number; release_date?: string; tag?: string[] }` | undefined | OpenGraph for a book                                         |
| openGraph.profile         | `{ first_name?: string;last_name?: string; username?: string; gender?: "male" \| "female";}` | undefined | OpenGraph for a profile                                      |

