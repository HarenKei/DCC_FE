
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Header from '@/src/Common/Header'
import Footer from '@/src/Common/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
    </SessionProvider>
  )
}
