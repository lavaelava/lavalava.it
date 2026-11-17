import { Suspense } from 'react'
import Script from 'next/script'
import type { Metadata } from 'next'
import Analytics from './analytics'
import { gilroy } from './fonts'
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
    <html lang="it" className={gilroy.variable} data-scroll-behavior="smooth">
      <body className="antialiased">
        {children}

        {isProduction && (
          <>
            <Script id="iubenda-config" strategy="beforeInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('consent', 'default', {
                  analytics_storage: 'denied',
                  ad_storage: 'denied',
                  ad_user_data: 'denied',
                  ad_personalization: 'denied',
                });
                var _iub = _iub || [];
                _iub.csConfiguration = {
                    "perPurposeConsent": true,
                    "googleConsentMode": true,
                    "floatingPreferencesButtonDisplay": "bottom-right",
                    "callback": {
                        "onPreferenceExpressed": function(preference) {
                            var purposes = preference && preference.purposes;
                            window.lavalavaCookiePurposes = {
                                4: purposes?.[4] === true,
                                5: purposes?.[5] === true,
                            };
                            try {
                                localStorage.setItem('iubenda:preferences', JSON.stringify(window.lavalavaCookiePurposes));
                            } catch {}
                            window.dispatchEvent(new Event('iubenda:preferences'));
                        }
                    },
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
                        "rejectButtonDisplay": true,
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
            <Suspense fallback={null}>
              <Analytics />
            </Suspense>
          </>
        )}
      </body>
    </html>
  )
}
