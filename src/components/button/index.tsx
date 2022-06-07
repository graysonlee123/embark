import { FunctionComponent, MouseEventHandler, ReactNode } from 'react'
import styles from './index.module.css'

interface ButtonProps {
  children?: ReactNode
  callback: MouseEventHandler
}

const Button: FunctionComponent<ButtonProps> = ({ children, callback }) => {
  return (
    <button className={styles.button} onClick={callback}>
      {children}
    </button>
  )
}

export { Button }
