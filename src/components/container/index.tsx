import { FunctionComponent, ReactNode } from 'react'
import styles from './index.module.css'

interface ContainerProps {
  children: ReactNode
}

const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export { Container }
