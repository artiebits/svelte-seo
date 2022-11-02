<script>
    /** @type {SvelteSeo["title"]}*/
    export let title = undefined;
    /** @type {SvelteSeo["description"]}*/
    export let description = undefined;
    /** @type {SvelteSeo["base"]}*/
    export let base = undefined;
    /**@type {SvelteSeo["applicationName"]}*/
    export let applicationName = undefined;
</script>

<svelte:head>
    {#if title}
        <title>{title}</title>
    {/if}
    
    {#if description}
        <meta name="description" content={description}/>
    {/if}

    {#if applicationName}
        <meta name="application-name" content={applicationName}>
    {/if}

    {#if base}
        <base href="{base}"/>
    {/if}
</svelte:head>