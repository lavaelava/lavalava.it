import localFont from 'next/font/local'

// Exposed as a CSS variable so globals.css can make it Tailwind's default
// sans font. The name differs from the theme key (--font-sans) so the
// `@theme inline` substitution isn't self-referential.
export const gilroy = localFont({
  variable: '--gilroy',
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
