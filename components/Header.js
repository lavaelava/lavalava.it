import Link from 'next/link'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

export default function Header() {
  return (
    <header className="font-gilroy">
      <Popover className="relative bg-white">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between px-4 py-6 mx-auto max-w-7xl sm:px-6 md:justify-start md:space-x-10 lg:px-8">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  <a>
                    <span>
                      <span className="sr-only">Lava&Lava</span>
                      <img
                        className="w-auto h-8 sm:h-10"
                        src="/logo.svg"
                        height={40}
                        width={113}
                        alt="Lava&Lava"
                      />
                    </span>
                  </a>
                </Link>
              </div>
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                  <span className="sr-only">Apri menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <nav className="hidden space-x-10 md:flex">
                <Link href="/#servizi">
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Servizi
                  </a>
                </Link>
                <Link href="/#domicilio">
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Lavanderia a domicilio
                  </a>
                </Link>
                <Link href="/#dove-siamo">
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Dove siamo
                  </a>
                </Link>
                <Link href="/#per-le-lavanderie">
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Per le lavanderie
                  </a>
                </Link>
              </nav>
              <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
                <a
                  href="https://ordini.lavalava.it"
                  className="inline-flex items-center justify-center px-4 py-2 ml-8 font-medium text-white rounded-md shadow whitespace-nowrap bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
                >
                  Ordina online
                </a>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute inset-x-0 top-0 z-30 p-2 transition origin-top-right md:hidden"
              >
                <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                  <div className="px-5 pt-5 pb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          className="w-auto h-8 sm:h-10"
                          src="/logo.svg"
                          height={40}
                          width={113}
                          alt="Lava&Lava"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                          <span className="sr-only">Chiudi menu</span>
                          <XIcon className="w-6 h-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid grid-cols-1 gap-7">
                        <Link href="/#servizi">
                          <a className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50">
                            <svg
                              className="w-10 h-10 text-cyan-700"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 60 60"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M46.77 20.48a19.29 19.29 0 100 19.04m0-19.04c.27-.46.54-.91.84-1.35m-.84 1.35a19.27 19.27 0 000 19.04m0 0c.27.46.54.91.84 1.35M16.7 38.39c1.9 1.49 5.16 1.16 7.52.45 2.36-.71 4.43-2.05 6.62-3.14 3.12-1.7 6.54-2.79 10.07-3.18m-7.53 1.67s-9.07-3.35-18.47 0M56 30a26 26 0 11-52 0 26 26 0 0152 0z"
                              />
                            </svg>
                            <div className="ml-4 text-base font-medium text-gray-900">
                              Servizi
                            </div>
                          </a>
                        </Link>
                        <Link href="/#domicilio">
                          <a className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50">
                            <svg
                              className="w-10 h-10 text-cyan-700"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 60 60"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10.71 50.97a5.03 5.03 0 1010.06 0 5.03 5.03 0 00-10.06 0zm0 0H7.35A3.35 3.35 0 014 47.6v-21.8a3.36 3.36 0 013.35-3.36h27.99a13.42 13.42 0 0110.43 4.98l7.24 8.94A13.42 13.42 0 0156 44.82v2.8a3.35 3.35 0 01-3.35 3.35h-1.68m-10.9-21.8v3.35a3.36 3.36 0 003.35 3.35h3.35m-25.16 15.1h17.62M22.45 14.9H19.1m31.87 0h-1.68a2.52 2.52 0 00-3.75-2.18A5.89 5.89 0 0034.2 14.9h-7.54m-2.52-6.7a4.2 4.2 0 00-8.39 0h-6.7m9.22 22.64A3.36 3.36 0 1122.74 34a1.62 1.62 0 00-1.13 1.5v2.05M9.87 40.06s11.74-3.35 23.48 0m16.78 10.9a5.03 5.03 0 11-10.07 0 5.03 5.03 0 0110.07 0z"
                              />
                            </svg>
                            <div className="ml-4 text-base font-medium text-gray-900">
                              Lavanderia a domicilio
                            </div>
                          </a>
                        </Link>
                        <Link href="/#dove-siamo">
                          <a className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50">
                            <svg
                              className="w-10 h-10 text-cyan-700"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 60 60"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M18.26 50.13l1.68-4.2m-1.68 4.2L4 56l7.55-17.61 1.68-.84m5.03 12.58L30 56l11.74-5.87m0 0l-1.68-4.2m1.68 4.2L56 56l-7.55-17.61-1.68-.84M26.65 19.1a3.36 3.36 0 114.48 3.16 1.62 1.62 0 00-1.13 1.5v2.05m-11.74 2.51s11.74-3.35 23.48 0m6.71-5.87C48.45 36.71 30 50.13 30 50.13S11.55 36.7 11.55 22.45a18.45 18.45 0 1136.9 0z"
                              />
                            </svg>
                            <div className="ml-4 text-base font-medium text-gray-900">
                              Dove siamo
                            </div>
                          </a>
                        </Link>
                        <Link href="/#per-le-lavanderie">
                          <a className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50">
                            <svg
                              className="w-10 h-10 text-cyan-700"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 60 60"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M37.26 10.8a4.89 4.89 0 00-3.8-1.77h-6.91a4.89 4.89 0 00-3.81 1.77m-5.32-1.77L16.58 30l10.9-2.52m15.1-18.45L43.42 30l-10.9-2.52M19.94 54.32H5.68A1.68 1.68 0 014 52.65V14.17a3.35 3.35 0 012.54-3.26L17.42 8.2m25.16 0l10.88 2.72A3.35 3.35 0 0156 14.17v38.48a1.68 1.68 0 01-1.68 1.67H35.87M30.84 34.2h2.51m0 0L35.03 56H24.97l1.68-21.8-1.68-5.88m8.38 5.87l1.68-5.87M21.98 4h16.04a4.2 4.2 0 013.47 6.55l-8.71 12.84a3.36 3.36 0 01-5.56 0l-8.71-12.84A4.2 4.2 0 0121.98 4z"
                              />
                            </svg>
                            <div className="ml-4 text-base font-medium text-gray-900">
                              Per le lavanderie
                            </div>
                          </a>
                        </Link>
                      </nav>
                    </div>
                  </div>
                  <div className="px-5 py-6">
                    <div>
                      <a
                        href="https://ordini.lavalava.it"
                        className="flex items-center justify-center w-full px-4 py-2 font-medium text-white rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
                      >
                        Ordina online
                      </a>
                      <p className="mt-6 text-base font-medium text-center text-gray-500">
                        Preferisci venire in negozio?{' '}
                        <a href="#dove-siamo" className="text-gray-900">
                          Scopri dove siamo
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </header>
  )
}
