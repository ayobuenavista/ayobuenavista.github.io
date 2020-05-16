<script>
  export let segment;
</script>

<style>
  footer {
    @apply absolute;
    @apply antialiased;
    @apply flex;
    @apply bottom-0;
    @apply h-auto;
    @apply w-full;
  }

  .copyright {
    @apply mx-auto;
    @apply my-8;
    @apply text-center;
    @apply text-gray-500;
  }

  .links {
    @apply mx-auto;
    @apply my-8;
    @apply text-center;
  }

  .resume-copyright {
    @apply inline-block;
    @apply mx-auto;
    @apply text-gray-500;
    @apply w-full;
  }

  .resume-links {
    @apply text-gray-500;
    @apply w-full;
  }

  .quotes {
    @apply mx-auto;
    @apply my-8;
    @apply text-center;
    @apply text-gray-500;
    @apply text-xl;
  }

  @screen lg {
    .resume-links {
      @apply absolute;
      @apply inline-block;
      @apply right-0;
      @apply w-auto;
    }
  }
</style>

<footer id="footer">
  {#if segment === 'resume'}
    <div class="h-full w-full bg-transparent py-3">
      <div class="flex flex-col-reverse lg:flex-row mx-auto text-center">
        <div class="resume-copyright">
          <p class="text-base">Handcrafted by me © ayobuenavista</p>
        </div>
        <div class="resume-links">
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
      <div class="quotes">
        <p>
          Passion outperforms upbringing
          <br />
          Disrespect the impossible
        </p>
      </div>
      <div class="links">
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
      <div class="copyright">
        <p class="text-base">Handcrafted by me © ayobuenavista</p>
        <div class="text-sm mx-auto mt-5">
          Made with
          <a href="https://svelte.dev/" target="_blank">
            <img
              alt="Made with Svelte"
              class="w-5 h-5 inline-block ml-2"
              src="svelte.png"
            />
          </a>
          <a href="https://tailwindcss.com/" target="_blank">
            <img
              alt="Made with tailwindcss"
              class="w-5 h-5 inline-block ml-1"
              src="tailwindcss.png"
            />
          </a>
        </div>
      </div>
    </div>
  {/if}
</footer>
