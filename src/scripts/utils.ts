import { RECENTS_LS_KEY, RECENTS_COUNT } from '@scripts/constants'

/**
 * Checks for a missing recents list in local storage.
 */
export function initStorageLinks() {
  const storage = localStorage.getItem(RECENTS_LS_KEY)

  if (storage === null) {
    localStorage.setItem(RECENTS_LS_KEY, JSON.stringify([]))
  }
}

/**
 * Returns the links found from local storage.
 *
 * @returns The parsed storage, or an empty array if none are found.
 */
export function getStorageLinks() {
  const storage = localStorage.getItem(RECENTS_LS_KEY)
  return storage === null ? [] : (JSON.parse(storage) as EmbarkStorageLink[])
}

/**
 * Adds to the local storage recents list.
 *
 * @param link The new link to add.
 */
export function addStorageLink({ label, url, blank }: EmbarkLink) {
  const storage = getStorageLinks()

  if (storage.length === 0) {
    initStorageLinks()
  }

  /** Filter out the link if it's already in the storage. */
  const filter = storage.filter((link) => link.url !== url)

  /** Add to the beginning of the recents. */
  filter.unshift({
    label,
    url,
    blank,
    timestamp: Date.now(),
  })

  /** Check for length, and remove extras. */
  if (filter.length > RECENTS_COUNT) {
    filter.splice(RECENTS_COUNT)
  }

  localStorage.setItem(RECENTS_LS_KEY, JSON.stringify(filter))
}
