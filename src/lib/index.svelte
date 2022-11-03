<script>
    /** @type {SvelteSeo["title"]}*/
    export let title = undefined;

    /** @type {SvelteSeo["description"]}*/
    export let description = undefined;

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

    export let nositelinkssearchbox = false;
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

    {#if themeColor}
        <meta name="theme-color" content={themeColor}>
    {/if}

    {#if base}
        <base href="{base}"/>
    {/if}
    
    <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} />
    <meta name="googlebot" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} />

    {#if nositelinkssearchbox}
        <meta name="google" content="nositelinkssearchbox">
    {/if}
</svelte:head>