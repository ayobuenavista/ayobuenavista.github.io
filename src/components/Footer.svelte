<script>
  export let segment;
</script>
<footer class="antialiased flex absolute bottom-0 h-auto w-full" id="footer">
  {#if segment === 'resume'}
    <div class="h-full w-full bg-transparent py-3">
      <div class="container mx-auto text-center">
        <div class="w-auto mx-auto text-gray-500 inline-block">
          <p class="text-base">Handcrafted by me © ayobuenavista</p>
        </div>
        <div class="absolute right-0 text-gray-500 inline-block">
          <a href="https://twitter.com/ayobuenavista" target="_blank">
            <i class="fab fa-twitter text-gray-500 text-2xl px-5"></i>
          </a>
          <a href="https://github.com/ayobuenavista" target="_blank">
            <i class="fab fa-github text-gray-500 text-2xl px-5"></i>
          </a>
          <a href="https://linkedin.com/in/ayobuenavista" target="_blank">
            <i class="fab fa-linkedin text-gray-500 text-2xl px-5"></i>
          </a>
        </div>
      </div>
    </div>
  {:else if segment !== 'playground'}
    <div class="h-full w-full bg-regal-gray py-3">
      <div class="container mx-auto text-center text-gray-500 my-8">
        <p class="text-xl">
          Passion outperforms upbringing
          <br />
          Disrespect the impossible
        </p>
      </div>
      <div class="container mx-auto text-center my-8">
        <a href="https://twitter.com/ayobuenavista" target="_blank">
          <i class="fab fa-twitter text-regal-white text-2xl px-5"></i>
        </a>
        <a href="https://github.com/ayobuenavista" target="_blank">
          <i class="fab fa-github text-regal-white text-2xl px-5"></i>
        </a>
        <a href="https://linkedin.com/in/ayobuenavista" target="_blank">
          <i class="fab fa-linkedin text-regal-white text-2xl px-5"></i>
        </a>
      </div>
      <div class="container mx-auto text-center text-gray-500 my-8">
        <p class="text-base">Handcrafted by me © ayobuenavista</p>
        <div class="text-sm mx-auto mt-5">
          Made with
          <a href="https://svelte.dev/" target="_blank">
            <img
              alt="Made with Svelte"
              class="w-5 h-5 inline-block ml-2"
              loading="lazy"
              src="svelte.png"
            />
          </a>
          <a href="https://tailwindcss.com/" target="_blank">
            <img
              alt="Made with tailwindcss"
              class="w-5 h-5 inline-block ml-1"
              loading="lazy"
              src="tailwindcss.png"
            />
          </a>
        </div>
      </div>
    </div>
  {/if}
  </footer>
