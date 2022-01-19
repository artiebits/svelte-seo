<script>
  import SvelteSeo from "../../src/SvelteSeo.svelte";

  const openGraph = {
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
        url: "https://www.example.com/images/og-image-article-title-01.jpg",
        width: 850,
        height: 650,
        alt: "Og Image Alt A",
      },
      {
        url: "https://www.example.com/images/og-image-article-title-02.jpg",
        width: 950,
        height: 750,
        alt: "Og Image Alt B",
      },
    ],
  };

  const twitter = () => {
    const playerPath = "/player" === window.location.pathname;
    const summaryPath = "/summary" === window.location.pathname;
    return {
      card: (playerPath && "player") || (summaryPath && "summary") || undefined,
      site: "@username",
      title: "Twitter Card Title",
      description: "Description of Twitter Card",
      image: "https://www.example.com/images/cover.jpg",
      imageAlt: "Alt text for the card!",
      player: "https://www.example.com/videos/example-video",
      playerWidth: (playerPath && 200) || undefined,
      playerHeight: (playerPath && 100) || undefined,
    };
  };

  const jsonLd = {
    "@type": "NewsArticle",
    headline: "ldJson Article Headline",
    image: [
      "https://www.example.com/images/ld-image-article-title-01.jpg",
      "https://www.example.com/images/ld-image-article-title-02.jpg",
      "https://www.example.com/images/ld-image-article-title-03.jpg",
    ],
    datePublished: "2020-08-03T17:31:37Z",
    dateModified: "2020-08-20T09:31:37Z",
  };

</script>

<SvelteSeo
  title="Article Page Title | Svelte SEO"
  description="Description of article page"
  keywords="Keywords of article page"
  canonical="https://www.example.com"
  {openGraph}
  twitter={twitter()}
  {jsonLd}
>
  <link rel="manifest" href="/manifest.json" />
</SvelteSeo>
