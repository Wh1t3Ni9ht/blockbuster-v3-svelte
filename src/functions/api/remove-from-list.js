import { API_BASE_URL } from "$constants/bun-api";
import { notify } from "$functions/utils";

/**
 * Removes a media item from a collection.
 *
 * @param {string} collectionName - The name of the collection.
 * @param {string} mediaId - The ID of the media item to remove.
 * @return {Promise} The data of the updated collection.
 */
async function removeFromList(collectionName, mediaId) {
  const url = `${API_BASE_URL}/collections/remove/${collectionName}`;

  const response = await fetch(url, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mediaId }),
  });

  if (response.status === 500) {
    console.log("🚀 ~ file: remove-from-list.js:23 ~ removeFromList ~ response:", response);

    notify("error", response.statusText);
    return null;
  }

  const json = await response.json();

  if (json.statusText === "error") {
    console.log("🚀 ~ file: remove-from-list.js:33 ~ removeFromList ~ response:", response);
    console.log("🚀 ~ file: remove-from-list.js:34 ~ removeFromList ~ json:", json);

    notify("error", json.error.message);
    return null;
  }

  return json.data[collectionName];
}

export default removeFromList;
