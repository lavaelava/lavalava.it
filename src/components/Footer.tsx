import Image from 'next/image'
import Link from 'next/link'
import { Facebook02Icon, InstagramIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

const COLUMNS = [
  {
    title: 'Servizi',
    links: [
      { href: '/#servizi', label: 'Tutti i servizi' },
      { href: '/#per-le-lavanderie', label: 'Per le lavanderie' },
    ],
  },
  {
    title: 'Contatti',
    links: [
      { href: '/#dove-siamo', label: 'Punti vendita' },
      { href: 'mailto:info@lavalava.it', label: 'Email' },
    ],
  },
  {
    title: 'Legal',
    label: 'Note legali',
    links: [
      { href: '/legal/privacy-policy', label: 'Privacy' },
      { href: '/legal/cookie-policy', label: 'Cookie Policy' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-rule px-[clamp(20px,4vw,48px)] pt-[clamp(40px,5vw,64px)] pb-8">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-9">
        <div className="flex flex-wrap justify-between gap-x-16 gap-y-9">
          <div className="flex min-w-0 flex-[1_1_280px] flex-col gap-3.5">
            <Image
              src="/logo.svg"
              alt="Lavanderia Lava&Lava"
              width={159}
              height={56}
              className="h-14 w-auto self-start"
              unoptimized
            />
            <p className="text-base text-slate-600">
              Ci prendiamo cura dei tuoi capi dal 1981.
            </p>
            <div className="flex gap-1">
              <a
                href="https://www.facebook.com/lavaelava"
                aria-label="Facebook"
                className="-ml-3 inline-flex size-12 items-center justify-center text-slate-600 hover:text-sky-700"
              >
                <HugeiconsIcon
                  icon={Facebook02Icon}
                  size={24}
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://www.instagram.com/lavanderialavaelava"
                aria-label="Instagram"
                className="inline-flex size-12 items-center justify-center text-slate-600 hover:text-sky-700"
              >
                <HugeiconsIcon
                  icon={InstagramIcon}
                  size={24}
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-16 gap-y-7">
            {COLUMNS.map((col) => (
              <nav
                key={col.title}
                aria-label={col.label ?? col.title}
                className="flex min-w-[150px] flex-col gap-1"
              >
                <h3 className="mb-1.5 text-sm font-bold tracking-[0.08em] text-slate-800 uppercase">
                  {col.title}
                </h3>
                {col.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="inline-flex min-h-9 items-center text-base text-slate-600 hover:text-sky-700"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            ))}
          </div>
        </div>
        <p className="border-t border-rule pt-6 text-[14.5px] text-slate-500">
          © {new Date().getFullYear()} Lava&amp;Lava di Vittorio Fortino &amp; C. S.a.s. - P. IVA:
          01998820508.
        </p>
      </div>
    </footer>
  )
}
