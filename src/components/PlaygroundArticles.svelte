<script>
  import { beforeUpdate } from 'svelte';
  import { articleTitle, articlePane, navPane } from '@/utils/stores.js';

  export let id;
  export let type;
  export let title;
  export let description;
  export let date;
  export let protocol;
  export let desktop;
  export let segment;

  function mobileClicked() {
    articleTitle.set(title);

    if (!desktop) {
      articlePane.set(false);
      navPane.set(false);
    }
  }

  $: icon = () => {
    switch (type) {
      case 'blog':
        return 'fas fa-quote-left';
      case 'code':
        return 'fas fa-code';
      case 'project':
        return 'fa fa-github';
      case 'defi':
        return 'fas fa-coins';
      case 'guide':
        return 'fab fa-readme';
      case 'draft':
        return 'far fa-edit';
      default:
        return 'fas fa-question';
    }
  };
</script>

<style>
  article {
    @apply bg-white;
    @apply border;
    @apply cursor-pointer;
    @apply flex;
    @apply mb-2;
    @apply p-3;
    @apply rounded-md;
    @apply text-gray-700;
    height: 126px;
  }

  article:hover {
    @apply border-signature-700;
  }

  article .icon {
    @apply flex-none;
    @apply pr-2;
    @apply pt-1;
  }

  article .icon > div {
    @apply border;
    @apply table-cell;
    @apply bg-gray-200;
    @apply rounded-md;
    @apply align-middle;
    @apply text-center;
    @apply h-8;
    @apply w-8;
  }

  article .icon > div > i {
    @apply align-middle;
    @apply text-center;
    @apply text-sm;
    @apply text-gray-500;
  }

  .selected {
    @apply border-signature-500;
  }

  .selected > div > header {
    @apply text-signature-500;
  }

  .selected > div > div > i {
    @apply text-signature-500;
  }
</style>

<a href="playground/{protocol}/{id}" on:click="{mobileClicked}">
  <article class:selected="{segment === id}">
    <div class="icon">
      <div>
        <i class="{icon()}"></i>
      </div>
    </div>
    <div class="flex-1 relative">
      <header class="mb-1">
        <span class="font-semibold">{title}</span>
      </header>
      <p class="text-regal-gray">{description}</p>
      <footer class="absolute bottom-0 mt-2 text-gray-500 text-sm">
        {date}
      </footer>
    </div>
  </article>
</a>
