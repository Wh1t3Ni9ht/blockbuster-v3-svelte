import getSession from "./get-session";

/**
 * Checks if a media item is in session for a given collection.
 *
 * @param {string} collectionName - The name of the collection.
 * @param {string} mediaId - The ID of the media item.
 * @throws {Error} If the collection name is missing or if the media ID is missing.
 * @return {boolean} True if the media item is in session, false otherwise.
 */
function isInSession(collectionName, mediaId) {
  if (!collectionName || typeof collectionName !== "string") {
    throw new Error("Collection name is missing");
  }

  if (!mediaId || typeof collectionName !== "string") {
    throw new Error("mediaId is missing");
  }

  const currentSession = getSession(collectionName);

  return currentSession !== null && currentSession.find((item) => item.mediaId === mediaId) !== undefined;
}

export default isInSession;
