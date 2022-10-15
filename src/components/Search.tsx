import { useEffect, useState } from 'react'
import styles from '@styles/Search.module.css'

export function Search() {
  const [input, setInput] = useState<string>('')
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => removeEventListener('keydown', handleKeyDown)
  }, [])

  /**
   * Handles the keydown event for focusing the search form.
   *
   * @param e The keydown event.
   */
  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === '/') {
      const search = document.getElementById('search') as HTMLInputElement
      search.focus()

      /** If the user is focusing on a differnet element, prevent input. */
      if (document.activeElement !== e.target) {
        e.preventDefault()
      }
    }
  }

  return (
    <form
      className={styles.form}
      method="GET"
      action="https://google.com/search"
    >
      <label htmlFor="search">
        <small>
          Search by typing <code>/</code>
        </small>
      </label>
      <input
        id="search"
        type="text"
        name="q"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
    </form>
  )
}
