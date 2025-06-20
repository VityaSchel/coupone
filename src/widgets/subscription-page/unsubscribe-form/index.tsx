import React from 'react'
import { Input } from '@/shared/ui/input'
import styles from './styles.module.scss'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Button } from '@/shared/ui/button'
import HelpImage from '@/assets/subscription-page/help.svg'
import { ErrorResponse, SubscriptionUnsubscribeBody } from '@/shared/model/api/api'
import { ImperativeModal, ImperativeModalRef } from '@/features/imperative-modal'

export function SubscriptionPageUnsubsribeForm() {
  return (
    <div className={styles.unsubscribeForm}>
      <Form />
      <HelpImage />
    </div>
  )
}

function Form() {
  const modal = React.useRef<ImperativeModalRef>()

  return (
    <>
      <Formik
        initialValues={{ first6digits: '', last4digits: '' }}
        validationSchema={
          Yup.object({
            first6digits: Yup.string()
              .min(6, 'Введите 6 цифр')
              .matches(/^[0-9]+$/, 'Только цифры')
              .required('Заполните это поле'),
            last4digits: Yup.string()
              .min(4, 'Введите 4 цифры')
              .matches(/^[0-9]+$/, 'Только цифры')
              .required('Заполните это поле')
          })
        }
        onSubmit={(values, { setSubmitting }) => {
          fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/subscriptions/unsubscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              firstNumbers: values.first6digits,
              lastNumbers: values.last4digits
            } satisfies SubscriptionUnsubscribeBody)
          })
            .then(async (request) => {
              if(request.status === 200) {
                modal.current?.alert('Вы успешно отписались!')

              } else {
                const response = await request.json() as ErrorResponse
                if (response.message === 'subscription not found') {
                  modal.current?.alert('Ошибка! Подписка не найдена')
                } else {
                  modal.current?.alert('Ошибка!')
                }
              }
            })
            .catch(() => modal.current?.alert('Ошибка!'))
            .finally(() => setSubmitting(false))
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className={styles.form}>  
            <div className={styles.headline}><span>Введите ваши</span> данные для отписки</div>
            <div className={styles.stacked}>
              <Input
                variant='cornered'
                placeholder='Первые 6 цифр'
                name='first6digits'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.first6digits}
              />
              <span className={styles.error}>{errors.first6digits && touched.first6digits && errors.first6digits}</span>
            </div>
            <div className={styles.stacked}>
              <Input
                variant='cornered'
                placeholder='Последние 4 цифры'
                name='last4digits'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.last4digits}
              />
              <span className={styles.error}>{errors.last4digits && touched.last4digits && errors.last4digits}</span>
            </div>
            <div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className={styles.button}
              >
                Отписаться
              </Button>
            </div>
          </form>
        )}
      </Formik>
      <ImperativeModal ref={modal} />
    </>
  )
}