import { FunctionComponent } from 'react'
import styles from './index.module.css'

interface IconProps {
  name?: string
}

const Icon: FunctionComponent<IconProps> = ({ name = 'link-outline' }) => {
  return (
    <span className={styles.icon}>
      <i
        dangerouslySetInnerHTML={{
          __html: `<ion-icon name="${name}"></ion-icon>`,
        }}
      />
    </span>
  )
}

export { Icon }
