import styles from './styles.module.scss'
import cx from 'classnames'

export function Button({ className, variant = 'contained', children, ...props }: React.PropsWithChildren<{
  className?: string
  variant?: 'contained'
}> & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button 
      className={cx(styles.button, {
        [styles.contained]: variant === 'contained'
      }, className)} 
      {...props}
    >
      {children}
    </button>
  )
}