import { API_BASE_URL } from "$constants/bun-api";
import { notify } from "$functions/utils";

async function addToList(collectionName, mediaId, mediaType) {
  const url = `${API_BASE_URL}/collections/add/${collectionName}`;

  const response = await fetch(url, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Accept-Encoding": "gzip, deflate, br",
    },
    body: JSON.stringify({ mediaId, mediaType }),
  });

  if (response.status === 500) {
    console.log("🚀 ~ file: add-to-list.js:17 ~ addToList ~ response:", response);
    notify("error", response.statusText);
    return null;
  }

  const json = await response.json();

  if (json.statusText === "error") {
    console.log("🚀 ~ file: add-to-list.js:25 ~ addToList ~ response:", response);
    console.log("🚀 ~ file: add-to-list.js:26 ~ addToList ~ json:", json);
    notify("error", json.error.message);
    return null;
  }

  return json.data[collectionName];
}

export default addToList;
