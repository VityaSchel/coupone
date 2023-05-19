import Head from 'next/head'
import { AppBar } from '@/widgets/app-bar'
import { PageContentWrapper } from '@/widgets/page-content-wrapper'
import { TopPromo } from '@/widgets/homepage/top-promo'
import { AllPromos } from '@/widgets/homepage/all-promos'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>CoupOne</title>
        <meta name="description" content="Лучшие купоны только на сайте CoupOne" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar />
      <PageContentWrapper>
        <TopPromo />
        <AllPromos />
      </PageContentWrapper>
    </>
  )
}
