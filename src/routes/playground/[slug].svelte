<script context="module">
  export async function preload(page, session) {
    const { slug } = page.params;

    return { slug };
  }
</script>

<script>
  import Article from '@/components/PlaygroundArticles.svelte';

  export let slug;

  // TODO: get all .md for particular slug
  slug;

  const articles = [
    {
      type: 'code',
      title: 'Ethernaut Solutions',
      description:
        'This article describes the different Ethernaut solutions...',
      date: '2 May 2020',
    },
    {
      type: 'unknown',
      title: 'Proxy Contracts',
      description: 'Here we talk about proxy contracts...',
      date: '5 May 2020',
    },
  ];
</script>

<!-- Article List -->
<section
  class="flex flex-col p-4 w-full max-w-sm flex-none bg-regal-white min-h-0
  overflow-auto"
>
  <h1 class="font-semibold mb-3">Select an article</h1>
  <ul>
    {#each articles as article}
      <li>
        <Article {...article} />
      </li>
    {/each}
  </ul>
</section>
<!-- Article Content -->
<section class="p-10 border-l bg-white w-full">
  Markdown content here...
</section>
