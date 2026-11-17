'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, type ComponentType } from 'react'
import { stores } from '@/data/stores'
import { LaundriesIcon, LocationIcon, ServicesIcon } from './brand-icons'
import { ChevronRightIcon, CloseIcon, MenuIcon } from './icons'
import LocationCard from './LocationCard'

const NAV: {
  href: string
  label: string
  hint: string
  Icon: ComponentType<{ className?: string }>
}[] = [
  {
    href: '/#servizi',
    label: 'Servizi',
    hint: 'Lavaggio a secco, tappeti, sartoria e altro',
    Icon: ServicesIcon,
  },
  {
    href: '/#dove-siamo',
    label: 'Dove siamo',
    hint: 'Pisa e Fornacette, con gli orari di oggi',
    Icon: LocationIcon,
  },
  {
    href: '/#per-le-lavanderie',
    label: 'Per le lavanderie',
    hint: 'Collabora con il nostro laboratorio',
    Icon: LaundriesIcon,
  },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="relative z-20 border-b border-rule bg-white px-[clamp(20px,4vw,48px)] py-3.5">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8">
        <Link href="/" className="flex min-h-12 items-center" onClick={close}>
          <Image
            src="/logo.svg"
            alt="Lavanderia Lava&Lava"
            width={147}
            height={52}
            className="h-[52px] w-auto"
            priority
            unoptimized
          />
        </Link>

        <nav
          aria-label="Principale"
          className="hidden items-center gap-x-7 md:flex"
        >
          {NAV.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="inline-flex min-h-12 items-center text-base font-semibold text-slate-800 hover:text-sky-700"
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          className={`-mr-2 inline-flex size-12 items-center justify-center rounded-xl text-sky-800 md:hidden ${open ? 'bg-sky-100' : ''}`}
        >
          {open ? (
            <CloseIcon className="size-7 stroke-[1.75]" />
          ) : (
            <MenuIcon className="size-7 stroke-[1.75]" />
          )}
        </button>
      </div>

      {open && (
        <div
          id="menu-mobile"
          className="absolute inset-x-0 top-full border-b border-line bg-white px-5 pt-2 pb-6 shadow-[0_24px_40px_-12px_rgba(7,89,133,0.22)] md:hidden"
        >
          <nav aria-label="Menu" className="flex flex-col">
            {NAV.map(({ href, label, hint, Icon }) => (
              <a
                key={href}
                href={href}
                onClick={close}
                className="flex min-h-[72px] items-center gap-4 border-b border-rule py-2.5 text-slate-800 last:border-b-0"
              >
                <Icon className="size-11 flex-none text-sky-600" />
                <span className="flex min-w-0 flex-auto flex-col">
                  <span className="text-lg font-bold text-sky-800">
                    {label}
                  </span>
                  <span className="text-[15px] text-slate-600">{hint}</span>
                </span>
                <ChevronRightIcon className="size-5 flex-none text-sky-700" />
              </a>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2.5 rounded-[18px] bg-sky-50 p-4">
            <h2 className="text-sm font-bold tracking-[0.08em] text-slate-600 uppercase">
              Oggi in negozio
            </h2>
            {stores.map((store) => (
              <div key={store.id} onClick={close}>
                <LocationCard store={store} variant="compact" />
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
