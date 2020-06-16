<script context="module">
  export async function preload({ params }) {
    const { protocol } = params;
    const intro = await this.fetch(
      `playground/intros/Introduction-${protocol.replace(
        /^./,
        protocol[0].toUpperCase()
      )}.json`
    ).then(res => (res.ok ? res.json() : this.error(404, 'Not Found')));

    return { intro };
  }
</script>

<style>
  .markdown {
    @apply relative;
    @apply bg-white;
    @apply border-r;
    @apply pl-5;
    @apply pt-12;
    @apply pr-3;
    @apply pb-12;
    @apply overflow-x-hidden;
    @apply overflow-y-auto;
    @apply h-screen;
    @apply w-full;
  }

  .markdown :global(a) {
    @apply text-blue-500;
    @apply underline;
    background-color: initial;
  }

  .markdown :global(a:active),
  .markdown :global(a:hover) {
    @apply text-blue-700;
    outline-width: 0;
  }

  .markdown :global(p > code) {
    @apply bg-gray-200;
    @apply font-mono;
    @apply m-0;
    @apply p-1;
    @apply rounded;
    @apply text-xs;
    @apply tracking-wide;
  }

  .markdown :global(code),
  .markdown :global(kbd),
  .markdown :global(pre) {
    @apply break-words;
    @apply font-mono;
  }

  .markdown :global(img) {
    @apply mx-auto;
    @apply mb-10;
    @apply text-justify;
    border-style: none;
  }

  .markdown :global(p) {
    @apply mt-0;
    @apply mb-5;
    @apply text-justify;
    @apply text-regal-black;
  }

  @screen lg {
    .markdown {
      @apply border-l;
      @apply p-10;
    }
  }
</style>

<script>
  export let intro;
</script>

<svelte:head>
  <meta name="twitter:title" content="Anton Buenavista's Playground" />
  <meta
    name="twitter:description"
    content="Articles on protocol's I've played around with"
  />
  <meta property="og:title" content="Anton Buenavista's Playground" />
  <meta
    property="og:description"
    content="Articles on protocol's I've played around with"
  />
</svelte:head>

<section class="markdown">
  {@html intro.html}
</section>
