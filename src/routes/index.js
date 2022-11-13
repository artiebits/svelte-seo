const SEO = {
    title: "Open Graph Article Title",
    description: "Description of open graph article",
    keywords: ["svelte","sveltekit","web"],
    base: "https://www.example.com",
    canonical: "https://www.example.com",
    applicationName: "Svelte SEO",
    themeColor: "red",
    nositelinkssearchbox: true,
    notranslate: false,
    amp: "https://www.example.com/url/to/amp/document.html",
    manifest: "/manifest.json",
    languageAlternates: [
        {
            hreflang: "en-Uk",
            href: "http://example.com"
        },
        {
            hreflang: "en-US",
            href: "http://example.com"
        }
    ],

    /**@type {SvelteSeo['twitter']} */
    twitter: {
        title: "Open Graph Article Title",
        description: "Description of open graph article",
        image: "https://image.com",
        imageAlt: "image Alt",
        card: "app",
        site: "@svelteseo",
        creator: "@artiebits",
        url: "https://example.com",
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
        appUrlGoogleplay: "https://play.google.com/store/apps/details?id=com.sega.sonicdash"

    }
}


export default SEO;