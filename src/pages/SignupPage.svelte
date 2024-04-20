<script>
  // API
  import { signup } from "$functions/api";

  // stores
  import { loading } from "$functions/stores";

  // components
  import { Container, Hero } from "$components/index";

  // Icons
  import FaSpinner from "svelte-icons/fa/FaSpinner.svelte";

  let username;
  let email;
  let password;
  let isLoading = false;

  loading.subscribe((value) => {
    isLoading = value;
  });
</script>

<Hero height="250px" />

<section>
  <Container>
    <form class="form" on:submit|preventDefault={() => signup(username, email, password)}>
      <label class="form__label" for="username">username</label>
      <input
        bind:value={username}
        type="text"
        id="username"
        class="form__input"
        name="username"
        placeholder="john doe"
      />
      <label class="form__label" for="email">email</label>
      <input
        bind:value={email}
        type="email"
        id="email"
        class="form__input"
        name="email"
        placeholder="johndoe@email.com"
      />
      <label class="form__label" for="password">password</label>
      <input
        bind:value={password}
        type="password"
        id="password"
        class="form__input"
        name="password"
        placeholder="Choose a strong password"
      />

      <button type="submit" class="form__submit" class:animate={isLoading}>
        {#if isLoading}
          <FaSpinner />
        {:else}
          Sign up
        {/if}
      </button>
    </form>
  </Container>
</section>

<style>
  section {
    width: 100%;
    margin-top: 2rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .form__label {
    text-transform: capitalize;
    color: #bfcad5;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .form__input {
    margin-bottom: 40px;
    font-size: 17px;
    width: 100%;
    padding: 15px;
    border-radius: 5px;
    border: none;
    background-color: #233a50;
    color: #bfcad5;
  }

  .form__submit {
    padding: 12px;
    background-color: #dd003f;
    color: #fff;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    align-self: center;
  }

  :global(.form__submit.animate svg) {
    width: 24px;
    animation-name: spin;
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
