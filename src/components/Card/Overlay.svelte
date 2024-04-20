<div
  class="overlay absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
/>

<style>
  .overlay {
    background-image: linear-gradient(
      0deg,
      rgba(19, 21, 32, 0.5) 0%,
      rgba(0, 212, 255, 0) 40%,
      rgba(19, 21, 32, 0.5) 100%
    );

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  :global(#card:hover .overlay) {
    opacity: 1;
  }
</style>
