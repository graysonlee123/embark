import { FunctionComponent } from 'react'
import { EmbarkLink } from '../../../types'
import { Link } from '../link'
import { Icon } from '../icon'
import styles from './index.module.css'

interface GroupProps {
  name: string
  items: EmbarkLink[]
  icon?: string
}

const Group: FunctionComponent<GroupProps> = ({ name, items, icon }) => {
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

export { Group }
