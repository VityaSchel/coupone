import styles from './styles.module.scss'
import cx from 'classnames'

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input className={cx(styles.input, className)} {...props} />
  )
}