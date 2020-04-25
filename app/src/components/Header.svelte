<script>
  import MobileMenu from './MobileMenu.svelte';
  import NavLink from './NavLink.svelte';

  export let segment;
  let expand = false;

  function toggleMobileMenu(event) {
    expand = event.detail;
  }
</script>

<div class="flex mb-4">
  <nav class="w-full">
    <div class="md:flex items-center justify-between py-5 md:px-20">
      <a href="." class="mr-4 float-left">
        <div class="rounded-full h-10 w-10 flex-shrink-0 mr-3 overflow-hidden shadow-inner relative float-left">
          <img
            alt="Profile Picture"
            class="absolute inset-0 z-negative w-full h-full"
            loading="lazy"
            src="profile.jpg"
          />
        </div>
        <span class="font-semibold text-xl tracking-tight align-text-top">
          Anton Buenavista
        </span>
      </a>

      <div class="block lg:hidden">
        <MobileMenu on:click={toggleMobileMenu} {expand} />
      </div>
      <div class="w-full block lg:flex lg:items-center lg:w-auto float-right">
        <div class="{!expand && 'hidden'} lg:block text-base lg:flex-grow">
          <NavLink text="About Me" href="about" {segment} rel="prefetch" />
          <NavLink text="Playground" href="playground" {segment} rel="prefetch" />
          <NavLink text="Resume" href="resume" {segment} rel="prefetch" />
          <NavLink text="Contact" href="contact" {segment} rel="prefetch" />
        </div>
      </div>
    </div>
  </nav>
</div>