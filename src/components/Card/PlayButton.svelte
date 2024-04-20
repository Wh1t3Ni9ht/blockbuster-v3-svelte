<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleButtonClick() {
    dispatch("click");
  }

  export let href = undefined;
</script>

{#if href}
  <a {href} class="play-button">
    <span>
      <slot />
    </span>
  </a>
{:else}
  <button class="play-button" on:click={handleButtonClick}>
    <span>
      <slot />
    </span>
  </button>
{/if}

<style>
  .play-button {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: var(--accent-color);
    padding: 1.5rem;
    border: none;
    border-radius: 9999px;
    transform: translate(-50%, -50%);
    cursor: pointer;
    transition: opacity 0.3s ease;
  }

  :global(#card:hover .play-button) {
    opacity: 1;
  }

  .play-button > span {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -40%);
  }
</style>
