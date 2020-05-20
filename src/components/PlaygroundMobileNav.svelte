<script>
  import { fade } from 'svelte/transition';
  import { articleTitle, articlePane, navPane } from '@/utils/stores.js';

  let bg = 'bg-white';
  let articlePaneBtn = true;
  let navPaneBtn = true;

  function articlePaneTapped() {
    articlePane.set(!$articlePane);
  }

  function navPaneTapped() {
    navPane.set(!$navPane);
  }

  $: {
    if ($articlePane) {
      bg = 'bg-regal-white';
      navPaneBtn = false;
    } else {
      bg = 'bg-white';
      articlePaneBtn = true;
      navPaneBtn = true;
    }
  }
  $: {
    if ($navPane) {
      bg = 'bg-regal-white';
      articlePaneBtn = false;
    } else {
      bg = 'bg-white';
      articlePaneBtn = true;
      navPaneBtn = true;
    }
  }
</script>

<style>
  header {
    @apply flex-col;
    @apply fixed;
    @apply border-b;
    @apply text-regal-black;
    @apply p-2;
    @apply mb-4;
    @apply mt-0;
    @apply w-screen;
    @apply top-0;
    @apply z-10;
    padding-left: 65px;
    height: 40px;
  }

  @screen lg {
    header {
      @apply hidden;
    }
  }
</style>

<header class="lg:hidden {bg}">
  <div class="flex">
    <div class="text-center w-1/12">
      {#if articlePaneBtn}
        <button
          on:click="{articlePaneTapped}"
          transition:fade="{{ duration: 100 }}"
        >
          <i class="fas fa-bars"></i>
        </button>
      {/if}
    </div>
    <div class="font-semibold text-center w-10/12">{$articleTitle}</div>
    <div class="text-center w-1/12">
      {#if navPaneBtn}
        <button
          on:click="{navPaneTapped}"
          transition:fade="{{ duration: 100 }}"
        >
          <i class="fas fa-ellipsis-v"></i>
        </button>
      {/if}
    </div>
  </div>
</header>
