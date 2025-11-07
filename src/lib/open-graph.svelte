<script lang="ts">
  import type { OpenGraph as OpenGraphType } from './types';
  
  // Helper function to change eg, twitter.title into twitter:title
  function transformKey(key: string): string {
    return key.replace(/([a-z])([A-Z])/g, "$1:$2").toLowerCase();
  }
  
  interface Props {
    openGraph: OpenGraphType;
  }
  
  const { openGraph }: Props = $props();
</script>

{#if openGraph}
  {#each Object.entries(openGraph) as [key, value] (key)}
    {#if value === null || value === undefined}
      <!-- Skip null/undefined values -->
    {:else if typeof value === "string" || typeof value === "number"}
      <!-- Simple string/number values -->
      {@const transformed = transformKey(key)}
      <meta property="og:{transformed}" content={value.toString()} />
    {:else if key === "images" && Array.isArray(value)}
      <!-- Images array -->
      {#each value as image (image)}
        {#each Object.entries(image) as [imgKey, imgValue] (imgKey)}
          {#if imgValue !== null && imgValue !== undefined}
            <meta property="og:image:{imgKey}" content={imgValue.toString()} />
          {/if}
        {/each}
      {/each}
    {:else if key === "videos" && Array.isArray(value)}
      <!-- Videos array -->
      {#each value as video (video.url)}
        {#each Object.entries(video) as [vidKey, vidValue] (vidKey)}
          {#if vidValue !== null && vidValue !== undefined}
            {@const prop = vidKey === "url" ? "og:video" : `og:video:${vidKey}`}
            <meta property={prop} content={vidValue.toString()} />
          {/if}
        {/each}
      {/each}
    {:else if key === "localeAlternate" && Array.isArray(value)}
      <!-- Locale alternates -->
      {#each value as alternate (alternate)}
        <meta property="og:locale:alternate" content={alternate} />
      {/each}
    {:else if typeof value === "object" && value !== null}
      <!-- Complex objects (music, movie, article, book, profile) -->
      {@const prefix = key === "movie" ? "video" : key}
      {#each Object.entries(value) as [objKey, objValue] (objKey)}
        {#if Array.isArray(objValue)}
          <!-- Handle arrays (actors, authors, tags, etc.) -->
          {#each objValue as item (item)}
            <meta property="{prefix}:{objKey}" content={item} />
          {/each}
        {:else if objValue !== null && objValue !== undefined}
          <!-- Handle simple values -->
          {@const transformed = transformKey(objKey)}
          <meta property="{prefix}:{transformed}" content={objValue.toString()} />
        {/if}
      {/each}
    {/if}
  {/each}
{/if}
