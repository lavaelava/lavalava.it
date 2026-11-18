'use client'

import { GoogleAnalytics } from '@next/third-parties/google'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { useEffect, useState, useSyncExternalStore } from 'react'
import {
  gaId,
  getTrackingPurposes,
  pixelId,
  subscribeToConsent,
} from '@/lib/consent'

function MetaPixel({ id }: { id: string }) {
  const [ready, setReady] = useState(false)
  const pathname = usePathname()
  const query = useSearchParams().toString()

  useEffect(() => {
    if (ready && getTrackingPurposes()?.[5] === true) {
      window.fbq?.('track', 'PageView')
    }
  }, [ready, pathname, query])

  return (
    <Script
      id="fb-pixel-init"
      strategy="afterInteractive"
      onReady={() => setReady(true)}
    >
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq.disablePushState = true;
        fbq('init', ${JSON.stringify(id)});
      `}
    </Script>
  )
}

export default function Analytics() {
  const purposes = useSyncExternalStore(
    subscribeToConsent,
    getTrackingPurposes,
    () => undefined,
  )
  return (
    <>
      {gaId && purposes?.[4] === true && <GoogleAnalytics gaId={gaId} />}
      {pixelId && purposes?.[5] === true && <MetaPixel id={pixelId} />}
    </>
  )
}
