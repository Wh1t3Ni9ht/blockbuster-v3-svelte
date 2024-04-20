/**
 * Stores the given session data in sessionStorage under the given name.
 *
 * @param {string} name The name of the session to store.
 * @param {Object} value The session data to store.
 * @throws {Error} Throws an error if either name or value parameter is missing.
 */
function setSession(name, value) {
  if (!name || typeof name !== "string") {
    throw new Error("session name is missing");
  }

  if (!value) {
    throw new Error("session value is missing");
  }

  sessionStorage.setItem(name, JSON.stringify(value));
}

export default setSession;
