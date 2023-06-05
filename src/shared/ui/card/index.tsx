import styles from './styles.module.scss'
import cx from 'classnames'

export function Card({ className, children, ...props }: React.PropsWithChildren<{
  className?: string,
}> & React.HTMLAttributes<HTMLDivElement>) {

  return (
    <div className={cx(styles.card, className)} {...props} tabIndex={0}>
      {children}
    </div>
  )
}