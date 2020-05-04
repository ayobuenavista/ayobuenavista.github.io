<script>
  export let type;
  export let title;
  export let description;
  export let date;

  function icon() {
    switch (type) {
      case 'code':
        return 'fas fa-code';
      case 'guide':
        return 'fab fa-readme';
      default:
        return 'fas fa-question';
    }
  }
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
    @apply border-signature-500;
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
</style>

<article>
  <div class="icon">
    <div>
      <i class={icon()} />
    </div>
  </div>
  <div class="flex-1 relative">
    <header class="mb-1">
      <span class="font-semibold">{title}</span>
    </header>
    <p class="text-regal-gray">
      {description}
    </p>
    <footer class="absolute bottom-0 mt-2 text-gray-500 text-sm">
      {date}
    </footer>
  </div>
</article>