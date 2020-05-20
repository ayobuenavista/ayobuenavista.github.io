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

<section class="relative p-3 lg:p-10 lg:border-l border-r bg-white h-screen w-full">
  {@html intro.html}
</section>
