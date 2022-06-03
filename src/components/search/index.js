import styles from './index.module.css'

export default function Search() {
  return (
    <form
      className={styles.form}
      method="GET"
      action="https://google.com/search"
    >
      <label htmlFor="search">
        <small>Search Google</small>
      </label>
      <input id="search" type="text" name="q" />
    </form>
  )
}
