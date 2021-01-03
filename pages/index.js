import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lava&Lava</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <div className="relative bg-gray-50">
        <div className="relative bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="/">
                  <span className="sr-only">Lava&Lava</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="/logo.svg"
                    alt="Lava&Lava"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hero */}
        <main className="lg:relative">
          <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
            <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
              <h1 className="text-4xl tracking-tight font-extrabold text-light-blue-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="inline xl:block">
                  <span className="block xl:inline">Ci prendiamo cura</span> dei
                  tuoi capi
                </span>
                <span className="inline xl:block text-light-blue-600">
                  {' '}
                  dal 1981
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                Professionalità e innovazione sono per Lava&Lava punti di
                riferimento per continuare ad offrire un servizio efficiente e
                di qualità.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-full shadow">
                  <Link href="/" passHref>
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 md:py-4 md:text-lg md:px-10">
                      Scopri di più
                    </a>
                  </Link>
                </div>

                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="/#dove-siamo" passHref>
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-light-blue-700 bg-light-blue-100 hover:bg-light-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 md:py-4 md:text-lg md:px-10">
                      Dove siamo
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <Image
              className="absolute inset-0 w-full h-full object-cover"
              src="/images/hero.jpg"
              layout="fill"
              alt=""
            />
          </div>
        </main>
      </div>

      {/* Feature Section */}
      <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <svg
            className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
            />
          </svg>

          <div className="relative">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Un po' su di noi
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              Da piccola realtà ad azienda in continua crescita.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                I nostri principali servizi
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                In oltre quarant'anni di esperienza abbiamo ampliato le nostre
                competenze e continuato ad investre in nuove tecnologie per
                migliorare ed incrementare i nostri servizi.
              </p>

              <dl className="mt-10 space-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-light-blue-500 text-white">
                      {/* Heroicon name: globe-alt */}
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
                          strokeWidth="2"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Lavaggio a secco e ad acqua
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Utilizziamo, per il lavaggio a secco, il solvente di
                      ultima generazione SENSENE™ ecologicamente responsabile ed
                      a basso impatto ambientale. Laviamo ad acqua con
                      tecnologia Wet-cleaning e l'utilizzo di detergenti ad alta
                      sanificazione.
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-light-blue-500 text-white">
                      {/* Heroicon name: scale */}
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
                          strokeWidth="2"
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Lavaggio tappeti, tappezzeria e tendaggi
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Laviamo tappeti anche antichi o pregiati, a secco o ad
                      acqua, con trattamento anti-acaro e anti-tarme.
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-light-blue-500 text-white">
                      {/* Heroicon name: lightning-bolt */}
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
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Lavaggio capi in pelle e pellicce
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Effettuiamo il lavaggio di capi in pelle, camoscio,
                      pellicce e ceratura di Barbour.
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-light-blue-500 text-white">
                      {/* Heroicon name: lightning-bolt */}
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
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Riparazioni sartoriali
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Eseguiamo piccole riparazioni come orli, cambi cerniera,
                      stringere/allargare girovita, sostituzione bottoni, ecc.
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-light-blue-500 text-white">
                      {/* Heroicon name: lightning-bolt */}
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
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Sanificazione ad ozono
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Eliminiamo muffe, acari, virus, batteri e cattivi odori da
                      cuscini, caschi moto, passeggini, valigie, ecc. con
                      l'innovativo sistema di igienizzazione ad ozono.
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div
              className="px-4 mt-10 -mx-4 relative lg:mt-0"
              aria-hidden="true"
            >
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width="784"
                height="404"
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="784"
                  height="404"
                  fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                />
              </svg>
              <img
                className="relative mx-auto rounded-md shadow-md"
                width="490"
                src="https://as2.ftcdn.net/jpg/00/75/51/47/500_F_75514758_cvn8Vbw28ZSmZFibYNY6kDEcGaldWtAz.jpg"
                alt=""
              />
            </div>
          </div>

          <svg
            className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
            />
          </svg>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                  La nostra storia
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit ex obcaecati natus eligendi delectus, cum deleniti
                  sunt in labore nihil quod quibusdam expedita nemo.
                </p>

                <dl className="mt-10 space-y-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-light-blue-500 text-white">
                        {/* Heroicon name: annotation */}
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
                            strokeWidth="2"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Mobile notifications
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </dd>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-light-blue-500 text-white">
                        {/* Heroicon name: mail */}
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
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Reminder emails
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="px-4 mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                <svg
                  className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                  width="784"
                  height="404"
                  fill="none"
                  viewBox="0 0 784 404"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="784"
                    height="404"
                    fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                  />
                </svg>
                {/* <img
                  className="relative mx-auto rounded-md shadow-lg"
                  src="/images/old-laundry.png"
                /> */}
                <Image
                  className="relative mx-auto rounded-md shadow-md"
                  src="/images/old-laundry.png"
                  width="540"
                  height="350"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Where */}
      <div className="bg-light-blue-700">
        <div className="pt-12 sm:pt-16 lg:pt-24">
          <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
              <h2 className="text-lg leading-6 font-semibold text-light-blue-200 uppercase tracking-wider">
                Dove siamo
              </h2>
              <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                Vieni a trovarci in negozio
              </p>
              <p className="text-xl text-light-blue-200">
                Trova il punto vendita Lava&Lava più vicino a te.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
          <div className="relative">
            <div className="absolute inset-0 h-3/4 bg-light-blue-700"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-60 flex-shrink-0">
                    <Image
                      className="object-cover"
                      src="/images/lava-e-lava--pisa.png"
                      layout="fill"
                      alt=""
                    />
                    <div className="absolute top-6 left-6">
                      <h3
                        className="inline-flex px-4 py-1 rounded-full text-base font-semibold tracking-wide uppercase bg-light-blue-100 text-light-blue-600"
                        id="tier-standard"
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
                            className="h-6 w-6 text-light-blue-500"
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
                        <p className="ml-3 text-lg text-gray-700">
                          Via Benedetto Croce, 81 <br />
                          56125, Pisa (PI)
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          {/* Heroicon name: phone */}
                          <svg
                            className="h-6 w-6 text-light-blue-500"
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
                        <p className="ml-3 text-lg text-gray-700">050 41046</p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          {/* Heroicon name: clock */}
                          <svg
                            className="h-6 w-6 text-light-blue-500"
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
                            Sabato <span className="font-medium">Chiuso</span>
                          </li>
                          <li className="flex justify-between">
                            Domenica <span className="font-medium">Chiuso</span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className="rounded-full shadow">
                      <a
                        href="https://goo.gl/maps/Kh1QRqXv1YmUnKBu5"
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-white bg-light-blue-800 hover:bg-light-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-700"
                        aria-describedby="tier-standard"
                      >
                        Ottieni Indicazioni
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-60 flex-shrink-0">
                    <Image
                      className="object-cover"
                      src="/images/lava-e-lava--fornacette.png"
                      layout="fill"
                      alt=""
                    />
                    <div className="absolute top-6 left-6">
                      <h3
                        className="inline-flex px-4 py-1 rounded-full text-base font-semibold tracking-wide uppercase bg-light-blue-100 text-light-blue-600"
                        id="tier-standard"
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
                            className="h-6 w-6 text-light-blue-500"
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
                        <p className="ml-3 text-lg text-gray-700">
                          Piazza Kolbe, 15
                          <br />
                          56012, Fornacette (PI)
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          {/* Heroicon name: phone */}
                          <svg
                            className="h-6 w-6 text-light-blue-500"
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
                        <p className="ml-3 text-lg text-gray-700">
                          0587 477444
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          {/* Heroicon name: clock */}
                          <svg
                            className="h-6 w-6 text-light-blue-500"
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
                            Domenica <span className="font-medium">Chiuso</span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className="rounded-full shadow">
                      <a
                        href="https://goo.gl/maps/fxpdmBXMkoCMetkU7"
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-white bg-light-blue-800 hover:bg-light-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-700"
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

      {/* Contacts */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="divide-y-2 divide-gray-200">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Resta in contatto
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Scrivici
                  </h3>
                  <dl className="mt-2 text-base text-gray-500">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>info@lavalava.it</dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Facebook Messenger</dt>
                      <dd>
                        <a
                          href="https://m.me/lavaelava"
                          className="text-gray-600 font-medium underline"
                        >
                          Facebook Messenger
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Social
                  </h3>
                  <dl className="mt-2 text-base text-gray-500">
                    <div>
                      <dt className="sr-only">Facebook</dt>
                      <dd>
                        <a
                          href="https://facebook.com/lavaelava"
                          className="text-gray-600 font-medium underline"
                        >
                          Facebook
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Instagram</dt>
                      <dd>
                        <a
                          href="https://instagram.com/lavanderialavaelava"
                          className="text-gray-600 font-medium underline"
                        >
                          Instagram
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Punti vendita
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Pisa
                  </h3>
                  <div className="mt-2 text-base text-gray-500">
                    <p>Via Benedetto Croce, 81</p>
                    <p className="mt-1">56125, Pisa (PI)</p>
                    <p className="mt-1">050 41046</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Fornacette
                  </h3>
                  <div className="mt-2 text-base text-gray-500">
                    <p>Piazza Kolbe, 15</p>
                    <p className="mt-1">56012, Fornacette (PI)</p>
                    <p className="mt-1">0587 477444</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            <div className="px-5 py-2">
              <a
                href="/"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                About
              </a>
            </div>

            <div className="px-5 py-2">
              <a
                href="/"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Blog
              </a>
            </div>

            <div className="px-5 py-2">
              <a
                href="/"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Jobs
              </a>
            </div>

            <div className="px-5 py-2">
              <a
                href="/"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Press
              </a>
            </div>

            <div className="px-5 py-2">
              <a
                href="/"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Accessibility
              </a>
            </div>

            <div className="px-5 py-2">
              <a
                href="/"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Partners
              </a>
            </div>
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="/" className="text-gray-400 hover:text-gray-500">
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

            <a href="/" className="text-gray-400 hover:text-gray-500">
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

            <a href="/" className="text-gray-400 hover:text-gray-500">
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

            <a href="/" className="text-gray-400 hover:text-gray-500">
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

            <a href="/" className="text-gray-400 hover:text-gray-500">
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
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2020 Workflow, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
