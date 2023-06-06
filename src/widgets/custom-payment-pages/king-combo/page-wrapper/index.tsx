import styles from './styles.module.scss'

export function KingComboPaymentPageWrapper({ children }: React.PropsWithChildren) {
  return (
    <main className={styles.main}>
      <span className={styles.bg1} />
      <span className={styles.bg2} />
      <span className={styles.bg3} />
      {children}
    </main>
  )
}