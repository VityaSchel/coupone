import React from 'react'
import styles from './styles.module.scss'
import { Headline } from '@/widgets/headline'
import { LoginPageForm } from '@/widgets/login-page/form/login'
import { ResetPasswordForm } from '@/widgets/login-page/form/reset'

export default function LoginPageScreen() {
  const [isRememberPasswordScreen, setIsRememberPasswordScreen] = React.useState(false)

  return (
    <section className={styles.login}>
      <Headline variant='h1'>Вход{isRememberPasswordScreen && ' – восстановление пароля'}</Headline>
      <Headline variant='h2'>Для зарегистрированных пользователей</Headline>
      {isRememberPasswordScreen
        ? <ResetPasswordForm setLoginScreen={() => setIsRememberPasswordScreen(false)} />
        : <LoginPageForm setResetScreen={() => setIsRememberPasswordScreen(true)} />
      }
    </section>
  )
}