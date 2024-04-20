<script>
  import { onMount } from "svelte";

  let observerElement;
  export let hasMoreData;
  export let onLoadMore;

  function initObserver() {
    let options = {
      rootMargin: "100px",
      threshold: 0.5,
    };

    let observer = new IntersectionObserver((entries) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          if (hasMoreData) {
            onLoadMore();
          }
        }
      });
    }, options);

    if (observerElement) {
      observer.observe(observerElement);
    }
  }

  onMount(() => {
    setTimeout(initObserver, 5000);
  });
</script>

<slot />

<div bind:this={observerElement} class="observer">
  {#if hasMoreData}
    <slot name="preloader"><h1>Loading</h1></slot>
  {/if}
</div>
