<script>
  import routes from '@/conf/published.js';

  let protocols = [];

  for (let route in routes) {
    protocols.push(route);
  }
</script>

{#each protocols as protocol}
  {#if routes[protocol].length > 0}
    {#each routes[protocol] as article}
      <a class="absolute hidden" href="playground/{protocol}/{article}">.</a>
    {/each}
  {/if}
{/each}
