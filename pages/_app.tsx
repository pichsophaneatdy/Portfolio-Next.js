import '@/styles/globals.css'
import { Fragment } from 'react'
import type { AppProps } from 'next/app'

// Header
import Header from '@/components/Header/Header'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
    </Fragment>
  
  )
}
