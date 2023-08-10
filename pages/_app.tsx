import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// font
import { Montserrat } from 'next/font/google'
// Header
import Header from '@/components/Header/Header'

const monserrat = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${monserrat.className}`}>
      <Header />
      <Component {...pageProps} />
    </main>
  
  )
}
