<script context="module">
  export async function preload({ params }) {
    const { protocol } = params;
    const articles = await this.fetch(`playground/${protocol}.json`).then(res =>
      res.json()
    );

    return { articles, protocol };
  }
</script>

<script>
  import Article from '@/components/PlaygroundArticles.svelte';

  export let articles;
  export let protocol;
  export let segment;
</script>

<!-- Article List -->
<section
  class="flex flex-col border-r p-4 min-h-screen w-full max-w-sm flex-none
  bg-regal-white overflow-auto"
>
  {#if articles.length > 0}
    <h1 class="font-semibold mb-3">Select an article</h1>
    <ul>
      {#each articles as article}
        <li>
          <Article {...article.metadata} {protocol} {segment} />
        </li>
      {/each}
    </ul>
  {:else}
    <h1 class="font-semibold mb-3">Articles are not yet available</h1>
  {/if}
</section>
<slot />
