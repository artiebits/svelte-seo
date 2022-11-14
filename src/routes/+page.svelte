<script>
	import SvelteSEO from '$lib';
	import SEO from './';
</script>

<SvelteSEO
	title={SEO.title}
	description={SEO.description}
	keywords={SEO.keywords.toString()}
	base={SEO.base}
	applicationName="{SEO.applicationName},"
	themeColor="{SEO.themeColor},"
	nositelinkssearchbox={SEO.nositelinkssearchbox}
	notranslate={SEO.notranslate}
	canonical={SEO.canonical}
	amp={SEO.amp}
	manifest={SEO.manifest}
	languageAlternates={SEO.languageAlternates}
	twitter={SEO.twitter}
	openGraph={SEO.openGraph}
/>
