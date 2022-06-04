import { updateLocalRecents } from '/src/scripts/utils'

export default function Link({ text, url, blank }) {
  /**
   * Handle the click event.
   * @param {object} e The click event.
   */
  function handleClick(e) {
    e.preventDefault()
    updateLocalRecents({ text, url, blank })
    window.open(e.currentTarget.href, e.currentTarget.target)
  }

  return (
    <a onClick={handleClick} href={url} target={blank ? '_blank' : '_self'}>
      {text}
    </a>
  )
}
