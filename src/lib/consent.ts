export const gaId = process.env.NEXT_PUBLIC_GA_TRACKING_ID
export const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

// iubenda purposes 4 and 5 are measurement and marketing, respectively.
export function getTrackingPurposes() {
  return window.lavalavaCookiePurposes
}

export function subscribeToConsent(notify: () => void) {
  let previous = getTrackingPurposes()

  function stopRevoked(current: Window['lavalavaCookiePurposes']) {
    const revokeGoogle = gaId && previous?.[4] === true && current?.[4] !== true
    const revokeMeta =
      pixelId && previous?.[5] === true && current?.[5] !== true
    if (!revokeGoogle && !revokeMeta) return false
    if (revokeGoogle) window[`ga-disable-${gaId}`] = true
    if (revokeMeta) window.fbq?.('consent', 'revoke')
    // Unmounting next/script cannot unload an SDK or its history listeners.
    window.location.reload()
    return true
  }

  function onPreference() {
    const current = getTrackingPurposes()
    const reloading = stopRevoked(current)
    previous = current
    if (!reloading) notify()
  }

  // Other documents can withdraw permissions. Only this document's CMP grants them.
  function checkOtherTabs() {
    let purposes: Window['lavalavaCookiePurposes']
    try {
      purposes = JSON.parse(
        window.localStorage.getItem('iubenda:preferences') ?? 'null',
      )
    } catch {
      // A restored document cannot verify old grants when storage is unavailable.
    }
    stopRevoked(purposes)
  }

  function onStorage(event: StorageEvent) {
    if (event.key === null || event.key === 'iubenda:preferences') {
      checkOtherTabs()
    }
  }

  function onPageShow(event: PageTransitionEvent) {
    if (event.persisted) checkOtherTabs()
  }

  window.addEventListener('iubenda:preferences', onPreference)
  window.addEventListener('storage', onStorage)
  window.addEventListener('pageshow', onPageShow)
  return () => {
    window.removeEventListener('iubenda:preferences', onPreference)
    window.removeEventListener('storage', onStorage)
    window.removeEventListener('pageshow', onPageShow)
  }
}
