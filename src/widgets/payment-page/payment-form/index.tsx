import styles from './styles.module.scss'
import { Headline } from '@/widgets/headline'
import { PaymentResponse } from '@/shared/model/api/api'

export function PaymentForm({ payment }: {
  payment: PaymentResponse
}) {
  return (
    <section className={styles.form}>
      <Headline variant='h1'>Оформление заказа</Headline>
      <span>{payment.amount}</span>
      <span>{payment.amountWithoutDiscount}</span>
      <span>{payment.firstCheckbox}</span>
      <span>{payment.secondCheckbox}</span>
      <span>{payment.status}</span>
    </section>
  )
}