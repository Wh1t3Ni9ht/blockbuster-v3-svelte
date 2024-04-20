<div class="container">
  <slot />
</div>

<style>
  .container {
    position: relative;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
  }

  @media (min-width: 320px) {
    .container {
      width: 90%;
    }
  }

  @media (min-width: 768px) {
    .container {
      width: 85%;
    }
  }
  @media (min-width: 1024px) {
    .container {
      width: 90%;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 85%;
    }
  }
  @media (min-width: 1440px) {
    .container {
      width: 70%;
    }
  }
</style>
