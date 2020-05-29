<script>
  import yaml from 'js-yaml';
  import { DETAILS } from '@/conf/resume.yml';

  let person = yaml.load(DETAILS);
</script>

<style>
  .aboutme-container {
    @apply flex;
    @apply flex-col;
    @apply mx-auto;
    @apply mt-20;
  }

  .aboutme-header {
    @apply content-center;
    @apply text-center;
    @apply w-full;
  }

  .aboutme-header > h2 {
    @apply font-semibold;
    @apply text-5xl;
    @apply text-regal-gray;
  }

  .aboutme-header > div {
    @apply relative;
    @apply mx-auto;
    @apply mt-5;
    @apply overflow-hidden;
    @apply shadow-inner;
    @apply h-40;
    @apply w-40;
  }

  .blurb {
    @apply content-center;
    @apply mt-10;
    @apply px-10;
    @apply w-full;
  }

  .blurb > p {
    @apply text-gray-600;
    @apply text-justify;
    @apply text-sm;
  }

  .skill {
    @apply my-2;
    @apply text-center;
    @apply text-regal-white;
    @apply w-1/3;
  }

  .skills {
    @apply flex;
    @apply flex-wrap;
    @apply mx-auto;
    @apply mt-5;
    @apply mb-5;
  }

  @screen md {
    .aboutme-header > h2 {
      @apply text-4xl;
    }

    .blurb > p {
      @apply text-base;
    }
  }

  @screen lg {
    .aboutme-container {
      @apply flex-row;
    }

    .aboutme-header {
      @apply w-1/4;
    }

    .blurb {
      @apply mt-20;
      @apply px-0;
      @apply pr-40;
      @apply w-3/4;
    }

    .skill {
      @apply w-1/6;
    }
  }
</style>

<section class="antialiased flex" id="about">
  <div class="bg-white h-auto w-full">
    <div class="aboutme-container">
      <div class="aboutme-header">
        <h2>
          About Me
          <span class="horizontal-line mt-3 bg-regal-gray mx-auto"></span>
        </h2>
        <div>
          <img
            alt="Hackergotchi"
            class="absolute inset-0 z-negative w-full h-full"
            src="hackergotchi.png"
          />
        </div>
      </div>
      <div class="blurb">
        <p>
          {person.blurb.about}
          <br />
          <br />
          <br />
          My skills also include:
        </p>
        <div class="skills">
          {#each person.blurb.skills as skill}
            <span
              class="skill"
              aria-label="{skill.skill}"
              data-balloon-pos="down-left"
            >
              <i class="{skill.icon} colored text-6xl"></i>
            </span>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
