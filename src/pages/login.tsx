import styles from './styles.module.scss'
import Head from 'next/head'
import { AppBar } from '@/widgets/app-bar'
import { Footer } from '@/widgets/footer'
import { PageContentWrapper } from '@/widgets/page-content-wrapper'
import { Headline } from '@/widgets/headline'
import LoginPageScreen from '@/widgets/login-page/form'

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Вход — CoupOne</title>
        <meta name="description" content="Лучшие купоны только на сайте CoupOne" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar />
      <PageContentWrapper>
        <LoginPageScreen />
      </PageContentWrapper>
      <Footer />
    </>
  )
}