declare global {
  interface Window {
    lavalavaCookiePurposes?: Partial<Record<4 | 5, boolean>>
    [key: `ga-disable-${string}`]: boolean | undefined
    fbq?: (...args: unknown[]) => void
  }
}

export {}
