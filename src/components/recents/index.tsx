import { useEffect, useState, FunctionComponent, ReactNode } from 'react'
import { LocalStorageEmbarkLink } from '../../../types'
import { formatDistance } from 'date-fns'
import { getRecentLinks } from '../../scripts/utils'
import { RECENTS_LS_KEY } from '../../scripts/constants'
import { Button } from '../button'
import styles from './index.module.css'

type UpdateFunction = (value: null) => void

interface WrapperProps {
  children: ReactNode
  button?: boolean
  update?: UpdateFunction
}

const Wrapper: FunctionComponent<WrapperProps> = ({
  children,
  button,
  update,
}) => {
  /**
   * Handles the clearing of recent links.
   */
  function handleClear() {
    localStorage.removeItem(RECENTS_LS_KEY)

    if (update !== undefined) {
      update(null)
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Recents</h2>
        {button && (
          <Button callback={handleClear}>
            <small>(clear)</small>
          </Button>
        )}
      </div>
      {children}
    </div>
  )
}

const Recents: FunctionComponent = () => {
  const [recents, setRecents] = useState<null | LocalStorageEmbarkLink[]>(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)

    const recentLinks: LocalStorageEmbarkLink[] = getRecentLinks()

    if (recentLinks !== null && recentLinks.length) {
      setRecents(recentLinks)
    }

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
        {recents.map(({ label, url, blank, timestamp }) => (
          <a
            className={styles.item}
            href={url}
            target={blank ? '_blank' : '_self'}
            key={url}
          >
            <span className={styles.title}>{label}</span>
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

export { Recents }
