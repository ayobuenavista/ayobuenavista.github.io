<script>
  import Sidebar from '@/components/Sidebar.svelte';
</script>

<style>
  .hover\:border-green-500:hover {
    border-color: #78a300;
  }
</style>

<svelte:head>
  <title>Anton Buenavista's Playground</title>
</svelte:head>

<section class="antialiased flex h-screen" id="playground">
  <div class="h-full w-full flex overflow-hidden text-gray-800">
    <Sidebar />
    <div class="flex-1 flex flex-col">
      <main class="flex-grow flex min-h-0 border-t">
        <!-- section update to tickets -->
        <section
          class="flex flex-col p-4 w-full max-w-sm flex-none bg-regal-white min-h-0 overflow-auto"
        >
          <h1 class="font-semibold mb-3">
            Select an article
          </h1>
          <ul>
            <li>
              <article
                tabindex="0"
                class="cursor-pointer border rounded-md p-3 bg-white flex text-gray-700 mb-2 hover:border-green-500 focus:outline-none focus:border-green-500"
              >
                <div class="block border bg-gray-200 h-8 w-8 rounded-md text-center align-middle">
                  <i class="fas fa-code text-base text-center align-middle text-gray-600" />
                </div>
                <div class="flex-1">
                  <header class="mb-1">
                    <span class="font-semibold">Ethernaut Solutions</span>
                  </header>
                  <p class="text-gray-600">
                    This article describes the different Ethernaut solutions...
                  </p>
                  <footer class="text-gray-500 mt-2 text-sm">
                    May 2, 2020
                  </footer>
                </div>
              </article>
            </li>
            <li>
              <article
                tabindex="0"
                class="cursor-pointer border rounded-md p-3 bg-white flex text-gray-700 mb-2 hover:border-green-500 focus:outline-none focus:border-green-500"
              >
                <div class="block border bg-gray-200 h-8 w-8 rounded-md text-center align-middle">
                  <i class="fas fa-code text-base text-center align-middle text-gray-600" />
                </div>
                <div class="flex-1">
                  <header class="mb-1">
                    <span class="font-semibold">Proxy contracts</span>
                  </header>
                  <p class="text-gray-600">
                    Blah blah
                  </p>
                  <footer class="text-gray-500 mt-2 text-sm">
                    April 25, 2020
                  </footer>
                </div>
              </article>
            </li>
          </ul>
        </section>

        <!-- section content -->
        <section
          aria-label="main content"
          class="p-10 border-l bg-white w-full"
        >
          Markdown content here...
        </section>
      </main>
    </div>
  </div>
</section>
    