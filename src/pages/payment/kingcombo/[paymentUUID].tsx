import { PaymentResponse } from '@/shared/model/api/api'
import { AppBar } from '@/widgets/app-bar'
import { Footer } from '@/widgets/footer'
import { DeactivatedLink } from '@/widgets/payment-page/deactivated-link'
import Banner from '@/assets/custom-payment-pages/king-combo-banner.png'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import { KingComboPaymentPageWrapper } from '@/widgets/custom-payment-pages/king-combo/page-wrapper'
import { KingComboPaymentForm } from '@/widgets/custom-payment-pages/king-combo/payment-form'

type PaymentPageProps = { payment: PaymentResponse, paymentID: string }

export default function KingComboPaymentUUIDPage({ payment, paymentID }: PaymentPageProps) {
  return (
    <>
      <Head>
        <title>CoupOne</title>
        <meta name="description" content="Лучшие купоны только на сайте CoupOne" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <KingComboPaymentPageWrapper>
        <DeactivatedLink isDeactivated={payment.status !== 'in_process'} />
        <Image src={Banner} alt='Баннер с комбо' width={250} />
        <KingComboPaymentForm
          payment={payment}
          paymentID={paymentID}
        />
      </KingComboPaymentPageWrapper>
      <Script src="https://widget.cloudpayments.ru/bundles/cloudpayments.js"></Script>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext<{ paymentUUID: string }>): Promise<GetServerSidePropsResult<PaymentPageProps>> {
  const paymentID = context.params?.paymentUUID
  if (!paymentID) return { notFound: true }

  if(process.env.DEBUG_API) {
    return {
      props: {
        payment: {
          amount: 1,
          amountWithoutDiscount: 990,
          email: '',
          firstCheckbox: 'First checkbox text',
          secondCheckbox: 'Second checkbox text',
          status: 'in_process'
        },
        paymentID
      }
    }
  } else {
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
}