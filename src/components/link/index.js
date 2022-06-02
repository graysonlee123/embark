import { updateLocalRecents } from '/src/scripts/utils'
import styles from './index.module.css'

function handleClick(e) {
  e.preventDefault()

  // window.open(e.currentTarget.href, e.currentTarget.target)

  updateLocalRecents(e.currentTarget.href)
}

export default function Link({ text, url, blank }) {
  return (
    <a onClick={handleClick} href={url} target={blank ? '_blank' : '_self'}>
      {text}
    </a>
  )
}
