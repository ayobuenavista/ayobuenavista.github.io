<script>
  import Sidebar from '@/components/PlaygroundSidebar.svelte';

  export let segment;
</script>

<style>
  .playground {
    max-width: 100vw;
  }
</style>

<svelte:head>
  <title>Anton Buenavista's Playground</title>
</svelte:head>

<main class="playground antialiased flex h-screen w-screen overflow-hidden" id="playground">
  <Sidebar {segment} />
  <div class="flex flex-col w-full">
    <div class="flex min-h-0 border-t">
      <slot />
    </div>
  </div>
</main>
