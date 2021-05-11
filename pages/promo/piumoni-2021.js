import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function MaglieMaglioni2021() {
  return (
    <>
      <Head>
        <title>
          Promozione Piumoni - Lavati ed igienizzati a partire da €12,90 |
          Lava&Lava
        </title>
        <meta
          name="description"
          content="Approfitta ora della nuova Promozione Piumoni! Sintetico a €12,90 e in piuma d\'oca a €16,90. Non lasciartela scappare!"
        />
        <meta name="og:title" content="Promozione Piumoni - Lava&Lava" />
        <meta name="og:url" content="https://lavalava.it/promo/piumoni-2021" />
        <meta
          name="og:image"
          content="https://s3.eu-central-1.amazonaws.com/assets.lavalava.it/images/woman-with-duvet--1200x1200.jpg"
        />
      </Head>

      <div className="relative bg-white overflow-hidden font-sen">
        <div className="max-w-7xl mx-auto lg:min-h-screen">
          <div className="relative flex flex-col justify-center h-full z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:min-h-screen lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <Link href="/">
                  <a className="sm:mx-auto lg:mx-0">
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
              </nav>
            </div>

            <main className="flex items-center h-full mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 sm:justify-center md:mt-16 lg:justify-start lg:px-8">
              <div className="sm:text-center lg:text-left">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Valida fino al
                  <span className="text-indigo-700"> 12 Giugno</span>
                </p>
                <h2 className="mt-4 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                  Promozione
                  <br />
                  <span className="text-indigo-600"> Piumoni</span>
                </h2>
                <p className="mt-6 text-base text-gray-500 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
                  Sta arrivando il caldo ed hai bisogno di lavare il tuo
                  piumone? Lascia fare a noi! Lavaggio ad acqua con detergenti
                  professionali e additivi disinfettanti ed igienizzanti.
                </p>
                <div className="mt-6 space-y-2 lg:space-y-4">
                  <p className="text-2xl font-bold sm:text-3xl md:text-4xl">
                    Sintetico{' '}
                    <span className="text-3xl text-indigo-600 font-bold sm:text-4xl md:text5xl">
                      €12,90
                    </span>
                  </p>
                  <p className="text-2xl font-bold sm:text-3xl md:text-4xl">
                    Piuma d'oca{' '}
                    <span className="text-3xl text-indigo-600 font-bold sm:text-4xl md:text5xl">
                      €16,90
                    </span>
                  </p>
                </div>
                <div className="mt-6 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-full shadow">
                    <Link href="/#dove-siamo">
                      <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:py-4 md:text-lg md:px-10">
                        Vieni in negozio
                      </a>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="https://ordini.lavalava.it"
                      target="_blank"
                      rel="nofollow"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:py-4 md:text-lg md:px-10"
                    >
                      Ritiro a domicilio
                    </a>
                  </div>
                </div>
                <p className="mt-4 text-xs text-gray-500 sm:mt-6 sm:max-w-xl sm:mx-auto lg:mx-0">
                  La promozione in oggetto è valida esclusivamente dal giorno
                  15/05/2021 al giorno 12/06/2021. Sono esclusi dalla promozione
                  eventuali piumoni in tessuti particolari (e.g. seta, lana,
                  ricamati) o che comunque richiedono un lavaggio a secco.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src="/images/woman-with-duvet.jpeg"
            layout="fill"
            alt="Ragazza che si nasconde dietro ad un piumone"
          />
        </div>
      </div>
    </>
  )
}
