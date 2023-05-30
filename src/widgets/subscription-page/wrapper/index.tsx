import styles from './styles.module.scss'

export function SubscriptionPageWrapper({ children }: React.PropsWithChildren) {
  return (
    <section className={styles.wrapper}>
      {children}
    </section>
  )
}