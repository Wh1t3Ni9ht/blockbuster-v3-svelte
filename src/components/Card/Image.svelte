<script>
  export let imagePlaceholder;
  export let src;
  export let alt = "image alt...";
</script>

<img src={src ?? imagePlaceholder} {alt} />

<style>
  img {
    width: 100%;
    height: 100%;
    border-radius: 0.375rem;
  }
</style>
