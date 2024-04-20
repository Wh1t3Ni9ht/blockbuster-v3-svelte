<script>
  import { useLocation } from "svelte-navigator";

  // icons
  import IoIosSearch from "svelte-icons/io/IoIosSearch.svelte";
  import IoIosClose from "svelte-icons/io/IoIosClose.svelte";

  // functions
  import { search } from "$functions/api/index.js";

  import Select from "../../../src/ui/Select.svelte";
  import ResultsMenu from "./ResultsMenu.svelte";

  // svelte-navigator hooks
  const location = useLocation();

  let searchQuery;
  let searchResults;
  let searchResultsMenu;
  let searchType = ["multi"];

  // close results menu if input is cleared
  $: if (searchQuery === "") {
    closeSearchResultsMenu();
  }

  // Close search menu after navigating to a different page
  location.subscribe(() => {
    if (searchResultsMenu) {
      searchResults = undefined;
      closeSearchResultsMenu();
    }
  });

  /**
   * Show Search Results Menu
   */
  function showSearchResultsMenu() {
    searchResultsMenu.style.opacity = "1";
    searchResultsMenu.style.pointerEvents = "auto";
  }

  /**
   * Close Search Results Menu
   */
  function closeSearchResultsMenu() {
    searchResultsMenu.style.opacity = "0";
    searchResultsMenu.style.pointerEvents = "none";
    searchQuery = "";
    searchResults = undefined;
  }

  /**
   * Handle Select on:input event
   * @param {CustomEvent} e
   */
  async function selectInputHandler(e) {
    if (searchQuery) {
      searchResults = await search(searchQuery, e.detail.value);
      if (searchResults === null) return;
      showSearchResultsMenu();
    }
  }

  /**
   * Handle form on:submit event
   */
  async function formSubmitHandler() {
    searchResults = await search(searchQuery, searchType);
    if (searchResults === null) return;
    showSearchResultsMenu();
  }
</script>

<form class="search-form" on:submit|preventDefault={formSubmitHandler}>
  <Select bind:value={searchType} options={["multi", "movie", "tv", "person"]} on:input={selectInputHandler} />

  <input
    bind:value={searchQuery}
    type="text"
    class="form__input"
    placeholder="What are we looking for?"
    on:keyup={(e) => {
      if (e.code === "Escape") {
        closeSearchResultsMenu();
      }
    }}
  />

  {#if searchResults}
    <button class="form__btn form__clear-btn" type="button" on:click={closeSearchResultsMenu}>
      <IoIosClose />
    </button>
  {/if}
  <button class="form__btn form__search-btn" type="submit">
    <IoIosSearch />
  </button>

  <ResultsMenu bind:searchResultsMenu {searchResults} />
</form>

<style>
  .search-form {
    position: relative;
    width: 100%;
  }

  .form__input {
    width: 100%;
    padding: 15px;
    padding-right: 55px;
    padding-left: 120px;
    border: 4px solid black;
    border-radius: 5px;
    background-color: #233a50;
    font-size: 16px;
    color: var(--color-text);
  }

  .form__input::placeholder {
    color: var(--color-text);
  }

  .form__btn {
    width: 30px;
    background-color: transparent;
    border: none;
    color: var(--color-text);
    cursor: pointer;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    transition: color 0.1s ease-in-out;
  }

  .form__search-btn {
    right: 20px;
  }

  .form__clear-btn {
    right: 50px;
  }

  .form__search-btn:hover,
  .form__clear-btn:hover {
    color: #dcf836;
  }

  /* :global(.menu__collection-toggle) {
    display: flex;
    justify-content: center;
    padding: 0;

    width: 93px;
  } */

  @media (min-width: 580px) {
    :global(.logo) {
      width: 100px;
    }
  }

  @media (min-width: 1024px) {
    .form__input {
      font-size: 17px;
    }
  }
</style>
