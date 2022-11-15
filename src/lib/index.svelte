<script>
	/** @type {SvelteSeo["title"]}*/
	export let title = undefined;

	/** @type {SvelteSeo["description"]}*/
	export let description = undefined;

	/**@type {SvelteSeo["keywords"]}*/
	export let keywords = undefined;

	/** @type {SvelteSeo["base"]}*/
	export let base = undefined;

	/**@type {SvelteSeo["applicationName"]}*/
	export let applicationName = undefined;

	/**@type {SvelteSeo["themeColor"]}*/
	export let themeColor = undefined;

	/**@type {SvelteSeo["nofollow"]}*/
	export let nofollow = false;

	/**@type {SvelteSeo["noindex"]}*/
	export let noindex = false;

	/**@type {SvelteSeo["nositelinkssearchbox"]}*/
	export let nositelinkssearchbox = false;

	/** @type {SvelteSeo["notranslate"]}*/
	export let notranslate = false;

	/** @type {SvelteSeo["canonical"]}*/
	export let canonical = undefined;

	/** @type {SvelteSeo["amp"]}*/
	export let amp = undefined;

	/** @type {SvelteSeo["manifest"]}*/
	export let manifest = undefined;

	/**@type {SvelteSeo["languageAlternates"]}*/
	export let languageAlternates = undefined;

	/**@type {SvelteSeo['twitter']}*/
	export let twitter = undefined;

	/**@type {SvelteSeo['openGraph']}*/
	export let openGraph = undefined;

	/**@type {SvelteSeo['facebook']}*/
	export let facebook = undefined;

	import OpenGraphComponent from './openGraph.svelte';
</script>

<svelte:head>
	{#if title}
		<title>{title}</title>
	{/if}

	{#if description}
		<meta name="description" content={description} />
	{/if}

	{#if canonical}
		<link rel="canonical" href={canonical} />
	{/if}

	{#if keywords}
		<meta name="keywords" content={keywords} />
	{/if}

	{#if amp}
		<link rel="amphtml" href={amp} />
	{/if}

	{#if manifest}
		<link rel="manifest" href={manifest} />
	{/if}
	
	{#if applicationName}
		<meta name="application-name" content="{applicationName}" />
	{/if}

	{#if languageAlternates}
		{#each languageAlternates as { href, hreflang }}
			<link rel="alternate" {href} {hreflang} />
		{/each}
	{/if}

	

	{#if themeColor}
		<meta name="theme-color" content="{themeColor}" />
	{/if}

	{#if base}
		<base href={base} />
	{/if}

	{#if facebook?.appId}
		<meta property="fb:app_id" content={facebook.appId} />
	{/if}

	<meta
		name="robots"
		content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`}
	/>
	<meta
		name="googlebot"
		content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`}
	/>

	{#if nositelinkssearchbox}
		<meta name="google" content="nositelinkssearchbox" />
	{/if}

	{#if notranslate}
		<meta name="google" content="notranslate" />
	{/if}

	{#if twitter}
		{#each Object.entries(twitter) as [key, value]}
			{@const transformed = key.replace(/([a-z])([A-Z])/g, '$1:$2').toLowerCase()}
			<!-- The `transformed` variable changecs eg, twitter.title into twitter:title
                It loops over all the properties and changes the '.' into ':'
            -->
			<meta name="twitter:{transformed}" content={value} />
		{/each}
	{/if}

	{#if openGraph}
		<OpenGraphComponent {openGraph} />
	{/if}
</svelte:head>
