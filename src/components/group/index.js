import Link from '/src/components/link'
import Icon from '/src/components/icon'
import styles from './index.module.css'

export default function Group({ name, items, icon }) {
  if (items)
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
        {items ? (
          <div className={styles.grid}>
            {items.map(({ name, url, blank }) => (
              <Link text={name} url={url} blank={blank} key={name} />
            ))}
          </div>
        ) : (
          <p>No items were found yet!</p>
        )}
      </div>
    )
}
