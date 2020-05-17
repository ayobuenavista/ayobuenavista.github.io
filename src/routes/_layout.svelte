<script>
  import Analytics from '@/components/GoogleAnalytics.svelte';
  import Header from '@/components/Header.svelte';
  import Footer from '@/components/Footer.svelte';

  export let segment;
</script>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  html {
    @apply relative;
    scroll-behavior: smooth;
  }
</style>

<Analytics />

<Header {segment} />
<main>
  <slot />
</main>
<Footer {segment} />
