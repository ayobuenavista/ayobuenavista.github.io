<script>
  import { createEventDispatcher } from 'svelte';

  export let segment;
  export let href;
  export let text;
  export let color;
  export let rel = '';

  const dispatch = createEventDispatcher();

  function linkTapped() {
    dispatch('click', false);
  }
</script>

<style>
  a {
    @apply block;
    @apply mt-4;
    @apply text-right;
  }

  a:hover {
    @apply text-signature-800;
  }

  @screen lg {
    a {
      @apply inline-block;
      @apply mx-4;
      @apply mt-0;
    }
  }
</style>

<a
  on:click="{linkTapped}"
  {rel}
  {href}
  class="{segment === href ? 'text-signature-500' : { color }}"
>
  {text}
</a>
