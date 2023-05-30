import { AppBar } from '@/widgets/app-bar'
import { Footer } from '@/widgets/footer'
import { Headline } from '@/widgets/headline'
import { PageContentWrapper } from '@/widgets/page-content-wrapper'
import { SubscriptionPageInstruction } from '@/widgets/subscription-page/instruction'
import { SubscriptionPageIntro } from '@/widgets/subscription-page/intro'
import { SubscriptionPageSecondBlock } from '@/widgets/subscription-page/second-block'
import { SubscriptionPageUnsubsribeForm } from '@/widgets/subscription-page/unsubscribe-form'
import { SubscriptionPageWrapper } from '@/widgets/subscription-page/wrapper'
import Head from 'next/head'

export default function SubscriptionManagementPage() {
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
        <SubscriptionPageWrapper>
          <Headline variant='h1'>Управление подписками</Headline>
          <SubscriptionPageIntro />
          <SubscriptionPageSecondBlock />
          <SubscriptionPageInstruction />
          <SubscriptionPageUnsubsribeForm />
        </SubscriptionPageWrapper>
      </PageContentWrapper>
      <Footer />
    </>
  )
}