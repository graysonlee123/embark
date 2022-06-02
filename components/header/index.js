import styles from './index.module.css'

export default function Header({ title }) {
  return <h1 className={styles.title}>{title}</h1>
}
