<script>
  import { Link } from "svelte-navigator";

  // app config
  import { menu } from "$constants/app";

  // functions
  import { logout } from "$functions/api";

  // stores
  import { isAuthenticated } from "$functions/stores";
</script>

<nav>
  <Link to="/" class="logo">
    <img class="logo__image" src="/logo.webp" alt="website's logo" />
  </Link>

  <ul class="menu menu--hidden menu--shown">
    {#each menu as item}
      <li class="menu__list">
        <Link class="menu__link" to={item.path}>{item.label}</Link>
      </li>
    {/each}
  </ul>

  <ul class="menu">
    {#if $isAuthenticated}
      <li class="menu__list">
        <Link to="/collections" class="menu__link menu__collection-toggle">my lists</Link>
      </li>
      <!-- #TODO change form action to link -->
      <li class="menu__list">
        <button on:click={logout} class="menu__link menu__link-unique menu__link--danger">logout</button>
      </li>
    {:else}
      <li class="menu__list">
        <Link class="menu__link" to="/authentication/login">login</Link>
      </li>

      <li class="menu__list">
        <Link class="menu__link menu__link-unique menu__link--danger" to="/authentication/signup">signup</Link>
      </li>
    {/if}
  </ul>
</nav>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 30px 0;
  }

  ul {
    list-style-type: none;
  }

  :global(.menu__link) {
    color: var(--color-text);
    padding: 0 15px;
    transition: color 0.1s ease-in-out;
    text-transform: uppercase;
  }

  :global(.menu__link:hover:not(.menu__link--danger)) {
    color: #dcf836;
  }

  :global(.menu__link-unique) {
    border-radius: 5px;
    padding: 6px 10px;
    font-weight: bold;
    border: none;
    cursor: pointer;
  }

  :global(.menu__link--danger) {
    background-color: var(--accent-color);
    color: white;
  }

  :global(.logo) {
    display: inline-block;
    width: 85px;
    margin-right: 25px;
  }

  .logo__image {
    vertical-align: middle;
  }

  .menu {
    display: flex;
    align-items: center;
  }

  .menu--hidden {
    display: none;
  }

  .menu__list {
    font-size: 14px;
    transition: transform 0.2s ease-in-out;
  }

  .menu__list:hover {
    transform: translateY(-2px);
  }

  .menu__list {
    position: relative;
  }

  @media (min-width: 768px) {
    :global(.menu__link) {
      padding: 0 10px;
    }

    :global(.menu__link-unique) {
      padding: 8px 18px;
    }

    .menu--shown {
      display: flex;
    }
  }

  @media (min-width: 1024px) {
    .menu__list {
      font-size: 16px;
    }
  }
</style>
