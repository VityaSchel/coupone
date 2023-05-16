import '@/shared/styles/globals.scss'
import '@/shared/styles/fonts.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
