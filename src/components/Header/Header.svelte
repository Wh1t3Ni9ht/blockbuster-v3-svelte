<script>
  // components
  import { Container } from "../index";
  import MobileNavigation from "./MobileNavigation.svelte";

  // internal components
  import Navigation from "./Navigation.svelte";
  import SearchForm from "./SearchForm.svelte";

  export let headerHeight;
</script>

<header bind:clientHeight={headerHeight}>
  <Container>
    <Navigation />
    <SearchForm />

    <MobileNavigation />
  </Container>
</header>

<style>
  header {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;
  }
</style>
