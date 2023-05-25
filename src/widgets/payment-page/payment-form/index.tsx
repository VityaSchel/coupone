import styles from './styles.module.scss'
import React from 'react'
import { Formik } from 'formik'
import { Headline } from '@/widgets/headline'
import { PaymentPayResponse, PaymentResponse } from '@/shared/model/api/api'
import * as Yup from 'yup'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import Checkbox from '@x5io/flat-uikit/dist/checkbox'
import PaySystems from './pay_systems.svg'
import { Timer } from '@/widgets/payment-page/timer'
import { useRouter } from 'next/router'

export function PaymentForm({ payment, paymentID }: {
  payment: PaymentResponse
  paymentID: string
}) {
  const [expireDate, setExpireDate] = React.useState(new Date(Date.now() + 1000*60*60*2))
  const router = useRouter()

  React.useEffect(() => {
    const openDateString = window.localStorage.getItem(`payment_${paymentID}`)
    const openDate = Number(openDateString)
    if (!Number.isSafeInteger(openDate) || new Date(openDate).getTime() < (Date.now() - 1000*60*60*2)) {
      const newExpireDate = new Date(Date.now() + 1000 * 60 * 60 * 2)
      setExpireDate(newExpireDate)
      window.localStorage.setItem(`payment_${paymentID}`, String(newExpireDate.getTime()))
    } else {
      setExpireDate(new Date(openDate))
    }
  }, [])

  return (
    <section className={styles.container}>
      <Headline variant='h1'>Оформление заказа</Headline>
      <div className={styles.paymentForm}>
        <div className={styles.timer}>
          <Timer from={expireDate} />
          <div className={styles.discount}>
            Скидка {Math.round((1-(payment.amount/payment.amountWithoutDiscount))*100)}%
          </div>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.price}>
            <span className={styles.old}>вместо {payment.amountWithoutDiscount}₽</span>
            <span className={styles.new}>{payment.amount}₽</span>
          </div>
          <Formik
            initialValues={{ email: '', checkbox1: false, checkbox2: false }}
            validationSchema={
              Yup.object({
                email: Yup.string().email('Введите почту').required('Это обязательное поле'),
                checkbox1: Yup.boolean().isTrue(' ').required(),
                checkbox2: Yup.boolean().isTrue(' ').required(),
              })
            }
            validateOnChange={false} validateOnBlur={false}
            onSubmit={async (values, { setSubmitting }) => {
              setSubmitting(true)
              const widget = new cp.CloudPayments()
              await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/payments/${paymentID}/set-email`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  email: values.email
                })
              })
              const payRequest = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/payments/${paymentID}/pay`)
              const payResponse = await payRequest.json() as PaymentPayResponse
              setSubmitting(false)
              widget.pay('auth',
                payResponse.cloudpayments,
                {
                  onSuccess: function (options) {
                    alert('Спасибо за покупку!')
                    router.push('/')
                  },
                  onFail: function (reason, options) { console.error(reason) }
                }
              )
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
              <form onSubmit={handleSubmit} className={styles.form}>
                <Input
                  type="email"
                  name="email"
                  placeholder='Введите ваш e-mail'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={styles.input}
                />
                <span className={styles.error}>{errors.email && touched.email && errors.email}</span>
                <Button type="submit" disabled={isSubmitting}>
                  Оплатить
                </Button>
                <Checkbox
                  value={values.checkbox1}
                  name='checkbox1'
                  onChange={handleChange}
                  error={errors.checkbox1}
                >
                  {payment.firstCheckbox}
                </Checkbox>
                <Checkbox
                  value={values.checkbox2}
                  name='checkbox2'
                  onChange={handleChange}
                  error={errors.checkbox2}
                >
                  {payment.secondCheckbox}
                </Checkbox>
                <PaySystems className={styles.paySystems} />
              </form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  )
}