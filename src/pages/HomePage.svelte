<script>
  // components
  import { Container, Hero, Preloader } from "$components/index";

  // views
  import { SliderView } from "$views/index";

  // functions
  import { discover } from "$functions/api";
  import { calculateDate } from "$functions/utils";

  const theatreFilter = `primary_release_date.gte=${calculateDate(
    15,
    "day",
    "past"
  )}&primary_release_date.lte=${calculateDate(-1, "day", "future")}`;

  const moviesFilter = `primary_release_date.gte=${calculateDate(
    1,
    "year",
    "past"
  )}&primary_release_date.lte=${calculateDate(30, "day", "past")}`;

  const upcomingMovieFilter = `primary_release_date.gte=${calculateDate(
    1,
    "day",
    "future"
  )}&primary_release_date.lte=${calculateDate(1, "month", "future")}`;

  const upcomingTVFilter = `first_air_date.gte=${calculateDate(
    1,
    "day",
    "future"
  )}&first_air_date.lte=${calculateDate(1, "month", "future")}`;

  const kidsFilter = `with_genres=10751`;
</script>

{#await discover("movie", 1, theatreFilter)}
  <Preloader />
{:then discoverMedia}
  <Hero styles="padding-top: 170px; padding-bottom: 30px;">
    <Container>
      <SliderView data={discoverMedia.results} title="in theaters" />
    </Container>
  </Hero>
{:catch error}
  <p>{error.message}</p>
{/await}

<Container>
  {#await discover("movie", 1, moviesFilter)}
    <Preloader />
  {:then discoverMedia}
    <SliderView data={discoverMedia.results} title="movies" href="/catalog/movie" text="View all" />
  {:catch error}
    <p>{error.message}</p>
  {/await}

  {#await discover("tv", 1, "")}
    <Preloader />
  {:then discoverMedia}
    <SliderView data={discoverMedia.results} title="series" href="/catalog/tv" text="View all" />
  {:catch error}
    <p>{error.message}</p>
  {/await}

  {#await discover("movie", 1, kidsFilter)}
    <Preloader />
  {:then discoverMedia}
    <SliderView data={discoverMedia.results} title="for the kids" href="/catalog/tv" text="View all" />
  {:catch error}
    <p>{error.message}</p>
  {/await}

  {#await discover("movie", 1, upcomingMovieFilter)}
    <Preloader />
  {:then discoverMedia}
    <SliderView data={discoverMedia.results} title="upcoming movies" />
  {:catch error}
    <p>{error.message}</p>
  {/await}

  {#await discover("tv", 1, upcomingTVFilter)}
    <Preloader />
  {:then discoverMedia}
    <SliderView data={discoverMedia.results} title="upcoming series" />
  {:catch error}
    <p>{error.message}</p>
  {/await}
</Container>
