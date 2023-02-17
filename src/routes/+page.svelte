<script>
  import SvelteSEO from "$lib";
  import SEO from "./";
</script>

<SvelteSEO
  title={SEO.title}
  description={SEO.description}
  keywords={SEO.keywords.toString()}
  base={SEO.base}
  applicationName={SEO.applicationName}
  themeColor={SEO.themeColor}
  nositelinkssearchbox={SEO.nositelinkssearchbox}
  notranslate={SEO.notranslate}
  canonical={SEO.canonical}
  amp={SEO.amp}
  manifest={SEO.manifest}
  languageAlternates={SEO.languageAlternates}
  twitter={SEO.twitter}
  openGraph={SEO.openGraph}
  jsonLd={{
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://example.com/article",
    },
    headline: "Article headline",
    image: [
      "https://example.com/photos/1x1/photo.jpg",
      "https://example.com/photos/4x3/photo.jpg",
      "https://example.com/photos/16x9/photo.jpg",
    ],
    datePublished: "2020-08-03T17:31:37Z",
    dateModified: "2020-08-20T09:31:37Z",
    author: {
      "@type": "Person",
      name: "John Doe",
    },
    publisher: {
      "@type": "Organization",
      name: "Google",
      logo: {
        "@type": "ImageObject",
        url: "https://example.com/logo.jpg",
      },
    },
  }}
/>
