<script>
  import Intro from '@/components/Intro.svelte';
  import PlaygroundList from '@/components/PlaygroundList.svelte';
  import AboutMe from '@/components/AboutMe.svelte';
  import GitHub from '@/components/GitHub.svelte';
  import ContactMe from '@/components/ContactMe.svelte';
</script>

<svelte:head>
  <title>Anton Buenavista</title>
</svelte:head>

<div class="scrolling-auto">
  <Intro />
  <PlaygroundList />
  <AboutMe />
  <GitHub />
  <ContactMe />
</div>
