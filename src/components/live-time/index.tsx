import { FunctionComponent } from 'react'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'

const LiveTime: FunctionComponent = () => {
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

export { LiveTime }
