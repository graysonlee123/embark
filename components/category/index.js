import Link from '/components/link'
import styles from './index.module.css'

export default function Category({ name, links, icon }) {
  return (
    <div>
      <p className={styles.name}>{name}</p>
      {links ? (
        <div className={styles.grid}>
          {links.map(({ text, url, blank }) => (
            <Link text={text} url={url} blank={blank} key={text} />
          ))}
        </div>
      ) : (
        <p>No links were found yet!</p>
      )}
    </div>
  )
}
