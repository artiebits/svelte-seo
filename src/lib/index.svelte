<script>
  /** @type {import("./types").SvelteSeo['title']}*/
  export let title = undefined;

  /** @type {import("./types").SvelteSeo["description"]}*/
  export let description = undefined;

  /**@type {import("./types").SvelteSeo["keywords"]}*/
  export let keywords = undefined;

  /** @type {import("./types").SvelteSeo["base"]}*/
  export let base = undefined;

  /**@type {import("./types").SvelteSeo["applicationName"]}*/
  export let applicationName = undefined;

  /**@type {import("./types").SvelteSeo["themeColor"]}*/
  export let themeColor = undefined;

  /**@type {import("./types").SvelteSeo["nofollow"]}*/
  export let nofollow = false;

  /**@type {import("./types").SvelteSeo["noindex"]}*/
  export let noindex = false;

  /**@type {import("./types").SvelteSeo["nositelinkssearchbox"]}*/
  export let nositelinkssearchbox = false;

  /** @type {import("./types").SvelteSeo["notranslate"]}*/
  export let notranslate = false;

  /** @type {import("./types").SvelteSeo["canonical"]}*/
  export let canonical = undefined;

  /** @type {import("./types").SvelteSeo["amp"]}*/
  export let amp = undefined;

  /** @type {import("./types").SvelteSeo["manifest"]}*/
  export let manifest = undefined;

  /**@type {import("./types").SvelteSeo["languageAlternates"]}*/
  export let languageAlternates = undefined;

  /**@type {import("./types").SvelteSeo['twitter']}*/
  export let twitter = undefined;

  /**@type {import('./types').SvelteSeo['openGraph']}*/
  export let openGraph = undefined;

  /**@type {import("./types").SvelteSeo['facebook']}*/
  export let facebook = undefined;

  /**@type {import("./types").SvelteSeo['jsonLd']}*/
  export let jsonLd = undefined;

  import OpenGraphComponent from "./open-graph.svelte";
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
    <meta name="application-name" content={applicationName} />
  {/if}

  {#if languageAlternates}
    {#each languageAlternates as { href, hreflang }}
      <link rel="alternate" {href} {hreflang} />
    {/each}
  {/if}

  {#if themeColor}
    <meta name="theme-color" content={themeColor} />
  {/if}

  {#if base}
    <base href={base} />
  {/if}

  {#if facebook?.appId}
    <meta property="fb:app_id" content={facebook.appId} />
  {/if}

  <meta
    name="robots"
    content={`${noindex ? "noindex" : "index"},${
      nofollow ? "nofollow" : "follow"
    }`}
  />
  <meta
    name="googlebot"
    content={`${noindex ? "noindex" : "index"},${
      nofollow ? "nofollow" : "follow"
    }`}
  />

  {#if nositelinkssearchbox}
    <meta name="google" content="nositelinkssearchbox" />
  {/if}

  {#if notranslate}
    <meta name="google" content="notranslate" />
  {/if}

  {#if twitter}
    {#each Object.entries(twitter) as [key, value]}
      {@const transformed = key
        .replace(/([a-z])([A-Z])/g, "$1:$2")
        .toLowerCase()}
      <!-- The `transformed` variable changes eg, twitter.title into twitter:title
                It loops over all the properties and changes the '.' into ':'
            -->
      <meta name="twitter:{transformed}" content={value} />
    {/each}
  {/if}

  {#if openGraph}
    <OpenGraphComponent {openGraph} />
  {/if}

  {#if jsonLd}
    {@const data = Object.assign({ "@context": "https://schema.org" }, jsonLd)}
    {@html `<script type="application/ld+json">${
      JSON.stringify(data) + "<"
    }/script>`}
  {/if}

  <slot />
</svelte:head>
