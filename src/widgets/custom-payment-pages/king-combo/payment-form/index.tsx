import React from 'react'
import styles from './styles.module.scss'
import { Formik, FormikProps } from 'formik'
import { Headline } from '@/widgets/headline'
import { PaymentPayResponse, PaymentResponse } from '@/shared/model/api/api'
import * as Yup from 'yup'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import Checkbox from '@x5io/flat-uikit/dist/checkbox'
import PaySystems from './pay_systems.svg'
import { useRouter } from 'next/router'
import { ImperativeModal, ImperativeModalRef } from '@/features/imperative-modal'

export function KingComboPaymentForm({ payment, paymentID }: {
  payment: PaymentResponse
  paymentID: string
}) {
  const router = useRouter()
  const modal = React.useRef<ImperativeModalRef>()
  const formikRef = React.useRef<FormikProps<{ email: string }>>()
  const isFirstRender = React.useRef(true)

  React.useEffect(() => {
    if(typeof window !== 'undefined') {
      if (payment.email && isFirstRender.current) {
        const interval = setInterval(() => {
          if (formikRef.current && 'cp' in window) {
            formikRef.current!.submitForm()
            clearInterval(interval)
          }
        }, 500)
        isFirstRender.current = false
      }
    }
  }, [])

  return (
    <section className={styles.container}>
      <Headline variant='h1'>Введите ваш Email, чтобы активировать купон</Headline>
      <span className={styles.privacyMessage}>Мы уважаем вашу конфиденциальность и очень серьёзно относимся к её защите — никакого спама.</span>
      <div className={styles.paymentForm}>
        <Formik
          initialValues={{ email: payment.email, checkbox1: Boolean(payment.email), checkbox2: Boolean(payment.email) }}
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
                onSuccess: function () {
                  modal.current?.alert('Спасибо за покупку!')
                  router.push('/')
                },
                onFail: function (reason: string) { console.error(reason) }
              }
            )
          }}
          innerRef={formikRef as any}
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
                variant='cornered'
              />
              <span className={styles.error}>{errors.email && touched.email && errors.email}</span>
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
              <Button type="submit" disabled={isSubmitting} className={styles.button}>
                Получить купон
              </Button>
            </form>
          )}
        </Formik>
      </div>
      <ImperativeModal ref={modal} />
    </section>
  )
}