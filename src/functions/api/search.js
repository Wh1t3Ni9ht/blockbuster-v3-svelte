import { API_BASE_URL } from "$constants/bun-api";
import { notify } from "$functions/utils/index";

/**
 * Performs a search based on the given search term and search type.
 *
 * @param {string} searchTerm - The term to search for.
 * @param {string[]} searchType - The type of search to perform.
 * @param {number} [page=1] - The page number of the search results (default: 1).
 * @return {Promise} A Promise that resolves to the search results.
 */
async function search(searchTerm, searchType, page = 1) {
  try {
    const url = `${API_BASE_URL}/media/search/${searchType}/${searchTerm}/${page}`;

    const response = await fetch(url);

    if (response.status === 500) {
      console.log("🚀 ~ file: search.js:19 ~ search ~ response:", response);
      throw new Error(`Server Error`);
    }

    const json = await response.json();

    if (json.statusText === "error") {
      throw new Error(json.error.message);
    }

    return json.data.searchMedia;
  } catch (error) {
    console.log("🚀 ~ file: search.js:31 ~ search ~ error:", error);
    notify("error", error.message, 5000);
    return null;
  }
}

export default search;
