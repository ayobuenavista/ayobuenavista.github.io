<script>
  import { stores } from '@sapper/app';

  const { page } = stores();

  $: {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'UA-115783431-1', {
        page_path: $page.path,
      });
    }
  }
</script>
