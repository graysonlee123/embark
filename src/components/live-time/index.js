import { useState, useEffect } from 'react'
import { format } from 'date-fns'

export default function LiveTime() {
  const [time, setTime] = useState(null)
  useEffect(() => {
    setTime(Date.now())
    const interval = setInterval(() => {
      setTime(Date.now())
    }, 1000)
    return () => clearInterval(interval)
  })

  if (time)
    return (
      <small>
        Today is {format(time, 'MMMM do, y')}. It's {format(time, 'h:mmaaa')}.
      </small>
    )
}
