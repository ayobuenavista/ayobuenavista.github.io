<script>
  export let svgColor;
  export let svgSize;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="{svgSize}"
  height="{svgSize}"
  viewBox="0 0 100 100"
>
  <defs>
    <linearGradient x1="82.815%" y1="12.752%" x2="16.973%" y2="87.485%" id="b">
      <stop stop-color="{svgColor}" offset="0%"></stop>
      <stop stop-color="{svgColor}" stop-opacity="0" offset="49.756%"></stop>
      <stop stop-color="{svgColor}" offset="100%"></stop>
    </linearGradient>
    <path
      d="M82.49 8c-2.698 0-5.396 1.18-7.253 3.205L9.618 86.606c1.687 3.038 4.892
      4.894 8.434 4.894a9.538 9.538 0 0 0 7.254-3.374l65.282-75.57C88.73 9.686
      85.694 8 82.49 8z"
      id="a"
    ></path>
  </defs>
  <g fill="none" fill-rule="evenodd">
    <path
      d="M17.547 91.5a9.842 9.842 0 0 0 4.386-1.012V27.23l50.774 60.896c1.856
      2.193 4.555 3.374 7.422 3.374h2.025c5.229 0 9.615-4.217
      9.615-9.615v-64.27C91.432 12.217 87.214 8 81.985 8a9.842 9.842 0 0 0-4.386
      1.012V72.27L26.824 11.374C24.97 9.18 22.27 8 19.402 8h-1.855c-5.398
      0-9.615 4.217-9.615 9.615v64.439c0 5.229 4.217 9.446 9.615 9.446"
      fill="{svgColor}"
    ></path>
    <use fill="url(#b)" xlink:href="#a"></use>
  </g>
</svg>
