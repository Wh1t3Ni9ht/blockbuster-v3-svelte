<script>
  import { Link } from "svelte-navigator";

  export let title;
  export let text = undefined;
  export let href = undefined;
</script>

<div>
  <h1>{title}</h1>
  {#if href && text}
    <Link class="slider-header-link" to={href}>{text}</Link>
  {/if}
</div>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  div {
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    margin: 30px 0;
    text-transform: uppercase;
  }

  :global(.slider-header-link) {
    background-color: #233a50;
    color: #fff;
    border: none;
    padding: 10px;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
    border-radius: 5px;
  }
</style>
