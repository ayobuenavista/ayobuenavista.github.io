<script>
  import MobileNav from '@/components/PlaygroundMobileNav.svelte';
  import Sidebar from '@/components/PlaygroundSidebar.svelte';

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

<a class="absolute hidden" href="playground/hidden-links">.</a>

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
