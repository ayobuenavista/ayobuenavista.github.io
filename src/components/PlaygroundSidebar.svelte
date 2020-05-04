<script>
  import { createEventDispatcher } from 'svelte';
  import { onMount } from 'svelte';

  export let segment;

  const REGAL_WHITE = '#F5F5F5';
  const REGAL_BLACK = '#4F4F4F';

  let prev = '';
  let fill = {
    ethereum: REGAL_WHITE,
    near: REGAL_WHITE,
    tezos: REGAL_WHITE,
    polkadot: REGAL_WHITE,
    algorand: REGAL_WHITE,
    solana: REGAL_WHITE,
    skale: REGAL_WHITE,
    celo: REGAL_WHITE,
    flow: REGAL_WHITE,
  };

  $: {
    fill[prev] = REGAL_WHITE;
    fill[segment] = REGAL_BLACK;
    prev = segment;
  }
</script>

<style>
  #sidebar {
    @apply flex;
    @apply flex-col;
    @apply flex-none;
    @apply items-center;
    @apply text-center;
    @apply bg-regal-black;
    @apply text-white;
    @apply w-40;
  }

  a {
    @apply block;
    @apply text-left;
    @apply w-full;
  }

  .item {
    @apply py-2;
    @apply pl-5;
    @apply rounded-md;
    @apply text-regal-white;
  }

  .item:hover {
    @apply bg-regal-gray;
  }

  .item > svg {
    @apply inline-block;
    @apply mr-2;
  }

  .item > span {
    @apply text-regal-white;
    @apply text-sm;
  }

  .protocols {
    @apply block;
    @apply mt-4;
    @apply flex-grow-0;
    @apply pl-0;
    @apply ml-5;
    width: inherit;
  }

  .protocols > ul {
    @apply self-center;
  }

  .protocols > ul > li {
    @apply align-middle;
    @apply leading-none;
    @apply select-none;
    @apply text-left;
    @apply my-2;
  }

  .protocols .selected {
    @apply bg-regal-white;
    @apply rounded-md;
  }

  .protocols .selected:hover > div {
    @apply bg-transparent;
  }

  .selected > .item > span {
    @apply text-regal-black;
  }
</style>

<nav id="sidebar" aria-label="sidebar" aria-orientation="vertical">
  <a href="/" class="mt-5 w-full">
    <div class="mx-auto flex h-10 w-3/4">
      <div
        class="inline-block rounded-full h-10 w-10 flex-shrink-0 mr-3
        overflow-hidden shadow-inner relative float-left"
      >
        <img
          alt="Profile Picture"
          class="w-full h-full"
          loading="lazy"
          src="profile.jpg"
        />
      </div>
      <div class="inline-block text-left leading-none w-12 -ml-2">
        <span class="align-middle tracking-tight text-sm font-semibold">
          Anton Buenavista
        </span>
      </div>
    </div>
  </a>

  <div class="protocols">
    <ul>
      <li id="ethereum">
        <a
          href="playground/ethereum"
          on:click="{() => (segment = 'ethereum')}"
          class:selected="{segment === 'ethereum'}"
        >
          <div class="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 100 100"
            >
              <path
                d="M49.118 67.147l-27.057-15.85
                27.057-11.852v27.702zm0-29.607L22.932 49.01 49.118
                5.013V37.54zM50.863 5l26.553 44.172L50.863 37.54V5zm0
                34.445l27.076 11.86-27.076 15.842V39.445zM49.118 95L22.243
                56.983 49.118 72.72V95zm1.745 0V72.719l26.875-15.736L50.863 95z"
                fill="{fill.ethereum}"
                fill-rule="nonzero"
              ></path>
            </svg>
            <span>Ethereum</span>
          </div>
        </a>
      </li>
      <li id="near">
        <a
          href="playground/near"
          on:click="{() => (segment = 'near')}"
          class:selected="{segment === 'near'}"
        >
          <div class="item">
            <svg
              class="inline-block"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 100 100"
            >
              <defs>
                <linearGradient
                  x1="82.815%"
                  y1="12.752%"
                  x2="16.973%"
                  y2="87.485%"
                  id="b"
                >
                  <stop stop-color="{fill.near}" offset="0%"></stop>
                  <stop
                    stop-color="{fill.NEAR}"
                    stop-opacity="0"
                    offset="49.756%"
                  ></stop>
                  <stop stop-color="{fill.near}" offset="100%"></stop>
                </linearGradient>
                <path
                  d="M82.49 8c-2.698 0-5.396 1.18-7.253 3.205L9.618 86.606c1.687
                  3.038 4.892 4.894 8.434 4.894a9.538 9.538 0 0 0
                  7.254-3.374l65.282-75.57C88.73 9.686 85.694 8 82.49 8z"
                  id="a"
                ></path>
              </defs>
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M17.547 91.5a9.842 9.842 0 0 0 4.386-1.012V27.23l50.774
                  60.896c1.856 2.193 4.555 3.374 7.422 3.374h2.025c5.229 0
                  9.615-4.217 9.615-9.615v-64.27C91.432 12.217 87.214 8 81.985
                  8a9.842 9.842 0 0 0-4.386 1.012V72.27L26.824 11.374C24.97 9.18
                  22.27 8 19.402 8h-1.855c-5.398 0-9.615 4.217-9.615
                  9.615v64.439c0 5.229 4.217 9.446 9.615 9.446"
                  fill="{fill.near}"
                ></path>
                <use fill="url(#b)" xlink:href="#a"></use>
              </g>
            </svg>
            <span class="text-sm">NEAR</span>
          </div>
        </a>
      </li>
      <li id="tezos">
        <a
          href="playground/tezos"
          on:click="{() => (segment = 'tezos')}"
          class:selected="{segment === 'tezos'}"
        >
          <div class="item">
            <svg
              class="inline-block"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 100 100"
            >
              <path
                fill="{fill.tezos}"
                fill-rule="evenodd"
                d="M59.888 95c-6.462
                0-11.168-1.547-14.125-4.64-2.954-3.091-4.432-6.426-4.432-9.999
                0-1.306.257-2.405.772-3.299a5.67 5.67 0 012.115-2.114c.893-.516
                1.992-.773 3.299-.773 1.306 0 2.404.257 3.299.773a5.676 5.676 0
                012.113 2.114c.515.894.773 1.993.773 3.3 0 1.58-.378 2.868-1.134
                3.865-.757.997-1.65 1.649-2.68 1.96.894 1.235 2.303 2.111 4.227
                2.627 1.924.551 3.848.825 5.773.825 2.68 0 5.102-.721
                7.268-2.164 2.164-1.444 3.763-3.575 4.794-6.392 1.031-2.818
                1.547-6.014 1.547-9.589
                0-3.882-.568-7.2-1.702-9.948-1.1-2.783-2.732-4.845-4.898-6.186a13.08
                13.08 0 00-7.01-2.01c-1.65 0-3.71.688-6.185 2.063l-4.536
                2.268v-2.268l20.412-27.217H41.331v28.246c0 2.338.515 4.262 1.546
                5.775 1.031 1.512 2.612 2.267 4.744 2.267 1.647 0 3.229-.55
                4.741-1.65a16.762 16.762 0
                003.917-4.019c.138-.31.31-.534.516-.671.185-.164.423-.255.67-.257.378
                0 .824.189 1.34.568.482.548.722 1.184.722
                1.905-.06.486-.146.969-.259 1.445-1.167 2.611-2.783 4.604-4.845
                5.978a12.01 12.01 0 01-6.802 2.062c-6.118
                0-10.346-1.202-12.682-3.607-2.336-2.407-3.505-5.672-3.505-9.794V28.196H17v-5.258h14.434V10.98l-3.299-3.302V5h9.587l3.607
                1.855v16.083l37.321-.103 3.712 3.711-22.886 22.887a15.3 15.3 0
                014.33-1.031c2.474 0 5.257.79 8.35 2.371 3.127 1.547 5.533 3.678
                7.216 6.39 1.684 2.682 2.766 5.26 3.247 7.733.516 2.476.774
                4.674.774 6.598 0 4.4-.928 8.488-2.783 12.27-1.856 3.779-4.674
                6.596-8.454 8.453C68.376 94.073 64.286 95 59.888 95z"
              ></path>
            </svg>
            <span class="text-sm">Tezos</span>
          </div>
        </a>
      </li>
      <li id="polkadot">
        <a
          href="playground/polkadot"
          on:click="{() => (segment = 'polkadot')}"
          class:selected="{segment === 'polkadot'}"
        >
          <div class="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 100 100"
            >
              <path
                d="M50.115 80.757c2.172-.543 4.783.666 5.887 2.716.56 1.016.56
                3.714 0 4.73-.473.894-1.735 2.086-2.628
                2.471-1.051.473-3.084.42-4.223-.088-1.138-.508-2.347-1.822-2.733-2.943-1.016-2.978.683-6.132
                3.697-6.886zM47.03 9.117c2.103-.245 6.027-.088 8.428.315
                4.117.719 9.075 2.733 12.404 5.064 6.745 4.73 11.196 11.493
                12.913 19.64.42 1.98.473 2.593.473 5.887.017 4.135-.21
                5.781-1.227 9.128-3.311 11.003-12.457 19.325-23.67
                21.602-.946.193-3.259.473-5.133.631-5.607.456-7.289 1.051-9.724
                3.504-.999.999-1.577 1.752-1.997 2.61-.736 1.525-.754 1.56-1.7
                5.958-.438 2.014-.893 3.907-1.034 4.24-.122.315-.56.893-.963
                1.279-2.698 2.628-7.271.63-7.219-3.137 0-.91 9.62-46.183
                10.057-47.445.333-.893 1.104-1.717 2.103-2.207 2.68-1.35
                5.886.385 6.202 3.364.07.63-.35 2.89-1.857 9.759-2.488
                11.405-2.996 13.928-2.874 14.138.053.088.28.123.49.07.982-.227
                4.556-.648 7.552-.893 1.84-.14 3.907-.368 4.608-.526 8.357-1.752
                15.05-8.252
                17.135-16.644.613-2.453.77-6.325.333-8.848-.789-4.818-2.856-8.777-6.378-12.264-3.416-3.399-7.078-5.326-11.843-6.237-2.278-.42-5.957-.386-8.27.087-9.268
                1.91-16.294 9.164-17.836 18.397-.245 1.401-.28 2.4-.21 4.467.088
                2.593.28 3.68 1.016 6.133.648 2.067.21 3.819-1.244 5.045-2.067
                1.787-5.431
                1.122-6.675-1.296-.193-.368-.578-1.577-.858-2.68-3.33-12.913
                1.541-26.159 12.439-33.745 4.012-2.82 9.426-4.818 14.56-5.396z"
                fill="{fill.polkadot}"
                fill-rule="nonzero"
              ></path>
            </svg>
            <span>Polkadot</span>
          </div>
        </a>
      </li>
      <li id="algorand">
        <a
          href="playground/algorand"
          on:click="{() => (segment = 'algorand')}"
          class:selected="{segment === 'algorand'}"
        >
          <div class="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 100 100"
            >
              <path
                d="M70.455 60.349l-18.853 32.65H36.793c.379-.745.689-1.424
                1.06-2.068A36887.6 36887.6 0 0155.432 60.5c3.158-5.461
                6.31-10.925
                9.499-16.368.575-.984.725-1.864.4-3.016-1.471-5.241-2.821-10.514-4.224-15.807-.878.836-7.728
                12.569-13.298 22.469-4.254 7.56-8.665 15.035-13.007
                22.548L21.695 93H7.145c-.077-.104-.124-.142-.135-.19a.236.236 0
                01.011-.166C23.482 64.11 39.946 35.577 56.435 7h13.099l5.794
                21.467h13.305c-.139.403-.206.768-.382 1.07-2.586 4.49-5.163
                8.986-7.801 13.444-.62 1.048-.75 1.972-.414 3.18 2.095 7.563
                4.096 15.15 6.123 22.732 1.998 7.472 3.991 14.944 5.983
                22.418.141.529.253 1.066.398
                1.68H79.283c-3.025-10.726-5.752-21.584-8.828-32.642"
                fill="{fill.algorand}"
                fill-rule="evenodd"
              ></path>
            </svg>
            <span>Algorand</span>
          </div>
        </a>
      </li>
      <li id="solana">
        <a
          href="playground/solana"
          on:click="{() => (segment = 'solana')}"
          class:selected="{segment === 'solana'}"
        >
          <div class="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 100 100"
            >
              <path
                d="M75.575 9.355v14.91l14.683-14.91H75.575zM59.06
                24.265h14.683V9.355H59.06v14.91zm-16.513
                0H57.23V9.355H42.547v14.91zm-16.515
                0h14.68V9.355h-14.68v14.91zm-1.835-14.91L9.519
                24.265h14.678V9.355zM9.519
                41.04h14.678V26.13H9.519v14.91zM75.575 57.81h14.683L75.575
                42.9v14.91zm-16.515 0h14.683V42.902H59.06V57.81zm-16.513
                0H57.23V42.902H42.547V57.81zm-16.515
                0h14.68V42.902h-14.68V57.81zM9.52 42.9l14.678
                14.91V42.9H9.519zm66.056 31.683h14.683V59.674H75.575v14.909zm0
                1.863v14.91l14.683-14.91H75.575zM59.06
                91.356h14.683v-14.91H59.06v14.91zm-16.513
                0H57.23v-14.91H42.547v14.91zm-16.515
                0h14.68v-14.91h-14.68v14.91zm-16.513 0h14.678v-14.91L9.519
                91.356z"
                fill="{fill.solana}"
                fill-rule="evenodd"
              ></path>
            </svg>
            <span>Solana</span>
          </div>
        </a>
      </li>
      <li id="skale">
        <a
          href="playground/skale"
          on:click="{() => (segment = 'skale')}"
          class:selected="{segment === 'skale'}"
        >
          <div class="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 100 100"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M10 10h80v80H10V10zm4 4v72h72V14H14z"
                  fill="{fill.skale}"
                  fill-rule="nonzero"
                ></path>
                <path
                  d="M72.554 56.91V44.782h9.291c.186 0 .186 0
                  .186.18v1.821c-.075.003-.139.009-.202.009h-6.944c-.19 0-.191
                  0-.191.189v2.61c0 .186 0 .186.193.186h6.65c.196 0 .196 0
                  .196.197V51.786h-6.857c-.182 0-.182
                  0-.182.183V54.908h7.476v2.002h-9.616zM19.483
                  55.573l1.05-1.805c.5.335 1.02.596 1.57.799 1.138.418 2.306.634
                  3.52.548.603-.042 1.188-.152
                  1.71-.48.42-.264.647-.639.637-1.143a.962.962 0 0
                  0-.398-.783c-.387-.296-.843-.414-1.306-.514-.964-.209-1.933-.39-2.89-.626-.583-.144-1.153-.35-1.717-.56-.276-.104-.536-.268-.783-.434-.557-.375-.875-.907-.973-1.572a4.077
                  4.077 0 0 1 .104-1.709c.231-.828.745-1.43 1.491-1.846.885-.493
                  1.84-.756 2.842-.847 1.541-.139 3.044.036
                  4.488.612.384.153.755.343 1.149.524l-1.049
                  1.817-.158-.082a7.578 7.578 0 0
                  0-4.809-.805c-.452.07-.88.215-1.25.5-.42.325-.599.752-.532
                  1.28.044.344.243.578.536.744.362.205.758.318 1.162.396.808.157
                  1.62.292 2.426.45.679.133 1.357.275 1.992.563.451.205.853.485
                  1.217.82.336.308.554.69.674 1.128.359 1.315-.103 2.645-1.215
                  3.488-.702.533-1.506.826-2.363.976-1.476.26-2.935.15-4.374-.254-.906-.255-1.787-.579-2.598-1.07-.04-.024-.08-.049-.118-.075-.01-.007-.018-.02-.035-.04M58.875
                  56.92h-.162c-.678 0-1.356-.002-2.034.003-.106
                  0-.153-.034-.194-.131-.379-.895-.766-1.787-1.145-2.681-.046-.107-.101-.143-.218-.143-1.93.004-3.862.004-5.793
                  0-.115 0-.172.035-.217.142-.38.895-.766 1.786-1.146
                  2.68-.04.096-.089.134-.196.133-.678-.005-1.356-.003-2.034-.003-.04
                  0-.082-.004-.143-.007.023-.058.04-.104.06-.15 1.76-3.947
                  3.52-7.895 5.278-11.844.049-.11.107-.14.22-.139.73.005
                  1.459.005 2.188 0 .118-.001.171.04.217.144 1.75 3.947 3.504
                  7.893 5.257
                  11.84.018.041.034.084.062.156zm-4.469-4.967l-2.181-5.106-2.18
                  5.106h4.361zM33.182 44.782h.518c.481 0 .963.006
                  1.444-.003.142-.002.182.036.181.18-.005 1.898-.003 3.796-.003
                  5.695v.222c.061-.058.094-.086.123-.116 1.903-1.952 3.806-3.904
                  5.706-5.859a.353.353 0 0 1 .28-.121c.78.005 1.562.002
                  2.342.002h.151l.02.032-5.224 5.483 5.778
                  6.609c-.06.006-.098.014-.135.014-.804
                  0-1.609-.002-2.413.003-.107 0-.159-.057-.218-.124a18382.31
                  18382.31 0 0
                  0-4.25-4.856l-.164-.18c-.039.036-.07.062-.099.092-.602.634-1.206
                  1.266-1.803 1.905a.374.374 0 0 0-.09.232c-.006.916-.007
                  1.833-.001 2.75 0
                  .134-.025.185-.175.182-.603-.01-1.206-.004-1.81-.004h-.158V44.782zM70.214
                  54.913v1.996h-8.993v-.155c0-3.933.001-7.865-.003-11.798
                  0-.146.042-.178.181-.177.594.008 1.188.003 1.782.003.191 0
                  .192 0 .192.189v9.735c0 .24-.02.206.213.206h6.628z"
                  fill="{fill.skale}"
                ></path>
              </g>
            </svg>
            <span>SKALE</span>
          </div>
        </a>
      </li>
      <li id="celo">
        <a
          href="playground/celo"
          on:click="{() => (segment = 'celo')}"
          class:selected="{segment === 'celo'}"
        >
          <div class="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 100 100"
            >
              <g stroke-width="1" fill="none" fill-rule="evenodd">
                <path
                  d="M35.24803,35.24687 C34.76083,37.20147 34.47373,39.23727
                  34.47373,41.34267 C34.47373,55.25107 45.74893,66.52627
                  59.65733,66.52627 C61.76273,66.52627 63.79853,66.23917
                  65.75313,65.75197 C65.70093,65.95497 65.65163,66.15507
                  65.59653,66.35227 C65.45443,66.87717 65.29493,67.39337
                  65.11803,67.90087 C65.00493,68.22857 64.88893,68.55047
                  64.76423,68.86947 C64.55833,69.38567 64.33503,69.89317
                  64.09723,70.39197 C63.95513,70.69067 63.82173,70.99517
                  63.66803,71.28517 C63.39543,71.80717 63.09383,72.31467
                  62.78643,72.81637 C62.63273,73.06287 62.49643,73.31807
                  62.33403,73.55877 C61.86423,74.26927 61.35963,74.96237
                  60.81443,75.62357 C60.42583,75.63517 60.04883,75.68447
                  59.65733,75.68447 C40.69133,75.68447 25.31553,60.30577
                  25.31553,41.34267 C25.31553,40.95117 25.36193,40.57417
                  25.37353,40.18557 C25.38223,40.17687 25.39383,40.17107
                  25.40253,40.16237 C26.05793,39.62877 26.73653,39.13287
                  27.43833,38.66597 C27.5204967,38.6118367 27.6042744,38.5596367
                  27.6889115,38.5084033 L28.20103,38.20487 C28.69403,37.90037
                  29.19283,37.60167 29.70613,37.33487 C30.00773,37.17827
                  30.31513,37.03907 30.62253,36.89407 C31.11553,36.66207
                  31.61143,36.44167 32.11603,36.23867 C32.44373,36.11107
                  32.77723,35.99217 33.11073,35.87617 C33.61243,35.70217
                  34.12283,35.54557 34.63613,35.40347 C34.83913,35.34837
                  35.04213,35.29617 35.24803,35.24687 Z M59.6582,7 C78.6242,7
                  94,22.3758 94,41.3418 C94,55.5779 85.3377,67.7869
                  72.9982,72.9953 C73.4187,72.0006 73.7841,70.9827
                  74.1089,69.9561 C74.2046,69.6458 74.2713,69.3239
                  74.3612,69.0107 C74.57,68.2712 74.7759,67.5317 74.9354,66.7806
                  C75.0166,66.3978 75.0659,66.0034 75.1326,65.6177
                  C75.2573,64.913 75.3762,64.2141 75.4545,63.5065
                  C75.5038,63.086 75.5212,62.651 75.556,62.2247 C75.5908,61.7433
                  75.6517,61.2677 75.6662,60.7863 C75.6517,60.795
                  75.6372,60.8008 75.6256,60.8124 C81.2516,56.1956
                  84.8418,49.1892 84.8418,41.3418 C84.8418,27.4334
                  73.5666,16.1553 59.6582,16.1553 C51.8108,16.1553
                  44.8044,19.7484 40.1847,25.3744 L40.1847,25.3744
                  L40.2166,25.3309 C39.7323,25.3483 39.2538,25.4092
                  38.7695,25.444 C38.3432,25.4759 37.914,25.4962 37.4935,25.5426
                  C36.783,25.6238 36.0783,25.7427 35.3736,25.8674
                  C34.9908,25.9341 34.6022,25.9834 34.2194,26.0646
                  C33.4625,26.2241 32.7114,26.4329 31.9632,26.6446
                  C31.6587,26.7316 31.3484,26.7954 31.0468,26.8911
                  C30.0173,27.213 29.0023,27.5813 28.0047,28.0018
                  C33.2131,15.6623 45.425,7 59.6582,7 Z"
                  id="Combined-Shape"
                  fill-opacity="0.6"
                  fill="{fill.celo}"
                ></path>
                <path
                  d="M38.66481,27.44065 C38.50531,27.68135 38.36611,27.93365
                  38.21531,28.18015 C37.90501,28.68475 37.60341,29.19225
                  37.33371,29.71425 C37.18001,30.00425 37.04371,30.30585
                  36.90451,30.60455 C36.66671,31.10625 36.44051,31.61085
                  36.23751,32.12705 C36.11281,32.44605 35.99681,32.76795
                  35.88371,33.09275 C35.70391,33.60605 35.54441,34.12515
                  35.40231,34.65005 C35.34431,34.84725 35.29791,35.04735
                  35.24571,35.24455 C37.20321,34.76025 39.23611,34.47315
                  41.34151,34.47315 C55.24991,34.47315 66.52511,45.74835
                  66.52511,59.65675 C66.52511,61.76215 66.23801,63.79505
                  65.75371,65.75255 C65.95381,65.70035 66.15391,65.65395
                  66.35111,65.59595 C66.87601,65.45095 67.38931,65.29435
                  67.89971,65.11745 C68.22741,65.00435 68.55511,64.88835
                  68.87411,64.76075 C69.39031,64.55775 69.89201,64.33445
                  70.39081,64.09955 C70.68951,63.95745 70.99401,63.82115
                  71.28691,63.66745 C71.80891,63.39195 72.31641,63.09325
                  72.81521,62.78585 C73.06171,62.63505 73.31691,62.49295
                  73.55761,62.33345 C74.26521,61.86365 74.95831,61.36195
                  75.61661,60.81965 C75.61951,60.81965 75.62241,60.81675
                  75.62531,60.81385 C75.63981,60.42525 75.68331,60.04825
                  75.68331,59.65675 C75.68331,40.69075 60.30751,25.31495
                  41.34151,25.31495 C40.95291,25.31495 40.57301,25.36135
                  40.18441,25.37295 C40.18441,25.37295 40.18441,25.37585
                  40.18441,25.37585 C39.63921,26.03705 39.13751,26.73015
                  38.66481,27.44065"
                  id="Fill-5"
                  fill="{fill.celo}"
                ></path>
                <path
                  d="M68.9817,74.36758 C68.2538,74.57058 67.5259,74.77648
                  66.7864,74.93018 C66.3949,75.01428 65.9947,75.06648
                  65.5974,75.13608 C64.9072,75.25788 64.2112,75.37678
                  63.5123,75.45218 C63.0831,75.50148 62.6452,75.52178
                  62.2102,75.55368 C61.7346,75.58848 61.2619,75.64938
                  60.7834,75.66388 C56.1666,81.26958 49.1718,84.83948
                  41.3418,84.83948 C27.4334,84.83948 16.1582,73.56718
                  16.1582,59.65878 C16.1582,51.81138 19.7484,44.80498
                  25.3744,40.18528 C25.3599,40.19398 25.3483,40.20268
                  25.3338,40.21428 C25.3512,39.74448 25.4092,39.27758
                  25.444,38.81068 C25.4759,38.36408 25.4962,37.91748
                  25.5455,37.47668 C25.6238,36.79228 25.7398,36.11368
                  25.8587,35.43508 C25.9283,35.02618 25.9834,34.61148
                  26.0675,34.20548 C26.2212,33.48338 26.4213,32.76998
                  26.6214,32.05948 C26.7171,31.72018 26.7896,31.37218
                  26.894,31.03578 C27.2159,30.00918 27.5842,28.99708
                  28.0018,28.00528 C15.6623,33.21078 7,45.42268 7,59.65878
                  C7,78.62478 22.3758,94.00058 41.3418,94.00058 C55.575,94.00058
                  67.7869,85.33538 72.9953,72.99588 C72.0006,73.41638
                  70.9856,73.78468 69.959,74.10658 C69.64,74.20518
                  69.3065,74.27768 68.9817,74.36758"
                  id="Fill-7"
                  fill="{fill.celo}"
                ></path>
                <path
                  d="M75.62618,60.81472 C75.61168,61.28742 75.58848,61.75722
                  75.55368,62.22412 C75.52178,62.65042 75.50148,63.08252
                  75.45508,63.50592 C75.37388,64.21932 75.25498,64.91822
                  75.13318,65.61712 C75.06648,66.00572 75.01428,66.39432
                  74.93598,66.78002 C74.77358,67.53692 74.57058,68.27352
                  74.36178,69.01012 C74.27188,69.32332 74.20808,69.64522
                  74.10658,69.95552 C73.78468,70.99082 73.41348,72.00582
                  72.99588,72.99472 C72.00698,73.41232 70.99198,73.78062
                  69.95958,74.10832 C69.63768,74.20982 69.30708,74.27652
                  68.98228,74.36642 C68.25728,74.57232 67.52938,74.77532
                  66.78698,74.93192 C66.39258,75.01602 65.99528,75.06822
                  65.59798,75.13492 C64.90778,75.25672 64.21758,75.37562
                  63.51288,75.45102 C63.08078,75.50032 62.64578,75.52352
                  62.21078,75.55542 C61.74968,75.58732 61.28278,75.60762
                  60.81298,75.62502 C61.35528,74.96382 61.86278,74.27072
                  62.33548,73.55732 C62.49498,73.31372 62.63418,73.06142
                  62.78498,72.81492 C63.09528,72.31322 63.39398,71.81152
                  63.66658,71.28662 C63.82028,70.99082 63.95658,70.69212
                  64.09868,70.39052 C64.33358,69.89172 64.55978,69.39002
                  64.76278,68.87092 C64.89038,68.55192 65.00348,68.22712
                  65.11658,67.90232 C65.29348,67.39192 65.45298,66.87572
                  65.59798,66.35372 C65.65018,66.15942 65.72848,65.97382
                  65.77778,65.77662 C65.97208,65.72732 66.15768,65.65192
                  66.35198,65.59682 C66.87688,65.45182 67.39308,65.29522
                  67.90058,65.11832 C68.22828,65.00522 68.55308,64.88922
                  68.87498,64.76162 C69.39118,64.55862 69.89288,64.33242
                  70.39168,64.09752 C70.69038,63.95832 70.99198,63.82202
                  71.28778,63.66832 C71.80978,63.39282 72.31438,63.09412
                  72.81608,62.78382 C73.06258,62.63592 73.31778,62.49672
                  73.55848,62.33432 C74.26898,61.86162 74.95918,61.35992
                  75.61748,60.82052 C75.62038,60.82052 75.62328,60.81762
                  75.62618,60.81472 Z M40.18441,25.37237 C39.64211,26.03357
                  39.14041,26.72667 38.66481,27.44007 C38.50531,27.68077
                  38.36611,27.93597 38.21531,28.18247 C37.90501,28.68417
                  37.60631,29.18877 37.33371,29.71367 C37.18001,30.00657
                  37.04371,30.30527 36.90451,30.60397 C36.66671,31.10277
                  36.44051,31.61027 36.23751,32.12647 C36.11281,32.44547
                  35.99681,32.77027 35.88371,33.09217 C35.70681,33.60547
                  35.54441,34.12457 35.40231,34.65237 C35.34721,34.84377
                  35.27181,35.02647 35.22541,35.22077 C35.02531,35.27007
                  34.83391,35.34837 34.63671,35.40347 C34.12051,35.54557
                  33.61301,35.70217 33.11131,35.87617 C32.77781,35.99217
                  32.44721,36.11107 32.11661,36.23867 C31.60911,36.44167
                  31.11321,36.66207 30.62311,36.89407 C30.31571,37.03907
                  30.00831,37.17827 29.70671,37.33487 C29.19051,37.60457
                  28.69461,37.90037 28.20161,38.20487 C27.94641,38.35857
                  27.68541,38.50067 27.43891,38.66597 C26.73421,39.13287
                  26.05271,39.62877 25.40311,40.16237 C25.39151,40.17107
                  25.38281,40.17687 25.37411,40.18557 C25.38861,39.72447
                  25.41181,39.26627 25.44371,38.81097 C25.47561,38.36727
                  25.49881,37.92067 25.54811,37.47697 C25.62351,36.78677
                  25.74241,36.11107 25.85841,35.43537 C25.92801,35.02357
                  25.98311,34.61177 26.06721,34.20577 C26.22381,33.47787
                  26.42101,32.77027 26.62111,32.05977 C26.71681,31.71757
                  26.78641,31.37247 26.89371,31.03607 C27.21851,30.00367
                  27.58681,28.99157 28.00441,28.00267 C28.99621,27.58507
                  30.01121,27.21387 31.04651,26.88907 C31.34811,26.79627
                  31.65841,26.73247 31.96581,26.64547 C32.70821,26.43377
                  33.45641,26.22497 34.21911,26.06547 C34.60191,25.98427
                  34.99051,25.93497 35.37331,25.86827 C36.07511,25.74357
                  36.77691,25.62467 37.49321,25.54347 C37.91661,25.49707
                  38.34581,25.47677 38.76921,25.44487 C39.23901,25.41007
                  39.71171,25.38977 40.18441,25.37237 L40.18441,25.37237 Z"
                  id="Combined-Shape"
                  fill-opacity="0.7"
                  fill="{fill.celo}"
                ></path>
              </g>
            </svg>
            <span>Celo</span>
          </div>
        </a>
      </li>
      <li id="flow">
        <a
          href="playground/flow"
          on:click="{() => (segment = 'flow')}"
          class:selected="{segment === 'flow'}"
        >
          <div class="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 100 100"
            >
              <g
                id="flow-sm"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <path
                  d="M32.5381536,33.0000627 C32.6235625,32.9787703
                  32.6887236,38.3838304 32.6952359,45.2215937
                  L32.6958548,46.7837343 C32.698946,54.7811014
                  32.7882096,59.9816777 32.9209407,60.3356274
                  C33.056042,60.7184145 33.3712785,60.9435833
                  33.8441331,61.0561678 C34.474606,61.1687522
                  34.5196397,61.2588198 34.4070553,61.8892926
                  C34.3395046,62.2720797 34.2269202,63.4879916
                  34.1368526,64.5913191 L34.1368526,64.5913191
                  L33.9792344,66.5728052 L32.5831874,66.4377039
                  C30.5566675,66.2350519 29.1381036,65.6721297
                  28.1698774,64.7039036 C26.7260673,63.2600934
                  26.6239797,63.2163416 26.6167614,50.8391917
                  L26.6169351,45.5084124 C26.6211118,39.0623894
                  26.6433877,34.1011239 26.6837628,34.0809363
                  C26.7062797,34.0809363 27.9897423,33.8332506
                  29.5434076,33.540531 C31.0970728,33.2478115
                  32.4255692,33.0000627 32.5381536,33.0000627 Z
                  M46.8814111,42.8850394 C52.8709032,41.9843639
                  58.522642,45.6771335 60.0537903,51.4639736
                  C60.5491619,53.2653246 60.4816112,56.4852396
                  59.9412059,58.2190399 C59.4683513,59.7952221
                  58.2299224,62.001877 57.2842132,62.9926201
                  C56.2934701,64.0509138 54.1993995,65.3343764
                  52.5781836,65.8747817 C50.4165624,66.617839
                  46.9489617,66.617839 44.8098574,65.8972986
                  C39.8561421,64.1860152 36.9064298,59.9078065
                  36.9288187,54.5037535 C36.9514636,52.0043789
                  37.5143858,50.0454097 38.7302977,48.1539911
                  C40.6442332,45.2267957 43.481361,43.380411
                  46.8814111,42.8850394 Z M22.5631724,35.0041287
                  L22.5631724,40.4081818 L11.2822117,40.4081818
                  L11.3497623,43.9433331 L11.417313,47.5010014
                  L16.4610958,47.5685521 L21.5048787,47.6135858
                  L21.3472604,49.3699031 C21.2797098,50.3156124
                  21.1446085,51.5315243 21.0770578,52.0494127
                  L21.0770578,52.0494127 L20.9419565,53.0176389
                  L11.3047285,53.0176389 L11.304509,59.7502781
                  C11.2995451,63.5362053 11.210801,65.8535515
                  11.0795597,65.8972986 C10.9669752,65.9198155
                  9.54841131,65.9423324 7.9271954,65.8972986
                  L7.9271954,65.8972986 L5,65.829748 L5,35.0041287
                  L22.5631724,35.0041287 Z M65.5404444,43.3356101
                  C67.1948102,43.3391691 68.4976232,43.3832256
                  68.4976232,43.4479616 C68.4976232,43.5155123
                  69.0380285,46.0374037 69.7135352,49.0321498
                  C70.3890418,52.0268958 71.0420315,55.2918445
                  71.1996497,56.2825876 C71.357268,57.2733306
                  71.5599199,58.1514893 71.6274706,58.2415568
                  C71.7175382,58.3541412 72.0102577,57.3859151
                  72.3029772,56.1024525 C72.7307981,54.1434833
                  74.1943958,48.6943964 75.3877908,44.5062553
                  L75.3877908,44.5062553 L75.7255442,43.3353772
                  L78.8688344,43.3356542 C80.3674657,43.3395177
                  81.5574181,43.3834814 81.5574181,43.4479616
                  C81.5574181,43.5155123 82.2554416,46.1274712
                  83.1110833,49.2348017 C83.9892419,52.3646491
                  84.8448837,55.7196654 85.0700525,56.6878916
                  C85.2727045,57.6561177 85.4753565,58.399175
                  85.5203903,58.3541412 C85.5654241,58.3091075
                  85.8581436,56.9580942 86.1508631,55.3593952
                  C86.781336,52.0719296 88.6952715,43.5605461
                  88.8303728,43.4254447 C88.8754066,43.3578941
                  90.2939705,43.3578941 91.9602202,43.380411
                  L91.9602202,43.380411 L95,43.4479616 L92.0277708,54.593821
                  L89.0780585,65.7396804 L85.9031774,65.8072311
                  L82.7282962,65.8747817 L82.3455091,64.5688022
                  C81.1971479,60.6508638 79.1030773,52.7474362
                  78.967976,51.8242438 C78.8779084,51.2388047
                  78.7428071,50.7659501 78.6527396,50.7659501
                  C78.5851889,50.7659501 78.3375031,51.5990749
                  78.0898174,52.6123349 C77.8646485,53.6481117
                  77.0990743,56.597824 76.3785339,59.209783
                  C75.6579935,61.8217419 74.95997,64.3661503
                  74.8023518,64.8840387 L74.8023518,64.8840387
                  L74.554666,65.8522648 L68.1598699,65.8522648
                  L65.2551914,54.8640237 C63.6564924,48.8294978
                  62.3054791,43.763198 62.2604453,43.6055798
                  C62.1703778,43.4029278 62.8684013,43.3353772
                  65.3227421,43.3353772 Z M49.9437078,48.176508
                  C48.4350763,47.7261703 47.8271203,47.7937209
                  46.3184889,48.581812 C42.7383037,50.4507137
                  42.0402802,56.5302733 45.0575432,59.5475363
                  C47.084063,61.5740562 49.7635727,61.6416068
                  51.9251939,59.7501883 C53.704028,58.1740061
                  54.4470853,55.2693276 53.7715787,52.5673011
                  C53.1861396,50.2930955 51.8576432,48.7619471
                  49.9437078,48.176508 Z"
                  id="Combined-Shape"
                  fill="{fill.flow}"
                  fill-rule="nonzero"
                ></path>
              </g>
            </svg>
            <span>Flow</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</nav>