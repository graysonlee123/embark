import { FunctionComponent, ReactNode } from 'react'
import styles from './index.module.css'

interface GridProps {
  children: ReactNode
}

const Grid: FunctionComponent<GridProps> = ({ children }) => {
  return <div className={styles.grid}>{children}</div>
}

export { Grid }
