// API
import { removeFromList, addToList } from "$functions/api";

// stores
import { watchListStore, favoritesStore } from "$functions/stores";

// functions
import { notify } from "$functions/utils";

/**
 * Modifies a collection by either removing or adding an item.
 *
 * @param {string} collectionName - The name of the collection to modify.
 * @param {object} data - The data of the item to modify.
 * @param {boolean} isInList - Indicates whether the item is already in the collection.
 * @return {Promise} A Promise that resolves with the modified collection.
 */
async function modifyCollection(collectionName, data, isInList) {
  if (isInList) {
    const updatedCollection = await removeFromList(collectionName, data.mediaId);
    updateCollection(updatedCollection, collectionName, `Removed from ${collectionName}`, "info");
  } else {
    const updatedCollection = await addToList(collectionName, data.mediaId, data.mediaType);
    updateCollection(updatedCollection, collectionName, `Added to ${collectionName}`, "success");
  }
}

/**
 * Updates a collection in the specified store and sends a notification.
 *
 * @param {Object} updatedCollection - The updated collection to be set in the store.
 * @param {string} name - The name of the store to update.
 * @param {string} notifyMessage - The message to include in the notification.
 * @param {string} notifyType - The type of the notification.
 */
function updateCollection(updatedCollection, name, notifyMessage, notifyType) {
  const storeLookup = {
    watchList: watchListStore,
    favorites: favoritesStore,
  };

  const store = storeLookup[name];
  if (!store) {
    return;
  }

  store.set(updatedCollection);
  notify(notifyType, `${notifyMessage}!`);
}

export default modifyCollection;
