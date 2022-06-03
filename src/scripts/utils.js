import { RECENTS_LS_KEY } from './constants'

/**
 * Updates the local storage recents list and remove old links.
 * @param {Object} data The new link to add.
 */
function updateLocalRecents({ text, url, blank }) {
  buildLocalStorage()

  const json = JSON.parse(localStorage.getItem(RECENTS_LS_KEY))
  const existingIndex = json.findIndex((object) => object.url === url)

  /**
   * Check for a duplicate, and remove it.
   */
  existingIndex > -1 && json.splice(existingIndex, 1)

  /**
   * Add the new data to the beginning of the recents.
   */
  json.unshift({ timestamp: Date.now(), text, url, blank })

  /**
   * Check for length, and remove extras.
   */
  if (json.length > 6) {
    json.splice(6)
  }

  /**
   * Save the new stringified version.
   */
  localStorage.setItem(RECENTS_LS_KEY, JSON.stringify(json))
}

/**
 * Builds the initial local storage.
 */
function buildLocalStorage() {
  if (localStorage.getItem(RECENTS_LS_KEY) === null) {
    const json = []

    localStorage.setItem(RECENTS_LS_KEY, JSON.stringify(json))
  }
}

/**
 * Gets the recent links.
 * @return {Array|null}
 */
function getRecentLinks() {
  const data = localStorage.getItem(RECENTS_LS_KEY)
  return data === null ? null : JSON.parse(data)
}

export { updateLocalRecents, getRecentLinks }
