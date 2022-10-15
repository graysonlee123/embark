import { Link } from '@components/Link'
import { Icon } from '@components/Icon'
import styles from '@styles/Group.module.css'

interface GroupProps {
  name: string
  items: EmbarkLink[]
  icon?: string
}

export function Group({ name, items, icon }: GroupProps) {
  return (
    <div>
      <div className={styles.flex}>
        <div className={styles.icon}>
          <Icon name={icon} />
        </div>
        <div>
          <h2>{name}</h2>
          <small>
            {items.length} item{items.length > 1 ? 's' : null}
          </small>
        </div>
      </div>
      <div className={styles.grid}>
        {items.map(({ label, url, blank }: EmbarkLink) => (
          <Link label={label} url={url} blank={blank} key={label} />
        ))}
      </div>
    </div>
  )
}
