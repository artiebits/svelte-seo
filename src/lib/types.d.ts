declare interface SvelteSeo {
    title?: string,
    description?: string,
    base?: string,
    keywords?:  string,
    applicationName?: string,
    themeColor?: string,
    nofollow: Boolean,
    noindex: Boolean,
    nositelinkssearchbox: Boolean,
    notranslate: Boolean,
    canonical?: string,
    amp?: string,
    manifest?: string,
    languageAlternates?: Array<{ hreflang: string, href: string }>
    twitter?: Twitter
}

interface Twitter {
    title?: string,
    description?: string,
    image?: string,
    imageAlt?: string,
    card?: 'summary' | 'summary_large_image' | 'player' | 'app',
    site?: string,
    creator?: string,
    url?: string,
    player?: string,
    playerWidth?: string,
    playerHeight?: string,
    playerStream?: string,
    appNameIphone?: string,
    appIdPhone?: string,
    appUrlIphone?: string,
    appNameIpad?: string,
    appIdIpad?: string,
    appIdGoogleplay?: string,
    appUrlGoogleplay?: string
}