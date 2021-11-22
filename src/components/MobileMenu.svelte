<script>
  import { createEventDispatcher } from 'svelte';

  export let expand = false;
  export let headerClass;

  const dispatch = createEventDispatcher();

  function hamburgerTapped() {
    dispatch('click', !expand);
  }
</script>

<style>
  button {
    @apply flex;
    @apply border;
    @apply items-center;
    @apply outline-none;
    @apply px-3;
    @apply py-2;
    @apply rounded;
  }

  button:hover {
    @apply border-signature-500;
    @apply text-signature-500;
  }

  button.scrolled {
    @apply border-regal-white;
    @apply text-regal-white;
  }
</style>

<button on:click="{hamburgerTapped}" class="button border-regal-gray text-regal-gray {headerClass}">
  <svg
    class="fill-current h-3 w-3"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Navigation</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
  </svg>
</button>
