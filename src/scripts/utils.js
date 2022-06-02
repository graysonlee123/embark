import { RECENTS_LS_KEY } from './constants'

/**
 * Updates the local storage recents list and remove old links.
 * @param {URL} url The new link to add.
 */
function updateLocalRecents(url) {
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
  json.unshift({ timestamp: Date.now(), url })

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
  return localStorage.getItem(RECENTS_LS_KEY) === null
    ? null
    : JSON.parse(localStorage.getItem(RECENTS_LS_KEY))
}

export { updateLocalRecents, getRecentLinks }
