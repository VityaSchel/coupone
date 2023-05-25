import { CouponResponse } from '@/shared/model/api/api'
import { AppBar } from '@/widgets/app-bar'
import { Footer } from '@/widgets/footer'
import { Headline } from '@/widgets/headline'
import { PageContentWrapper } from '@/widgets/page-content-wrapper'
import { AllPromosPageGrid } from '@/widgets/all-promos-page/all-promos-grid'
import { GetServerSidePropsResult } from 'next'
import Head from 'next/head'

type AllPromosPageProps = { initialPromos: CouponResponse[] }

export default function AllPromosPage({ initialPromos }: AllPromosPageProps) {
  return (
    <>
      <Head>
        <title>Все промокоды — CoupOne</title>
        <meta name="description" content="Лучшие купоны только на сайте CoupOne" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar />
      <PageContentWrapper>
        <AllPromosPageGrid initialList={initialPromos} />
      </PageContentWrapper>
      <Footer />
    </>
  )
}


export async function getServerSideProps(): Promise<GetServerSidePropsResult<AllPromosPageProps>> {
  const allPromosRequest = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/coupons?' + new URLSearchParams({
    'filter[hot]': 'false',
    limit: String(4 * 1),
    offset: '0'
  }))
  const allPromosResponse = await allPromosRequest.json() as CouponResponse[]

  return {
    props: {
      initialPromos: allPromosResponse
    }
  }
}