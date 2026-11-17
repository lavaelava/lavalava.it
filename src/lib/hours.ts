// Opening hours as [open, close] minute ranges per weekday, index 0 = Sunday.
export type WeekHours = [number, number][][]

export type StoreStatus = {
  tone: 'open' | 'soon' | 'closed'
  label: string
  sub: string
}

const WEEKDAYS = [
  'domenica',
  'lunedì',
  'martedì',
  'mercoledì',
  'giovedì',
  'venerdì',
  'sabato',
]
const SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const dayName = (dow: number) =>
  WEEKDAYS[dow][0].toUpperCase() + WEEKDAYS[dow].slice(1)

const pad = (n: number) => String(n).padStart(2, '0')
export const hm = (m: number) => `${pad(Math.floor(m / 60))}:${pad(m % 60)}`

export const formatRanges = (ranges: [number, number][]) =>
  ranges.length
    ? ranges.map(([a, b]) => `${hm(a)}–${hm(b)}`).join(', ')
    : 'Chiuso'

const romeClock = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/Rome',
  weekday: 'short',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
})

// The shops' wall clock, whatever the visitor's timezone.
export function romeNow(date: Date) {
  const parts = Object.fromEntries(
    romeClock.formatToParts(date).map((p) => [p.type, p.value]),
  )
  return {
    dow: SHORT.indexOf(parts.weekday),
    minutes: Number(parts.hour) * 60 + Number(parts.minute),
  }
}

export function storeStatus(
  week: WeekHours,
  { dow, minutes }: { dow: number; minutes: number },
): StoreStatus {
  const today = week[dow]
  const current = today.find(([a, b]) => a <= minutes && minutes < b)
  if (current) {
    const left = current[1] - minutes
    return left <= 30
      ? {
          tone: 'soon',
          label: 'Chiude a breve',
          sub: `Tra ${left} min, alle ${hm(current[1])}`,
        }
      : { tone: 'open', label: 'Aperto', sub: `Chiude alle ${hm(current[1])}` }
  }

  const later = today.find(([a]) => a > minutes)
  if (later) {
    const verb = today[0][0] < minutes ? 'Riapre' : 'Apre'
    return {
      tone: 'closed',
      label: 'Chiuso',
      sub: `${verb} alle ${hm(later[0])}`,
    }
  }

  for (let n = 1; n <= 7; n++) {
    const d = (dow + n) % 7
    if (week[d].length) {
      const when = n === 1 ? 'domani' : WEEKDAYS[d]
      return {
        tone: 'closed',
        label: 'Chiuso',
        sub: `Riapre ${when} alle ${hm(week[d][0][0])}`,
      }
    }
  }
  return { tone: 'closed', label: 'Chiuso', sub: '' }
}
