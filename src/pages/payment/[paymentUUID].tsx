import { PaymentResponse } from '@/shared/model/api/api'
import { AppBar } from '@/widgets/app-bar'
import { Footer } from '@/widgets/footer'
import { PageContentWrapper } from '@/widgets/page-content-wrapper'
import { DeactivatedLink } from '@/widgets/payment-page/deactivated-link'
import { PaymentForm } from '@/widgets/payment-page/payment-form'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import Head from 'next/head'
import Script from 'next/script'

type PaymentPageProps = { payment: PaymentResponse, paymentID: string }

export default function PaymentUUIDPage({ payment, paymentID }: PaymentPageProps) {
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
        <DeactivatedLink isDeactivated={payment.status !== 'in_progress'} />
        <PaymentForm
          payment={payment}
          paymentID={paymentID}
        />
      </PageContentWrapper>
      <Footer />
      <Script src="https://widget.cloudpayments.ru/bundles/cloudpayments.js"></Script>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext<{ paymentUUID: string }>): Promise<GetServerSidePropsResult<PaymentPageProps>> {
  const paymentID = context.params?.paymentUUID
  if (!paymentID) return { notFound: true }
  const paymentResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/payments/${paymentID}`)
  if(paymentResponse.status !== 200) {
    return {
      notFound: true
    }
  }
  const paymentResult = await paymentResponse.json() as PaymentResponse

  return {
    props: {
      payment: paymentResult,
      paymentID
    }
  }
}