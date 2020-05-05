<script>
  import algorand from '@/components/svg/algorand.svelte';
  import celo from '@/components/svg/celo.svelte';
  import ethereum from '@/components/svg/ethereum.svelte';
  import flow from '@/components/svg/flow.svelte';
  import near from '@/components/svg/near.svelte';
  import polkadot from '@/components/svg/polkadot.svelte';
  import skale from '@/components/svg/skale.svelte';
  import solana from '@/components/svg/solana.svelte';
  import tezos from '@/components/svg/tezos.svelte';

  const REGAL_GRAY = '#64667F';

  let protocols = [
    {
      id: 'ethereum',
      name: 'Ethereum',
      svg: ethereum,
    },
    {
      id: 'near',
      name: 'NEAR',
      svg: near,
    },
    {
      id: 'tezos',
      name: 'Tezos',
      svg: tezos,
    },
    {
      id: 'polkadot',
      name: 'Polkadot',
      svg: polkadot,
    },
    {
      id: 'algorand',
      name: 'Algorand',
      svg: algorand,
    },
    {
      id: 'solana',
      name: 'Solana',
      svg: solana,
    },
    {
      id: 'skale',
      name: 'SKALE',
      svg: skale,
    },
    {
      id: 'celo',
      name: 'Celo',
      svg: celo,
    },
    {
      id: 'flow',
      name: 'Flow',
      svg: flow,
    },
  ];
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
                <svelte:component
                  this="{protocol.svg}"
                  svgColor="{REGAL_GRAY}"
                  svgSize="100"
                />
              </div>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>
