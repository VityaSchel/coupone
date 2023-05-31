import React from 'react'
import styles from './styles.module.scss'
import { Formik } from 'formik'
import { Button } from '@/shared/ui/button'
import * as Yup from 'yup'
import { Input } from '@/shared/ui/input'
import { LoginBody, LoginResponse } from '@/shared/model/api/api'
import { useRouter } from 'next/router'
import { ImperativeModal, ImperativeModalRef } from '@/features/imperative-modal'
import { useAppDispatch } from '@/shared/store/hooks'
import { login } from '@/shared/store/slices/authentification'

export function LoginPageForm({ setResetScreen }: { setResetScreen: () => any }) {
  const router = useRouter()
  const modal = React.useRef<ImperativeModalRef>()
  const dispatch = useAppDispatch()

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={
          Yup.object({
            email: Yup.string()
              .email('Некорректный email')
              .required('Заполните это поле'),
            password: Yup.string()
              .required('Заполните это поле')
          })
        }
        onSubmit={(values, { setSubmitting, setErrors }) => {
          fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: values.email,
              password: values.password
            } satisfies LoginBody)
          })
            .then(async request => {
              let response: any
              try {
                response = await request.json() as LoginResponse
              } catch(e) {/**/}
              if(request.status === 200) {
                dispatch(login({ token: response.token }))
                router.push('/')
              } else {
                if (response.message === 'user not found') {
                  setErrors({ email: 'Такого пользователя не существует' })
                } else if(response.message === 'wrong email or password') {
                  setErrors({ password: 'Неправильный пароль' })
                } else {
                  modal.current?.alert('Ошибка!')
                }
              }
            })
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
            <Input
              placeholder='Введите пароль'
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <span className={styles.error}>{errors.password && touched.password && errors.password}</span>
            <Button
              type="submit"
              disabled={isSubmitting}
              className={styles.loginButton}
            >
              Войти на сайт
            </Button>
            <Button
              type='button'
              disabled={isSubmitting}
              variant='text'
              className={styles.forgetPasswordButton}
              onClick={setResetScreen}
            >
              Забыли пароль?
            </Button>
          </form>
        )}
      </Formik>
      <ImperativeModal ref={modal} />
    </>
  )
}