<script>
  import { Link } from "svelte-navigator";

  // TMDB api constants
  import { IMAGE_BASE_URL, PROFILE_SIZE, POSTER_SIZE_SEARCH } from "$constants/tmdb-api";

  export let searchResultsMenu;
  export let searchResults;
</script>

<ul class="form__search-results" bind:this={searchResultsMenu}>
  {#if searchResults}
    {#each searchResults.results as data}
      <li class="list-item">
        <Link to="/details/{data.media_type}/{data.id}" class="form__search-results_result">
          <img
            class="search__result-image"
            src={data.poster_path
              ? `${IMAGE_BASE_URL}/${POSTER_SIZE_SEARCH}${data.poster_path}`
              : data.profile_path
                ? `${IMAGE_BASE_URL}/${PROFILE_SIZE}${data.profile_path}`
                : "/poster-placeholder.webp"}
            alt=""
          />
          <div>
            <p class="search__result-text">
              {data.title || data.original_name}
            </p>
            <span class="search__result-text text-secondary">
              {data.release_date || data.first_air_date || ""}
              {data.media_type !== "person" ? "/ " : ""}
            </span>
            <span class="search__result-text text-secondary">{data.media_type}</span>
          </div>
        </Link>
      </li>
    {:else}
      <h1>Nothing was found</h1>
    {/each}
  {/if}
</ul>

<style>
  ul {
    list-style-type: none;
  }

  .form__search-results {
    position: absolute;
    left: 0;
    right: 0;
    background-color: #233a50;
    height: 400px;
    overflow-y: auto;
    border: 4px solid black;
    opacity: 0;
    pointer-events: none;
    transition: all 0.4s;
  }

  :global(.form__search-results_result) {
    display: flex;
    width: 100%;
  }

  .list-item {
    padding: 15px;
  }

  .list-item:nth-child(even) {
    background-color: #2d4255;
  }

  .search__result-image {
    margin-right: 20px;
    width: 60px;
  }

  .search__result-text {
    margin-bottom: 10px;
    color: #9cd1ff;
  }

  .search__result-text:nth-child(1) {
    font-size: 20px;
    font-weight: bold;
  }

  .text-secondary {
    font-size: 18px;
    color: #6aa1af;
    text-transform: capitalize;
  }
</style>
