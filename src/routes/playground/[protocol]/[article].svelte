<script context="module">
  export async function preload({ params }) {
    const { article, protocol } = params;
    const md = await this.fetch(
      `playground/${protocol}/${article}.json`
    ).then(res => (res.ok ? res.json() : this.error(404, 'Not Found')));

    return { article, md, protocol };
  }
</script>

<script>
  import { fly } from 'svelte/transition';
  import { articleTitle, navPane } from '@/utils/stores.js';

  export let article;
  export let md;
  export let protocol;

  const lg = 1024;

  let size = 0;
  
  if ($articleTitle === '') articleTitle.set(md.metadata.title);

  $: desktop = size >= lg;
</script>

<style>
  .content {
    @apply relative;
    @apply bg-white;
    @apply pl-4;
    @apply pt-12;
    @apply pr-3;
    @apply pb-12;
    @apply overflow-x-hidden;
    @apply overflow-y-auto;
    @apply min-h-screen;
    @apply h-full;
    @apply w-full;
    min-width: 50%;
    max-width: inherit;
  }

  .deeplinks {
    @apply flex;
    @apply flex-col;
    @apply text-gray-600;
  }

  .deeplinks > a {
    @apply my-1;
  }

  .deeplinks > a:hover {
    @apply text-signature-500;
  }

  .deeplinks > .lvl1 {
    @apply font-semibold;
  }

  .deeplinks > .lvl2 {
    margin-left: 2em;
  }

  .deeplinks > .lvl3 {
    margin-left: 4em;
  }

  .navigation {
    @apply flex;
    @apply flex-col;
    @apply bg-regal-white;
    @apply min-h-screen;
    @apply h-full;
    @apply mt-12;
    @apply overflow-x-hidden;
    @apply overflow-y-auto;
    @apply px-4;
    @apply py-4;
    @apply min-w-full;
    @apply max-w-full;
  }

  .markdown {
    @apply flex;
    @apply flex-col;
    @apply break-words;
    @apply leading-normal;
  }

  .markdown :global(.anchor) {
    @apply absolute;
    @apply float-left;
    @apply leading-none;
    @apply h-full;
    margin-left: -15px;
  }

  .markdown :global(.anchor:focus) {
    @apply outline-none;
  }

  .markdown :global(.anchor-link) {
    @apply inline-block;
    @apply fill-current;
  }

  .markdown :global([type=checkbox]) {
    @apply box-border;
    @apply p-0;
  }

  .markdown :global(h1 .anchor-link),
  .markdown :global(h2 .anchor-link),
  .markdown :global(h3 .anchor-link),
  .markdown :global(h4 .anchor-link),
  .markdown :global(h5 .anchor-link),
  .markdown :global(h6 .anchor-link) {
    @apply align-middle;
    @apply hidden;
  }

  .markdown :global(h1:hover .anchor),
  .markdown :global(h2:hover .anchor),
  .markdown :global(h3:hover .anchor),
  .markdown :global(h4:hover .anchor),
  .markdown :global(h5:hover .anchor),
  .markdown :global(h6:hover .anchor) {
    @apply no-underline;
  }

  .markdown :global(h1:hover .anchor .anchor-link),
  .markdown :global(h2:hover .anchor .anchor-link),
  .markdown :global(h3:hover .anchor .anchor-link),
  .markdown :global(h4:hover .anchor .anchor-link),
  .markdown :global(h5:hover .anchor .anchor-link),
  .markdown :global(h6:hover .anchor .anchor-link) {
    @apply inline-block;
    @apply visible;
    @apply h-full;
  }

  .markdown :global(h1:hover .anchor .anchor-link:before),
  .markdown :global(h2:hover .anchor .anchor-link:before),
  .markdown :global(h3:hover .anchor .anchor-link:before),
  .markdown :global(h4:hover .anchor .anchor-link:before),
  .markdown :global(h5:hover .anchor .anchor-link:before),
  .markdown :global(h6:hover .anchor .anchor-link:before) {
    @apply absolute;
    background: url(link.svg) no-repeat;
    background-size: 15px 15px;
    content: ' ';
    top: 50%;
    transform: translateY(-50%);
    height: 15px;
    width: 15px;
  }

  .markdown :global(a) {
    background-color: initial;
  }

  .markdown :global(a:active),
  .markdown :global(a:hover) {
    outline-width: 0;
  }

  .markdown :global(details) {
    @apply block;
  }

  .markdown :global(summary) {
    display: list-item;
  }

  .markdown :global(strong) {
    @apply font-bold;
    font-weight: inherit;
  }

  .markdown :global(img) {
    @apply mb-2;
    border-style: none;
    max-height: 100px;
  }

  .markdown :global(p > code) {
    @apply bg-gray-200;
    @apply m-0;
    @apply p-1;
    @apply rounded;
    @apply text-xs;
    @apply tracking-wide;
  }

  .markdown :global(code),
  .markdown :global(kbd),
  .markdown :global(pre) {
    @apply font-mono;
    @apply text-base;
  }

  .markdown :global(dd) {
    @apply ml-0;
  }

  .markdown :global(pre) {
    @apply my-0;
    @apply rounded-lg
  }

  .markdown :global(kbd) {
    @apply inline-block;
    @apply align-middle;
    @apply bg-regal-white;
    @apply border;
    @apply font-mono;
    @apply leading-none;
    @apply rounded-sm;
    @apply shadow;
    @apply text-regal-gray;
    padding: 3px 5px;
  }

  .markdown :global(hr) {
    @apply bg-transparent;
    @apply border-0;
    @apply border-b;
    @apply border-regal-gray;
    @apply overflow-hidden;
    @apply h-0;
    box-sizing: initial;
    margin: 15px 0;
  }

  .markdown :global(hr:after),
  .markdown :global(hr:before) {
    @apply table;
    content: "";
  }

  .markdown :global(hr:after) {
    @apply clear-both;
  }

  .markdown :global(input) {
    @apply m-0;
    @apply overflow-visible;
  }
  
  .markdown :global(table) {
    @apply border-collapse;
    border-spacing: 0;
  }

  .markdown :global(td),
  .markdown :global(th) {
    @apply p-0;
  }

  .markdown :global(details summary) {
    @apply cursor-pointer;
  }

  .markdown :global(blockquote) {
    @apply m-0;
  }

  .markdown :global(p) {
    @apply mt-0;
    @apply mb-5;
  }

  .markdown :global(ol),
  .markdown :global(ul) {
    @apply pl-0;
    @apply my-0;
  }

  .markdown :global(ol ol),
  .markdown :global(ul ol) {
    list-style-type: lower-roman;
  }

  .markdown :global(ol ol ol),
  .markdown :global(ol ul ol),
  .markdown :global(ul ol ol),
  .markdown :global(ul ul ol) {
    list-style-type: lower-alpha;
  }

  .markdown :global(blockquote),
  .markdown :global(details),
  .markdown :global(dl),
  .markdown :global(ol),
  .markdown :global(p),
  .markdown :global(pre),
  .markdown :global(table),
  .markdown :global(ul) {
    @apply mt-0;
    @apply mb-5;
  }

  .markdown :global(h1) {
    @apply font-medium;
    @apply text-3xl;
  }

  .markdown :global(h2) {
    @apply font-mono;
    @apply font-semibold;
    @apply text-xl;
    @apply text-signature-400;
  }

  .markdown :global(h3) {
    @apply font-semibold;
    @apply text-gray-700;
  }

  @screen lg {
    .content {
      @apply border-l;
      @apply border-r;
      @apply p-10;
    }

    .navigation {
      @apply mt-0;
      @apply py-16;
      min-width: 260px;
      max-width: 260px;
    }
  }
</style>

<svelte:window bind:outerWidth="{size}" />

<svelte:head>
  <title>{md.metadata.title}</title>

  <meta name="twitter:title" content="{md.metadata.title}" />
  <meta name="twitter:description" content="{md.metadata.description}" />
  <meta property="og:title" content="{md.metadata.title}" />
  <meta property="og:description" content="{md.metadata.description}">
</svelte:head>

<!-- Article Content -->
{#if !$navPane || desktop}
  <section class="content">
    {#if desktop}
      <span class="font-semibold text-4xl">{md.metadata.title}</span>
      <span class="horizontal-line my-2 bg-red-500"></span>
    {/if}
    <article class="markdown lg:mt-10">
      {@html md.html}
    </article>
  </section>
{/if}
<!-- Article Navigation -->
{#if $navPane || desktop}
  <section class="navigation">
    <h3 class="text-xl text-signature-500 font-semibold mb-3">Navigation</h3>
    <div class="deeplinks">
      {#each md.deeplinks as { content, lvl, slug }}
        <a href="playground/{protocol}/{article}#{slug}" class="lvl{lvl}">
          {content}
        </a>
      {/each}
    </div>
  </section>
{/if}
