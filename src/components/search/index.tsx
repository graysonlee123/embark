import { FunctionComponent } from 'react'
import { useEffect, useState } from 'react'
import styles from './index.module.css'

const Search: FunctionComponent = () => {
  const [input, setInput] = useState<string>('')
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => removeEventListener('keydown', handleKeyDown)
  })

  /**
   * Handles the keydown event for focusing the search form.
   * @param {KeyboardEvent} e The keydown event.
   */
  function handleKeyDown(e: KeyboardEvent): void {
    if (e.key === '/') {
      const search: null | HTMLElement = document.getElementById('search')

      if (search !== null) {
        search.focus()

        if (document.activeElement !== e.target) {
          e.preventDefault()
        }
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

export { Search }
