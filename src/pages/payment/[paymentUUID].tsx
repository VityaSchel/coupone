import { PaymentResponse } from '@/shared/model/api/api'
import { AppBar } from '@/widgets/app-bar'
import { Footer } from '@/widgets/footer'
import { Headline } from '@/widgets/headline'
import { PageContentWrapper } from '@/widgets/page-content-wrapper'
import { PaymentForm } from '@/widgets/payment-page/payment-form'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import Head from 'next/head'

export default function PaymentUUIDPage({ payment }: { 
  payment: PaymentResponse 
}) {
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
        <Headline variant='h1'>Оформление заказа</Headline>
        <PaymentForm
          payment={payment}
        />
      </PageContentWrapper>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext<{ paymentUUID: string }>): Promise<GetServerSidePropsResult<{ payment: PaymentResponse }>> {
  const paymentResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/payments/${context.params?.paymentUUID}`)
  const paymentResult = await paymentResponse.json() as PaymentResponse

  return {
    props: {
      payment: paymentResult
    }
  }
}