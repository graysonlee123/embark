/**
 * Check a variable to make sure it is an Embark link.
 *
 * @param obj The variable to test.
 * @returns The boolean result of the check.
 *
 * {@link https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates}
 */
export function isEmbarkLink(obj: unknown): obj is EmbarkLink {
  if (null === obj) return false

  const link = obj as EmbarkLink

  return (
    typeof link === 'object' &&
    typeof link.label === 'string' &&
    typeof link.url === 'string' &&
    (typeof link.blank === 'undefined' || typeof link.blank === 'boolean')
  )
}

/**
 * Tests to see if a value is an EmbarkGroup object.
 *
 * @param obj The variable to test.
 * @returns The boolean result of the check.
 */
export function isEmbarkGroup(obj: unknown): obj is EmbarkGroup {
  if (null === obj) return false

  const group = obj as EmbarkGroup

  return (
    typeof group.name === 'string' &&
    Array.isArray(group.items) &&
    group.items.every((value) => isEmbarkLink(value)) &&
    (typeof group.icon === 'undefined' || typeof group.icon === 'string')
  )
}

/**
 * Tests to see if a value is the EmbarkData object.
 *
 * @param obj The variable to test.
 * @returns The boolean result of the check.
 */
export function isEmbarkData(obj: unknown): obj is EmbarkData {
  if (null === obj) return false

  const data = obj as EmbarkData

  return (
    Array.isArray(data.groups) &&
    data.groups.every((value) => isEmbarkGroup(value))
  )
}
