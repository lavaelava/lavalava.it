import Image from 'next/image'
import Link from 'next/link'

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
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/lavanderialavaelava"
                aria-label="Instagram"
                className="inline-flex size-12 items-center justify-center text-slate-600 hover:text-sky-700"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
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
