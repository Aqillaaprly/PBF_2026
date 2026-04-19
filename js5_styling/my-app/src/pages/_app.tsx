import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Navbar from '../component/layouts/navbar'
import AppShell from '../component/layouts/AppShell'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  )
}