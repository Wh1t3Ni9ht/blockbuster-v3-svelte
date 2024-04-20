<script>
  export let customBackgroundImage = "/slider-bg.jpg";
  export let height = "auto";
  export let styles = "";
  export let overlay = false;
</script>

<div
  class={"hero"}
  style="
  background-image: url({customBackgroundImage});
  height: {height};
  {overlay ? 'opacity: 0.4;' : ''}
  {styles}
  "
>
  <slot />
</div>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .hero {
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
