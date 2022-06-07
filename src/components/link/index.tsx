import { MouseEvent, FunctionComponent } from 'react'
import { EmbarkLink } from '../../../types'
import { updateLocalRecents } from '../../scripts/utils'

interface HTMLLinkElement extends HTMLElement {
  href: string
  target: string
}

const Link: FunctionComponent<EmbarkLink> = ({ label, url, blank }) => {
  /**
   * Handle the click event.
   * @param {object} e The click event.
   */
  function handleClick(e: MouseEvent<HTMLLinkElement>) {
    e.preventDefault()

    let newTab: boolean = false
    if (e.ctrlKey || e.metaKey || e.currentTarget.href === '_blank') {
      newTab = true
    }

    updateLocalRecents({ label, url, blank })
    window.open(e.currentTarget.href, newTab ? '_blank' : '_self')
  }

  return (
    <a onClick={handleClick} href={url} target={blank ? '_blank' : '_self'}>
      {label}
    </a>
  )
}

export { Link }
