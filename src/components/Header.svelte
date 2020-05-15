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

  header {
    @apply flex-col;
    @apply fixed;
    @apply text-regal-black;
    @apply p-2;
    @apply mb-4;
    @apply mt-0;
    @apply w-full;
    @apply top-0;
    @apply z-10;
  }

  header.scrolled {
    @apply bg-regal-black;
    @apply text-regal-white;
  }

  nav {
    @apply items-center;
    @apply justify-between;
    @apply py-2;
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

  .nav-container {
    @apply block;
    @apply float-right;
    @apply w-full;
  }

  .nav-links {
    @apply text-base;
    @apply mr-4;
  }

  @screen md {
    @apply flex;
    @apply px-20;
  }

  @screen lg {
    .nav-container {
      @apply flex;
      @apply items-center;
      @apply w-auto;
    }

    .nav-links {
      @apply block;
      @apply flex-grow;
      @apply mr-0;
    }
  }
</style>

<svelte:window bind:outerWidth="{size}" bind:scrollY="{y}" />

<header
  use:setTransitionDuration
  class="{isPlayground} {headerClass}"
  id="header"
>
  <nav>
    <a href="." class="mr-4 float-left">
      <div class="profile-pic">
        <img alt="Profile Picture" class="{isResume}" src="profile.jpg" />
      </div>
      <span class="name {isResume}">Anton Buenavista</span>
    </a>
    <div class="block float-right lg:hidden">
      <MobileMenu on:click="{toggleMobileMenu}" {expand} {headerClass} />
    </div>
    <div class="nav-container">
      {#if visibility}
        <div class="nav-links" transition:fly="{{ x: 100, duration: 500 }}">
          <NavLink
            on:click="{toggleMobileMenu}"
            text="Playground"
            href="playground"
            color="{textColor}"
            rel="prefetch"
            {segment}
          />
          <NavLink
            on:click="{toggleMobileMenu}"
            text="Resume"
            href="resume"
            color="{textColor}"
            rel="prefetch"
            {segment}
          />
          <NavLink
            on:click="{toggleMobileMenu}"
            text="About"
            href="#about"
            color="{textColor}"
            rel="prefetch"
            {segment}
          />
          <NavLink
            on:click="{toggleMobileMenu}"
            text="Contact"
            href="#contact"
            color="{textColor}"
            rel="prefetch"
            {segment}
          />
        </div>
      {/if}
    </div>
  </nav>
</header>
