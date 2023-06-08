import { CouponResponse, CouponsResponse } from '@/shared/model/api/api'
import { AppBar } from '@/widgets/app-bar'
import { Footer } from '@/widgets/footer'
import { Headline } from '@/widgets/headline'
import { PageContentWrapper } from '@/widgets/page-content-wrapper'
import { AllPromosPageGrid } from '@/widgets/all-promos-page/all-promos-grid'
import { GetServerSidePropsResult } from 'next'
import Head from 'next/head'

type AllPromosPageProps = { initialPromos: CouponsResponse }

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
  // const allPromosRequest = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/coupons?' + new URLSearchParams({
  //   // 'filter[hot]': 'false',
  //   limit: String(4 * 1),
  //   offset: '0'
  // }))
  // const allPromosResponse = await allPromosRequest.json() as CouponsResponse

  return {
    props: {
      initialPromos: {
        allCount: 100,
        count: 3,
        coupons: [
          {
            authRequired: false,
            code: 'PROMO123',
            dateAdded: '2023-10-01T12:00:00Z',
            description: 'Скидка 20% на первый заказ',
            discountDescription: 'Скидка 20%',
            hot: true,
            id: 1,
            image: 'https://picsum.photos/400/300',
            link: 'https://example.org',
            name: 'Промо 1',
            rating: 4.5,
            validUntil: '2023-12-31T23:59:59Z',
            views: 100
          },
          {
            authRequired: true,
            code: '*****',
            dateAdded: '2023-09-10T12:00:00Z',
            description: 'Скидка 50% на первый заказ',
            discountDescription: 'Скидка 50%',
            hot: false,
            id: 2,
            image: 'https://picsum.photos/400/300',
            link: 'https://example.org',
            name: 'Промо 1',
            rating: 3,
            validUntil: '2023-12-31T23:59:59Z',
            views: 50
          },
          {
            authRequired: true,
            code: 'PROMO123',
            dateAdded: '2023-09-01T12:00:00Z',
            description: 'Скидка 90% на первый заказ',
            discountDescription: 'Скидка 90%',
            hot: false,
            id: 3,
            image: 'https://picsum.photos/400/300',
            link: 'https://example.org',
            name: 'Промо 1',
            rating: 5,
            validUntil: '2023-12-31T23:59:59Z',
            views: 110
          },

        ]
      }
    }
  }
}