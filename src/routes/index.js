const SEO = {
  title: "Open Graph Article Title",
  noindex: false,
  nofollow: false,
  description: "Description of open graph article",
  base: "https://www.example.com",
  keywords: ["svelte", "sveltekit", "web"],
  applicationName: "Svelte SEO",
  canonical: "https://www.example.com",
  themeColor: "red",
  nositelinkssearchbox: true,
  notranslate: true,
  amp: "https://www.example.com/url/to/amp/document.html",
  manifest: "/manifest.json",
  languageAlternates: [
    {
      hreflang: "en-Uk",
      href: "http://example.com",
    },
    {
      hreflang: "en-US",
      href: "http://example.com",
    },
  ],

  /**@type {import("../lib/types").SvelteSeo['twitter']}*/
  twitter: {
    title: "Open Graph Article Title",
    description: "Description of open graph article",
    image: "https://image.com",
    imageAlt: "image Alt",
    card: "app",
    site: "@svelteseo",
    creator: "@artiebits",
    player: "https://wakey.io/embed/26",
    playerWidth: "720",
    playerHeight: "720",
    playerStream: "https://wakey.io/public/vid/26.mp4",
    appNameIphone: "Svelte SEO",
    appIdIphone: "23232",
    appUrlIphone: "applenews://",
    appNameIpad: "Svelte SEO",
    appIdGoogleplay: "svelte.seo.com",
    appNameGoogleplay: "Svelte SEO",
    appUrlGoogleplay:
      "https://play.google.com/store/apps/details?id=com.sega.sonicdash",
  },

  facebook: {
    appId: "12344567",
  },

  /**@type {import("../lib/types").OpenGraph} */
  openGraph: {
    title: "Open Graph Article Title",
    type: "website",
    url: "https://www.example.com",
    audio: "http://www.example.com.audio",
    audioSecure_url: "https://www.example.com.audio",
    audioType: "audio/mpeg",
    description: "Description of open graph article",
    determiner: "the",
    locale: "en_US",
    localeAlternate: ["fr_FR", "es_ES"],
    site_name: "Svelte SEO",
    videos: [
      {
        url: "http://www.example.video",
        secure_url: "https://www.example.video",
        type: "application/x-shockwave-flash",
        alt: "Video Alt",
        width: 600,
        height: 600,
      },
      {
        url: "http://www.example1.video",
        secure_url: "https://www.example1.video",
        type: "application/x-shockwave-flash",
        alt: "Video Alt",
        width: 500,
        height: 500,
      },
      {
        url: "http://www.example2.video",
        secure_url: "https://www.example2.video",
        type: "application/x-shockwave-flash",
        alt: "Video Alt",
        width: 300,
        height: 300,
      },
    ],
    images: [
      {
        url: "http://www.example.image",
        secure_url: "https://www.example.image",
        type: "image/jpeg",
        alt: "image alt",
        width: 400,
        height: 400,
      },
      {
        url: "http://www.example1.image",
        secure_url: "https://www.example1.image",
        type: "image/jpeg",
        alt: "image alt",
        width: 500,
        height: 500,
      },
    ],

    music: {
      duration: 236,
      album: "http://open.spotify.com/album/7rq68qYz66mNdPfidhIEFa",
      albumDisc: 1,
      albumTrack: 3,
      musician: "https://your-profile.com",
      creator: "https://creator-profile.com",
      song: "http://open.spotify.com/track/0pfHfdUNVwlXA0WDXznm2C",
      songDisc: "1",
      songTrack: "3",
      release_date: "2011-04-19",
    },

    movie: {
      actor: [
        "https://url-to-actor.com",
        "https://url-to-actor1.com",
        "https://url-to-actor2.com",
      ],
      actorRole: "Cameo",
      director: [
        "https://www.director.com",
        "https://www.director1.com",
        "https://www.director2.com",
      ],
      writer: [
        "https://www.writer.com",
        "https://www.writer2.com",
        "https://www.writer3.com",
      ],
      duration: "300",
      release_date: "2011-04-19",
      tag: ["action", "train"],
      series: "https://www.series.com",
    },

    article: {
      published_time: "2020-08-03T17:31:37Z",
      modified_time: "2020-08-20T09:31:37Z",
      expiration_time: "2025-12-21T17:31:37Z",
      section: "Section II",
      author: [
        "https://www.example.com/authors/@firstnameA-lastnameA",
        "https://www.example.com/authors/@firstnameB-lastnameB",
      ],
      tag: ["Tag A", "Tag B", "Tag C"],
    },

    book: {
      author: [
        "https://ww.author.com",
        "https://ww.author1.com",
        "https://ww.author2.com",
      ],
      isbn: 1234567910,
      release_date: "2022-12-12",
      tag: ["romance", "love"],
    },

    profile: {
      first_name: "John",
      last_name: "Doe",
      username: "johndoe",
      gender: "male",
    },
  },
};

export default SEO;
