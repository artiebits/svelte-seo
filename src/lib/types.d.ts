import { Thing, WithContext } from "schema-dts";
import type { Snippet } from "svelte";

export interface SvelteSeo {
  /** It defines the document's title that is shown in a browser's title bar or a page's tab */
  title?: string;

  /** The description content value is often what search engines display under the page's title in search results */
  description?: string;

  /** It specifies the base URL to use for all relative URLs in a document */
  base?: string;

  /**It provide keywords for search engines to determine the relevance of that page for different search terms */
  keywords?: string;

  /** Browsers may use this to identify the application running in the web page. It is different from the <title> element, which may contain an application (or website) name */
  applicationName?: string;

  /** indicates a suggested color that user agents should use to customize the display of the page or of the surrounding user interface. */
  themeColor?: string;

  /** Do not follow the links on this page. If you don't specify this rule, Google may use the links on the page to discover those linked pages */
  nofollow?: boolean;

  /** Do not show this page, media, or resource in search results. If you don't specify this rule, the page, media, or resource may be indexed and shown in search results. */
  noindex?: boolean;

  /** Don't offer translation of this page in search results. If you don't specify this rule, Google may provide a translation of the title link and snippet of a search result for results that aren't in the language of the search query */
  notranslate?: boolean;

  /** A strong signal that the specified URL should become canonical. */
  canonical?: string;

  /** If an AMP document exists that is an alternative representation of a canonical document, then the canonical document should point to the AMP document via a link tag with the relation */
  amp?: string;

  /** A web app manifest is a JSON file that tells the browser how your Progressive Web App (PWA) should behave when installed on the user's desktop or mobile device */
  manifest?: string;

  languageAlternates?: Array<{
    /**  is used to indicate the language and the geographical targeting of a page. This hint can be used by browsers to select the more appropriate page or to improve SEO. */
    hreflang: string;
    /** contains a string that is the URL associated with the link. */
    href: string;
  }>;

  twitter?: Twitter;
  facebook?: Facebook;
  openGraph?: OpenGraph;
  jsonLd?: Thing | WithContext<Thing>;
  children?: Snippet<[]>;
}

export interface Facebook {
  /** When you create a Facebook app we generate and assign it a unique ID. This ID must be included when making any calls to our APIs.  */
  appId: string;
}

export interface Twitter {
  /** Title of content (max 70 characters). Used with summary, summary_large_image, player cards */
  title?: string;

  /** Description of content (maximum 200 characters). Used with summary, summary_large_image, player cards */
  description?: string;

  /** URL of image to use in the card. Images must be less than 5MB in size. JPG, PNG, WEBP and GIF formats are supported. Only the first frame of an animated GIF will be used. SVG is not supported.
  Used with summary, summary_large_image, player cards */
  image?: string;

  /** A text description of the image conveying the essential nature of an image to users who are visually impaired. Maximum 420 characters.
  Used with summary, summary_large_image, player cards */
  imageAlt?: string;

  /** The card type */
  card?: "summary" | "summary_large_image" | "player" | "app";

  /** \@username of website. Either twitter:site or twitter:site:id is required. */
  site?: string;

  /** \@username of content creator. Used with summary_large_image cards */
  creator?: string;

  /** HTTPS URL of player iframe */
  player?: string;

  /** Width of iframe in pixels. Used with player card */
  playerWidth?: string;

  /** Height of iframe in pixels. Used with player card */
  playerHeight?: string;

  /** URL to raw video or audio stream. Used with player card */
  playerStream?: string;

  /** Name of your iPhone app. Used with app card */
  appNameIphone?: string;

  /** Your app ID in the iTunes App Store (Note: NOT your bundle ID).Used with app card */
  appIdIphone?: string;

  /** Your app’s custom URL scheme (you must include ”://” after your scheme name). Used with app card */
  appUrlIphone?: string;

  /** Name of your iPad optimized app. Used with app card */
  appNameIpad?: string;

  /** Your app ID in the iTunes App Store. Used with app card */
  appIdIpad?: string;

  /** Name of your Android app. Used with app card  */
  appNameGoogleplay?: string;

  /** Your app ID in the Google Play Store. Used with app card */
  appIdGoogleplay?: string;

  /** Your app’s custom URL scheme. Used with app card */
  appUrlGoogleplay?: string;
}

export interface OpenGraph {
  /** The title of your object as it should appear within the graph, e.g., "The Rock". */
  title?: string;

  /** The type of your object, e.g., "video.movie". Depending on the type you specify, other properties may also be required. */
  type?: string;

  /** The canonical URL of your object that will be used as its permanent ID in the graph, e.g., "https://www.imdb.com/title/tt0117500/". */
  url?: string;
  /** A URL to an audio file to accompany this object. */
  audio?: string;

  /** An alternate url to use if the webpage requires HTTPS. */
  audioSecure_url?: string;

  /**  A MIME type for this audio */
  audioType?: string;

  /** A one to two sentence description of your object. */
  description?: string;

  /** The word that appears before this object's title in a sentence. An enum of (a, an, the, "", auto). If auto is chosen, the consumer of your data should choose between "a" or "an". Default is "" (blank). */
  determiner?: string;

  /** The locale these tags are marked up in. Of the format language_TERRITORY. Default is en_US. */
  locale?: string;

  /** An array of other locales this page is available in. */
  localeAlternate?: string[];

  /** If your object is part of a larger web site, the name which should be displayed for the overall site. e.g., "IMDb". */
  site_name?: string;

  videos?: Array<{
    /** A URL to a video file that complements this object. */
    url: string;
    /** An alternate url to use if the webpage requires HTTPS. */
    secure_url?: string;

    /** A MIME type for this video */
    type?: string;

    /** A description of what is in the video */
    alt?: string;

    /** The width of the video in pixels. */
    width?: number | string;

    /** The height of the video in pixels. */
    height?: number | string;
  }>;
  images?: Array<{
    /** A URL to an image that complements this object. */
    url?: string;

    /** An alternate url to use if the webpage requires HTTPS. */
    secure_url?: string;

    /** The MIME type of the image */
    type?: string;

    /** A description of what is in the image (not a caption).  */
    alt?: string;

    /** The number of pixels wide. */
    width?: number | string;

    /** The number of pixels high. */
    height?: number | string;
  }>;

  music?: OpenGraphMusic;
  movie?: OpenGraphVideo;
  article?: OpenGraphArticle;
  book?: OpenGraphBook;
  profile?: OpenGraphProfile;
}

export interface OpenGraphMusic {
  /**  integer >=1 - The song's length in seconds. */
  duration?: number | string;

  /** The album this song is from. */
  album?: string;

  /**  integer >=1 - Which disc of the album this song is on. */
  albumDisc?: number;

  /**  integer >=1 - Which track this song is.  */
  albumTrack?: number;

  /** The musician that made this song. */
  musician?: string;

  /**  The creator of this playlist. */
  creator?: string;

  /** Identical to the ones on music.album */
  song?: string;

  /** The disc this song is on. */
  songDisc?: number | string;

  /** The track this song is on. */
  songTrack?: number | string;

  /** datetime - The date the album was released. */
  release_date?: string;
}

export interface OpenGraphVideo {
  /** Actors in the movie. */
  actor?: string[];

  /** string - The role they played. */
  actorRole?: string;

  /** Directors of the movie. */
  director?: string[];

  /** Writers of the movie. */
  writer?: string[];

  /**  integer >=1 - The movie's length in seconds. */
  duration?: number | string;

  /**  datetime - The date the movie was released. */
  release_date?: string;

  /** Tag words associated with this movie. */
  tag?: string[];

  /** Which series this episode belongs to. */
  series?: string;
}

export interface OpenGraphArticle {
  /** datetime - When the article was first published. */
  published_time?: string;

  /** datetime - When the article was last changed. */
  modified_time?: string;

  /**  datetime - When the article is out of date after. */
  expiration_time?: string;

  /** Writers of the article. */
  author?: string[];

  /** A high-level section name. E.g. Technology */
  section?: string;

  /** Tag words associated with this article. */
  tag?: string[];
}

export interface OpenGraphBook {
  /** Who wrote this book. */
  author?: string[];

  /** The ISBN */
  isbn?: string | number;

  /** datetime - The date the book was released. */
  release_date?: string;

  /** Tag words associated with this book */
  tag?: string[];
}

export interface OpenGraphProfile {
  /** A name normally given to an individual by a parent or self-chosen. */
  first_name?: string;

  /** A name inherited from a family or marriage and by which the individual is commonly known. */
  last_name?: string;

  /** A short unique string to identify them. */
  username?: string;

  /** enum(male, female) - Their gender. */
  gender?: "male" | "female";
}
