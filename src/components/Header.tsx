import { Time } from '@components/Time'
import { Search } from '@components/Search'
import styles from '@styles/Header.module.css'

export function Header() {
  return (
    <div className={styles.wrapper}>
      <div>
        <p>
          <Time />
        </p>
        <h1>Welcome to Embark</h1>
      </div>
      <div>
        <Search />
      </div>
    </div>
  )
}
