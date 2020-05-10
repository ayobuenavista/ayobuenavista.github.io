<script>
  import MobileMenu from '@/components/MobileMenu.svelte';
  import NavLink from '@/components/NavLink.svelte';

  export let segment;

  let headerClass = '';
  let expand = false;
  let duration = '500ms';
  let offset = 5;
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

  $: headerClass = getClass(y);
  $: textColor = getTextColor();
  $: isPlayground = segment === 'playground' ? 'hidden' : '';
  $: isResume =
    segment === 'resume' && headerClass !== 'scrolled' ? 'hidden' : '';
</script>

<style>
  nav.scrolled {
    @apply bg-regal-black;
    @apply text-regal-white;
  }
</style>

<svelte:window bind:scrollY="{y}" />

<header class="flex {isPlayground}" id="header">
  <nav
    use:setTransitionDuration
    class="z-50 mb-4 p-2 mt-0 fixed w-full z-10 top-0 {headerClass}"
  >
    <div class="md:flex items-center justify-between py-2 md:px-20">
      <a href="." class="mr-4 float-left">
        <div
          class="rounded-full h-10 w-10 flex-shrink-0 mr-3 overflow-hidden
          shadow-inner relative float-left"
        >
          <img
            alt="Profile Picture"
            class="absolute inset-0 z-negative w-full h-full {isResume}"
            loading="lazy"
            src="profile.jpg"
          />
        </div>
        <span
          class="font-semibold text-xl tracking-tight align-text-top {isResume}"
        >
          Anton Buenavista
        </span>
      </a>

      <div class="block lg:hidden float-right">
        <MobileMenu on:click="{toggleMobileMenu}" {expand} />
      </div>
      <div class="w-full block lg:flex lg:items-center lg:w-auto float-right">
        <div class="{!expand && 'hidden'} lg:block text-base lg:flex-grow">
          <NavLink
            text="Playground"
            href="playground"
            {segment}
            color="{textColor}"
            rel="prefetch"
          />
          <NavLink
            text="Resume"
            href="resume"
            {segment}
            color="{textColor}"
            rel="prefetch"
          />
          <NavLink
            text="About"
            href="#about"
            {segment}
            color="{textColor}"
            rel="prefetch"
          />
          <NavLink
            text="Contact"
            href="#contact"
            {segment}
            color="{textColor}"
            rel="prefetch"
          />
        </div>
      </div>
    </div>
  </nav>
</header>
