import { useState, useEffect } from 'react'
import { format } from 'date-fns'

export function Time() {
  const [time, setTime] = useState<number | null>(null)
  useEffect(() => {
    setTime(Date.now())

    const interval = setInterval(() => {
      setTime(Date.now())
    }, 1000)

    return () => clearInterval(interval)
  })

  return (
    <>
      {time && (
        <small>
          It's {format(time, 'h:mmaaa')} on {format(time, 'MMMM do, y')}
        </small>
      )}
    </>
  )
}
