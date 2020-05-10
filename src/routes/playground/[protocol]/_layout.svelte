<script context="module">
  export async function preload({ params }) {
    const { protocol } = params;
    const articles = await this.fetch(`playground/${protocol}.json`).then(res =>
      res.json()
    );

    return { articles };
  }
</script>

<script>
  import { beforeUpdate } from 'svelte';
  import Article from '@/components/PlaygroundArticles.svelte';
  import { stores } from '@sapper/app';
  
  export let articles;
  export let segment;
  
  let page;
  let protocol;

  beforeUpdate(() => {
    page = stores().page;
    protocol = $page.params.protocol;
  });
</script>

<style>
  .articles {
    @apply flex;
    @apply flex-col;
    @apply bg-regal-white;
    @apply border-r;
    @apply p-4;
    @apply overflow-x-hidden;
    @apply overflow-y-auto;
    min-width: 365px;
    max-width: 365px;
  }
</style>

<!-- Article List -->
<section class="articles">
  {#if articles.length > 0}
    <h1 class="font-semibold mb-3">Select an article</h1>
    <ul>
      {#each articles as article}
        <li>
          <Article {...article.metadata} {segment} bind:protocol={protocol} />
        </li>
      {/each}
    </ul>
  {:else}
    <h1 class="font-semibold mb-3">Articles are not yet available</h1>
  {/if}
</section>
<slot />
