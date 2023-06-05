import Head from 'next/head'
import { AppBar } from '@/widgets/app-bar'
import { PageContentWrapper } from '@/widgets/page-content-wrapper'
import { Footer } from '@/widgets/footer'
import { AboutPageHeading } from '@/widgets/about-page/heading'
import { AboutPageInfo } from '@/widgets/about-page/info'
import { AboutPageBanner } from '@/widgets/about-page/banner'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>О компании — CoupOne</title>
        <meta name="description" content="Лучшие купоны только на сайте CoupOne" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar />
      <PageContentWrapper>
        <AboutPageHeading />
        <AboutPageInfo />
        <AboutPageBanner />
      </PageContentWrapper>
      <Footer />
    </>
  )
}