import styles from './styles.module.scss'
import cx from 'classnames'

export function Input({ className, variant = 'default', ...props }: React.PropsWithChildren<{
  variant?: 'default' | 'cornered'
}> & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input className={cx(styles.input, {
      [styles.default]: variant === 'default',
      [styles.cornered]: variant === 'cornered'
    }, className)} {...props} />
  )
}