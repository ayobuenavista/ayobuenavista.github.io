<script>
  import Sidebar from '@/components/PlaygroundSidebar.svelte';

  export let segment;
</script>

<svelte:head>
  <title>Anton Buenavista's Playground</title>
</svelte:head>

<main class="antialiased flex h-screen" id="playground">
  <Sidebar {segment} />
  <div class="flex-1 flex flex-col">
    <div class="flex-grow flex min-h-0 border-t">
      <slot />
    </div>
  </div>
</main>
