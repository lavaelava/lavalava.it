import assert from 'node:assert/strict'
import { test } from 'node:test'

test('withdrawing a purpose disables its tracker before reloading', async (t) => {
  t.mock.property(process, 'env', {
    ...process.env,
    NEXT_PUBLIC_GA_TRACKING_ID: 'G-TEST',
    NEXT_PUBLIC_FACEBOOK_PIXEL_ID: '123',
  })
  const { subscribeToConsent } = await import('./consent.ts')
  const browser = Object.assign(new EventTarget(), {
    lavalavaCookiePurposes: {} as Partial<Record<4 | 5, boolean>>,
    'ga-disable-G-TEST': false,
    fbq: t.mock.fn(),
    location: { reload: t.mock.fn() },
    localStorage: {
      getItem: t.mock.fn(() => JSON.stringify({ 4: true, 5: true })),
    },
  })
  Object.defineProperty(globalThis, 'window', {
    value: browser,
    configurable: true,
  })
  t.after(() => {
    Reflect.deleteProperty(globalThis, 'window')
  })

  const notify = t.mock.fn()
  const unsubscribe = subscribeToConsent(notify)
  const choose = (measurement: boolean, marketing: boolean) => {
    browser.lavalavaCookiePurposes = { 4: measurement, 5: marketing }
    browser.dispatchEvent(new Event('iubenda:preferences'))
  }

  choose(false, false)
  const storageEvent = Object.assign(new Event('storage'), {
    key: 'iubenda:preferences',
  })
  browser.dispatchEvent(storageEvent)
  assert.deepEqual(browser.lavalavaCookiePurposes, { 4: false, 5: false })
  assert.equal(
    notify.mock.callCount(),
    1,
    'another tab cannot grant consent here',
  )
  choose(true, true)
  choose(true, true)
  assert.equal(notify.mock.callCount(), 3)
  assert.equal(browser.location.reload.mock.callCount(), 0)

  choose(true, false)
  assert.deepEqual(browser.fbq.mock.calls[0].arguments, ['consent', 'revoke'])
  assert.equal(browser['ga-disable-G-TEST'], false)
  assert.equal(browser.location.reload.mock.callCount(), 1)

  choose(false, false)
  assert.equal(browser['ga-disable-G-TEST'], true)
  assert.equal(browser.fbq.mock.callCount(), 1)
  assert.equal(browser.location.reload.mock.callCount(), 2)
  choose(false, true)
  browser.localStorage.getItem.mock.mockImplementation(() =>
    JSON.stringify({ 4: false, 5: false }),
  )
  browser.dispatchEvent(storageEvent)
  assert.equal(browser.fbq.mock.callCount(), 2, 'withdrawal in another tab')
  browser.dispatchEvent(
    Object.assign(new Event('pageshow'), { persisted: false }),
  )
  assert.equal(browser.location.reload.mock.callCount(), 3)
  browser.localStorage.getItem.mock.mockImplementation(() => {
    throw new Error('storage blocked')
  })
  browser.dispatchEvent(
    Object.assign(new Event('pageshow'), { persisted: true }),
  )
  assert.equal(
    browser.location.reload.mock.callCount(),
    4,
    'cached document with unverifiable consent',
  )
  unsubscribe()
  choose(true, true)
  assert.equal(notify.mock.callCount(), 4)
})
