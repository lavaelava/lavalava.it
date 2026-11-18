'use client'

import Image from 'next/image'
import { useSyncExternalStore } from 'react'
import {
  ArrowRight02Icon,
  Call02Icon,
  Clock01Icon,
  Location01Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import type { Store } from '@/data/stores'
import { dayName, formatRanges, romeNow, storeStatus } from '@/lib/hours'
import { primaryButton } from './buttons'

// Current minute, re-read every 30s. null on the server and during hydration,
// so the static HTML never bakes in a stale "Aperto/Chiuso".
const subscribe = (tick: () => void) => {
  const id = setInterval(tick, 30_000)
  return () => clearInterval(id)
}
const useMinute = () =>
  useSyncExternalStore(
    subscribe,
    () => Math.floor(Date.now() / 60_000),
    () => null,
  )

const TONES = {
  unknown: { band: '', dot: 'invisible', label: '' },
  open: {
    band: 'bg-[#E3F5EA] text-[#00562B]',
    dot: 'bg-[#00AE52] border-[#00AE52]',
    label: 'text-[#00713A]',
  },
  soon: {
    band: 'bg-[#FFF0D2] text-[#7A4100]',
    dot: 'bg-[#E08A00] border-[#E08A00]',
    label: 'text-[#8A4B00]',
  },
  closed: {
    band: 'bg-[#ECEFF5] text-slate-800',
    dot: 'bg-transparent border-slate-500',
    label: 'text-slate-800',
  },
}

const WEEK_ORDER = [1, 2, 3, 4, 5, 6, 0]

export default function LocationCard({
  store,
  variant = 'full',
}: {
  store: Store
  variant?: 'full' | 'compact'
}) {
  const minute = useMinute()
  const now = minute === null ? null : romeNow(new Date(minute * 60_000))
  const status = now && storeStatus(store.week, now)
  const tone = TONES[status?.tone ?? 'unknown']

  if (variant === 'compact') {
    return (
      <a
        href={`/#${store.id}`}
        className="flex min-h-12 items-center gap-3.5 rounded-2xl border border-line bg-white px-[18px] py-3.5 text-slate-800"
      >
        <span
          aria-hidden="true"
          className={`size-3.5 flex-none rounded-full border-[3px] ${tone.dot}`}
        />
        <span className="flex min-w-0 flex-auto flex-col">
          <strong className="text-[17px] font-bold text-sky-700">
            {store.name}
          </strong>
          <span className="min-h-[1.45em] text-[15.5px] leading-[1.45] text-slate-600">
            {status && (
              <>
                <strong className={`font-bold ${tone.label}`}>
                  {status.label}
                </strong>{' '}
                · {status.sub}
              </>
            )}
          </span>
        </span>
        <HugeiconsIcon
          icon={ArrowRight02Icon}
          size={20}
          className="flex-none text-sky-600"
          aria-hidden="true"
        />
      </a>
    )
  }

  return (
    <article
      id={`dove-siamo--${store.id}`}
      className="flex scroll-mt-6 flex-col overflow-hidden rounded-3xl border border-line bg-white text-[16.5px] leading-[1.45]"
    >
      <Image
        src={store.image}
        alt={store.imageAlt}
        width={1600}
        height={900}
        sizes="(min-width: 1024px) 588px, 100vw"
        className="aspect-video max-h-[300px] w-full object-cover"
        style={{ objectPosition: store.imagePosition }}
      />

      <div
        role="status"
        className={`flex min-h-[63px] items-center gap-3.5 px-6 py-4 ${tone.band}`}
      >
        <span
          aria-hidden="true"
          className={`size-4 flex-none rounded-full border-[3px] ${tone.dot}`}
        />
        {status && (
          <div className="flex flex-wrap items-baseline gap-x-2.5">
            <strong className="text-[21px] font-extrabold">
              {status.label}
            </strong>
            <span className="font-semibold">{status.sub}</span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-[22px] p-6">
        <div className="flex flex-col gap-3">
          <h3 className="text-[30px] leading-[1.1] font-extrabold tracking-[-0.01em] text-sky-800">
            {store.name}
          </h3>
          <div className="flex items-start gap-3">
            <HugeiconsIcon
              icon={Location01Icon}
              size={22}
              className="mt-0.5 flex-none text-slate-500"
              aria-hidden="true"
            />
            <div className="flex flex-col">
              <span className="font-semibold">{store.address[0]}</span>
              <span className="text-slate-600">{store.address[1]}</span>
              {store.note && (
                <span className="text-[15px] text-slate-500">{store.note}</span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <HugeiconsIcon
              icon={Clock01Icon}
              size={22}
              className="flex-none text-slate-500"
              aria-hidden="true"
            />
            <h4 className="text-sm font-bold tracking-[0.08em] text-slate-600 uppercase">
              Orari
            </h4>
          </div>
          <div className="flex flex-col gap-0.5">
            {WEEK_ORDER.map((dow) => {
              const isToday = now?.dow === dow
              const hours = store.week[dow]
              return (
                <div
                  key={dow}
                  className={`flex flex-wrap items-baseline justify-between gap-x-3 rounded-[10px] px-3 py-2 ${
                    isToday
                      ? 'bg-sky-100 font-bold text-sky-800'
                      : 'font-medium'
                  }`}
                >
                  <span className="flex flex-wrap items-baseline gap-x-2">
                    <span>{dayName(dow)}</span>
                    {isToday && (
                      <span className="text-[13px] font-bold tracking-[0.04em] uppercase">
                        Oggi
                      </span>
                    )}
                  </span>
                  <span
                    className={`tabular-nums ${hours.length ? '' : 'text-slate-500'}`}
                  >
                    {formatRanges(hours)}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5">
          <a
            href={store.maps}
            className={`${primaryButton} flex-[1_1_170px] gap-2.5 px-5`}
          >
            <HugeiconsIcon icon={Location01Icon} size={20} aria-hidden="true" />
            Indicazioni
          </a>
          <a
            href={`tel:${store.tel}`}
            className="inline-flex min-h-[52px] flex-[1_1_170px] items-center justify-center gap-2.5 rounded-[14px] border border-sky-200 bg-white px-5 text-[17px] font-bold text-sky-700"
          >
            <HugeiconsIcon icon={Call02Icon} size={20} aria-hidden="true" />
            {store.phone}
          </a>
        </div>
      </div>
    </article>
  )
}
