<script>
  import MobileNav from '@/components/PlaygroundMobileNav.svelte';
  import Sidebar from '@/components/PlaygroundSidebar.svelte';

  export let segment;
</script>

<style>
  .article-pane {
    @apply flex;
    @apply flex-col;
    @apply h-full;
    @apply w-full;
    margin-top: 40px;
  }

  .playground {
    @apply antialiased;
    @apply flex;
    @apply overflow-hidden;
    @apply h-screen;
    @apply w-screen;
    max-width: 100vw;
  }

  @screen lg {
    .article-pane {
      @apply mt-0;
    }
  }
</style>

<svelte:head>
  <title>Anton Buenavista's Playground</title>
</svelte:head>

<a class="absolute hidden" href="playground/hidden-links">.</a>

<main class="playground" id="playground">
  {#if segment !== undefined}
    <MobileNav />
  {/if}
  <Sidebar {segment} />
  <div class="article-pane">
    <div class="flex min-h-0">
      <slot />
    </div>
  </div>
</main>
