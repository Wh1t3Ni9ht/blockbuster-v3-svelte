<script>
  // internal components
  import Overlay from "./Overlay.svelte";
  import Vote from "./Vote.svelte";
  import FavoriteButton from "./FavoriteButton.svelte";
  import WatchlistButton from "./WatchlistButton.svelte";
  import Image from "./Image.svelte";
  import PlayButton from "./PlayButton.svelte";
  import Title from "./Title.svelte";

  // TMDB API config
  import { IMAGE_BASE_URL, POSTER_SIZE } from "$constants/tmdb-api";

  // stores
  import { watchListStore, favoritesStore } from "$functions/stores";

  // functions
  import { modifyCollection } from "$functions/utils";

  // Icons
  import IoIosPlay from "svelte-icons/io/IoIosPlay.svelte";

  // props
  export let mediaId;
  export let mediaType;
  export let buttonHref;
  export let imageSrc;
  export let imageAlt;
  export let title;
  export let vote;

  let isInWatchlist;
  let isInFavorites;

  watchListStore.subscribe((collection) => {
    isInWatchlist = collection.some((item) => item.tmdbId === mediaId);
  });

  favoritesStore.subscribe((collection) => {
    isInFavorites = collection.some((item) => item.tmdbId === mediaId);
  });
</script>

<div id="card">
  <Overlay />

  <span class="vote">
    <Vote {vote} />
  </span>

  <span class="button watchlist">
    <WatchlistButton
      on:click={() => modifyCollection("watchList", { mediaId, mediaType }, isInWatchlist)}
      {isInWatchlist}
    />
  </span>

  <span class="button favorite">
    <FavoriteButton
      on:click={() => modifyCollection("favorites", { mediaId, mediaType }, isInFavorites)}
      {isInFavorites}
    />
  </span>

  <Image
    src={imageSrc ? `${IMAGE_BASE_URL}/${POSTER_SIZE}${imageSrc}` : null}
    imagePlaceholder="/poster-placeholder.webp"
    alt={imageAlt}
  />

  <PlayButton href={buttonHref}>
    <IoIosPlay />
  </PlayButton>

  <Title popup={title}>{title}</Title>
</div>

<style>
  #card {
    position: relative;
    border-radius: 0.375rem;
    overflow: hidden;
    max-width: 24rem;
    height: 100%;
    transition: all 0.3s ease;
  }

  #card:hover {
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    box-shadow:
      0 0 #0000,
      0 0 #0000,
      var(--tw-shadow);
  }

  /* absolute top-2 left-1 -translate-y-12 group-hover:translate-y-0 transition-transform duration-300 */
  #card .vote {
    position: absolute;
    top: 0.5rem;
    left: 0.25rem;
    transform: translateY(-135%);
    transition: transform 0.3s ease;
  }

  #card:hover .vote {
    transform: translateY(0);
  }

  #card .button {
    position: absolute;
    top: 0.5rem;
  }

  #card .button.watchlist {
    right: 1.75rem;
  }

  #card .button.favorite {
    right: 0.5rem;
  }
</style>
