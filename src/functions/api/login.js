import { notify } from "$functions/utils";
import { API_BASE_URL } from "$constants/bun-api";
import {
	expiredVerificationToken,
	favoritesStore,
	isAuthenticated,
	loggedUser,
	watchListStore,
} from "$functions/stores";
import { navigate } from "svelte-navigator";

async function login(usernameOrEmail, password, verificationToken) {
	const url = `${API_BASE_URL}/user/login${
		verificationToken ? `/${verificationToken}` : ""
	}`;

	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "include",
		body: JSON.stringify({
			usernameOrEmail,
			password,
		}),
	});

	if (response.status === 500) {
		console.log("🚀 ~ file: login.js:22 ~ login ~ response:", response);

		notify("error", "Server error");
		return null;
	}

	const json = await response.json();

	if (json.statusText === "error") {
		console.log("🚀 ~ file: login.js:31 ~ login ~ response:", response);
		console.log("🚀 ~ file: login.js:32 ~ login ~ json:", json);
		notify("error", json.error.message);
		return null;
	}

	if (json.data.tokenExpired) {
		expiredVerificationToken.set(true);
		notify("error", json.data.message);
		return null;
	}

	if (json.data.missingToken) {
		expiredVerificationToken.set(true);
		notify("error", json.data.message);
		return null;
	}

	loggedUser.set(json.data.user);
	isAuthenticated.set(true);
	watchListStore.set(json.data.user.watchlist);
	favoritesStore.set(json.data.user.favorites);
	navigate("/");
}

export default login;
