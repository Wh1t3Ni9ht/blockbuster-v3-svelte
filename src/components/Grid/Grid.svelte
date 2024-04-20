<div class="grid">
  <slot />
</div>

<style>
  .grid {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(180px, auto));

    width: 100%;
  }

  @media (max-width: 451px) {
    .grid {
      grid-template-columns: repeat(auto-fill, minmax(120px, auto));
    }
  }
</style>
