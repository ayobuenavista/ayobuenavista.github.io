<script>
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';

  export let segment;
</script>

<Header {segment} />

<main class="mx-auto container">
  <slot />
</main>

<Footer {segment} />
