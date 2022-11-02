<script>
    /** @type {SvelteSeo["title"]}*/
    export let title = undefined;
</script>

<svelte:head>
    {#if title}
        <title>{title}</title>
    {/if}
</svelte:head>