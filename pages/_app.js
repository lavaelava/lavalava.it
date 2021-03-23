import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import * as fbq from '../lib/fpixel'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const handleRouteChange = (url) => {
        gtag.pageview(url)
        fbq.pageview()
      }
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default MyApp
