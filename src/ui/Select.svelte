<script>
  import MultiSelect from "svelte-multiselect";
  import { createEventDispatcher } from "svelte";

  export let value;
  export let options = [];

  const dispatch = createEventDispatcher();

  function inputHandler() {
    dispatch("input", {
      value: value[0],
    });
  }
</script>

<div class="select">
  <MultiSelect
    on:change={inputHandler}
    bind:selected={value}
    {options}
    minSelect={1}
    maxSelect={1}
    inputmode="none"
  />
</div>

<!-- <div class="custom-select">
  <select bind:value on:input={inputHandler}>
    {#each options as option}
      <option selected={options.indexOf(option) === 0} value={option}>{option}</option>
    {/each}
  </select>
</div> -->

<style>
  .select {
    width: 100px;
    position: absolute;
    left: 3px;
    top: 5px;
    bottom: 5px;
    background-color: transparent;
    border-right: 1px solid black;
    color: white;
  }

  :global(div.multiselect) {
    --sms-border: none;
    min-width: 100%;
    height: 100%;
  }

  :global(div.multiselect > ul.selected > input) {
    display: none;
  }

  :global(div.multiselect > ul.options) {
    background-color: #233a50;
  }
  :global(div.multiselect > ul.options > li) {
    background-color: #233a50;
  }

  :global(div.multiselect > ul.options > li:hover) {
    background-color: #1e3244;
  }
</style>
