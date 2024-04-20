<script>
  import IoIosStar from "svelte-icons/io/IoIosStar.svelte";

  export let vote = 0;
</script>

<div class="vote">
  <span>
    <i>
      <IoIosStar />
    </i>
    <p>{vote.toFixed(1)}</p>
  </span>
</div>

<style>
  .vote {
    color: white;
    font-weight: bold;
    background-color: rgb(3 7 18 / 0.5);
    padding-top: 0.125rem;
    padding-bottom: 0.125rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 0.25rem;
  }

  .vote > span {
    display: flex;
    gap: 0.25rem;
  }

  .vote > span > i {
    color: rgb(253 224 71);
    width: 1rem;
  }

  .vote > span > p {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
</style>
