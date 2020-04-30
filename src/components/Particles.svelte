<script>
  import { onMount } from 'svelte';
  import { tsParticles } from 'tsparticles';

  onMount(async () => {
    tsParticles.load('particles-js', {
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 1200,
          },
        },
        color: {
          value: '#FF5C13',
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#FF5C13',
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.1,
          random: false,
          anim: {
            enable: false,
            speed: 0.4,
            opacity_min: 0.3,
            sync: false,
          },
        },
        size: {
          value: 4,
          random: true,
          anim: {
            enable: false,
            speed: 0.4,
            size_min: 0.1,
            sync: false,
          },
        },
        lineLinked: {
          enable: true,
          distance: 150,
          color: '#FF5C13',
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab',
          },
          onclick: {
            enable: true,
            mode: 'push',
          },
          onresize: {
            enable: true,
            density_auto: true,
            density_area: 400,
          },
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  });
</script>

<div id="particles-js" class="h-full"></div>
