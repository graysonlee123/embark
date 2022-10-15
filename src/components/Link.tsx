import { addStorageLink } from '@scripts/utils'

interface LinkProps {
  label: string
  url: string
  blank?: boolean
}

export function Link({ label, url, blank }: LinkProps) {
  const target = blank ? '_blank' : '_self'

  /**
   * Handle the click event.
   *
   * We want to intercept the click event to store the
   * recent bookmarks in local storage.
   *
   * @param e The click event.
   */
  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault()

    const target = e.ctrlKey || e.metaKey || blank ? '_blank' : '_self'

    addStorageLink({ label, url, blank })
    window.open(url, target)
  }

  return (
    <a onClick={handleClick} href={url} target={target}>
      {label}
    </a>
  )
}
