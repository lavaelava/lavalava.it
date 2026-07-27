export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID

// The gtag config snippet in app/layout.tsx sets `send_page_view: false`, so
// GA4 requires an explicit page_view event per navigation. It must be an
// `event` call, not a repeat `config` call — repeat config updates the existing
// configuration (including send_page_view: false) rather than emitting a view.
// https://developers.google.com/analytics/devguides/collection/ga4/views
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: new URL(url, window.location.origin).href,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label: string
  value: number
}) => {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
