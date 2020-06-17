<script context="module">
  export async function preload({ params }) {
    const { protocol } = params;
    const articles = await this.fetch(
      `playground/${protocol}.json`
    ).then((res) => (res.ok ? res.json() : this.error(404, 'Not Found')));

    return { articles };
  }
</script>

<script>
  import { beforeUpdate } from 'svelte';
  import { fly } from 'svelte/transition';
  import { stores } from '@sapper/app';
  import { articlePane } from '@/utils/stores.js';
  import Article from '@/components/PlaygroundArticles.svelte';

  export let articles;
  export let segment;

  const lg = 1024;

  let page;
  let protocol;
  let size = 0;

  beforeUpdate(() => {
    page = stores().page;
    protocol = $page.params.protocol;
  });

  $: desktop = size >= lg;
</script>

<style>
  .articles {
    @apply flex;
    @apply flex-col;
    @apply bg-regal-white;
    @apply border-r;
    @apply mt-12;
    @apply p-2;
    @apply overflow-x-hidden;
    @apply overflow-y-auto;
    @apply min-w-full;
    @apply max-w-full;
  }

  @screen lg {
    .articles {
      @apply mt-0;
      @apply p-4;
      min-width: 365px;
      max-width: 365px;
    }
  }
</style>

<svelte:window bind:outerWidth="{size}" />

<!-- Article List -->
{#if $articlePane || desktop}
  <section class="articles" transition:fly="{{ x: -100, duration: 200 }}">
    {#if articles.length > 0}
      <h1 class="font-semibold mb-3">Select an article</h1>
      <ul>
        {#each articles as article}
          <li>
            <Article {...article.metadata} {desktop} {segment} bind:protocol />
          </li>
        {/each}
      </ul>
    {:else}
      <h1 class="font-semibold mb-3">Articles are not yet available</h1>
    {/if}
  </section>
{/if}
{#if !$articlePane || desktop}
  <slot />
{/if}
