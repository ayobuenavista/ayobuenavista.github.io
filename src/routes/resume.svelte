<script>
  import yaml from 'js-yaml';
  import { onMount } from 'svelte';
  import { DETAILS } from 'static/resume.yml';

  let Particles;
  let person = yaml.load(DETAILS);

  onMount(async () => {
    const module = await import('@/components/Particles.svelte');
    Particles = module.default;
  });
</script>

<style>
  a {
    width: fit-content;
  }

  .bullet {
    @apply relative;
    @apply text-signature;
    bottom: 4px;
    font-size: 0.3rem;
  }

  .company-logo {
    @apply mb-2;
    height: 100px;
  }

  .particles {
    @apply absolute;
    @apply bg-cover;
    @apply z-50;
    @apply w-full;
    height: 420%;
  }

  .left-col {
    @apply flex-col;
    @apply flex-grow;
    @apply bg-regal-white;
    @apply text-regal-black;
    @apply py-20;
  }

  .right-col {
    @apply flex-col;
    @apply flex-grow;
    @apply bg-white;
    @apply text-regal-black;
    @apply py-20;
  }

  .section-headline {
    @apply font-semibold;
    @apply my-3;
  }

  .section-text {
    @apply pl-3;
    width: 95%;
  }

  .section-title {
    @apply text-4xl;
    @apply text-signature;
  }

  .skills {
    @apply bg-white;
    @apply rounded-md;
    @apply p-2;
    @apply mb-2;
    width: 95%;
  }

  .technology {
    @apply bg-signature;
    @apply text-white;
    @apply p-2;
    @apply mx-1;
  }

  .timeline {
    @apply ml-0;
  }

  .timeline > ul {
    @apply list-none;
  }

  .timeline > ul,
  .timeline > ul > li {
    @apply block;
    @apply m-0;
    @apply p-0;
  }

  .timeline-contents {
    border-top: 2px solid #f5f5f5;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-left: 160px;
    width: 80%;
  }

  .timeline-element {
    @apply relative;
  }

  .timeline-element,
  .timeline-contents {
    @apply overflow-hidden;
  }

  .timeline-element:first-child .timeline-contents {
    @apply border-none;
    @apply pt-0;
  }

  .timeline-element:last-child .timeline-contents {
    @apply pb-0;
  }

  .timeline-date {
    @apply absolute;
    @apply top-0;
    @apply bottom-0;
    @apply left-0;
    @apply text-right;
    @apply text-regal-black;
    width: 130px;
    padding-top: 28px;
    padding-right: 15px;
    line-height: 30px;
    border-right: 2px solid #f5f5f5;
  }

  .timeline-date:after {
    @apply absolute;
    @apply block;
    @apply bg-signature;
    @apply rounded-full;
    @apply w-2;
    @apply h-2;
    content: ' ';
    top: 40.5px;
    right: -5.5px;
  }

  .timeline-element:first-child .timeline-date {
    @apply pt-0;
    line-height: 1.5;
    margin-top: 10px;
  }

  .timeline-timeperiod {
    @apply text-xs;
    @apply text-gray-500;
  }

  .timeline-element:first-child .timeline-date .timeline-timeperiod {
    @apply block;
    margin-top: -5px;
  }

  .timeline-element:first-child .timeline-date:after {
    @apply top-0;
  }
</style>

<svelte:head>
  <title>Anton Buenavista's Resume</title>
</svelte:head>

<section class="flex bg-white" id="resume">
  <div class="mx-auto h-auto w-full flex">
    <!-- Left Column -->
    <div class="left-col w-1/4">
      <div class="flex flex-col -mt-16">
        <div
          class="mx-auto rounded-full bg-white h-40 w-40 flex flex-shrink-0
          overflow-hidden shadow-inner"
        >
          <img
            alt="Hackergotchi"
            class="m-auto inset-0 z-negative w-32 h-32 align-middle"
            loading="lazy"
            src="hackergotchi.png"
          />
        </div>
        <h2
          class="mx-auto mb-1 text-4xl font-semibold md:text-3xl text-signature"
        >
          {person.name.first} {person.name.last}
        </h2>
        <h3 class="mx-auto mb-2 text-2xl md:text-xl text-signature">
          {person.position}
        </h3>
        <div class="ml-10">
          <div class="section-headline">PROFILE</div>
          <div class="flex items-center my-2">
            <i class="fa fa-map-marker text-2xl"></i>
            <span class="pl-5">{person.location}</span>
          </div>
          <div class="my-2">
            <a
              class="flex items-center"
              href="https://twitter.com/{person.contact.twitter}"
              target="_blank"
            >
              <i class="fa fa-twitter text-2xl"></i>
              <span class="pl-4">@{person.contact.twitter}</span>
            </a>
          </div>
          <div class="my-2">
            <a
              class="flex items-center"
              href="https://t.me/{person.contact.telegram}"
              target="_blank"
            >
              <i class="fa fa-telegram text-2xl"></i>
              <span class="pl-4">@{person.contact.telegram}</span>
            </a>
          </div>
          <div class="my-2">
            <a
              class="flex items-center"
              href="https://github.com/{person.contact.github}"
              target="_blank"
            >
              <i class="fa fa-github text-2xl"></i>
              <span class="pl-4">
                https://github.com/{person.contact.github}
              </span>
            </a>
          </div>
          <div class="my-2">
            <a
              class="flex items-center"
              href="person.contact.website"
              target="_blank"
            >
              <i class="fa fa-globe text-2xl"></i>
              <span class="pl-4">{person.contact.website}</span>
            </a>
          </div>
          <div class="flex items-center my-2">
            <i class="fa fa-key text-2xl"></i>
            <span class="pl-4 w-64">{person.contact.fingerprint}</span>
          </div>
          <div class="section-headline">SKILLS</div>
          {#each person.skills as { group }}
            <div class="flex">
              <div class="skills flex-col">{group}</div>
            </div>
          {/each}
          <div class="section-headline">PERSONAL PROJECTS</div>
          <div class="section-text">
            You can find a list of my personal projects at my
            <a class="italic" href="playground" target="_blank">playground</a>
            or at
            <a
              class="italic"
              href="https://github.com/{person.contact.github}"
              target="_blank"
            >
              GitHub
            </a>
            .
          </div>
        </div>
      </div>
    </div>
    <!-- Right Column -->
    <div class="right-col w-3/4">
      <div class="particles background">
        <svelte:component this={Particles} />
      </div>
      <div class="flex flex-col w-11/12 mx-auto">
        <div class="section-title mb-3">EXPERIENCE</div>
        <div class="timeline">
          <ul>
            {#each person.experience as { timeperiod, company, logo, position, location, description, tasks, projects, technologies }}
              <li class="timeline-element">
                <div class="timeline-date">
                  <time class="timeline-timeperiod">{timeperiod}</time>
                </div>
                <div class="timeline-contents">
                  <img
                    alt="{company} Logo"
                    class="company-logo"
                    align="left"
                    loading="lazy"
                    src="resume/{logo}"
                  />
                  <h3 class="clear-both text-2xl font-semibold">{company}</h3>
                  <h5 class="italic">{position} · {location}</h5>
                  <div class="clear-both mt-3 text-justify">{description}</div>
                  <div class="my-3">
                    <span class="text-signature">TASKS</span>
                    {#each tasks as { task }}
                      <div class="flex items-baseline pl-2">
                        <i class="fa fa-circle bullet"></i>
                        <span class="pl-3">{task}</span>
                      </div>
                    {/each}
                  </div>
                  <div class="my-3">
                    {#if projects}
                      <span class="text-signature">NOTABLE PROJECTS</span>
                      {#each projects as { project }}
                        <div class="flex items-baseline pl-2">
                          <i class="fa fa-circle bullet"></i>
                          <span class="pl-3">{project}</span>
                        </div>
                      {/each}
                    {/if}
                  </div>
                  <div class="my-3 text-sm">
                    <span class="text-signature block mb-2">TECHNOLOGIES</span>
                    {#each technologies as { technology }}
                      <div class="inline-block">
                        <div class="technology">{technology}</div>
                      </div>
                    {/each}
                  </div>
                </div>
              </li>
            {/each}
          </ul>
        </div>

        <div class="section-title my-3">EDUCATION</div>
        <div class="timeline">
          <ul>
            <li class="timeline-element">
              <div class="timeline-date">
                <time class="timeline-timeperiod">
                  {person.education.timeperiod}
                </time>
              </div>
              <div class="timeline-contents">
                <h3 class="text-2xl font-semibold">
                  {person.education.university}
                </h3>
                <h5 class="italic">
                  {person.education.degree} · {person.education.location}
                </h5>
                <div class="my-3">
                  <span class="text-signature">AWARDS</span>
                  {#each person.education.awards as { award }}
                    <div class="flex items-baseline pl-2">
                      <i class="fa fa-circle bullet"></i>
                      <span class="pl-3">{award}</span>
                    </div>
                  {/each}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
