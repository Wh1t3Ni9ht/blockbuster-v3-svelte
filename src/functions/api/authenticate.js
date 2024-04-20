import { API_BASE_URL } from "$constants/bun-api";
import { notify } from "$functions/utils";
import { favoritesStore, isAuthenticated, watchListStore } from "$functions/stores";

async function authenticate() {
  const url = `${API_BASE_URL}/user/authenticate`;

  const response = await fetch(url, {
    credentials: "include",
    headers: { "Accept-Encoding": "gzip, deflate, br" },
  });

  if (response.status === 401) {
    notify("warning", "You are not logged in");
    isAuthenticated.set(false);
    return false;
  }

  if (response.status === 500) {
    notify("error", "Server error");
    isAuthenticated.set(false);
    return false;
  }

  const json = await response.json();

  if (json.statusText === "error") {
    notify("error", json.error.message);
    isAuthenticated.set(false);
    return false;
  }

  if (json.data.invalidCookie) {
    isAuthenticated.set(false);
    return false;
  }

  isAuthenticated.set(true);
  watchListStore.set(json.data.watchlist);
  favoritesStore.set(json.data.favorites);
  return json.data.authenticated;
}

export default authenticate;
