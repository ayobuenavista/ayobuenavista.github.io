<script>
  import * as typeformEmbed from '@typeform/embed';
  import { onMount } from 'svelte';

  onMount(() => {
    typeformEmbed.makeWidget(
      document.getElementById('typeform'),
      'https://aybuenavista.typeform.com/to/ZyUNgN',
      { buttonText: 'Start' }
    );
  });
</script>

<style>
  section {
    height: 720px;
  }

  #typeform {
    @apply h-full;
  }

  .contact {
    @apply m-10;
    @apply text-center;
    height: 250px;
  }
</style>

<section class="antialiased flex" id="contact">
  <div class="w-full bg-gray-200">
    <div class="contact">
      <h2 class="font-semibold text-regal-gray text-5xl md:text-4xl">
        Contact Me
        <span class="horizontal-line bg-regal-gray mx-auto mt-3"></span>
      </h2>
      <div class="mx-auto h-full">
        <div id="typeform"></div>
      </div>
    </div>
  </div>
</section>
