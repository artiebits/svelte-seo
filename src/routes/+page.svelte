<script>
    import SvelteSeo from "$lib";

    const SEO = {
        title: "Article Page Title | Svelte SEO",
        description: "Description of article page",
        keywords: ["svelte seo","svelte","sveltekit"],
        canonical: "https://www.example.com"
    }
</script>

<SvelteSeo
    title={SEO.title}
    description={SEO.description}
    keywords={SEO.keywords.toString()}
    base="/"
    applicationName="Svelte Seo"
    themeColor="red"
    nositelinkssearchbox={true}
    notranslate="{true}"
    canonical={SEO.canonical}
    manifest="manifest.json"
    languageAlternates={[
        {
            hreflang: "en-US",
            href: "example.com"
        },
        {
            hreflang: "en-GB",
            href: "example.com"
        }
    ]}


    twitter={{
        title: SEO.title,
        card: "player",
        
    }}
/>