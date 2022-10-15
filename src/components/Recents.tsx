import { useEffect, useState } from 'react'
import { Button } from '@components/Button'
import { RecentLink } from '@components/RecentLink'
import { getStorageLinks } from '@scripts/utils'
import { RECENTS_LS_KEY } from '@scripts/constants'
import styles from '@styles/Recents.module.css'

export function Recents() {
  const [recents, setRecents] = useState<EmbarkStorageLink[]>([])
  useEffect(() => {
    setRecents(getStorageLinks())
  }, [])

  const hasRecents = recents.length > 0

  /**
   * Handles the clearing of recent links.
   */
  function handleClear() {
    localStorage.removeItem(RECENTS_LS_KEY)

    setRecents([])
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Recents</h2>
        {hasRecents && (
          <Button callback={handleClear}>
            <small>(clear)</small>
          </Button>
        )}
      </div>
      {hasRecents ? (
        <div className={styles.grid}>
          {recents.map(({ label, url, blank, timestamp }) => (
            <RecentLink
              label={label}
              url={url}
              blank={blank}
              timestamp={timestamp}
              key={label}
            />
          ))}
        </div>
      ) : (
        <p>
          <small>No recent links were found.</small>
        </p>
      )}
    </div>
  )
}
