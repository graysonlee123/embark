import { useEffect, useState } from 'react'
import { formatDistance } from 'date-fns'
import { getRecentLinks } from '/src/scripts/utils'
import { RECENTS_LS_KEY } from '/src/scripts/constants'
import Button from '/src/components/button'
import styles from './index.module.css'

function Wrapper({ children, button, update }) {
  /**
   * Handles the clearing of recent links.
   * @param {HTMLClickEvent} e The click event.
   */
  function handleClear(e) {
    localStorage.clear(RECENTS_LS_KEY)
    update(null)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Recents</h2>
        {button && (
          <Button onClick={handleClear}>
            <small>(clear)</small>
          </Button>
        )}
      </div>
      {children}
    </div>
  )
}

export default function Recents() {
  const [recents, setRecents] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setRecents(getRecentLinks())
    setLoading(false)
  }, [])

  if (loading)
    return (
      <Wrapper>
        <p>Loading recents...</p>
      </Wrapper>
    )

  if (!recents)
    return (
      <Wrapper>
        <p>
          <small>No recent links were found.</small>
        </p>
      </Wrapper>
    )

  return (
    <Wrapper update={setRecents} button>
      <div className={styles.grid}>
        {recents.map(({ text, url, blank, timestamp }) => (
          <a
            className={styles.item}
            href={url}
            target={blank ? '_blank' : '_self'}
            key={url}
          >
            <span className={styles.title}>{text}</span>
            <small>
              {formatDistance(timestamp, Date.now(), {
                addSuffix: true,
              })}
            </small>
          </a>
        ))}
      </div>
    </Wrapper>
  )
}
