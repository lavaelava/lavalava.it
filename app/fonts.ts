import localFont from 'next/font/local'

// Both families are exposed as CSS variables rather than classNames so the
// Tailwind `font-sen` / `font-gilroy` utilities keep working. The variable
// names deliberately differ from the Tailwind theme keys (--font-sen,
// --font-gilroy) — reusing the same name would make the `@theme inline`
// substitution in globals.css self-referential.
// preload is off for both families on purpose. They are declared on the root
// layout, so `preload: true` would emit <link rel="preload"> for all 8 files on
// every route — but Gilroy is only ever used on / and /legal/*, and Sen only on
// the promo pages, so ~200KB of that is always wasted. With preload off the
// browser fetches exactly the faces it paints, as it did before next/font,
// while we keep the parts that actually help: hashed self-hosted URLs and the
// metric-matched fallback that cuts layout shift.
export const sen = localFont({
  variable: '--sen',
  preload: false,
  src: [
    { path: './fonts/sen/400-regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/sen/700-bold.woff2', weight: '700', style: 'normal' },
    {
      path: './fonts/sen/800-extrabold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
})

export const gilroy = localFont({
  variable: '--gilroy',
  preload: false,
  src: [
    {
      path: './fonts/gilroy/400-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    { path: './fonts/gilroy/500-medium.woff2', weight: '500', style: 'normal' },
    {
      path: './fonts/gilroy/600-semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    { path: './fonts/gilroy/700-bold.woff2', weight: '700', style: 'normal' },
    {
      path: './fonts/gilroy/800-extrabold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
})
