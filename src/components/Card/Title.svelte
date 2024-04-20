<script>
  export let popup = "";
</script>

<p title={popup} class="title">
  <slot />
</p>

<style>
  .title {
    text-align: center;
    position: absolute;
    bottom: 0.75rem;
    left: 0;
    right: 0;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 91.666667%;
    margin: auto;
    overflow: hidden;
    transform: translateY(2.5rem);
    transition: transform 0.3s ease;
    color: white;
  }

  @media (min-width: 1024px) {
    .title {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  :global(#card:hover .title) {
    transform: translateY(0);
  }
</style>
