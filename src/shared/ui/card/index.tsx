import styles from './styles.module.scss'
import cx from 'classnames'

export function Card({ className, children }: React.PropsWithChildren<{
  className?: string
}>) {
  return (
    <div className={cx(styles.card, className)}>
      {children}
    </div>
  )
}