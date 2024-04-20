<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  import MdFavorite from "svelte-icons/md/MdFavorite.svelte";
  import MdFavoriteBorder from "svelte-icons/md/MdFavoriteBorder.svelte";

  export let isInFavorites = false;

  function handleButtonClick() {
    dispatch("click");
  }
</script>

<button class="favorite-button" on:click={handleButtonClick}>
  {#if isInFavorites}
    <i class="red text-red-500">
      <MdFavorite />
    </i>
  {:else}
    <i>
      <MdFavoriteBorder />
    </i>
  {/if}
</button>

<style>
  .favorite-button {
    width: 1.25rem;
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    transform: translateY(-110%);
  }

  :global(#card:hover .favorite-button) {
    transform: translateY(0);
  }

  .favorite-button .red {
    color: var(--accent-color);
  }
</style>
