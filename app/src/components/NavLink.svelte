<script>
  export let segment;
  export let href;
  export let text;
  export let color;
  export let rel = "";
</script>

<a
  {rel}
  {href}
  class="block mt-4 lg:mx-4 lg:inline-block lg:mt-0 {segment === href ? 'text-green-400' : {color}}
  hover:text-signature">
  {text}
</a>
