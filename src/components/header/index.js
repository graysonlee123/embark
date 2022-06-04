import LiveTime from '/src/components/live-time'
import Search from '/src/components/search'
import styles from './index.module.css'

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <div>
        <p>
          <LiveTime />
        </p>
        <h1>Welcome to Embark</h1>
      </div>
      <div>
        <Search />
      </div>
    </div>
  )
}
