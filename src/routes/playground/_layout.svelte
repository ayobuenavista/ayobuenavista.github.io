<script>
  import MobileNav from '@/components/PlaygroundMobileNav.svelte';
  import Sidebar from '@/components/PlaygroundSidebar.svelte';
  import routes from '@/conf/published.js';

  let protocols = [];

  for (let route in routes) {
    protocols.push(route);
  }

  export let segment;
</script>

<style>
  #playground {
    @apply antialiased;
    @apply flex;
    @apply overflow-hidden;
    @apply h-screen;
    @apply w-screen;
    max-width: 100vw;
  }

  .article-content {
    @apply flex;
    @apply min-h-0;
    @apply h-auto;
    @apply w-full;
    padding-left: 60px;
  }

  .article-pane {
    @apply flex;
    @apply flex-col;
    @apply h-screen;
    @apply w-full;
  }

  @screen lg {
    .article-content {
      @apply pl-0;
    }

    .article-pane {
      @apply flex-row;
    }
  }
</style>

<svelte:head>
  <title>Anton Buenavista's Playground</title>
</svelte:head>

<main id="playground">
  <Sidebar {segment} />
  <div class="article-pane">
    {#if segment !== undefined}
      <MobileNav />
    {/if}
    <div class="article-content">
      <slot />
    </div>
  </div>
</main>

<!-- allow sapper to crawl through all articles to generate link-->
<div class="hidden">
  {#each protocols as protocol}
    {#if routes[protocol].length > 0}
      {#each routes[protocol] as article}
        <a href="playground/{protocol}/{article}">&nbsp;</a>
      {/each}
    {/if}
  {/each}
</div>
