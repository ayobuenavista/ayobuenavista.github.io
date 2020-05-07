<script context="module">
  export async function preload({ params }) {
    const { article, protocol } = params;
    const md = await this.fetch(
      `playground/${protocol}/${article}.json`
    ).then(res => (res.ok ? res.json() : this.error(404, 'Not Found')));

    return { md };
  }
</script>

<script>
  export let md;
</script>

<style>
  .wrapper > :global(h1) {
    @apply font-semibold;
    @apply text-4xl;
  }
</style>

<svelte:head>
  <title>{md.metadata.title}</title>

  <meta name="twitter:title" content="{md.metadata.title}" />
  <meta name="twitter:description" content="{md.metadata.description}" />
  <meta name="Description" content="{md.metadata.description}" />
</svelte:head>

<!-- Article Content -->
<section class="relative p-10 border-l border-r bg-white w-full">
  <article class="wrapper">
    {@html md.html}
  </article>
</section>
<!-- Article Navigation -->
<section
  class="flex flex-col p-4 w-full max-w-xs border-l flex-none bg-white min-h-0
  overflow-auto"
>
  <h3 class="text-signature-500 font-semibold">Navigation</h3>
</section>
