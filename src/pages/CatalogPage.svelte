<script>
  import { Container, Hero } from "$components/index";
  import { validateValue } from "$functions/utils";
  import { CatalogView } from "$views/index";
  import { useParams, useLocation, useNavigate } from "svelte-navigator";

  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  let isValidMediaTypeValue;
  let mediaType;

  params.subscribe(async (params) => {
    mediaType = params.mediaType;
    isValidMediaTypeValue = validateValue(mediaType, ["movie", "tv", "people"]);
    if (!isValidMediaTypeValue) {
      navigate("/404");
    }
  });
</script>

<Hero height="250px" customBackgroundImage="/catalog-bg.jpg" />

<Container>
  {#if mediaType === "movie"}
    <CatalogView {mediaType} />
  {:else if mediaType === "tv"}
    <CatalogView {mediaType} />
  {:else if mediaType === "people"}
    <CatalogView {mediaType} />
  {/if}
</Container>
