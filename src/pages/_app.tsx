import type { AppProps } from 'next/app'
import { Layout } from 'components'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout router={router}>
    
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
