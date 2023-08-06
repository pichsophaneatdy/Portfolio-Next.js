import Head from 'next/head'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import styles from '@/styles/Home.module.scss'

const monserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Pichsophaneat Dy</title>
        <meta name="description" content="I am a web developer based in Vancouver, BC." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${monserrat.className}`}>
        <h1 className={styles.title}>Portfolio</h1>
      </main>
    </>
  )
}
