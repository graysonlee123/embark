import { RECENTS_LS_KEY, RECENTS_COUNT } from './constants'
import { EmbarkLink, LocalStorageEmbarkLink } from '../../types'

/**
 * Adds to and updates the local storage recents list.
 * @param {EmbarkLink} link The new link to add.
 */
function updateLocalRecents({ label, url, blank }: EmbarkLink): void {
  buildLocalStorage()

  const storage: string | null = localStorage.getItem(RECENTS_LS_KEY)

  if (storage !== null) {
    const json: LocalStorageEmbarkLink[] = JSON.parse(storage)
    const existingIndex: number = json.findIndex(
      (link: LocalStorageEmbarkLink): boolean => {
        return link.url === url
      }
    )

    /**
     * Check for a duplicate, and remove it.
     */
    existingIndex > -1 && json.splice(existingIndex, 1)

    /**
     * Add the new data to the beginning of the recents.
     */
    const newLink: LocalStorageEmbarkLink = {
      timestamp: Date.now(),
      label,
      url,
      blank,
    }
    json.unshift(newLink)

    /**
     * Check for length, and remove extras.
     */
    if (json.length > RECENTS_COUNT) {
      json.splice(RECENTS_COUNT)
    }

    localStorage.setItem(RECENTS_LS_KEY, JSON.stringify(json))
  }
}

/**
 * Checks for a missing recents list in local storage.
 */
function buildLocalStorage(): void {
  const checkLocalStorage = localStorage.getItem(RECENTS_LS_KEY)

  if (checkLocalStorage === null) {
    const json: string[] = []
    localStorage.setItem(RECENTS_LS_KEY, JSON.stringify(json))
  }
}

/**
 * Returns the links as an object, or null if nothing is found.
 * @returns {[] | LocalStorageEmbarkLink[]}
 */
function getRecentLinks(): LocalStorageEmbarkLink[] {
  const data: string | null = localStorage.getItem(RECENTS_LS_KEY)

  return data === null ? [] : JSON.parse(data)
}

export { updateLocalRecents, getRecentLinks }
