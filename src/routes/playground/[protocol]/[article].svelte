<script context="module">
  export async function preload({ params }) {
    const { article, protocol } = params;
    const md = await this.fetch(
      `playground/${protocol}/${article}.json`
    ).then(res => (res.ok ? res.json() : this.error(404, 'Not Found')));

    return { article, md, protocol };
  }
</script>

<script>
  export let article;
  export let md;
  export let protocol;
</script>

<style>
  .content {
    @apply relative; 
    @apply bg-white;
    @apply border-l;
    @apply min-h-screen;
    @apply h-full;
    @apply overflow-x-hidden;
    @apply overflow-y-auto;
    @apply p-10;
    @apply w-full;
    min-width: 50%;
    max-width: inherit;
  }

  .deeplinks {
    @apply flex;
    @apply flex-col;
    @apply text-gray-600;
  }

  .deeplinks > a {
    @apply my-1;
  }

  .deeplinks > a:hover {
    @apply text-signature-500;
  }

  .deeplinks > .lvl1 {
    @apply font-semibold;
  }

  .deeplinks > .lvl2 {
    margin-left: 2em;
  }

  .deeplinks > .lvl3 {
    margin-left: 4em;
  }

  .navigation {
    @apply flex;
    @apply flex-col;
    @apply bg-regal-white;
    @apply border-l;
    @apply min-h-screen;
    @apply h-full;
    @apply overflow-x-hidden;
    @apply overflow-y-auto;
    @apply px-4;
    @apply py-16;
    min-width: 260px;
    max-width: 260px;
  }

  .wrapper {
    @apply flex;
    @apply flex-col;
  }

  .wrapper > :global(h1) {
    @apply font-medium;
    @apply text-3xl;
  }

  .wrapper > :global(h2) {
    @apply font-mono;
    @apply font-semibold;
    @apply text-xl;
    @apply text-signature-400;
  }

  .wrapper > :global(h3) {
    @apply font-semibold;
    @apply text-gray-700;
  }
</style>

<svelte:head>
  <title>{md.metadata.title}</title>

  <meta name="twitter:title" content="{md.metadata.title}" />
  <meta name="twitter:description" content="{md.metadata.description}" />
  <meta name="Description" content="{md.metadata.description}" />
</svelte:head>

<!-- Article Content -->
<section class="content">
  <span class="font-semibold text-4xl">{md.metadata.title}</span>
  <span class="horizontal-line my-2 bg-red-500"></span>
  <article class="wrapper mt-10">
    {@html md.html}
  </article>
</section>
<!-- Article Navigation -->
<section class="navigation">
  <h3 class="text-xl text-signature-500 font-semibold mb-3">Navigation</h3>
  <div class="deeplinks">
    {#each md.deeplinks as { content, lvl, slug }}
      <a href="playground/{protocol}/{article}#{slug}" class="lvl{lvl}">
        {content}
      </a>
    {/each}
  </div>
</section>
