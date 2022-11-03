declare interface SvelteSeo {
    title?: string,
    description?: string,
    base?: string,
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
}