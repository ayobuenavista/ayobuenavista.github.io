<script>
  import { onMount } from 'svelte';

  onMount(async () => {
    var qs,
      js,
      q,
      s,
      d = document,
      gi = d.getElementById,
      ce = d.createElement,
      gt = d.getElementsByTagName,
      id = 'typef_orm',
      b = 'https://embed.typeform.com/';
    if (!gi.call(d, id)) {
      js = ce.call(d, 'script');
      js.id = id;
      js.src = b + 'embed.js';
      q = gt.call(d, 'script')[0];
      q.parentNode.insertBefore(js, q);
    }
  });
</script>

<style>
  section {
    height: 720px;
  }
</style>

<section class="antialiased flex" id="contact">
  <div class="h-auto w-full bg-gray-200 pb-10">
    <div class="container mx-auto pt-10 mt-10 mb-20 text-center">
      <h2 class="text-5xl font-semibold md:text-4xl text-regal-gray">
        Contact Me
        <span class="horizontal-line mt-3 bg-regal-gray mx-auto"></span>
      </h2>
      <div class="mx-auto relative w-full">
        <div
          class="typeform-widget h-48"
          data-url="https://aybuenavista.typeform.com/to/ZyUNgN"
        ></div>
      </div>
    </div>
  </div>
</section>
