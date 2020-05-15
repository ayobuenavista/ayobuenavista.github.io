<script>
  import { fly } from 'svelte/transition';
  import MobileMenu from '@/components/MobileMenu.svelte';
  import NavLink from '@/components/NavLink.svelte';

  export let segment;

  const lg = 1024;

  let headerClass = '';
  let expand = false;
  let duration = '500ms';
  let offset = 5;
  let size = 0;
  let y = 0;

  function getClass(y) {
    if (y < offset) return '';

    return 'scrolled';
  }

  function getTextColor() {
    return getClass(y) ? 'text-regal-white' : 'text-regal-gray';
  }

  function setTransitionDuration(node) {
    node.style.transitionDuration = duration;
  }

  function toggleMobileMenu(event) {
    expand = event.detail;
  }

  $: desktop = size >= lg;
  $: headerClass = getClass(y);
  $: textColor = getTextColor();
  $: isPlayground = segment === 'playground' ? 'hidden' : '';
  $: isResume =
    segment === 'resume' && headerClass !== 'scrolled' ? 'hidden' : '';
  $: visibility = desktop || expand;
</script>

<style>
  img {
    @apply absolute;
    @apply inset-0;
    @apply w-full;
    @apply h-full;
  }

  nav {
    @apply text-regal-black;
  }

  nav.scrolled {
    @apply bg-regal-black;
    @apply text-regal-white;
  }

  .profile-pic {
    @apply relative;
    @apply flex-shrink-0;
    @apply float-left;
    @apply mr-3;
    @apply overflow-hidden;
    @apply rounded-full;
    @apply h-10;
    @apply w-10;
  }

  .name {
    @apply align-text-top;
    @apply font-semibold;
    @apply text-xl;
    @apply tracking-tight;
  }

  .navlinks {
    @apply text-base;
    @apply mr-4;
  }

  @screen lg {
    .navlinks {
      @apply block;
      @apply flex-grow;
      @apply mr-0;
    }
  }
</style>

<svelte:window bind:outerWidth="{size}" bind:scrollY="{y}" />

<header class="flex {isPlayground} z-" id="header">
  <nav
    use:setTransitionDuration
    class="z-50 mb-4 p-2 mt-0 fixed w-full z-10 top-0 {headerClass}"
  >
    <div class="md:flex items-center justify-between py-2 md:px-20">
      <a href="." class="mr-4 float-left">
        <div class="profile-pic">
          <img alt="Profile Picture" class="{isResume}" src="profile.jpg" />
        </div>
        <span class="name {isResume}">Anton Buenavista</span>
      </a>

      <div class="block lg:hidden float-right">
        <MobileMenu on:click="{toggleMobileMenu}" {expand} {headerClass} />
      </div>
      <div class="w-full block lg:flex lg:items-center lg:w-auto float-right">
        {#if visibility}
          <div class="navlinks" transition:fly={{ x: 100, duration: 500 }}>
    
            <NavLink
              text="Playground"
              href="playground"
              color="{textColor}"
              rel="prefetch"
              {segment}
            />
            <NavLink
              text="Resume"
              href="resume"
              color="{textColor}"
              rel="prefetch"
              {segment}
            />
            <NavLink
              text="About"
              href="#about"
              color="{textColor}"
              rel="prefetch"
              {segment}
            />
            <NavLink
              text="Contact"
              href="#contact"
              color="{textColor}"
              rel="prefetch"
              {segment}
            />
          </div>
        {/if}
      </div>
    </div>
  </nav>
</header>
