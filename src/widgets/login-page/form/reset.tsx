import styles from './styles.module.scss'
import { Formik } from 'formik'
import { Button } from '@/shared/ui/button'
import * as Yup from 'yup'
import { Input } from '@/shared/ui/input'
import { PasswordResetBody } from '@/shared/model/api/api'
import { useRouter } from 'next/router'

export function ResetPasswordForm({ setLoginScreen }: { setLoginScreen: () => any }) {
  const router = useRouter()
  
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={
        Yup.object({
          email: Yup.string()
            .email('Некорректный email')
            .required('Заполните это поле')
        })
      }
      onSubmit={(values, { setSubmitting }) => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/auth/password_reset', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: values.email
          } satisfies PasswordResetBody)
        })
          .then(response => {
            if(response.status === 200) {
              alert('Ссылка для сброса отправлена!')
              setLoginScreen()
            } else {
              alert('Ошибка!')
            }
          })
          .catch(() => alert('Ошибка!'))
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
          <Input
            placeholder='Введите E-mail'
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <span className={styles.error}>{errors.email && touched.email && errors.email}</span>
          <Button
            type="submit"
            disabled={isSubmitting}
            className={styles.loginButton}
          >
            Отправить ссылку для сброса
          </Button>
          <Button
            type='button'
            disabled={isSubmitting}
            variant='text'
            className={styles.forgetPasswordButton}
            onClick={setLoginScreen}
          >
            Назад к форме входа
          </Button>
        </form>
      )}
    </Formik>
  )
}