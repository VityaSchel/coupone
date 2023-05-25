import Head from 'next/head'
import { AppBar } from '@/widgets/app-bar'
import { PageContentWrapper } from '@/widgets/page-content-wrapper'
import { TopPromo } from '@/widgets/homepage/top-promo'
import { AllPromos } from '@/widgets/homepage/all-promos'
import { Footer } from '@/widgets/footer'
import { GetServerSidePropsResult } from 'next'
import { CouponResponse } from '@/shared/model/api/api'

type HomePageProps = {
  topPromos: CouponResponse[]
  allPromos: CouponResponse[]
}

export default function HomePage({ topPromos, allPromos }: HomePageProps) {
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
        <TopPromo promos={topPromos} />
        <AllPromos promos={allPromos} />
      </PageContentWrapper>
      <Footer />
    </>
  )
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<HomePageProps>> {
  const hotRequest = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/coupons?' + new URLSearchParams({
    'filter[hot]': 'true',
    limit: '3',
    offset: '0'
  }))
  const allPromosRequest = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/coupons?' + new URLSearchParams({
    'filter[hot]': 'false',
    limit: '4',
    offset: '0'
  }))
  if (hotRequest.status !== 200 || allPromosRequest.status !== 200) {
    console.error(await hotRequest.text(), await allPromosRequest.text())
    throw new Error('Expected status 200 for promos list')
  }
  const hotResponse = await hotRequest.json() as CouponResponse[]
  
  const allPromosResponse = await allPromosRequest.json() as CouponResponse[]

  return {
    props: {
      topPromos: hotResponse,
      allPromos: allPromosResponse
    }
  }
}