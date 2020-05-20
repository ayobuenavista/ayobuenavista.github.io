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

  function setTransitionDuration(node) {
    node.style.transitionDuration = duration;
  }

  function toggleMobileMenu(event) {
    expand = event.detail;
  }

  $: desktop = size >= lg;
  $: headerClass = getClass(y);
  $: isPlayground = segment === 'playground' ? 'hidden' : '';
  $: isResume = segment === 'resume';
  $: shouldHide = isResume && headerClass !== 'scrolled' ? 'hidden' : '';
  $: shouldWhite = isResume && !desktop ? 'text-regal-white' : '';
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

  nav > a {
    @apply flex;
    @apply float-left;
    @apply items-center;
    @apply -mt-2;
  }

  .name {
    @apply font-semibold;
    @apply text-xl;
    @apply tracking-tight;
    @apply h-full;
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

  @screen md {
    @apply flex;
    @apply px-20;
  }

  @screen lg {
    nav > a {
      @apply ml-12;
    }

    .nav-container {
      @apply flex;
      @apply items-center;
      @apply w-auto;
    }

    .nav-links {
      @apply block;
      @apply flex-grow;
      @apply mr-12;
    }
  }
</style>

<svelte:window bind:outerWidth="{size}" bind:scrollY="{y}" />

<header
  use:setTransitionDuration
  class="{isPlayground}
  {headerClass}"
  id="header"
>
  <nav>
    <a href=".">
      <div class="profile-pic">
        <img alt="Profile Picture" class="{shouldHide}" src="profile.jpg" />
      </div>
      <div class="name {shouldHide}">Anton Buenavista</div>
    </a>
    <div class="block float-right lg:hidden">
      <MobileMenu
        on:click="{toggleMobileMenu}"
        {expand}
        {isResume}
        {headerClass}
      />
    </div>
    <div class="nav-container">
      {#if visibility}
        <div
          class="nav-links {shouldWhite}"
          transition:fly="{{ x: 100, duration: 500 }}"
        >
          <NavLink
            on:click="{toggleMobileMenu}"
            text="Playground"
            href="playground"
            rel="prefetch"
            {segment}
          />
          <NavLink
            on:click="{toggleMobileMenu}"
            text="Resume"
            href="resume"
            rel="prefetch"
            {segment}
          />
          <NavLink
            on:click="{toggleMobileMenu}"
            text="About"
            href="#about"
            rel="prefetch"
            {segment}
          />
          <NavLink
            on:click="{toggleMobileMenu}"
            text="Contact"
            href="#contact"
            rel="prefetch"
            {segment}
          />
        </div>
      {/if}
    </div>
  </nav>
</header>
