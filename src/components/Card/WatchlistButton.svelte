<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  import MdBookmark from "svelte-icons/md/MdBookmark.svelte";
  import MdBookmarkBorder from "svelte-icons/md/MdBookmarkBorder.svelte";

  export let isInWatchlist = false;

  function handleButtonClick() {
    dispatch("click");
  }
</script>

<button class="watchlist-button" on:click={handleButtonClick}>
  {#if isInWatchlist}
    <i class="blue">
      <MdBookmark />
    </i>
  {:else}
    <i>
      <MdBookmarkBorder />
    </i>
  {/if}
</button>

<style>
  .watchlist-button {
    width: 1.25rem;
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    transform: translateY(-110%);
  }

  :global(#card:hover .watchlist-button) {
    transform: translateY(0);
  }

  .watchlist-button .blue {
    color: blue;
  }
</style>
