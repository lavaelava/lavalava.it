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
  // Depend on the serialised query, not the ReadonlyURLSearchParams object:
  // useSearchParams() hands back a fresh instance on every router update,
  // including hash-only ones, which would re-fire this effect and report a
  // duplicate of the current page. Every item in the header nav is a
  // `/#anchor` Link, so that is the common case, not an edge case.
  const query = searchParams.toString()

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return
    gtag.pageview(pathname + (query ? `?${query}` : ''))
    fbq.pageview()
  }, [pathname, query])

  return null
}
