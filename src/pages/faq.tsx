import Head from 'next/head'
import { AppBar } from '@/widgets/app-bar'
import { PageContentWrapper } from '@/widgets/page-content-wrapper'
import { Footer } from '@/widgets/footer'
import { FaqPageHeading } from '@/widgets/faq-page/heading'
import { FaqPageQuestions } from '@/widgets/faq-page/questions'

export default function FaqPage() {
  return (
    <>
      <Head>
        <title>Вопросы и ответы — CoupOne</title>
        <meta name="description" content="Лучшие купоны только на сайте CoupOne" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar />
      <PageContentWrapper>
        <FaqPageHeading />
        <FaqPageQuestions />
      </PageContentWrapper>
      <Footer />
    </>
  )
}