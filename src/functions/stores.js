import { writable } from "svelte/store";

export const isAuthenticated = writable(false);
export const loggedUser = writable(null);

export const watchListStore = writable([]);
export const favoritesStore = writable([]);

export const loading = writable(false);

// loginPage
export const expiredVerificationToken = writable(false);
