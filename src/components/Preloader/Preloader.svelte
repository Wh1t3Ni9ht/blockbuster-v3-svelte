<script>
  // svelte transitions
  import { fade } from "svelte/transition";

  export let position = "fixed";
  export let spinnerMode = false;
</script>

<div class="preloader" style="position: {position};" out:fade>
  {#if spinnerMode}
    <div class="preloader__spinners">
      <span />
      <span />
    </div>
  {:else}
    <div class="preloader__logo">
      <img src="/logo.png" alt="" width="119" height="58" />
    </div>
    <div class="preloader__spinners">
      <span />
      <span />
    </div>
  {/if}
</div>

<style>
  .preloader {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #020d18;
    z-index: 9999;
  }

  .preloader__logo {
    margin: auto;
    margin-top: 100px;
    width: 110px;
  }

  .preloader__spinners {
    position: absolute;
    height: 70px;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .preloader__spinners span {
    position: absolute;
    border-radius: 999px;
    display: block;
    border: 5px solid transparent;
    border-top: 5px solid transparent;
  }

  .preloader__spinners span:nth-child(1) {
    width: 70px;
    height: 70px;

    border-color: #dcf836;
    border-top-color: transparent;

    left: calc(50% - 35px);
    animation: spin1 2s infinite linear;
  }

  .preloader__spinners span:nth-child(2) {
    width: 30px;
    height: 30px;

    border-color: #dd003f;
    border-top-color: transparent;

    top: calc(50% - 15px);
    left: calc(50% - 15px);

    animation: spin2 1s infinite linear;
  }

  @keyframes spin1 {
    0% {
      transform: rotate(360deg);
      opacity: 1;
    }
    50% {
      transform: rotate(180deg);
      opacity: 0.75;
    }
    100% {
      transform: rotate(0deg);
      opacity: 1;
    }
  }

  @keyframes spin2 {
    0% {
      transform: rotate(0deg);
      opacity: 0.75;
    }
    50% {
      transform: rotate(180deg);
      opacity: 1;
    }
    100% {
      transform: rotate(360deg);
      opacity: 0.75;
    }
  }
</style>
