<script context="module">
  export async function preload({ params }) {
    const [protocol, article] = params.slug;

    return { protocol, article };
  }
</script>

<script>
  import Article from '@/components/PlaygroundArticles.svelte';

  export let protocol;
  export let article;

  // TODO: loading of articles
  protocol;
  article;

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
<!-- Article Navigation -->
<section
  class="flex flex-col p-4 w-full max-w-xs border-l flex-none bg-white min-h-0
  overflow-auto"
>
  <h3 class="text-signature-500 font-semibold">Navigation</h3>
</section>
