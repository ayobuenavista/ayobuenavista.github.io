<script>
  import { fade } from 'svelte/transition';
  import protocols from '@/conf/protocols.js';

  export let segment;

  const REGAL_WHITE = '#F5F5F5';
  const REGAL_BLACK = '#4F4F4F';

  let expand = true;
  let prev = '';
  let fill = {};

  for (const protocol of protocols) {
    protocol.svg = import(`@/components/svg/${protocol.id}.svelte`).then(
      res => res.default
    );
    fill[protocol.id] = REGAL_WHITE;
  }

  function toggleExpand() {
    expand = !expand;
  }

  $: {
    fill[prev] = REGAL_WHITE;
    fill[segment] = REGAL_BLACK;
    prev = segment;
  }
  $: expanded = expand ? 'expanded' : 'collapsed';
  $: visibility = !expand ? 'hidden' : '';
</script>

<style>
  #sidebar {
    @apply relative;
    @apply bg-regal-black;
    @apply text-white;
  }

  #sidebar > .collapsed {
    width: 60px;
  }

  #sidebar > .expanded {
    @apply w-40;
  }

  a {
    @apply block;
    @apply text-left;
    @apply w-full;
  }

  button {
    @apply align-baseline;
    @apply bg-regal-white;
    @apply flex-shrink-0;
    @apply overflow-hidden;
    @apply rounded-full;
    @apply text-regal-black;
    @apply h-10;
    @apply w-10;
  }

  button:hover {
    @apply text-signature-500;
  }

  .animate {
    @apply transition-all;
    @apply ease-in-out;
    @apply duration-500;
  }

  .collapser {
    @apply absolute;
    @apply bottom-0;
    @apply left-0;
    @apply p-2;
    @apply w-full;
    @apply z-10;
  }

  .collapsed a {
    @apply rounded-none;
  }

  .collapsed .item {
    @apply pl-0;
    @apply text-center;
  }

  .collapsed .item:hover {
    @apply rounded-none;
  }

  .collapsed .item > .svg {
    @apply mx-auto;
  }

  .expanded a {
    @apply rounded-md;
  }

  .expanded .item {
    @apply pl-5;
  }

  .expanded .item > .svg {
    @apply mr-2;
  }

  .item {
    @apply py-2;
    @apply text-regal-white;
  }

  .item:hover {
    @apply bg-regal-gray;
    @apply rounded-md;
    @apply transition-none;
  }

  .item > .svg {
    @apply inline-block;
  }

  .item > span {
    @apply absolute;
    @apply align-middle;
    @apply text-regal-white;
    @apply text-sm;
    padding-left: 3px;
    padding-top: 8px;
  }

  .protocols {
    @apply block;
    @apply flex-grow-0;
    @apply mt-4;
    @apply pl-0;
    width: inherit;
  }

  .protocols > .collapsed {
    @apply ml-0;
    width: inherit;
  }

  .protocols > .expanded {
    @apply ml-5;
    width: inherit;
  }

  .protocols ul {
    @apply self-center;
  }

  .protocols ul > li {
    @apply align-middle;
    @apply leading-none;
    @apply select-none;
    @apply text-left;
    @apply my-3;
  }

  .protocols .selected {
    @apply bg-regal-white;
  }

  .protocols .selected:hover > div {
    @apply bg-transparent;
  }

  .scrollable {
    @apply flex;
    @apply flex-col;
    @apply overflow-x-hidden;
    @apply overflow-y-auto;
    @apply w-full;
  }

  .selected > .item > span {
    @apply text-regal-black;
  }
</style>

<nav id="sidebar" aria-label="sidebar" aria-orientation="vertical">
  <div class="animate {expanded}">
    <div class="scrollable">
      <a href="/" class="mt-5 w-full">
        <div class="mx-auto flex h-10 w-3/4">
          <div
            class="rounded-full h-10 w-10 flex-shrink-0 mr-3 overflow-hidden
            shadow-inner"
          >
            <img
              alt="Profile Picture"
              class="w-full h-full"
              loading="lazy"
              src="profile.jpg"
            />
          </div>
          {#if expand}
            <div class="leading-none w-full pt-1 -ml-2" transition:fade>
              <span class="align-middle tracking-tight text-sm font-semibold">
                Anton Buenavista
              </span>
            </div>
          {/if}
        </div>
      </a>
      <div class="protocols">
        <div class="animate {expanded}">
          <ul>
            {#each protocols as protocol}
              <li id="{protocol.id}">
                <a
                  href="playground/{protocol.id}"
                  on:click="{() => (segment = protocol.id)}"
                  class:selected="{segment === protocol.id}"
                  class="animate {expanded}"
                  rel="prefetch"
                >
                  <div class="item animate">
                    <div class="svg">
                      {#await protocol.svg then svg}
                        <svelte:component
                          this="{svg}"
                          svgColor="{fill[protocol.id]}"
                          svgSize="30"
                        />
                      {/await}
                    </div>
                    {#if expand}
                      <span transition:fade>{protocol.name}</span>
                    {/if}
                  </div>
                </a>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
    <div class="collapser">
      <button on:click="{toggleExpand}">
        <i class="fas fa-angle-double-{expand ? 'left' : 'right'}"></i>
      </button>
    </div>
  </div>
</nav>
