<script>
  export let segment;
  export let href;
  export let text;
  export let color;
  export let rel = '';
</script>

<a
  {rel}
  {href}
  class="block mt-4 lg:mx-4 lg:inline-block lg:mt-0 {segment === href ? 'text-signature-500' : { color }}
  hover:text-signature-800"
>
  {text}
</a>
