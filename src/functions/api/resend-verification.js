import { API_BASE_URL } from "$constants/bun-api";
import { notify } from "$functions/utils";

/**
 * Sends a request to resend the verification email for a user.
 *
 * @param {string} usernameOrEmail - The username or email of the user.
 * @param {string} password - The password of the user.
 * @return {Promise} A promise that resolves to the response object containing the result of the resend verification request.
 */
async function resendVerification(usernameOrEmail, password) {
  const url = `${API_BASE_URL}/user/resend-verification`;

  const response = await fetch(url, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      usernameOrEmail,
      password,
    }),
  });

  if (response.status === 500) {
    console.log("🚀 ~ file: resend-verification.js:27 ~ resendVerification ~ response:", response);

    notify("error", "Server error");
    return null;
  }

  const json = await response.json();

  if (json.statusText === "error") {
    console.log("🚀 ~ file: resend-verification.js:36 ~ resendVerification ~ response:", response);
    console.log("🚀 ~ file: resend-verification.js:37 ~ resendVerification ~ json:", json);

    notify("error", json.error.message);
    return null;
  }

  notify("success", json.data.message);
  return json;
}

export default resendVerification;
