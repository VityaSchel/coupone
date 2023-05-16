import styles from './styles.module.scss'

export function PageContentWrapper({ children }: React.PropsWithChildren) {
  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}