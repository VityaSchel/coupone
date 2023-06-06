import styles from './styles.module.scss'

export function IconButton({ children, ...props }: React.PropsWithChildren & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.iconButton} {...props}>
      {children}
    </button>
  )
}