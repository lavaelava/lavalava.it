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

      <div className="relative overflow-hidden bg-white font-sen">
        <div className="mx-auto max-w-7xl lg:min-h-screen">
          <div className="relative z-10 flex flex-col justify-center h-full pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:min-h-screen lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <Link href="/">
                  <a className="sm:mx-auto lg:mx-0">
                    <span className="sr-only">Lava&Lava</span>
                    <img
                      className="w-auto h-8 sm:h-10"
                      src="/logo.svg"
                      height={40}
                      width={113}
                      alt="Lava&Lava"
                    />
                  </a>
                </Link>
              </nav>
            </div>

            <main className="flex items-center h-full px-4 mt-10 max-w-7xl sm:mt-12 sm:px-6 sm:justify-center md:mt-16 lg:justify-start lg:px-8">
              <div className="sm:text-center lg:text-left">
                <p className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
                  Valida fino al
                  <span className="text-indigo-700"> 12 Giugno</span>
                </p>
                <h2 className="mt-4 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
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
                    <span className="text-3xl font-bold text-indigo-600 sm:text-4xl md:text5xl">
                      €12,90
                    </span>
                  </p>
                  <p className="text-2xl font-bold sm:text-3xl md:text-4xl">
                    Piuma d'oca{' '}
                    <span className="text-3xl font-bold text-indigo-600 sm:text-4xl md:text5xl">
                      €16,90
                    </span>
                  </p>
                </div>
                <div className="mt-6 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-full shadow">
                    <Link href="/#dove-siamo">
                      <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-700 border border-transparent rounded-full hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:py-4 md:text-lg md:px-10">
                        Vieni in negozio
                      </a>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="https://ordini.lavalava.it"
                      target="_blank"
                      rel="nofollow"
                      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-full hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:py-4 md:text-lg md:px-10"
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
            className="absolute inset-0 object-cover w-full h-full"
            src="/images/woman-with-duvet.jpeg"
            layout="fill"
            alt="Ragazza che si nasconde dietro ad un piumone"
          />
        </div>
      </div>
    </>
  )
}
