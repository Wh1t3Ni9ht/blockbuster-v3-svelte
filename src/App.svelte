<script>
  import { Router, Route } from "svelte-navigator";
  import { ToastContainer, FlatToast } from "svelte-toasts";

  // functions
  import { authenticate } from "$functions/api";
  authenticate();

  // components
  import { Header } from "$components/index.js";

  // pages
  import { CatalogPage, HomePage, LoginPage, SignupPage, MoviePage } from "$pages/index";

  export let headerHeight;
</script>

<Router>
  <Header bind:headerHeight />

  <main style="min-height: calc(100vh - {headerHeight}px)">
    <Route path="/">
      <HomePage />
    </Route>

    <Route path="/catalog/:mediaType">
      <CatalogPage />
    </Route>

    <Route path="/authentication/signup">
      <SignupPage />
    </Route>

    <Route path="/authentication/login/:verificationToken">
      <LoginPage />
    </Route>

    <Route path="/authentication/login/">
      <LoginPage />
    </Route>

    <!-- <Route path="/person/:mediaId">
      <Person />
    </Route> -->

    <!-- <Route path="/catalog/people">
      <People />
    </Route> -->

    <Route path="/details/movie/:mediaId">
      <MoviePage />
    </Route>

    <!-- <Route path="/details/tv/:mediaId">
      <TvDetails />
    </Route> -->

    <!-- <Route path="/collections">
      <Collections />
    </Route> -->

    <Route path="*">
      <h1>404</h1>
      <p>Page not found</p>
    </Route>
  </main>

  <ToastContainer placement="bottom-right" let:data>
    <FlatToast {data} />
  </ToastContainer>
</Router>
