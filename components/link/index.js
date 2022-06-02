import styles from './index.module.css'

export default function Link({ text, url, blank }) {
  return (
    <a href={url} target={blank ? '_blank' : '_self'}>
      {text}
    </a>
  )
}
