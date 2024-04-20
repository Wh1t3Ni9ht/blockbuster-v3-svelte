<script>
  import { Link } from "svelte-navigator";

  // app config
  import { menu } from "$constants/app";

  // icons
  import IoMdHome from "svelte-icons/io/IoMdHome.svelte";
  import IoIosFilm from "svelte-icons/io/IoIosFilm.svelte";
  import IoIosTv from "svelte-icons/io/IoIosTv.svelte";

  let ROUTES = {};

  menu.forEach((menu) => {
    ROUTES[menu.label.toUpperCase()] = menu.path;
  });
</script>

<div class="appbar appbar--hidden">
  <ul class="menu menu--full-width">
    <li class="menu__list">
      <Link class="menu__link" to={ROUTES.HOME}>
        <span class="menu__link-icon">
          <IoMdHome />
        </span>
      </Link>
    </li>

    <li class="menu__list">
      <Link class="menu__link" to={ROUTES.MOVIES}>
        <span class="menu__link-icon">
          <IoIosFilm />
        </span>
      </Link>
    </li>

    <li class="menu__list">
      <Link class="menu__link" to={ROUTES.SERIES}>
        <span class="menu__link-icon">
          <IoIosTv />
        </span>
      </Link>
    </li>
  </ul>
</div>

<style>
  .appbar {
    background-color: #001327;
    z-index: 10;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .menu {
    padding: 15px 0;
    border-top: 1px solid #73737358;
    list-style: none;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .menu--full-width {
    width: 100%;
  }

  .menu__list {
    text-transform: uppercase;
    font-size: 14px;
    transition: transform 0.2s ease-in-out;
  }

  .menu__list:hover {
    transform: translateY(-2px);
  }

  .menu__link-icon {
    display: inline-block;
    width: 36px;
  }

  @media (min-width: 768px) {
    .appbar--hidden {
      display: none;
    }
  }
</style>
