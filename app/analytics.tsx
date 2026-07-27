'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import * as gtag from '@/lib/gtag'
import * as fbq from '@/lib/fpixel'

/**
 * Reports a pageview to Google Analytics and the Meta Pixel on first render and
 * on every client-side navigation. The App Router has no `router.events`, so
 * pathname + search params are the navigation signal.
 *
 * Both vendors are driven from here on purpose: the gtag config snippet in the
 * root layout sets `send_page_view: false`, so this is the single place a
 * pageview is emitted and there is no double counting on the landing page.
 *
 * `useSearchParams` opts the subtree into client rendering, so the caller wraps
 * this in a <Suspense> boundary.
 */
export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return
    const query = searchParams.toString()
    gtag.pageview(pathname + (query ? `?${query}` : ''))
    fbq.pageview()
  }, [pathname, searchParams])

  return null
}
