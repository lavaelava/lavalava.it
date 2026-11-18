import type { WeekHours } from '@/lib/hours'

export type Store = {
  id: 'pisa' | 'fornacette'
  name: string
  address: [string, string]
  note?: string
  phone: string
  tel: string
  maps: string
  image: string
  imageAlt: string
  /** CSS object-position for the card crop. */
  imagePosition: string
  week: WeekHours
}

// Hardcoded for now; will be synced from the Google Business Profile.
// Minutes from midnight, index 0 = Sunday.
const PISA_DAY: [number, number][] = [
  [8 * 60 + 30, 13 * 60],
  [15 * 60 + 30, 19 * 60],
]
const MORNING: [number, number][] = [[8 * 60 + 30, 12 * 60 + 30]]
const AFTERNOON: [number, number][] = [[16 * 60, 19 * 60 + 30]]

export const stores: Store[] = [
  {
    id: 'pisa',
    name: 'Pisa',
    address: ['Via Benedetto Croce, 81', '56125 Pisa (PI)'],
    phone: '050 41046',
    tel: '+3905041046',
    maps: 'https://goo.gl/maps/Kh1QRqXv1YmUnKBu5',
    image: '/images/lava-e-lava--pisa.jpg',
    imageAlt:
      'Insegna e ingresso del negozio Lava&Lava di Pisa, via Benedetto Croce 81',
    imagePosition: '50% 35%',
    week: [[], PISA_DAY, PISA_DAY, PISA_DAY, PISA_DAY, PISA_DAY, []],
  },
  {
    id: 'fornacette',
    name: 'Fornacette',
    address: ['Piazza Kolbe, 15', '56012 Fornacette (PI)'],
    note: 'Presso il centro commerciale Pam Panorama',
    phone: '0587 477444',
    tel: '+390587477444',
    maps: 'https://goo.gl/maps/fxpdmBXMkoCMetkU7',
    image: '/images/lava-e-lava--fornacette.jpg',
    imageAlt: 'Insegna e vetrina del negozio Lava&Lava di Fornacette',
    imagePosition: '50% 25%',
    week: [[], AFTERNOON, MORNING, [], MORNING, AFTERNOON, MORNING],
  },
]
