<script>
  export let title = undefined;
  export let noindex = false;
  export let nofollow = false;
  export let description = undefined;
  export let canonical = undefined;
  export let openGraph = undefined;
</script>

<svelte:head>
  {#if title}
    <title>{title}</title>
  {/if}

  <meta
    name="robots"
    content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} />
  <meta
    name="googlebot"
    content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} />

  {#if description}
    <meta name="description" content={description} />
  {/if}

  {#if openGraph}
    {#if openGraph.description}
      <meta property="og:description" content={openGraph.description} />
    {/if}

    {#if openGraph.url || canonical}
      <meta property="og:url" content={openGraph.url || canonical} />
    {/if}

    {#if openGraph.type}
      <meta property="og:type" content={openGraph.type.toLowerCase()} />
    {/if}

    {#if openGraph.article}
      {#if openGraph.article.publishedTime}
        <meta
          property="article:published_time"
          content={openGraph.article.publishedTime} />
      {/if}

      {#if openGraph.article.modifiedTime}
        <meta
          property="article:modified_time"
          content={openGraph.article.modifiedTime} />
      {/if}

      {#if openGraph.article.expirationTime}
        <meta
          property="article:expiration_time"
          content={openGraph.article.expirationTime} />
      {/if}

      {#if openGraph.article.section}
        <meta property="article:section" content={openGraph.article.section} />
      {/if}

      {#if openGraph.article.authors && openGraph.article.authors.length}
        {#each openGraph.article.authors as author}
          <meta property="article:author" content={author} />
        {/each}
      {/if}

      {#if openGraph.article.tags && openGraph.article.tags.length}
        {#each openGraph.article.tags as tag}
          <meta property="article:tag" content={tag} />
        {/each}
      {/if}
    {/if}

    {#if openGraph.images && openGraph.images.length}
      {#each openGraph.images as image}
        <meta property="og:image" content={image.url} />
        {#if image.alt}
          <meta property="og:image:alt" content={image.alt} />
        {/if}
        {#if image.width}
          <meta property="og:image:width" content={image.width.toString()} />
        {/if}
        {#if image.height}
          <meta property="og:image:height" content={image.height.toString()} />
        {/if}
      {/each}
    {/if}
  {/if}
</svelte:head>
