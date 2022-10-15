import { formatDistance } from 'date-fns'
import styles from '@styles/RecentLink.module.css'

export function RecentLink({
  label,
  url,
  blank,
  timestamp,
}: EmbarkStorageLink) {
  return (
    <a
      className={styles.anchor}
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
  )
}
