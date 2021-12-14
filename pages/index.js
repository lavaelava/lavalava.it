import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import HeroSlider from '../components/HeroSlider'
import SpecialHoursDisclosure from '../components/SpecialHoursDisclosure'
import {
  LocationMarkerIcon,
  PhoneIcon,
  ClockIcon,
} from '@heroicons/react/outline'

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

      <div className="bg-white font-gilroy">
        <Header />
        <main>
          <HeroSlider />

          {/* Alternating Feature Sections */}
          <div id="overview" className="relative pt-16 pb-32 overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
            />
            <div className="relative">
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div className="max-w-xl px-4 mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                  <div>
                    <div>
                      <svg
                        className="w-12 h-12 text-cyan-700"
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
                          d="M43.42 29.37l5.03 7.34L56 31.68l-9.22-13.06a5.03 5.03 0 00-2.2-1.76l-5.97-2.43C37.28 17.89 30 23.7 30 23.7s-7.28-5.82-8.6-9.28l-5.98 2.43c-.88.37-1.65.98-2.2 1.76L4 31.68l7.55 5.03 5.03-7.34m26.84-2.72l-.84 5.87V56H17.42V32.52l-.84-5.87m5.03-11.75L30 11.55m0 0l8.39 3.35M30 11.55v-1.2a1.62 1.62 0 01.96-1.5 2.52 2.52 0 10-3.48-2.33m7.32 12.84l-1.65-.66a8.39 8.39 0 00-6.3 0l-1.65.66"
                        />
                      </svg>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        La camicia conveniente
                      </h2>
                      <p className="mt-4 text-lg text-gray-500">
                        Utilizzando un sistema di stiratura meccanica con
                        manichino automatizzato, siamo in grado di offire un
                        prezzo conveniente per il lavaggio e la stiratura delle
                        camicie da uomo. Inoltre il prezzo varia in base alla
                        quantità, piu ne porti e più risparmi!
                      </p>
                      <div className="mt-6">
                        <Link href="/promo/la-camicia-conveniente">
                          <a className="inline-flex px-4 py-2 font-medium text-white rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400">
                            Vedi i prezzi
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 mt-8 border-t border-gray-200">
                    <blockquote>
                      <div>
                        <p className="text-base text-gray-500">
                          “Personalmente porto i miei indumenti da oltre due
                          anni. Sono i più convenienti del mercato e
                          garantiscono una qualità TOP. Personale cordiale e
                          simpatico.”
                        </p>
                      </div>
                      <footer className="mt-3">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <img
                              className="w-6 h-6 rounded-full"
                              src="/images/testimonials/walter.jpg"
                              alt="Walter"
                            />
                          </div>
                          <div className="text-base font-medium text-gray-700">
                            Walter, cliente
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0">
                  <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                    <img
                      className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="/images/shirt.jpg"
                      alt="Macchinario per stirare la camicie"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-24">
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div className="max-w-xl px-4 mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                  <div>
                    <div>
                      <svg
                        className="w-12 h-12 text-cyan-700"
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
                          href="#servizi"
                          className="inline-flex px-4 py-2 font-medium text-white rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
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
                      className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="/images/old-laundry.jpg"
                      alt="Lavanderia nel negli anni 80"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-24" id="domicilio">
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div className="max-w-xl px-4 mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                  <div>
                    <div>
                      <svg
                        className="w-12 h-12 text-cyan-700"
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
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        Servizio a domicilio
                      </h2>
                      <p className="mt-4 text-lg text-gray-500">
                        La professionalità ed esperienza di Lava&Lava arrivano
                        direttamente a casa tua!
                        <span className="block">
                          Dedica più tempo a te stesso o al tuo lavoro senza
                          preoccuparti di dover andare in lavanderia.
                        </span>
                        <span className="block">
                          Puoi ordinare direttamente online, scrivendoci su
                          WhatsApp oppure telefonandoci, il giorno concordato
                          passeremo a ritirare i tuoi capi e te li
                          riconsegneremo puliti e profumati.
                        </span>
                        <span className="block">
                          Sappiamo quanto tieni ai tuoi abiti, siamo esperti
                          artigiani e curiamo attentamente i dettagli con la
                          massima qualità possibile.
                        </span>
                      </p>
                      <div className="mt-6">
                        <a
                          href="https://ordini.lavalava.it"
                          className="inline-flex px-4 py-2 font-medium text-white rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
                        >
                          Ordina ora
                        </a>
                      </div>
                    </div>
                    <div className="pt-6 mt-8 border-t border-gray-200">
                      <blockquote>
                        <div>
                          <p className="text-base text-gray-500">
                            “Ho portato un piumone molto mal ridotto, e dopo
                            qualche giorno, ripensando alle sue condizioni, ho
                            provato ad annullare l'ordine. Meno male non l'ho
                            fatto! Il piumone è tornato come nuovo, e non ho più
                            avuto bisogno di comprarne un altro. Miracoloso.”
                          </p>
                        </div>
                        <footer className="mt-3">
                          <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                              <img
                                className="w-6 h-6 rounded-full"
                                src="/images/testimonials/pier-francesco.jpg"
                                alt="Pier Francesco"
                              />
                            </div>
                            <div className="text-base font-medium text-gray-700">
                              Pier Francesco, cliente
                            </div>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0">
                  <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                    <img
                      className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="/images/phone-mockup.jpg"
                      alt="Applicazione degli ordini online mostrata su dei telefoni"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gradient Feature Section */}
          <div id="servizi">
            <div className="max-w-4xl px-4 py-16 mx-auto sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                I nostri principali servizi
              </h2>
              <p className="max-w-3xl mt-4 text-lg text-gray-500">
                In oltre quarant'anni di esperienza abbiamo ampliato le nostre
                competenze e continuato ad investre in nuove tecnologie per
                migliorare ed incrementare i nostri servizi.
              </p>
              <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                <div>
                  <div>
                    <svg
                      className="w-12 h-12 text-cyan-700"
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
                      Utilizziamo il solvente di ultima generazione{' '}
                      <a
                        className="font-semibold transition-colors duration-150 hover:text-gray-600"
                        href="https://safechem.com/it/lavaggio-dei-tessuti/sensenetm"
                        target="_blank"
                      >
                        <span className="underline">SENSENE</span>™
                      </a>{' '}
                      ecologicamente responsabile ed a basso impatto ambientale.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <svg
                      className="w-12 h-12 text-cyan-700"
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
                      Questa tipologia di lavaggio ci permette di lavare ad
                      acqua tessuti come seta e lana, altrimenti lavabili solo a
                      secco.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <svg
                      className="w-12 h-12 text-cyan-700"
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
                    <svg
                      className="w-12 h-12 text-cyan-700"
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
                    <svg
                      className="w-12 h-12 text-cyan-700"
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
                    <svg
                      className="w-12 h-12 text-cyan-700"
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
                      L'innovativo sistema di igienizzazione ad ozono elimina
                      muffe, acari, virus, batteri e cattivi odori da cuscini,
                      caschi moto, passeggini, valigie, ecc.
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
              <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
                  <h2 className="text-lg font-semibold leading-6 tracking-wider uppercase text-cyan-100">
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
            <div className="pb-12 mt-8 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
              <div className="relative">
                <div className="absolute inset-0 h-3/4 bg-gradient-to-r from-teal-500 to-cyan-600"></div>
                <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
                    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                      <div className="relative flex-shrink-0 h-60">
                        <Image
                          className="object-cover"
                          src="/images/lava-e-lava--pisa.jpg"
                          layout="fill"
                          alt="Facciata del punto vendita Lava&Lava a Pisa"
                        />
                        <div className="absolute top-6 left-6">
                          <h3
                            className="inline-flex px-4 py-1 text-base font-semibold tracking-wide uppercase rounded-full bg-cyan-100 text-cyan-600"
                            id="pisa"
                          >
                            Pisa
                          </h3>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between flex-1 px-6 pt-6 pb-8 space-y-6 bg-gray-50 sm:p-10 sm:pt-6">
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <LocationMarkerIcon className="w-6 h-6 text-cyan-500" />
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
                              <PhoneIcon className="w-6 h-6 text-cyan-500" />
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
                              <ClockIcon className="w-6 h-6 text-cyan-500" />
                            </div>
                            <ul className="w-full ml-3 space-y-3 text-lg text-gray-700 xs:space-y-0">
                              <li className="flex justify-between">
                                Lunedì
                                <span className="font-medium">
                                  08:30-13
                                  <span className="invisible block h-0 xs:visible xs:inline xs:h-auto">
                                    ,
                                  </span>{' '}
                                  15:30-19
                                </span>
                              </li>
                              <li className="flex justify-between">
                                Martedì
                                <span className="font-medium">
                                  08:30-13
                                  <span className="invisible block h-0 xs:visible xs:inline xs:h-auto">
                                    ,
                                  </span>{' '}
                                  15:30-19
                                </span>
                              </li>
                              <li className="flex justify-between">
                                Mercoledì
                                <span className="font-medium">
                                  08:30-13
                                  <span className="invisible block h-0 xs:visible xs:inline xs:h-auto">
                                    ,
                                  </span>{' '}
                                  15:30-19
                                </span>
                              </li>
                              <li className="flex justify-between">
                                Giovedì
                                <span className="font-medium">
                                  08:30-13
                                  <span className="invisible block h-0 xs:visible xs:inline xs:h-auto">
                                    ,
                                  </span>{' '}
                                  15:30-19
                                </span>
                              </li>
                              <li className="flex justify-between">
                                Venerdì
                                <span className="font-medium">
                                  08:30-13
                                  <span className="invisible block h-0 xs:visible xs:inline xs:h-auto">
                                    ,
                                  </span>{' '}
                                  15:30-19
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
                          <SpecialHoursDisclosure>
                            <ul className="w-full text-lg text-gray-700">
                              <li className="flex justify-between">
                                08/12/21 (Immacolata Concezione)
                                <span className="font-medium">Chiuso</span>
                              </li>
                              <li className="flex justify-between">
                                24/12/21 (Vigilia di Natale)
                                <span className="font-medium">08:30-13</span>
                              </li>
                              <li className="flex justify-between">
                                31/12/21 (Notte di San Silvestro)
                                <span className="font-medium">Chiuso</span>
                              </li>
                              <li className="flex justify-between">
                                06/01/22 (Epifania)
                                <span className="font-medium">Chiuso</span>
                              </li>
                              <li className="flex justify-between">
                                07/01/22
                                <span className="font-medium">Chiuso</span>
                              </li>
                            </ul>
                          </SpecialHoursDisclosure>
                        </ul>
                        <div className="rounded-full shadow">
                          <a
                            href="https://goo.gl/maps/Kh1QRqXv1YmUnKBu5"
                            className="flex items-center justify-center px-5 py-3 font-medium text-white rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
                            aria-describedby="tier-standard"
                          >
                            Ottieni Indicazioni
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      id="dove-siamo--fornacette"
                      className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                    >
                      <div className="relative flex-shrink-0 h-60">
                        <Image
                          className="object-cover"
                          src="/images/lava-e-lava--fornacette.jpg"
                          layout="fill"
                          alt="Facciata del punto vendita Lava&Lava a Fornacette"
                        />
                        <div className="absolute top-6 left-6">
                          <h3
                            className="inline-flex px-4 py-1 text-base font-semibold tracking-wide uppercase rounded-full bg-cyan-100 text-cyan-600"
                            id="fornacette"
                          >
                            Fornacette
                          </h3>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between flex-1 px-6 pt-6 pb-8 space-y-6 bg-gray-50 sm:p-10 sm:pt-6">
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <LocationMarkerIcon className="w-6 h-6 text-cyan-500" />
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
                              <PhoneIcon className="w-6 h-6 text-cyan-500" />
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
                              <ClockIcon className="w-6 h-6 text-cyan-500" />
                            </div>
                            <ul className="w-full ml-3 text-lg text-gray-700">
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
                          <SpecialHoursDisclosure>
                            <ul className="w-full text-lg text-gray-700">
                              <li className="flex justify-between">
                                24/12/21 (Vigilia di Natale)
                                <span className="font-medium">Chiuso</span>
                              </li>
                              <li className="flex justify-between">
                                25/12/21 (Natale)
                                <span className="font-medium">Chiuso</span>
                              </li>
                              <li className="flex justify-between">
                                31/12/21 (Notte di San Silvestro)
                                <span className="font-medium">Chiuso</span>
                              </li>
                              <li className="flex justify-between">
                                01/01/22 (Capodanno)
                                <span className="font-medium">Chiuso</span>
                              </li>
                              <li className="flex justify-between">
                                06/01/22 (Epifania)
                                <span className="font-medium">Chiuso</span>
                              </li>
                              <li className="flex justify-between">
                                07/01/22
                                <span className="font-medium">Chiuso</span>
                              </li>
                              <li className="flex justify-between">
                                08/01/22
                                <span className="font-medium">Chiuso</span>
                              </li>
                            </ul>
                          </SpecialHoursDisclosure>
                        </ul>
                        <div className="rounded-full shadow">
                          <a
                            href="https://goo.gl/maps/fxpdmBXMkoCMetkU7"
                            className="flex items-center justify-center px-5 py-3 font-medium text-white rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
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
            <div className="absolute bottom-0 h-80 xl:inset-0 xl:h-full xl:w-full">
              <div className="w-full h-full xl:grid xl:grid-cols-2">
                <div className="h-full xl:relative xl:col-start-2">
                  <img
                    className="object-cover w-full h-full opacity-25 xl:absolute xl:inset-0"
                    src="/images/businessmen.jpeg"
                    alt="Businessmen looking at a tablet"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                  />
                </div>
              </div>
            </div>
            <div
              id="per-le-lavanderie"
              className="max-w-4xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8"
            >
              <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                <h2 className="text-sm font-semibold tracking-wide uppercase">
                  <span className="text-transparent bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text">
                    Per le lavanderie
                  </span>
                </h2>
                <p className="mt-3 text-3xl font-extrabold text-white">
                  Ti aiutiamo a proiettare la tua lavanderia nel futuro
                </p>
                <p className="mt-5 text-lg text-gray-300">
                  Il settore delle lavanderie è profondamente cambiato negli
                  ultimi anni, e la crisi dovuta al COVID-19 ha accellerato il
                  processo. Anche una piccola lavanderia ha bisogno di
                  trasformarsi ed espandere i suoi servizi affidandosi a
                  laboratori specializzati e tecnologicamente avanzati.
                  Contattaci e potremo aiutarti a far crescere la tua azienda ed
                  affrontare la crisi da COVID-19 con più sicurezza!
                </p>
                <div className="mt-6">
                  <a
                    href="mailto:info@lavalava.it"
                    className="text-base font-medium text-transparent bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text"
                  >
                    Contattaci&nbsp;&rarr;
                  </a>
                </div>
                <div className="grid grid-cols-1 mt-12 gap-y-12 gap-x-6 sm:grid-cols-2">
                  <p>
                    <span className="block text-2xl font-bold text-white">
                      60K+
                    </span>
                    <span className="block mt-1 text-base text-gray-300">
                      <span className="font-medium text-white">Capi</span>{' '}
                      lavati in un anno.
                    </span>
                  </p>
                  <p>
                    <span className="block text-2xl font-bold text-white">
                      2K+
                    </span>
                    <span className="block mt-1 text-base text-gray-300">
                      <span className="font-medium text-white">Camicie</span>{' '}
                      lavate in un mese.
                    </span>
                  </p>
                  <p>
                    <span className="block text-2xl font-bold text-white">
                      40+
                    </span>
                    <span className="block mt-1 text-base text-gray-300">
                      <span className="font-medium text-white">
                        Anni di esperienza
                      </span>{' '}
                      nel settore delle lavanderie.
                    </span>
                  </p>
                  {/* <p>
                    <span className="block text-2xl font-bold text-white">
                      12M+
                    </span>
                    <span className="block mt-1 text-base text-gray-300">
                      <span className="font-medium text-white">
                        Issues resolved
                      </span>{' '}
                      lacus nibh integer quis.
                    </span>
                  </p> */}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white">
            <div className="max-w-4xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">Hai dei capi da lavare?</span>
                <span className="block text-transparent bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text">
                  Veniamo noi da te o puoi portarli in lavanderia.
                </span>
              </h2>
              <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                <a
                  href="https://ordini.lavalava.it"
                  className="flex items-center justify-center px-4 py-3 font-medium text-white rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
                >
                  Ordina online
                </a>
                <a
                  href="#dove-siamo"
                  className="flex items-center justify-center px-4 py-3 text-base font-medium border border-transparent rounded-md shadow-sm text-cyan-800 bg-cyan-100 hover:bg-cyan-200"
                >
                  Vieni in negozio
                </a>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-gray-50" aria-labelledby="footerHeading">
          <h2 id="footerHeading" className="sr-only">
            Footer
          </h2>
          <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-8 xl:col-span-1">
                <img
                  className="w-auto h-10"
                  src="/logo.svg"
                  height={40}
                  width={113}
                  alt="Lava&Lava"
                />
                <p className="text-base text-gray-500">
                  Ci prendiamo cura dei tuoi capi dal 1981.
                </p>
                <div className="flex space-x-6">
                  <a
                    href="https://www.facebook.com/lavaelava"
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="w-6 h-6"
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
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="w-6 h-6"
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
              <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                      Servizi
                    </h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <a
                          href="#servizi"
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          Tutti i servizi
                        </a>
                      </li>

                      <li>
                        <a
                          href="#domicilio"
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          Domicilio
                        </a>
                      </li>

                      <li>
                        <a
                          href="#per-le-lavanderie"
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          Per le lavanderie
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                      Contatti
                    </h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <a
                          href="#dove-siamo"
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          Dove siamo
                        </a>
                      </li>

                      <li>
                        <a
                          href="#dove-siamo"
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          Punti vendita
                        </a>
                      </li>

                      <li>
                        <a
                          href="mailto:info@lavalava.it"
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          Email
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                      Legal
                    </h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <Link href="/legal/privacy-policy">
                          <a className="text-base text-gray-500 hover:text-gray-900">
                            Privacy
                          </a>
                        </Link>
                      </li>

                      <li>
                        <Link href="/legal/cookie-policy">
                          <a className="text-base text-gray-500 hover:text-gray-900">
                            Cookie Policy
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8 mt-12 border-t border-gray-200">
              <p className="text-base text-gray-400 xl:text-center">
                &copy; 2021 Lava&Lava di Vittorio Fortino & C. S.a.s. - P. IVA:
                01998820508.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
