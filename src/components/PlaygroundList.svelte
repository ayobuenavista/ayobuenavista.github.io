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
</style>

<section class="antialiased flex" id="playgoundlist">
  <div class="h-auto w-full bg-gray-100 pb-10">
    <div class="container mx-auto pt-10 text-center">
      <h3 class="text-3xl md:text-3xl text-gray-500 mb-10">
        protocols in the
        <a class="italic" href="playground">playground</a>
      </h3>

      <div class="mx-auto relative w-full flex flex-wrap mb-0">
        {#each protocols as protocol}
          <a
            class="sm:w-full md:w-1/2 lg:w-1/3 m-0 text-regal-white"
            href="playground/{protocol.id}"
            aria-label="{protocol.name}"
            data-balloon-pos="up-right"
          >
            <div class="card hover:bg-gray-100 hover:shadow-2xl">
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
