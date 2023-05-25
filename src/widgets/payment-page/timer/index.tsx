import React from 'react'
import styles from './styles.module.scss'

export function Timer({ from }: {
  from: Date
}) {
  const [secondsLeft, setSecondsLeft] = React.useState(0)

  const hours = secondsLeft / 3600 % 3600 ^ 0
  const minutes = secondsLeft / 60 % 60 ^ 0
  const seconds = secondsLeft % 60

  React.useEffect(() => {
    setSecondsLeft((from.getTime() - Date.now())/1000 ^ 0)
  }, [from])

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if(secondsLeft <= 0) {
        setSecondsLeft(60 * 60 * 2)
      } else {
        setSecondsLeft(secondsLeft - 1)
      }
    }, 1000)
    return () => clearTimeout(timeout)
  }, [secondsLeft])

  return (
    <div className={styles.timer}>
      <div>
        <span>{('0'+hours).slice(-2)}</span>
        <span>часов</span>
      </div>
      <span>:</span>
      <div>
        <span>{('0' + minutes).slice(-2)}</span>
        <span>минут</span>
      </div>
      <span>:</span>
      <div>
        <span>{('0' + seconds).slice(-2)}</span>
        <span>секунд</span>
      </div>
    </div>
  )
}