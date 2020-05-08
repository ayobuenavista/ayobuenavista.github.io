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
  ::-webkit-scrollbar {
    display: none;
  }

  .contents {
    @apply flex;
    @apply flex-col;
    @apply text-gray-600;
  }

  .contents > a {
    @apply my-1;
  }

  .contents > a:hover {
    @apply text-signature-500;
  }

  .contents > .lvl1 {
    @apply font-semibold;
  }

  .contents > .lvl2 {
    margin-left: 2em;
  }

  .contents > .lvl3 {
    margin-left: 4em;
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
<section class="relative bg-white overflow-x-hidden p-10 border-l w-full">
  <span class="font-semibold text-4xl">{md.metadata.title}</span>
  <span class="horizontal-line my-2 bg-red-500"></span>
  <article class="wrapper mt-10">
    {@html md.html}
  </article>
</section>
<!-- Article Navigation -->
<section
  class="flex flex-col px-4 py-16 h-auto w-full max-w-xs border-l flex-none
  bg-regal-white overflow-y-hidden"
>
  <h3 class="text-xl text-signature-500 font-semibold mb-3">Contents</h3>
  <div class="contents">
    {#each md.deeplinks as { content, lvl, slug }}
      <a href="playground/{protocol}/{article}#{slug}" class="lvl{lvl}">
        {content}
      </a>
    {/each}
  </div>
</section>
