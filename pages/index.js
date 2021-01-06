import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faTshirt, faVirus } from '@fortawesome/pro-regular-svg-icons'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lava&Lava</title>
        <meta
          name="description"
          content="Lavaggio a secco e ad acqua, sanificazione ad ozono e lavaggio tappeti. Questi sono solo alcuni dei servizi che offriamo da Lava&Lava. Vieni a trovarci: siamo a Pisa e a Fornacette."
        />
      </Head>

      {/* Header */}
      <div className="relative bg-gray-50">
        <div className="relative bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  <a>
                    <span className="sr-only">Lava&Lava</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="/logo.svg"
                      height={40}
                      width={113}
                      alt="Lava&Lava"
                    />
                  </a>
                </Link>
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
                  <a
                    href="#su-di-noi"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 md:py-4 md:text-lg md:px-10"
                  >
                    Scopri di più
                  </a>
                </div>

                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#dove-siamo"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-light-blue-700 bg-light-blue-100 hover:bg-light-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 md:py-4 md:text-lg md:px-10"
                  >
                    Dove siamo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <Image
              className="absolute inset-0 w-full h-full object-cover"
              src="/images/hero.jpg"
              layout="fill"
              alt="Mamma e figlia che odorano il bucato"
            />
          </div>
        </main>
      </div>

      {/* Feature Section */}
      <div id="su-di-noi" className="py-16 bg-gray-50 overflow-hidden lg:py-24">
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

          <div
            id="i-nostri-servizi"
            className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
          >
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
                      <FontAwesomeIcon icon={faLeaf} className="h-6 w-6" />
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
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                        strokeWidth={0.4}
                      >
                        <path
                          d="M21.219 2H2.78A.781.781 0 002 2.781V21.22c0 .431.35.781.781.781H21.22c.431 0 .781-.35.781-.781V2.78A.781.781 0 0021.219 2zM3.562 6.688h7.62c-.379 3.949-3.594 7.1-7.62 7.464V6.688zm0 13.75V15.86c1.818.525 2.889 2.653 3.086 4.576H3.563zm12.221 0H8.217c-.169-1.979-1.003-3.915-2.46-5.13C8.59 14.443 10.875 12.36 12 9.733c1.124 2.623 3.407 4.71 6.242 5.575-1.46 1.218-2.29 3.156-2.459 5.13zm4.655 0h-3.086c.196-1.914 1.261-4.05 3.085-4.577v4.576zm0-6.286c-4.026-.364-7.241-3.515-7.62-7.464h7.62v7.464zm0-9.027H3.563V3.562h16.875v1.563z"
                          fill="currentColor"
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
                      <FontAwesomeIcon icon={faTshirt} className="h-6 w-6" />
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
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                        strokeWidth={0.4}
                      >
                        <path
                          d="M22.811 1.189a.645.645 0 00-.832-.068L8.65 10.704c-.4.288-.78.61-1.128.959a3.387 3.387 0 00-.725 1.073H4.061A3.06 3.06 0 001 15.797v.02a3.045 3.045 0 003.041 3.04h.02c.786 0 1.426.64 1.426 1.427s-.64 1.427-1.426 1.427h-.02a.645.645 0 000 1.289h.02a2.719 2.719 0 002.715-2.716 2.719 2.719 0 00-2.715-2.715h-.02a1.754 1.754 0 01-1.752-1.753v-.019a1.77 1.77 0 011.772-1.772h2.465c-.012.888.319 1.779.995 2.455a3.41 3.41 0 004.816 0 9.16 9.16 0 00.959-1.129l.953-1.326h3.275A2.027 2.027 0 0019.548 12a.644.644 0 10-1.289 0c0 .406-.33.736-.735.736h-2.348l7.703-10.715a.645.645 0 00-.068-.832zM12.25 14.599a7.88 7.88 0 01-.823.969 2.116 2.116 0 01-3.612-1.543h1.473a.642.642 0 001.098.502l1.38-1.38a.645.645 0 00-.911-.912l-.502.501H8.286a2.14 2.14 0 01.146-.162c.3-.3.626-.576.97-.823l10.13-7.283-7.283 10.13z"
                          fill="currentColor"
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
                      <FontAwesomeIcon icon={faVirus} className="h-6 w-6" />
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
              <div className="relative mx-auto rounded-md shadow-md overflow-hidden">
                <Image
                  src="/images/lab.jpg"
                  layout="responsive"
                  width={700}
                  height={400}
                  alt="Laboratorio Lava&Lava"
                />
              </div>
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

          <div
            id="la-nostra-storia"
            className="relative mt-12 sm:mt-16 lg:mt-24"
          >
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                  La nostra storia
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  Nata nel 1981 con perseveranza e determinazione della Signora
                  Raffaella Lava&Lava é diventata, con l'ingresso del figlio
                  Vittorio, punto di riferimento per tutto il territorio. <br />
                  Nel 2017 abbiamo aperto un laboratorio attrezzato con
                  macchinari moderni per rispondere alla crescente domanda.{' '}
                  <br />
                  Infine nel febbario 2020 abbiamo aperto un nuovo punto vendita
                  presso il centro commerciale Pam Panorama di Fornacette.
                </p>
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
                <div className="relative mx-auto rounded-md shadow-md overflow-hidden">
                  <Image
                    src="/images/old-laundry.jpg"
                    layout="responsive"
                    width={700}
                    height={400}
                    alt="Laboratorio Lava&Lava"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Where */}
      <div id="dove-siamo" className="bg-light-blue-700">
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
                      src="/images/lava-e-lava--pisa.jpg"
                      layout="fill"
                      alt="Facciata del punto vendita Lava&Lava a Pisa"
                    />
                    <div className="absolute top-6 left-6">
                      <h3
                        className="inline-flex px-4 py-1 rounded-full text-base font-semibold tracking-wide uppercase bg-light-blue-100 text-light-blue-600"
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
                      src="/images/lava-e-lava--fornacette.jpg"
                      layout="fill"
                      alt="Facciata del punto vendita Lava&Lava a Fornacette"
                    />
                    <div className="absolute top-6 left-6">
                      <h3
                        className="inline-flex px-4 py-1 rounded-full text-base font-semibold tracking-wide uppercase bg-light-blue-100 text-light-blue-600"
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
      <div id="contatti" className="bg-white">
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
                      <dd>
                        <a
                          href="mailto:info@lavalava.it"
                          className="underline text-gray-500 hover:text-gray-600"
                        >
                          info@lavalava.it
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Facebook Messenger</dt>
                      <dd>
                        <a
                          href="https://m.me/lavaelava"
                          className="underline text-gray-500 hover:text-gray-600"
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
                          className="underline text-gray-500 hover:text-gray-600"
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
                          className="underline text-gray-500 hover:text-gray-600"
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
                  <a
                    href="https://g.page/lavaelava"
                    className="mt-2 text-base underline text-gray-500 hover:text-gray-600"
                  >
                    <p>Via Benedetto Croce, 81</p>
                    <p className="mt-1">56125, Pisa (PI)</p>
                    <p className="mt-1">050 41046</p>
                  </a>
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Fornacette
                  </h3>
                  <a
                    href="https://g.page/lavaelava-fornacette"
                    className="mt-2 text-base underline text-gray-500 hover:text-gray-600"
                  >
                    <p>Piazza Kolbe, 15</p>
                    <p className="mt-1">56012, Fornacette (PI)</p>
                    <p className="mt-1">0587 477444</p>
                  </a>
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
                href="#su-di-noi"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Su di noi
              </a>
            </div>

            <div className="px-5 py-2">
              <a
                href="#dove-siamo"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Dove siamo
              </a>
            </div>

            <div className="px-5 py-2">
              <a
                href="#contatti"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Contatti
              </a>
            </div>
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://facebook.com/lavaelava"
              className="text-gray-400 hover:text-gray-500"
            >
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

            <a
              href="https://instagram.com/lavanderialavaelava"
              className="text-gray-400 hover:text-gray-500"
            >
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
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2021 Lava&Lava.
          </p>
        </div>
      </footer>
    </div>
  )
}
