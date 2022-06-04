import { useEffect, useState } from 'react'
import styles from './index.module.css'

export default function Search() {
  const [input, setInput] = useState('')
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => removeEventListener('keydown', handleKeyDown)
  })

  const handleKeyDown = (e) => {
    if (e.key === '/') {
      document.getElementById('search').focus()

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
