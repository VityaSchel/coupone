import styles from './styles.module.scss'
import { PaymentResponse } from '@/shared/model/api/api'

export function PaymentForm({ payment }: {
  payment: PaymentResponse
}) {
  return (
    <section className={styles.form}>
      {payment.amount}
      {payment.amountWithoutDiscount}
      {payment.firstCheckbox}
      {payment.secondCheckbox}
      {payment.status}
    </section>
  )
}