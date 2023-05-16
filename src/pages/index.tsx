import { AppBar } from '@/widgets/app-bar'
import Head from 'next/head'

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
    </>
  )
}
