export type Review = {
  name: string
  text: string
  /** Path under /public, optional: without it a plain circle is shown. */
  avatar?: string
}

// Google reviews shown on the homepage. Add more entries here.
export const reviews: Review[] = [
  {
    name: 'Walter',
    text: 'Personalmente porto i miei indumenti da oltre due anni. Sono i più convenienti del mercato e garantiscono una qualità TOP. Personale cordiale e simpatico.',
    avatar: '/images/testimonials/walter.jpg',
  },
  // {
  //   name: 'Nome cliente',
  //   text: 'Testo della recensione Google',
  // },
]
