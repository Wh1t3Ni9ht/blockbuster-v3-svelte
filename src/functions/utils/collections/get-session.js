/**
 * Retrieves the session data associated with the specified session name.
 *
 * @param {string} sessionName - The name of the session to retrieve.
 * @return {object|null} The session data if it exists, otherwise null.
 */
function getSession(sessionName) {
  if (!sessionName || typeof sessionName !== "string") {
    throw Error("session name is missing");
  }

  const currentSession = sessionStorage.getItem(sessionName);

  return currentSession ? JSON.parse(currentSession) : null;
}

export default getSession;
