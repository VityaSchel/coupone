import React from 'react'
import '@/shared/styles/globals.scss'
import '@/shared/styles/fonts.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '@/shared/store'
import Cookies from 'js-cookie'
import { login } from '@/shared/store/slices/authentification'

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const session_token = Cookies.get('session_token')
    if(session_token) {
      store.dispatch(login({ token: session_token }))
    }
  }, [typeof window])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
