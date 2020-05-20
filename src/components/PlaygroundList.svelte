<script>
  import protocols from '@/conf/protocols.js';

  const REGAL_GRAY = '#64667F';

  for (const protocol of protocols) {
    protocol.svg = import(`@/components/svg/${protocol.id}.svelte`).then(
      res => res.default
    );
  }
</script>

<style>
  .card {
    @apply text-regal-gray;
    @apply border-gray-200;
    @apply h-32;
    @apply border;
    @apply rounded-sm;
    @apply transition;
    @apply duration-150;
    @apply ease-in-out;
    @apply py-2;
    @apply bg-white;
  }

  .card:hover {
    @apply bg-gray-100;
    @apply shadow-2xl;
  }

  .header {
    @apply mb-10;
    @apply text-3xl;
    @apply text-gray-500;
  }

  .protocols {
    @apply flex;
    @apply flex-wrap;
    @apply relative;
    @apply mx-auto;
    @apply mb-0;
    @apply w-full;
  }
</style>

<section class="antialiased flex" id="playgoundlist">
  <div class="bg-gray-100 pb-10 h-auto w-full">
    <div class="container mx-auto pt-10 text-center">
      <h3 class="header">
        protocols in the
        <a class="italic" href="playground">playground</a>
      </h3>

      <div class="protocols">
        {#each protocols as protocol}
          <a
            class="m-0 text-regal-white w-1/2 md:w-1/3"
            href="playground/{protocol.id}"
            aria-label="{protocol.name}"
            data-balloon-pos="up-right"
          >
            <div class="card">
              <div class="inline-block">
                {#await protocol.svg then svg}
                  <svelte:component
                    this="{svg}"
                    svgColor="{REGAL_GRAY}"
                    svgSize="100"
                  />
                {/await}
              </div>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>
