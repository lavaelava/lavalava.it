// Analytics globals injected by the gtag.js and Meta Pixel snippets in the
// root layout. Both are loaded via <Script>, so they may not exist yet when a
// component first renders — the helpers in lib/ guard with a typeof check.
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    fbq: (...args: unknown[]) => void
  }
}

export {}
