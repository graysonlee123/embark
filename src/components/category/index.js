import Link from '/src/components/link'
import styles from './index.module.css'

export default function Category({ name, items }) {
  if (items)
    return (
      <div>
        <h2 className={styles.name}>{name}</h2>
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
