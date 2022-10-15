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
      const focus = document.activeElement
      const body = document.body

      /** If `null` or body is found for focus, go ahead and focus the input. */
      if (null === focus || body === focus) {
        e.preventDefault()
        search.focus()
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
          Search Google by typing <code>/</code>
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
