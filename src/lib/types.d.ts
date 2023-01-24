import { Thing, WithContext } from "schema-dts";

export interface SvelteSeo {
  title?: string;
  description?: string;
  base?: string;
  keywords?: string;
  applicationName?: string;
  themeColor?: string;
  nofollow: Boolean;
  noindex: Boolean;
  nositelinkssearchbox: Boolean;
  notranslate: Boolean;
  canonical?: string;
  amp?: string;
  manifest?: string;
  languageAlternates?: Array<{ hreflang: string; href: string }>;
  twitter?: Twitter;
  facebook?: Facebook;
  openGraph?: OpenGraph;
  jsonLd?: Thing | WithContext<Thing>;
}

declare interface Facebook {
  appId: string;
}

declare interface Twitter {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  card?: "summary" | "summary_large_image" | "player" | "app";
  site?: string;
  creator?: string;
  player?: string;
  playerWidth?: string;
  playerHeight?: string;
  playerStream?: string;
  appNameIphone?: string;
  appIdIphone?: string;
  appUrlIphone?: string;
  appNameIpad?: string;
  appIdIpad?: string;
  appNameGoogleplay?: string;
  appIdGoogleplay?: string;
  appUrlGoogleplay?: string;
}

declare interface OpenGraph {
  title?: string;
  type?: string;
  url?: string;
  audio?: string;
  audioSecure_url?: string;
  audioType?: string;
  description?: string;
  determiner?: string;
  locale?: string;
  localeAlternate?: string[];
  site_name?: string;
  videos?: Array<{
    url: string;
    secure_url?: string;
    type?: string;
    alt?: string;
    width?: number | string;
    height?: number | string;
  }>;
  images?: Array<{
    url?: string;
    secure_url?: string;
    type?: string;
    alt?: string;
    width?: number | string;
    height?: number | string;
  }>;
  music?: OpenGraphMusic;
  movie?: OpenGraphVideo;
  article?: OpenGraphArticle;
  book?: OpenGraphBook;
  profile?: openGraphProfile;
}

declare interface OpenGraphMusic {
  duration?: number | string;
  album?: string;
  albumDisc?: number;
  albumTrack?: number;
  musician?: string;
  creator?: string;
  song?: string;
  songDisc?: number | string;
  songTrack?: number | string;
  release_date?: string;
}

declare interface OpenGraphVideo {
  actor?: string[];
  actorRole?: string;
  director?: string[];
  writer?: string[];
  duration?: number | string;
  release_date?: string;
  tag?: string[];
  series?: string;
}

declare interface OpenGraphArticle {
  published_time?: string;
  modified_time?: string;
  expiration_time?: string;
  author?: string[];
  section?: string;
  tag?: string[];
}

declare interface OpenGraphBook {
  author?: string[];
  isbn?: string | number;
  release_date?: string;
  tag?: string[];
}

declare interface openGraphProfile {
  first_name?: string;
  last_name?: string;
  username?: string;
  gender?: "male" | "female";
}
