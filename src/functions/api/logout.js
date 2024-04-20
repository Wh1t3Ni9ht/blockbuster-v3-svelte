import { API_BASE_URL } from "$constants/bun-api";
import { isAuthenticated, loggedUser, watchListStore, favoritesStore } from "$functions/stores";

// Helpers
import { notify } from "$functions/utils";
import { navigate } from "svelte-navigator";

async function logout() {
  const url = `${API_BASE_URL}/user/logout`;

  const response = await fetch(url, {
    credentials: "include",
  });

  const json = await response.json();

  if (json.status === "success") {
    notify("success", "Logged out!");
  }

  isAuthenticated.set(false);
  loggedUser.set(null);

  // empty stores
  watchListStore.set([]);
  favoritesStore.set([]);

  navigate("/");
}

export default logout;
