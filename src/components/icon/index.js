import styles from './index.module.css'

export default function Icon({ name = 'link-outline' }) {
  return (
    <span className={styles.icon}>
      <ion-icon name={name}></ion-icon>
    </span>
  )
}
