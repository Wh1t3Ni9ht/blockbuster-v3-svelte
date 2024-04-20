<script>
  import { useParams } from "svelte-navigator";

  // components
  import { Container, Hero } from "$components/index";

  // functions
  import { resendVerification, login } from "$functions/api";

  // stores
  import { expiredVerificationToken } from "$functions/stores";

  const params = useParams();

  let verificationToken;

  params.subscribe((params) => {
    verificationToken = params.verificationToken;
  });

  // bind values
  let usernameOrEmail;
  let password;
</script>

<Hero height="250px" />

<section>
  <Container>
    <form class="form" on:submit|preventDefault={() => login(usernameOrEmail, password, verificationToken)}>
      <label class="form__label" for="usernameOrEmail">username or email</label>
      <input
        bind:value={usernameOrEmail}
        type="text"
        id="usernameOrEmail"
        class="form__input"
        name="usernameOrEmail"
        placeholder="e.g. john doe"
      />
      <label class="form__label" for="password">password</label>
      <input
        bind:value={password}
        type="password"
        id="password"
        class="form__input"
        name="password"
        placeholder="Your password here..."
      />

      {#if $expiredVerificationToken}
        <button type="submit" class="form__submit">login</button>
        <button
          type="button"
          class="form__submit resend"
          on:click={() => resendVerification(usernameOrEmail, password)}
        >
          Resend email verification
        </button>
      {:else}
        <button type="submit" class="form__submit">login</button>
      {/if}
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

  .form__submit.resend {
    margin-top: 10px;
  }
</style>
