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

  .blurb {
    @apply mb-5;
    @apply text-justify;
    @apply text-sm;
  }

  .bullet {
    @apply relative;
    @apply text-signature-500;
    bottom: 4px;
    font-size: 0.3rem;
  }

  .columns {
    @apply relative;
    @apply flex;
    @apply flex-wrap;
    @apply mx-auto;
    @apply h-auto;
    @apply w-full;
  }

  .company-logo {
    @apply mb-2;
    height: 100px;
  }

  .name {
    @apply mx-auto;
    @apply mb-1;
    @apply text-4xl;
    @apply font-semibold;
    @apply text-regal-white;
  }

  .particles {
    @apply absolute;
    @apply bg-cover;
    @apply top-0;
    @apply left-0;
    @apply z-0;
    @apply h-full;
    @apply w-full;
  }

  .position {
    @apply mx-auto;
    @apply mb-2;
    @apply text-2xl;
    @apply text-regal-white;
  }

  .profile-pic {
    @apply flex;
    @apply flex-shrink-0;
    @apply bg-white;
    @apply mx-auto;
    @apply overflow-hidden;
    @apply rounded-full;
    @apply shadow-inner;
    @apply h-40;
    @apply w-40;
  }

  .left-col {
    @apply flex-col;
    @apply flex-grow;
    @apply bg-signature-700;
    @apply text-regal-white;
    @apply pt-20;
    @apply pb-10;
  }

  .right-col {
    @apply relative;
    @apply flex-col;
    @apply flex-grow;
    @apply bg-white;
    @apply text-regal-gray;
    @apply pt-5;
    @apply pb-20;
    @apply h-auto;
  }

  .resume {
    @apply bg-regal-white;
    @apply font-semibold;
    @apply px-4;
    @apply py-3;
    @apply rounded;
    @apply text-center;
    @apply text-regal-gray;
    @apply text-xs;
    @apply w-32;
  }

  .resume:hover {
    @apply bg-gray-400;
  }

  .section-headline {
    @apply font-semibold;
    @apply my-5;
  }

  .section-text {
    @apply pl-3;
    width: 95%;
  }

  .section-title {
    @apply text-4xl;
    @apply text-signature-500;
  }

  .skills {
    @apply text-regal-white;
    @apply rounded-md;
    @apply p-2;
    @apply mb-2;
    background: rgba(50, 18, 4, 0.2);
    width: 95%;
  }

  .technology {
    @apply bg-signature-500;
    @apply text-white;
    @apply p-2;
    @apply m-1;
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
    @apply text-regal-gray;
    width: 130px;
    padding-top: 28px;
    padding-right: 15px;
    line-height: 30px;
    border-right: 2px solid #f5f5f5;
  }

  .timeline-date:after {
    @apply absolute;
    @apply block;
    @apply bg-signature-500;
    @apply rounded-full;
    @apply w-2;
    @apply h-2;
    content: ' ';
    top: 150px;
    right: -5.5px;
  }

  .timeline-element:first-child .timeline-date {
    @apply pt-0;
    line-height: 1.5;
    margin-top: 10px;
  }

  .timeline-timeperiod {
    @apply absolute;
    @apply text-xs;
    @apply text-gray-500;
    @apply text-right;
    @apply left-0;
    width: 112px;
    top: 138px;
  }

  .timeline-element:first-child .timeline-date .timeline-timeperiod {
    @apply block;
    margin-top: -5px;
    top: 107px;
  }

  .timeline-element:first-child .timeline-date:after {
    top: 108px;
  }

  .timeline-education {
    top: 0 !important;
  }

  .timeline-education:after {
    top: 0 !important;
  }

  @screen md {
    .blurb {
      @apply text-base;
    }

    .name {
      @apply text-3xl;
    }

    .position {
      @apply text-xl;
    }
  }

  @screen lg {
    .columns {
      @apply flex-no-wrap;
    }

    .left-col {
      @apply pb-20;
    }

    .right-col {
      @apply py-20;
      @apply h-full;
    }

    .timeline-contents {
      margin-left: 160px;
    }

    .timeline-date {
      width: 130px;
    }
  }
</style>

<svelte:head>
  <title>Anton Buenavista's Resume</title>
</svelte:head>

<section class="flex bg-white scrolling-auto" id="resume">
  <div class="columns">
    <!-- Left Column -->
    <div class="left-col w-full lg:w-1/4">
      <div class="flex flex-col -mt-16">
        <div
          class="profile-pic"
        >
          <img
            alt="Hackergotchi"
            class="m-auto inset-0 z-negative w-32 h-32 align-middle"
            src="hackergotchi.png"
          />
        </div>
        <h2
          class="name"
        >
          {person.name.first} {person.name.last}
        </h2>
        <h3 class="position">
          {person.position}
        </h3>
        <div class="ml-10">
          <div class="section-headline">PROFILE</div>
          <div class="flex items-center my-3">
            <i class="fa fa-map-marker text-2xl"></i>
            <span class="pl-5">{person.location}</span>
          </div>
          <div class="my-3">
            <a
              class="flex items-center"
              href="https://twitter.com/{person.contact.twitter}"
              target="_blank"
            >
              <i class="fa fa-twitter text-2xl"></i>
              <span class="pl-4">@{person.contact.twitter}</span>
            </a>
          </div>
          <div class="my-3">
            <a
              class="flex items-center"
              href="https://t.me/{person.contact.telegram}"
              target="_blank"
            >
              <i class="fa fa-telegram text-2xl"></i>
              <span class="pl-4">@{person.contact.telegram}</span>
            </a>
          </div>
          <div class="my-3">
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
          <div class="my-3">
            <a class="flex items-center" href="/">
              <i class="fa fa-globe text-2xl"></i>
              <span class="pl-4">{person.contact.website}</span>
            </a>
          </div>
          <div class="flex items-center my-3">
            <i class="fa fa-key text-2xl"></i>
            <span class="pl-4 w-56">{person.contact.fingerprint}</span>
          </div>
          <div class="section-headline">SKILLS</div>
          {#each person.skills as { group }}
            <div class="flex skills">
              <div class="flex-col">{group}</div>
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
        <div class="mx-auto mt-8">
          <a
            class="resume"
            href="resume/AntonBuenavista_resume.pdf"
          >
            Download a copy of my resume
          </a>
        </div>
      </div>
    </div>
    <!-- Right Column -->
    <div class="right-col w-full lg:w-3/4">
      <div class="particles">
        <svelte:component this="{Particles}" />
      </div>
      <div class="flex flex-col w-11/12 mx-auto z-10">
        <div class="section-title my-3">ABOUT</div>
        <div class="timeline">
          <div class="timeline-element">
            <div class="timeline-contents">
              <p class="blurb">
                {person.blurb.about}
              </p>
            </div>
          </div>
        </div>
        <div class="section-title mb-3">EXPERIENCE</div>
        <div class="timeline">
          <ul>
            {#each person.experience as { timeperiod, company, logo, position, location, description, tasks, projects, technologies }}
              <li class="timeline-element">
                <div class="timeline-date hidden lg:block">
                  <time class="timeline-timeperiod">{timeperiod}</time>
                </div>
                <div class="timeline-contents">
                  <img
                    alt="{company} Logo"
                    class="company-logo"
                    align="left"
                    src="resume/{logo}"
                  />
                  <h3 class="clear-both text-2xl font-semibold">{company}</h3>
                  <h3 class="text-gray-500 lg:hidden">{timeperiod}</h3>
                  <h5 class="italic">{position} · {location}</h5>
                  <div class="clear-both mt-3 text-justify">{description}</div>
                  <div class="my-3">
                    <span class="text-signature-500">TASKS</span>
                    {#each tasks as { task }}
                      <div class="flex items-baseline pl-2">
                        <i class="fa fa-circle bullet"></i>
                        <span class="pl-3">{task}</span>
                      </div>
                    {/each}
                  </div>
                  <div class="my-3">
                    {#if projects}
                      <span class="text-signature-500">NOTABLE PROJECTS</span>
                      {#each projects as { project }}
                        <div class="flex items-baseline pl-2">
                          <i class="fa fa-circle bullet"></i>
                          <span class="pl-3">{project}</span>
                        </div>
                      {/each}
                    {/if}
                  </div>
                  <div class="my-3 text-sm">
                    <span class="text-signature-500 block mb-2">
                      TECHNOLOGIES
                    </span>
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
              <div class="timeline-education timeline-date hidden lg:block">
                <time class="timeline-education timeline-timeperiod">
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
                <h5 class="text-gray-500 block lg:hidden">
                  {person.education.timeperiod}
                </h5>
                <div class="my-3">
                  <span class="text-signature-500">AWARDS</span>
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
