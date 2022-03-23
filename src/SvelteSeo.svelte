<script>
  export let title = undefined;
  export let noindex = false;
  export let nofollow = false;
  export let description = undefined;
  export let keywords = undefined;
  export let canonical = undefined;
  export let openGraph = undefined;
  export let twitter = undefined;
  export let jsonLd = undefined;

  $: robots = [
    noindex && "noindex",
    nofollow && "nofollow",
  ].filter(Boolean).join(',');
</script>

<svelte:head>
  {#if title}
    <title>{title}</title>
  {/if}

  <meta name="robots" content={robots}>
  <meta name="googlebot" content={robots}>

  {#if description}
    <meta name="description" content={description}>
  {/if}

  {#if canonical}
    <link rel="canonical" href={canonical}>
  {/if}

  {#if keywords}
    <meta name="keywords" content={keywords}>
  {/if}

  <!-- loop through all opengraph details (don't need an if because the loop will never run if opengraph is undefined) -->
  {#each openGraph as [ogKey, ogValue]}
    {#if ogKey === 'url'}
      <meta property="og:url" content={ogValue || canonical}>
    {:else if ogKey === 'article'}
      <!-- loop through article details -->
      {#each Object.entries(ogValue) as [key, value]}
        {@const underscoredKey = key.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase()}

        {#if underscoredKey === 'authors' || underscoredKey === 'tags'}
          <!-- loop through authors or tags -->
          {#each value as innerValue}
            <meta property="article:{underscoredKey}" content={innerValue}>
          {/each}
        {:else}
          <meta property="article:{underscoredKey}" content={value}>
        {/if}
      {/each}
    {:else if ogKey === 'images'}
      <!-- loop through images -->
      {#each ogValue as image}
        <!-- loop through image keys -->
        {#each Object.entries(image) as [key, value]}
          {#if key === 'url'}
            <meta property="og:image" content={value}>
          {:else}
            <meta property="og:image:{key}" content={value}>
          {/if}
        {/each}
      {/each}
    {:else}
      <meta property="og:{ogKey}" content={ogValue}>
    {/if}
  {/each}

  <!-- requires an if because if twitter is defined, it must have a card -->
  {#if twitter}
    <meta name="twitter:card" content={twitter.card || "summary_large_image" }>
    {#each Object.entries(twitter) as [key, value]}
      {@const underscoredKey = key.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase()}
      <!-- card will always be supplied if twitter is filled -->
      {#if underscoredKey !== 'card'}
        <meta name="twitter:{underscoredKey}" content={value}>
      {/if}
    {/each}
  {/if}

  {#if jsonLd}
    <!-- the "<" seems to be included to prevent an error relating to parsing ld+json in svelte -->
    {@html `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", ...jsonLd }) + "<"}/script>`}
  {/if}

  <slot></slot>
</svelte:head>
