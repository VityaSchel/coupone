import Head from 'next/head'
import { AppBar } from '@/widgets/app-bar'
import { PageContentWrapper } from '@/widgets/page-content-wrapper'
import { TopPromo } from '@/widgets/homepage/top-promo'
import { AllPromos } from '@/widgets/homepage/all-promos'
import { Footer } from '@/widgets/footer'
import { GetServerSidePropsResult } from 'next'
import { CouponResponse, CouponsResponse } from '@/shared/model/api/api'

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
  // const hotRequest = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/coupons?' + new URLSearchParams({
  //   'filter[hot]': 'true',
  //   limit: '3',
  //   offset: '0'
  // }))
  // const allPromosRequest = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/coupons?' + new URLSearchParams({
  //   'filter[hot]': 'false',
  //   limit: '4',
  //   offset: '0'
  // }))
  // if (hotRequest.status !== 200 || allPromosRequest.status !== 200) {
  //   console.error(await hotRequest.text(), await allPromosRequest.text())
  //   throw new Error('Expected status 200 for promos list')
  // }
  // const hotResponse = await hotRequest.json() as CouponsResponse
  
  // const allPromosResponse = await allPromosRequest.json() as CouponsResponse

  // {
  //   authRequired: boolean;
  //   code: string | null;
  //   dateAdded: string;
  //   description: string;
  //   discountDescription: string;
  //   hot: boolean;
  //   id: number;
  //   image: string;
  //   link: string;
  //   name: string;
  //   rating: number;
  //   validUntil: string;
  //   views: number;
  // }
  const topPromos: CouponsResponse = {
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

  return {
    props: {
      topPromos: topPromos.coupons,
      allPromos: topPromos.coupons
    }
  }
}