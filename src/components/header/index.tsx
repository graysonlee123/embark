import { FunctionComponent } from 'react'
import { LiveTime } from '../live-time'
import { Search } from '../search'
import styles from './index.module.css'

const Header: FunctionComponent = () => {
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

export { Header }
