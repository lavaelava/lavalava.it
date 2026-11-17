import { test } from 'node:test'
import assert from 'node:assert/strict'
import { romeNow, storeStatus, formatRanges, type WeekHours } from './hours.ts'

const DAY: [number, number][] = [
  [510, 780],
  [930, 1140],
]
const pisa: WeekHours = [[], DAY, DAY, DAY, DAY, DAY, []]
const at = (dow: number, h: number, m = 0) => ({ dow, minutes: h * 60 + m })

test('open, closing soon, lunch break, before opening', () => {
  assert.deepEqual(storeStatus(pisa, at(2, 10)), {
    tone: 'open',
    label: 'Aperto',
    sub: 'Chiude alle 13:00',
  })
  assert.equal(storeStatus(pisa, at(2, 12, 40)).sub, 'Tra 20 min, alle 13:00')
  assert.equal(storeStatus(pisa, at(2, 12, 40)).tone, 'soon')
  assert.equal(storeStatus(pisa, at(2, 14)).sub, 'Riapre alle 15:30')
  assert.equal(storeStatus(pisa, at(2, 7)).sub, 'Apre alle 08:30')
})

test('closed for the day rolls to the next opening', () => {
  assert.equal(storeStatus(pisa, at(2, 19)).sub, 'Riapre domani alle 08:30')
  assert.equal(storeStatus(pisa, at(5, 20)).sub, 'Riapre lunedì alle 08:30')
  assert.equal(storeStatus(pisa, at(0, 11)).sub, 'Riapre domani alle 08:30')
})

test('romeNow uses the Rome wall clock', () => {
  // 2026-01-13 is a Tuesday; 09:15 UTC is 10:15 in Rome (CET).
  assert.deepEqual(romeNow(new Date('2026-01-13T09:15:00Z')), {
    dow: 2,
    minutes: 615,
  })
})

test('formatRanges', () => {
  assert.equal(formatRanges(DAY), '08:30–13:00, 15:30–19:00')
  assert.equal(formatRanges([]), 'Chiuso')
})
