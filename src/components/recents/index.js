import { useEffect, useState } from 'react'
import { getRecentLinks } from '/src/scripts/utils'

export default function Recents() {
  const [recents, setRecents] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setRecents(getRecentLinks())
    setLoading(false)
  }, [])

  if (loading) return <p>Loading recents...</p>
  if (!recents) return <p>No recent links were found.</p>

  return recents.map(({ url, timestamp }) => (
    <span key={url}>
      {url} on {timestamp}
    </span>
  ))
}