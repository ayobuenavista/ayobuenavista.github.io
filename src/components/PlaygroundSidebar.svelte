<script>
  import { fade } from 'svelte/transition';
  import { articleTitle, articlePane, navPane } from '@/utils/stores.js';
  import protocols from '@/conf/protocols.js';

  export let segment;

  const lg = 1024;
  const REGAL_WHITE = '#F5F5F5';
  const REGAL_BLACK = '#4F4F4F';

  let expand = true;
  let prev = '';
  let fill = {};
  let size = 0;

  for (const protocol of protocols) {
    protocol.svg = import(`@/components/svg/${protocol.id}.svelte`).then(
      res => res.default
    );
    fill[protocol.id] = REGAL_WHITE;
  }

  function select(id) {
    articleTitle.set('Introduction');
    segment = id;
  }

  function toggleExpand() {
    expand = !expand;
  }

  $: {
    fill[prev] = REGAL_WHITE;
    fill[segment] = REGAL_BLACK;
    prev = segment;
  }
  $: desktop = size >= lg;
  $: expanded = expand && desktop ? 'expanded' : 'collapsed';
  $: showPane = $articlePane || $navPane;
</script>

<style>
  ::-webkit-scrollbar {
    @apply bg-transparent;
    @apply w-0;
  }

  #sidebar {
    @apply absolute;
    @apply bg-regal-black;
    @apply text-white;
    @apply h-screen;
    @apply z-50;
  }

  #sidebar > .collapsed {
    width: 60px;
  }

  #sidebar > .expanded {
    @apply w-40;
  }

  #sidebar > .sidebar-container {
    @apply flex;
    @apply flex-col;
    @apply m-0;
    @apply sticky;
    @apply top-0;
    @apply h-screen;
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
    @apply outline-none;
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

  .bg-mobile-white {
    background-color: #fff !important;
  }

  .bg-mobile-regal-white {
    background-color: #f5f5f5 !important;
  }

  .collapser {
    @apply sticky;
    @apply p-2;
    @apply bottom-0;
    @apply left-0;
    @apply right-0;
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

  .elements {
    @apply flex;
    @apply flex-col;
    @apply h-screen;
    @apply w-full;
    @apply overflow-x-hidden;
    @apply overflow-y-auto;
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
    height: 46px;
  }

  .item:hover {
    @apply bg-regal-gray;
    @apply rounded-md;
    @apply transition-none;
  }

  .item > .svg {
    @apply inline-block;
    @apply align-middle;
  }

  .item > span {
    @apply inline-block;
    @apply align-middle;
    @apply text-regal-white;
    @apply text-sm;
    padding-left: 3px;
  }

  .profile-container {
    @apply flex;
    @apply mx-auto;
    @apply h-10;
    @apply w-3/4;
    padding-left: 2px;
  }

  .profile-pic {
    @apply flex-shrink-0;
    @apply mr-3;
    @apply overflow-hidden;
    @apply rounded-full;
    @apply shadow-inner;
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

  .selected > .item > span {
    @apply text-regal-black;
  }

  @screen lg {
    #sidebar {
      @apply relative;
    }
  }
</style>

<svelte:window bind:outerWidth="{size}" />

<nav id="sidebar" aria-label="sidebar" aria-orientation="vertical">
  <div class="sidebar-container animate {expanded}">
    <div class="elements">
      <a href="/" class="mt-5 w-full">
        <div class="profile-container">
          <div class="profile-pic">
            <img alt="Profile" class="h-10 w-10" src="profile.jpg" />
          </div>
          {#if expand && desktop}
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
                  on:click="{() => select(protocol.id)}"
                  class:selected="{segment === protocol.id}"
                  class="animate {expanded}
                  {segment === protocol.id && showPane && !desktop ? 'bg-mobile-regal-white' : ''}
                  {segment === protocol.id && !showPane && !desktop ? 'bg-mobile-white' : ''}"
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
                    {#if expand && desktop}
                      <span
                        in:fade="{{ duration: 1000 }}"
                        out:fade="{{ duration: 200 }}"
                      >
                        {protocol.name}
                      </span>
                    {/if}
                  </div>
                </a>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
    {#if desktop}
      <div class="collapser">
        <button on:click="{toggleExpand}">
          <i class="fas fa-angle-double-{expand ? 'left' : 'right'}"></i>
        </button>
      </div>
    {/if}
  </div>
</nav>
