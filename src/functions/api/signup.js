import { API_BASE_URL } from "$constants/bun-api";
import { loading } from "$functions/stores";
import { notify } from "$functions/utils";

async function signup(username, email, password) {
  loading.set(true);
  const url = `${API_BASE_URL}/user/signup`;

  const response = await fetch(url, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  if (response.status === 500) {
    console.log("🚀 ~ file: signup.js:21 ~ signup ~ response:", response);

    notify("error", "Server error");
    loading.set(false);
    return null;
  }

  const json = await response.json();

  if (json.statusText === "error") {
    console.log("🚀 ~ file: signup.js:30 ~ signup ~ response:", response);
    console.log("🚀 ~ file: signup.js:31 ~ signup ~ json:", json);
    notify("error", json.error.message);
    loading.set(false);
    return null;
  }

  loading.set(false);
  notify("success", json.data.message, 8000);
  return json;
}

export default signup;
