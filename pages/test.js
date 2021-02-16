import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faTshirt, faVirus } from '@fortawesome/pro-regular-svg-icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lava&Lava</title>
        <meta
          name="description"
          content="Lavaggio a secco e ad acqua, sanificazione ad ozono e lavaggio tappeti. Questi sono solo alcuni dei servizi che offriamo da Lava&Lava. Vieni a trovarci: siamo a Pisa e a Fornacette."
        />
      </Head>

      <div className="bg-white">
        <header>
          <div className="relative bg-white">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="sr-only">Lava&Lava</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="/logo.svg"
                    height={40}
                    width={113}
                    alt="Lava&Lava"
                  />
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
                >
                  <span className="sr-only">Open menu</span>
                  {/* Heroicon name: outline/menu */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <nav className="hidden md:flex space-x-10">
                <div className="relative">
                  {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
                  <button
                    type="button"
                    className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    <span>Solutions</span>
                    {/*
          Heroicon name: solid/chevron-down

          Item active: "text-gray-600", Item inactive: "text-gray-400"
        */}
                    <svg
                      className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {/*
        'Solutions' flyout menu, show/hide based on flyout menu state.

        Entering: "transition ease-out duration-200"
          From: "opacity-0 translate-y-1"
          To: "opacity-100 translate-y-0"
        Leaving: "transition ease-in duration-150"
          From: "opacity-100 translate-y-0"
          To: "opacity-0 translate-y-1"
      */}
                  <div className="hidden absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 text-white sm:h-12 sm:w-12">
                            {/* Heroicon name: outline/inbox */}
                            <svg
                              className="h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Inbox
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Get a better understanding of where your traffic
                              is coming from.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 text-white sm:h-12 sm:w-12">
                            {/* Heroicon name: outline/annotation */}
                            <svg
                              className="h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Messaging
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Speak directly to your customers in a more
                              meaningful way.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 text-white sm:h-12 sm:w-12">
                            {/* Heroicon name: outline/chat-alt-2 */}
                            <svg
                              className="h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Live Chat
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Your customers' data will be safe and secure.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 text-white sm:h-12 sm:w-12">
                            {/* Heroicon name: outline/question-mark-circle */}
                            <svg
                              className="h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Knowledge Base
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Connect with third-party tools that you're already
                              using.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Partners
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Company
                </a>
              </nav>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a
                  href="#"
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Sign in
                </a>
                <a
                  href="#"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
                >
                  Sign up
                </a>
              </div>
            </div>
            {/*
  Mobile menu, show/hide based on mobile menu state.

  Entering: "duration-200 ease-out"
    From: "opacity-0 scale-95"
    To: "opacity-100 scale-100"
  Leaving: "duration-100 ease-in"
    From: "opacity-100 scale-100"
    To: "opacity-0 scale-95"
*/}
            <div className="hidden absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="/logo.svg"
                        height={40}
                        width={113}
                        alt="Lava&Lava"
                      />
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
                      >
                        <span className="sr-only">Close menu</span>
                        {/* Heroicon name: outline/x */}
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid grid-cols-1 gap-7">
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
                          {/* Heroicon name: outline/inbox */}
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                            />
                          </svg>
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">
                          Inbox
                        </div>
                      </a>
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
                          {/* Heroicon name: outline/annotation */}
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            />
                          </svg>
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">
                          Messaging
                        </div>
                      </a>
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
                          {/* Heroicon name: outline/chat-alt-2 */}
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                            />
                          </svg>
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">
                          Live Chat
                        </div>
                      </a>
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
                          {/* Heroicon name: outline/question-mark-circle */}
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">
                          Knowledge Base
                        </div>
                      </a>
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5">
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Pricing
                    </a>
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Partners
                    </a>
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Company
                    </a>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-4 py-2 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
                    >
                      Sign up
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer?
                      <a href="#" className="text-gray-900">
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* Hero section */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  {/* <img
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                    alt="People working on laptops"
                  /> */}
                  <Image
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/images/hero-2.jpg"
                    layout="fill"
                    alt="Mamma e figlia che odorano il bucato"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">
                      Take control of your
                    </span>
                    <span className="block text-cyan-200">
                      customer support
                    </span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-cyan-100 sm:max-w-3xl">
                    Professionalità e innovazione sono per Lava&Lava punti di
                    riferimento per continuare ad offrire un servizio efficiente
                    e di qualità.
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                      <a
                        href="#dove-siamo"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-cyan-700 bg-white hover:bg-cyan-50 focus:outline-none focus:ring focus:ring-cyan-300 sm:px-8"
                      >
                        Dove siamo
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-500 bg-opacity-60 hover:bg-opacity-70 focus:outline-none focus:ring focus:ring-white sm:px-8"
                      >
                        Scopri di più
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Logo Cloud */}
          <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                Trusted by over 5 very average small businesses
              </p>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                    alt="Tuple"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                    alt="Mirage"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                    alt="StaticKit"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                    alt="Transistor"
                  />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                    alt="Workcation"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Alternating Feature Sections */}
          <div className="relative pt-16 pb-32 overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
            />
            <div className="relative">
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                  <div>
                    <div>
                      <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600">
                        {/* Heroicon name: outline/inbox */}
                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        La camicia conveniente
                      </h2>
                      <p className="mt-4 text-lg text-gray-500">
                        Semper curabitur ullamcorper posuere nunc sed. Ornare
                        iaculis bibendum malesuada faucibus lacinia porttitor.
                        Pulvinar laoreet sagittis viverra duis. In venenatis sem
                        arcu pretium pharetra at. Lectus viverra dui tellus
                        ornare pharetra.
                      </p>
                      <div className="mt-6">
                        <Link href="/promo/la-camicia-conveniente">
                          <a className="inline-flex py-2 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400">
                            Vedi i prezzi
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <blockquote>
                      <div>
                        <p className="text-base text-gray-500">
                          “Cras velit quis eros eget rhoncus lacus ultrices sed
                          diam. Sit orci risus aenean curabitur donec aliquet.
                          Mi venenatis in euismod ut.”
                        </p>
                      </div>
                      <footer className="mt-3">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <img
                              className="h-6 w-6 rounded-full"
                              src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                              alt=""
                            />
                          </div>
                          <div className="text-base font-medium text-gray-700">
                            Marcia Hill, Digital Marketing Manager
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0">
                  <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                    <img
                      className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="/images/shirt.jpg"
                      alt="Inbox user interface"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-24">
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                  <div>
                    <div>
                      <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600">
                        {/* Heroicon name: outline/sparkles */}
                        <svg
                          className="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        Continuiamo ad innovarci dal 1981
                      </h2>
                      <p className="mt-4 text-lg text-gray-500">
                        Nata a Pisa nel 1981 con perseveranza e determinazione
                        della Signora Raffaella Lava&Lava é diventata, con
                        l'ingresso del figlio Vittorio, punto di riferimento per
                        tutto il territorio.
                        <span className="block">
                          Nel 2017 abbiamo avviato un laboratorio attrezzato con
                          macchinari moderni per rispondere alla crescente
                          domanda.
                        </span>
                        <span className="block">
                          Infine nel Febbraio 2020 abbiamo aperto un nuovo punto
                          vendita presso il centro commerciale Pam Panorama di
                          Fornacette.
                        </span>
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="inline-flex py-2 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
                        >
                          Scopri i nostri servizi
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                  <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                    <img
                      className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="/images/old-laundry.jpg"
                      alt="Customer profile user interface"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gradient Feature Section */}
          {/* <div className="bg-gradient-to-r from-teal-500 to-cyan-600"> */}
          <div>
            <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                I nostri principali servizi
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-gray-500">
                In oltre quarant'anni di esperienza abbiamo ampliato le nostre
                competenze e continuato ad investre in nuove tecnologie per
                migliorare ed incrementare i nostri servizi.
              </p>
              <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                <div>
                  <div>
                    {/* <span className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-800 bg-opacity-10">
                      <svg
                        className="h-6 w-6 text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        />
                      </svg>
                    </span> */}
                    <svg
                      className="h-12 w-12 text-cyan-700"
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
                        d="M46.77 20.48a19.29 19.29 0 100 19.04m0-19.04c.27-.46.54-.91.84-1.35m-.84 1.35a19.27 19.27 0 000 19.04m0 0c.27.46.54.91.84 1.35M56 30a26 26 0 11-52 0 26 26 0 0152 0zm-18.66 6.94l1.66.56-1.66.56c-.66.23-1.27.63-1.76 1.17-.5.55-.86 1.21-1.07 1.95L34 43l-.51-1.82c-.2-.74-.57-1.4-1.07-1.95-.49-.54-1.1-.94-1.76-1.17L29 37.5l1.66-.56a4.23 4.23 0 001.76-1.17c.5-.55.86-1.21 1.07-1.95L34 32l.51 1.82c.2.74.57 1.4 1.07 1.95.49.54 1.1.94 1.76 1.17zm-8.83-8.2l2.49.76-2.49.77a6.43 6.43 0 00-4.24 4.24L23.5 37l-.77-2.49a6.43 6.43 0 00-4.25-4.24L16 29.5l2.48-.77a6.43 6.43 0 004.25-4.24L23.5 22l.77 2.49a6.43 6.43 0 004.24 4.24z"
                      />
                    </svg>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Lavaggio a secco
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      Utilizziamo il solvente di ultima generazione SENSENE™
                      ecologicamente responsabile ed a basso impatto ambientale.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    {/* <span className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 bg-opacity-10">
                      <svg
                        className="h-6 w-6 text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </span> */}
                    <svg
                      className="h-12 w-12 text-cyan-700"
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
                        d="M19.05 20.73L24.1 39.2l5.88-15.95 5.88 15.95 5.04-18.47M47.6 51.8a4.2 4.2 0 01-4.2-4.2m12.15-12.84a26 26 0 10-19.04 20.41M56 47.6a8.4 8.4 0 11-16.8 0c0-5.04 6.72-11.76 8.4-16.8 1.68 5.04 8.4 11.76 8.4 16.8z"
                      />
                    </svg>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Wet-cleaning
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      Laviamo ad acqua con tecnologia Wet-cleaning e l'utilizzo
                      di detergenti ad alta sanificazione.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    {/* <span className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 bg-opacity-10">
                      <svg
                        className="h-6 w-6 text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </span> */}
                    <svg
                      className="h-12 w-12 text-cyan-700"
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
                        d="M28.32 12.39h24.33A3.36 3.36 0 0056 9.03V4H4v5.03a3.35 3.35 0 003.35 3.36h9.23m-10.9 3.35V56h11c-.01-7.3-.61-14.6-1.78-21.8m0 0a23.68 23.68 0 003.8-5.88m-3.8 5.87H12.4M10.7 24.13s0 4.2 1.68 6.7m0 6.72a7.35 7.35 0 00-1.68 5.03m21.8 12.58V56m17.62-.84V56M40.06 27.48h5.88a6.71 6.71 0 016.7 6.71v3.36m-22.64 0v-1.68m4.2 8.3c4.7-1 9.55-1 14.25 0m3.75-6.68a3.65 3.65 0 00-3.75 3.68v7.28H34.2v-7.28a3.65 3.65 0 00-3.74-3.68 3.74 3.74 0 00-3.8 3.68A3.66 3.66 0 0030 44.84v9.48h22.65v-9.48a3.66 3.66 0 00.98-7.09 3.74 3.74 0 00-1.43-.26zm-12.97-4.14a.84.84 0 11-1.68 0 .84.84 0 011.68 0zm5.87 0a.84.84 0 11-1.68 0 .84.84 0 011.68 0zm-5.87 5.04a.84.84 0 11-1.68 0 .84.84 0 011.68 0zm5.87 0a.84.84 0 11-1.68 0 .84.84 0 011.68 0zM35.03 27.83l1.68.52-1.68.52a4.34 4.34 0 00-2.86 2.87l-.52 1.67-.52-1.67a4.34 4.34 0 00-2.87-2.87l-1.67-.52 1.67-.52a4.34 4.34 0 002.87-2.86l.52-1.68.52 1.68a4.34 4.34 0 002.86 2.86zm-8.06-9l2.4.73-2.4.74a6.2 6.2 0 00-4.1 4.1l-.74 2.39-.74-2.4a6.2 6.2 0 00-4.1-4.1l-2.39-.73 2.4-.74a6.2 6.2 0 004.1-4.1l.73-2.4.74 2.4a6.2 6.2 0 004.1 4.1z"
                      />
                    </svg>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Tappeti, tappezzeria e tendaggi
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      Laviamo tappeti anche antichi o pregiati, a secco o ad
                      acqua, con trattamento anti-acaro e anti-tarme.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    {/* <span className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 bg-opacity-10">
                      <svg
                        className="h-6 w-6 text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </span> */}
                    <svg
                      className="h-12 w-12 text-cyan-700"
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
                        d="M45.57 34.73l4.18 4.15-2.18 2.16a2.51 2.51 0 00.2 3.75l7.1 5.63a3 3 0 01-3.27 5.02c-.38-.2-.71-.47-.98-.8l-5.67-7.04a2.53 2.53 0 00-3.77-.21l-2.17 2.16-4.18-4.15m10.74-10.67L34.83 45.4m10.74-10.67l-5.37-5.34-10.74 10.68 5.37 5.33m3.2-13.4l1.33 1.35m-6.26 3.22l2.53 2.52m8.05-13.34a13.49 13.49 0 017.49-6.79l-4.98-8.25h-.01A8.42 8.42 0 0132.68 4h-10.2a8.34 8.34 0 01-2.47 5.93 8.46 8.46 0 01-11.02.77v.01L4 18.96c5.35 1.8 9.2 7.64 9.2 13.56a14.19 14.19 0 01-9.17 13.54l7.38 8.14a9.25 9.25 0 0112.84-2.45 8.96 8.96 0 013.3 4.25h.07a9.14 9.14 0 015.36-5.33M26.5 36.91a31.27 31.27 0 01-6.55-18.38m15.24 0c.38 2.54 1.24 5 2.53 7.22"
                      />
                    </svg>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Capi in pelle e pellicce
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      Effettuiamo il lavaggio di capi in pelle, camoscio,
                      pellicce e ceratura di Barbour.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    {/* <span className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 bg-opacity-10">
                      <svg
                        className="h-6 w-6 text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span> */}
                    <svg
                      className="h-12 w-12 text-cyan-700"
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
                        d="M38.63 31.95a9.45 9.45 0 11-5.22 6.25M22.45 17.91h8.39a3.35 3.35 0 013.35 3.36v4.2m-21.8-1.68v10.07m2.51-1.68h-4.19L9.03 30.5m12.58 7.55H4v7c0 .36.12.71.34 1L6 48.3a1.68 1.68 0 001.34.67h18.46m-20.97-4.2h5.03m9.23-27.69v3.36a2.52 2.52 0 01-2.52 2.52H7.35l-2.61-3.28a3.36 3.36 0 01-.74-2.1V9.52A2.52 2.52 0 016.52 7h40.25A9.22 9.22 0 0156 16.23v5.1a8.4 8.4 0 01-.6 3.12l-1.08 2.7M12.4 11.2v6.71m-.84-5.87h1.68M56 40.57a13.42 13.42 0 11-26.85.01 13.42 13.42 0 0126.85 0zm-15.1-2.94a1.26 1.26 0 11-2.51 0 1.26 1.26 0 012.51 0zm5.87 0a1.26 1.26 0 11-2.51 0 1.26 1.26 0 012.51 0zm0 5.88a1.26 1.26 0 11-2.51 0 1.26 1.26 0 012.51 0zm-5.87 0a1.26 1.26 0 11-2.51 0 1.26 1.26 0 012.51 0zm6.71-27.28a3.36 3.36 0 11-6.7 0 3.36 3.36 0 016.7 0z"
                      />
                    </svg>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Riparazioni sartoriali
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      Eseguiamo piccole riparazioni come orli, cambi cerniera,
                      stringere/allargare girovita, sostituzione bottoni, ecc.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    {/* <span className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 bg-opacity-10">
                      <svg
                        className="h-6 w-6 text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                        />
                      </svg>
                    </span> */}
                    <svg
                      className="h-12 w-12 text-cyan-700"
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
                        d="M33.35 27.46h1.67a1.66 1.66 0 011.66 1.68 1.68 1.68 0 01-1.66 1.67m0 0h-.83m.83 0a1.66 1.66 0 011.66 1.68 1.68 1.68 0 01-1.66 1.67h-1.67M6.5 16.56a20.25 20.25 0 003.82 21.15M39.19 9.92a19.96 19.96 0 00-20.82-4.78m-3.75 45.78a4.56 4.56 0 01-4.58-4.6m40.23-4.66a8.7 8.7 0 01-7.8 7.85m-29.1-12.75a9.57 9.57 0 00-8.1 7.28 9.72 9.72 0 003.84 10.22 9.56 9.56 0 0014.41-4.37c.72-1.81.87-3.8.44-5.7a20.22 20.22 0 004.59-.29c.06 0 .12-.02.18-.04 1.9-.35 3.74-.98 5.46-1.87M45.1 27.94a13.28 13.28 0 019.43 9.44 13.47 13.47 0 01-3.4 12.94 13.28 13.28 0 01-12.84 3.5 13.28 13.28 0 01-9.44-9.42m15.01-13.59a20.31 20.31 0 00.5-11.74 7.45 7.45 0 006.44-4.03 7.58 7.58 0 00-3.3-10.25 7.45 7.45 0 00-10.1 3.54M24.6 32.49a5.41 5.41 0 01-5.4-5.45v-5.03a5.48 5.48 0 015.4-5.44A5.41 5.41 0 0130.02 22v5.03a5.48 5.48 0 01-5.4 5.45zm-7.29-21.73l2.71.78-2.71.78a5.82 5.82 0 00-4 4.03l-.78 2.73-.77-2.73a5.87 5.87 0 00-4-4.03l-2.72-.78 2.71-.78a5.82 5.82 0 004-4.03L12.55 4l.78 2.73a5.87 5.87 0 004 4.03z"
                      />
                    </svg>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Sanificazione ad ozono
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      Eliminiamo muffe, acari, virus, batteri e cattivi odori da
                      cuscini, caschi moto, passeggini, valigie, ecc. con
                      l'innovativo sistema di igienizzazione ad ozono.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Where */}
          <div
            id="dove-siamo"
            className="bg-gradient-to-r from-teal-500 to-cyan-600"
          >
            <div className="pt-12 sm:pt-16 lg:pt-24">
              <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
                  <h2 className="text-lg leading-6 font-semibold text-cyan-100 uppercase tracking-wider">
                    Dove siamo
                  </h2>
                  <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                    Vieni a trovarci in negozio
                  </p>
                  <p className="text-xl text-cyan-100">
                    Trova il punto vendita Lava&Lava più vicino a te.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
              <div className="relative">
                <div className="absolute inset-0 h-3/4 bg-gradient-to-r from-teal-500 to-cyan-600"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                      <div className="relative h-60 flex-shrink-0">
                        <Image
                          className="object-cover"
                          src="/images/lava-e-lava--pisa.jpg"
                          layout="fill"
                          alt="Facciata del punto vendita Lava&Lava a Pisa"
                        />
                        <div className="absolute top-6 left-6">
                          <h3
                            className="inline-flex px-4 py-1 rounded-full text-base font-semibold tracking-wide uppercase bg-cyan-100 text-cyan-600"
                            id="pisa"
                          >
                            Pisa
                          </h3>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              {/* Heroicon name: location-marker */}
                              <svg
                                className="h-6 w-6 text-cyan-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            </div>
                            <a
                              href="https://g.page/lavaelava"
                              className="ml-3 text-lg text-gray-700 underline hover:text-gray-900"
                            >
                              Via Benedetto Croce, 81 <br />
                              56125, Pisa (PI)
                            </a>
                          </li>

                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              {/* Heroicon name: phone */}
                              <svg
                                className="h-6 w-6 text-cyan-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                              </svg>
                            </div>
                            <a
                              href="tel:+3905041046"
                              className="ml-3 text-lg text-gray-700 underline hover:text-gray-800"
                            >
                              050 41046
                            </a>
                          </li>

                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              {/* Heroicon name: clock */}
                              <svg
                                className="h-6 w-6 text-cyan-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                            <ul className="ml-3 w-full text-lg text-gray-700">
                              <li className="flex justify-between">
                                Lunedì
                                <span className="font-medium">
                                  08:30-13, 15:30-19
                                </span>
                              </li>
                              <li className="flex justify-between">
                                Martedì
                                <span className="font-medium">
                                  08:30-13, 15:30-19
                                </span>
                              </li>
                              <li className="flex justify-between">
                                Mercoledì
                                <span className="font-medium">
                                  08:30-13, 15:30-19
                                </span>
                              </li>
                              <li className="flex justify-between">
                                Giovedì
                                <span className="font-medium">
                                  08:30-13, 15:30-19
                                </span>
                              </li>
                              <li className="flex justify-between">
                                Venerdì
                                <span className="font-medium">
                                  08:30-13, 15:30-19
                                </span>
                              </li>
                              <li className="flex justify-between">
                                Sabato{' '}
                                <span className="font-medium">Chiuso</span>
                              </li>
                              <li className="flex justify-between">
                                Domenica{' '}
                                <span className="font-medium">Chiuso</span>
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="rounded-full shadow">
                          <a
                            href="https://goo.gl/maps/Kh1QRqXv1YmUnKBu5"
                            className="flex items-center justify-center px-5 py-3 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
                            aria-describedby="tier-standard"
                          >
                            Ottieni Indicazioni
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      id="dove-siamo--fornacette"
                      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    >
                      <div className="relative h-60 flex-shrink-0">
                        <Image
                          className="object-cover"
                          src="/images/lava-e-lava--fornacette.jpg"
                          layout="fill"
                          alt="Facciata del punto vendita Lava&Lava a Fornacette"
                        />
                        <div className="absolute top-6 left-6">
                          <h3
                            className="inline-flex px-4 py-1 rounded-full text-base font-semibold tracking-wide uppercase bg-cyan-100 text-cyan-600"
                            id="fornacette"
                          >
                            Fornacette
                          </h3>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              {/* Heroicon name: location-marker */}
                              <svg
                                className="h-6 w-6 text-cyan-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            </div>
                            <div className="ml-3">
                              <a
                                href="https://g.page/lavaelava-fornacette"
                                className="text-lg text-gray-700 underline hover:text-gray-800"
                              >
                                Piazza Kolbe, 15
                                <br />
                                56012, Fornacette (PI)
                              </a>
                              <p className="text-base text-gray-700">
                                (presso centro commerciale Pam Panorama)
                              </p>
                            </div>
                          </li>

                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              {/* Heroicon name: phone */}
                              <svg
                                className="h-6 w-6 text-cyan-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                              </svg>
                            </div>
                            <a
                              href="tel:+390587477444"
                              className="ml-3 text-lg text-gray-700 underline hover:text-gray-800"
                            >
                              0587 477444
                            </a>
                          </li>

                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              {/* Heroicon name: clock */}
                              <svg
                                className="h-6 w-6 text-cyan-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                            <ul className="ml-3 w-full text-lg text-gray-700">
                              <li className="flex justify-between">
                                Lunedì
                                <span className="font-medium">16-19:30</span>
                              </li>
                              <li className="flex justify-between">
                                Martedì
                                <span className="font-medium">08:30-12:30</span>
                              </li>
                              <li className="flex justify-between">
                                Mercoledì
                                <span className="font-medium">Chiuso</span>
                              </li>
                              <li className="flex justify-between">
                                Giovedì
                                <span className="font-medium">08:30-12:30</span>
                              </li>
                              <li className="flex justify-between">
                                Venerdì
                                <span className="font-medium">16-19:30</span>
                              </li>
                              <li className="flex justify-between">
                                Sabato{' '}
                                <span className="font-medium">08:30-12:30</span>
                              </li>
                              <li className="flex justify-between">
                                Domenica{' '}
                                <span className="font-medium">Chiuso</span>
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="rounded-full shadow">
                          <a
                            href="https://goo.gl/maps/fxpdmBXMkoCMetkU7"
                            className="flex items-center justify-center px-5 py-3 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
                            aria-describedby="tier-standard"
                          >
                            Ottieni Indicazioni
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="relative bg-gray-900">
            <div className="h-80 absolute bottom-0 xl:inset-0 xl:h-full xl:w-full">
              <div className="h-full w-full xl:grid xl:grid-cols-2">
                <div className="h-full xl:relative xl:col-start-2">
                  <img
                    className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                    alt="People working on laptops"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                  />
                </div>
              </div>
            </div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
              <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                <h2 className="text-sm font-semibold tracking-wide uppercase">
                  <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                    Valuable Metrics
                  </span>
                </h2>
                <p className="mt-3 text-3xl font-extrabold text-white">
                  Get actionable data that will help grow your business
                </p>
                <p className="mt-5 text-lg text-gray-300">
                  Rhoncus sagittis risus arcu erat lectus bibendum. Ut in
                  adipiscing quis in viverra tristique sem. Ornare feugiat
                  viverra eleifend fusce orci in quis amet. Sit in et vitae
                  tortor, massa. Dapibus laoreet amet lacus nibh integer quis.
                  Eu vulputate diam sit tellus quis at.
                </p>
                <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                  <p>
                    <span className="block text-2xl font-bold text-white">
                      8K+
                    </span>
                    <span className="mt-1 block text-base text-gray-300">
                      <span className="font-medium text-white">Companies</span>{' '}
                      use laoreet amet lacus nibh integer quis.
                    </span>
                  </p>
                  <p>
                    <span className="block text-2xl font-bold text-white">
                      25K+
                    </span>
                    <span className="mt-1 block text-base text-gray-300">
                      <span className="font-medium text-white">
                        Countries around the globe
                      </span>{' '}
                      lacus nibh integer quis.
                    </span>
                  </p>
                  <p>
                    <span className="block text-2xl font-bold text-white">
                      98%
                    </span>
                    <span className="mt-1 block text-base text-gray-300">
                      <span className="font-medium text-white">
                        Customer satisfaction
                      </span>{' '}
                      laoreet amet lacus nibh integer quis.
                    </span>
                  </p>
                  <p>
                    <span className="block text-2xl font-bold text-white">
                      12M+
                    </span>
                    <span className="mt-1 block text-base text-gray-300">
                      <span className="font-medium text-white">
                        Issues resolved
                      </span>{' '}
                      lacus nibh integer quis.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* CTA Section */}
          <div className="bg-white">
            <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">Ready to get started?</span>
                <span className="block bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
                  Get in touch or create an account.
                </span>
              </h2>
              <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-3 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
                >
                  Learn more
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-cyan-800 bg-cyan-100 hover:bg-cyan-200"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-gray-50" aria-labelledby="footerHeading">
          <h2 id="footerHeading" className="sr-only">
            Footer
          </h2>
          <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:pt-24 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                      Solutions
                    </h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <a
                          href="#"
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          Marketing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          Analytics
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          Commerce
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          Insights
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                      Support
                    </h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <a
                          href="#"
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          Guides
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          API Status
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                      Company
                    </h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <a
                          href="#"
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          Jobs
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          Press
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          Partners
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                      Legal
                    </h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <a
                          href="#"
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          Claim
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          Privacy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          Terms
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-12 xl:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Subscribe to our newsletter
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  The latest news, articles, and resources, sent to your inbox
                  weekly.
                </p>
                <form className="mt-4 sm:flex sm:max-w-md">
                  <label htmlFor="emailAddress" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    id="emailAddress"
                    autoComplete="email"
                    required
                    className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center px-4 py-3 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
              <div className="flex space-x-6 md:order-2">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Facebook</span>
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
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Instagram</span>
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
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Dribbble</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                © 2020 Workflow, Inc. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
