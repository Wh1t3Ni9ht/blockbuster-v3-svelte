import { API_BASE_URL } from "$constants/bun-api";
import { loading } from "$functions/stores";
import { notify } from "$functions/utils";

async function discover(mediaType, page = 1, filter = "") {
  loading.set(true);
  const url = `${API_BASE_URL}/media/discover/${mediaType}/${page}?${filter}`;

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "Accept-Encoding": "gzip, deflate, br",
    },
  });

  if (response.status === 500) {
    notify("error", "Server error");
    loading.set(false);

    return {
      page,
      results: [],
      total_pages: 0,
      total_results: 0,
    };
  }

  const json = await response.json();

  if (json.statusText === "error") {
    notify("error", json.error.message);
    loading.set(false);

    return {
      page,
      results: [],
      total_pages: 0,
      total_results: 0,
    };
  }

  loading.set(false);
  return json.data.discoverMedia;
}

export default discover;
