import { FunctionComponent } from 'react'
import styles from './index.module.css'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': {
        name: string
      }
    }
  }
}

interface IconProps {
  name?: string
}

const Icon: FunctionComponent<IconProps> = ({ name = 'link-outline' }) => {
  return (
    <span className={styles.icon}>
      <ion-icon name={name}></ion-icon>
    </span>
  )
}

export { Icon }
