<script>
  import { SplideSlide } from "@splidejs/svelte-splide";

  // components
  import { SliderHeader, Splide, Card } from "$components/index";

  export let data;
  export let title;
  export let text = undefined;
  export let href = undefined;
</script>

<SliderHeader {title} {text} {href} />

<Splide>
  {#each data as item}
    <SplideSlide>
      <Card
        mediaId={item.id}
        mediaType={item.media_type}
        buttonHref={`/details/${item.media_type}/${item.id}`}
        imageSrc={item.poster_path}
        imageAlt={item.title ?? item.name}
        title={item.title ?? item.name}
        vote={item.vote_average}
      />
    </SplideSlide>
  {/each}
</Splide>
