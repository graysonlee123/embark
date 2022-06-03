import { format } from 'date-fns'
import { useState } from 'react'
import Search from '/src/components/search'
import styles from './index.module.css'

export default function Header() {
  const [time, setTime] = useState(Date.now())

  setInterval(function () {
    setTime(Date.now())
  }, 1000)

  return (
    <div className={styles.wrapper}>
      <div>
        <p>
          <small>Today is {format(time, 'MMMM do, y')}</small>
        </p>
        <h1>Welcome to Embark</h1>
      </div>
      <div>
        <Search />
      </div>
    </div>
  )
}
