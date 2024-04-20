<script>
  import { Splide } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";
</script>

<Splide
  options={{
    pagination: false,
    perMove: 1,
    gap: 10,
    mediaQuery: "min",
    flickPower: 400,
    breakpoints: {
      320: {
        perPage: 2,
      },
      520: {
        perPage: 3,
      },
      768: {
        perPage: 4,
      },
      968: {
        perPage: 5,
      },
    },
  }}
  aria-label="media slider"
>
  <slot />
</Splide>
