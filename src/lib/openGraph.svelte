<script>
	/**@type {SvelteSeo['openGraph']}*/
	export let openGraph = undefined;
</script>

{#if openGraph}
	{#each Object.entries(openGraph) as [key, value]}
		<!-- For openGraph, some of the keys have values as objects so we need to check
    before.
    -->
		{@const _type = typeof value}
		{#if _type !== 'object'}
			{@const underscoredKey = key.replace(/([a-z])([A-Z])/g, '$1:$2').toLowerCase()}
			<meta property="og:{underscoredKey}" content={value} />
		{/if}
		{#if _type === 'object'}
			{#if key === 'images'}
				{#each openGraph.images ?? [] as image}
					{#each Object.entries(image) as [key, value]}
						<meta property="og:image:{key}" content={value.toString()} />
					{/each}
				{/each}
			{:else if key === 'videos'}
				{#each openGraph.videos ?? [] as video}
					{#each Object.entries(video) as [key, value]}
						{#if key === 'url'}
							<meta property="og:video" content={value.toString()} />
						{:else}
							<meta property="og:video:{key}" content={value.toString()} />
						{/if}
					{/each}
				{/each}
			{/if}
		{/if}
	{/each}
{/if}
