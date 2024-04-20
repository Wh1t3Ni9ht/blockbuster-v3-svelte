<script>
  import Select from "svelte-select";

  import { useLocation } from "svelte-navigator";

  // Props
  export let mediaType;

  // For Bindings
  export let selectedGenre;
  export let selectedYear;
  export let fromDate;
  export let untilDate;

  const location = useLocation();

  const movieGenres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

  const tvGenres = [
    {
      id: 10759,
      name: "Action & Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 10762,
      name: "Kids",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10763,
      name: "News",
    },
    {
      id: 10764,
      name: "Reality",
    },
    {
      id: 10765,
      name: "Sci-Fi & Fantasy",
    },
    {
      id: 10766,
      name: "Soap",
    },
    {
      id: 10767,
      name: "Talk",
    },
    {
      id: 10768,
      name: "War & Politics",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

  const years = generateYears();
  function generateYears() {
    const yearsArray = [];
    const currentYear = new Date().getFullYear();

    for (let year = 1990; year <= currentYear; year++) {
      yearsArray.push(year);
    }

    return yearsArray.reverse();
  }

  location.subscribe((location) => {
    if (location.search.replace("?", "") === "") {
      selectedGenre = null;
      selectedYear = null;
      fromDate = "";
      untilDate = "";
    }
    parseFilterParamString(location.search.replace("?", ""));
  });

  function parseFilterParamString(string) {
    const params = string.split("&");
    params.forEach((param) => {
      if (param.split("=")[0] === "with_genres") {
        selectedGenre = {
          id: Number(param.split("=")[1]),
        };
        console.log("🚀 ~ file: Filter.svelte:184 ~ params.forEach ~ selectedGenre:", selectedGenre);
      } else if (param.split("=")[0] === "first_air_date_year") {
        selectedYear = {
          index: years.indexOf(Number(param.split("=")[1])),
          value: Number(param.split("=")[1]),
          label: param.split("=")[1],
        };
      } else if (param.split("=")[0] === "primary_release_date.lte") {
        untilDate = param.split("=")[1];
      } else if (param.split("=")[0] === "primary_release_date.gte") {
        fromDate = param.split("=")[1];
      } else if (param.split("=")[0] === "air_date.lte") {
        untilDate = param.split("=")[1];
      } else if (param.split("=")[0] === "air_date.gte") {
        fromDate = param.split("=")[1];
      }
    });
  }
</script>

{#if mediaType === "movie"}
  <div style="display: inline-block; vertical-align: bottom;">
    <Select
      --width="200px"
      --background="#233a50"
      --list-background="#233a50"
      --item-hover-bg="#152c44"
      showChevron={true}
      required
      itemId="id"
      label="name"
      items={movieGenres}
      bind:value={selectedGenre}
    />
  </div>
{/if}

{#if mediaType === "tv"}
  <div style="display: inline-block; vertical-align: bottom;">
    <Select
      --width="200px"
      --background="#233a50"
      --list-background="#233a50"
      --item-hover-bg="#152c44"
      showChevron={true}
      required
      itemId="id"
      label="name"
      items={tvGenres}
      bind:value={selectedGenre}
    />
  </div>
{/if}

<div style="display: inline-block; vertical-align: bottom;">
  <Select
    --width="200px"
    --background="#233a50"
    --list-background="#233a50"
    --item-hover-bg="#152c44"
    showChevron={true}
    required
    items={years}
    bind:value={selectedYear}
  />
</div>

<div style="margin: 1rem 0;">
  <div style="display: inline-block;">
    <label for="from">From</label>
    <input type="date" id="from" bind:value={fromDate} />
  </div>

  <div style="display: inline-block;">
    <label for="until">Until</label>
    <input type="date" id="until" bind:value={untilDate} />
  </div>
</div>

<style>
  input {
    background-color: #233a50;
    color: white;
    border: none;
    padding: 0.75rem 1rem;
  }
</style>
