<style>
  .blurb {
    @apply mt-8;
    @apply text-xl;
    @apply text-gray-600;
    @apply text-center;
  }

  .btn-playground {
    @apply bg-signature-500;
    @apply font-semibold;
    @apply py-3;
    @apply px-4;
    @apply rounded;
    @apply text-base;
    @apply text-regal-white;
  }

  .btn-playground:hover {
    @apply bg-red-700;
  }

  .btn-resume {
    @apply bg-gray-300;
    @apply font-semibold;
    @apply mx-4;
    @apply px-4;
    @apply py-3;
    @apply rounded;
    @apply text-base;
    @apply text-center;
    @apply text-gray-900;
    @apply w-32;
  }

  .btn-resume:hover {
    @apply bg-gray-400;
  }

  .horizontal-line {
    @apply mx-auto;
    @apply mt-3;
    @apply bg-red-500;
  }

  .intro-container {
    @apply mx-auto;
    @apply flex;
    @apply flex-wrap;
    @apply pt-16;
    @apply w-full;
  }

  .intro-text {
    @apply text-center;
    @apply px-8;
    @apply mt-0;
    @apply content-center;
    @apply h-full;
    @apply w-full;
  }

  .name {
    @apply font-semibold;
    @apply text-5xl;
    @apply text-signature-500;
    @apply leading-tight;
  }

  .tree-desktop {
    @apply mx-auto;
    @apply w-7/12;
    @apply hidden;
  }

  .tree-mobile {
    @apply block;
    @apply mx-auto;
    @apply mt-8;
    @apply w-9/12;
  }

  @screen lg {
    .blurb {
      @apply mt-10;
      @apply text-left;
      @apply text-lg;
    }

    .btn-playground {
      @apply text-xs;
    }

    .btn-resume {
      @apply text-xs;
    }

    .horizontal-line {
      @apply mx-0;
    }

    .intro-container {
      @apply flex-no-wrap;
      @apply h-screen;
      @apply pt-40;
    }

    .intro-text {
      @apply px-24;
      @apply mt-0;
      @apply text-left;
      @apply w-1/2;
    }

    .name {
      @apply text-4xl;
    }

    .tree-desktop {
      @apply block;
      @apply w-3/5;
    }

    .tree-mobile {
      @apply hidden;
      @apply w-3/5;
    }
  }
</style>

<section class="antialiased flex" id="intro">
  <div class="container intro-container">
    <div class="tree-desktop">
      <img alt="Merkle Tree" class="object-scale-down" src="merkle_tree.png" />
    </div>
    <div class="intro-text">
      <div class="content-center">
        <h2 class="text-4xl">Hi, I'm</h2>
        <h2 class="name">
          Anton Buenavista
          <span class="horizontal-line"></span>
        </h2>
        <div class="tree-mobile">
          <img
            alt="Merkle Tree"
            class="object-scale-down"
            src="merkle_tree.png"
          />
        </div>
        <p class="blurb">
          <span class="text-signature-300">I'm a</span>
          cryptonative in the cryptoverse
          <br />
          <span class="text-signature-300">I enjoy</span>
          trying out new things
          <br />
          <span class="text-signature-300">I like to</span>
          build stuff just for fun
          <br />
          <br />
          Welcome to my playground
        </p>
        <div class="justify-center my-12">
          <a class="btn-playground" href="playground">Visit my Playground</a>
          <a class="btn-resume" href="resume">Resume</a>
        </div>
      </div>
    </div>
  </div>
</section>
