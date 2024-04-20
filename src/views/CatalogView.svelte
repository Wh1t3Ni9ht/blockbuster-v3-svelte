<script>
  import { navigate, useLocation } from "svelte-navigator";

  const location = useLocation();

  import { Card, Filter, Grid, InfiniteScroll, Preloader } from "$components/index";
  import { discover } from "$functions/api";
  import { loading } from "$functions/stores";

  export let mediaType;
  let isLoading = false;

  loading.subscribe((value) => {
    isLoading = value;
  });

  let selectedGenre;
  let selectedYear;
  let fromDate;
  let untilDate;
  let filter = "";
  $: discoverMedia = discover(mediaType, 1, filter);

  location.subscribe((location) => {
    filter = location.search.replace("?", "");
  });

  async function loadMore() {
    discoverMedia = await discoverMedia;
    const newDiscoverMedia = await discover(mediaType, discoverMedia.page + 1, filter);

    discoverMedia = {
      ...discoverMedia,
      results: [...discoverMedia.results, ...newDiscoverMedia.results],
      page: newDiscoverMedia.page,
    };
  }

  function filterResult() {
    let filterString = "";
    if (selectedGenre) {
      filterString += `with_genres=${selectedGenre.id}`;
    }

    if (selectedYear && mediaType === "tv") {
      filterString += `&first_air_date_year=${selectedYear.value}`;
    }

    if (selectedYear && mediaType === "movie") {
      filterString += `&primary_release_year=${selectedYear.value}`;
    }

    if (fromDate && mediaType === "movie") {
      filterString += `&primary_release_date.gte=${fromDate}`;
    }

    if (untilDate && mediaType === "movie") {
      filterString += `&primary_release_date.lte=${untilDate}`;
    }

    if (fromDate && mediaType === "tv") {
      filterString += `&air_date.gte=${fromDate}`;
    }

    if (untilDate && mediaType === "tv") {
      filterString += `&air_date.lte=${untilDate}`;
    }

    navigate(`/catalog/${mediaType}?${filterString}`);
  }
</script>

{#await discoverMedia then data}
  <div style="margin: 1rem 0;">
    <Filter {mediaType} bind:selectedGenre bind:selectedYear bind:fromDate bind:untilDate />

    <button class="filter" on:click={filterResult}>Filter</button>
  </div>

  <InfiniteScroll onLoadMore={loadMore} hasMoreData={data && data.page < data.total_pages}>
    <div class="grid">
      <Grid>
        {#each data.results as item}
          <Card
            mediaId={item.id}
            mediaType={item.media_type}
            buttonHref={`/details/${item.media_type}/${item.id}`}
            imageSrc={item.poster_path}
            imageAlt={item.title ?? item.name}
            title={item.title ?? item.name}
            vote={item.vote_average}
          />
        {/each}
      </Grid>
    </div>
    <div slot="preloader" class="preloader">
      <Preloader position="static" spinnerMode={true} />
    </div>
  </InfiniteScroll>
{/await}

<style>
  .filter {
    cursor: pointer;
    display: inline-block;
    color: white;
    border: none;
    font-size: 14px;
    background-color: var(--accent-color);
    border-radius: 0.25rem;
    padding: 0.75rem 1rem;
    text-transform: uppercase;
    transition: color 0.1s ease-in-out;
  }

  .preloader {
    position: relative;
    height: 60px;
  }
</style>
