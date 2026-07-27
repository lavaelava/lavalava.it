import { Suspense } from 'react'
import Script from 'next/script'
import type { Metadata } from 'next'
import { GA_TRACKING_ID } from '@/lib/gtag'
import { FB_PIXEL_ID } from '@/lib/fpixel'
import Analytics from './analytics'
import { gilroy, sen } from './fonts'
import '@/styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://lavalava.it'),
}

const isProduction = process.env.NODE_ENV === 'production'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // data-scroll-behavior opts back into Next's scroll-behavior override
    // during client navigations, which it stopped doing by default in v16.
    // Without it the in-page hash links would smooth-scroll route changes too.
    <html
      lang="it"
      className={`${sen.variable} ${gilroy.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="antialiased">
        {children}

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        {isProduction && (
          <>
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  send_page_view: false,
                });
              `}
            </Script>

            {/* Global Site Code Pixel - Facebook Pixel */}
            <Script id="fb-pixel-init" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', ${FB_PIXEL_ID});
              `}
            </Script>
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>

            {/* Iubenda Cookie Solution. Loaded beforeInteractive so the consent
                manager is in place ahead of the trackers above. */}
            <Script id="iubenda-config" strategy="beforeInteractive">
              {`
                var _iub = _iub || [];
                _iub.csConfiguration = {
                    "perPurposeConsent": true,
                    "whitelabel": false,
                    "lang": "it",
                    "siteId": 2199998,
                    "consentOnContinuedBrowsing": false,
                    "cookiePolicyId": 56045222,
                    "banner": {
                        "brandBackgroundColor": "none",
                        "brandTextColor": "black",
                        "logo": "https://lavalava.it/logo.svg",
                        "acceptButtonDisplay": true,
                        "customizeButtonDisplay": true,
                        "acceptButtonColor": "#14b8a6",
                        "acceptButtonCaptionColor": "white",
                        "customizeButtonColor": "#d1d5db",
                        "customizeButtonCaptionColor": "#4b5563",
                        "rejectButtonColor": "#0073CE",
                        "rejectButtonCaptionColor": "white",
                        "position": "float-bottom-left",
                        "textColor": "#111827",
                        "backgroundColor": "white"
                    }
                };
              `}
            </Script>
            <Script
              id="iubenda-cs"
              src="https://cdn.iubenda.com/cs/iubenda_cs.js"
              strategy="beforeInteractive"
            />
          </>
        )}

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
