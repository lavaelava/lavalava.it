import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function MaglieMaglioni2021() {
  return (
    <>
      <Head>
        <title>
          Promo Maglie e Maglioni - Lavati a secco a partire da €2,99 |
          Lava&Lava
        </title>
        <meta
          name="description"
          content="Maglie e Maglioni in promozione! Prezzi a partire da €2,99"
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
                  <span className="text-amber-700"> 20 Febbraio</span>
                </p>
                <h2 className="mt-4 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                  Promozione
                  <br />
                  <span className="text-amber-600"> Maglie</span> e
                  <span className="text-amber-600"> Maglioni</span>
                </h2>
                <p className="mt-6 text-base text-gray-500 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
                  Scalda le tue giornate con un maglione, a lavarlo ci pensiamo
                  noi! <br />
                  Con l'innovativo sistema di lavaggio a secco SENSENE le tue
                  maglie saranno più morbide e profumate che mai. <br />
                  La promozione è disponibile esclusivamente nel nostro nuovo
                  negozio di Fornacette, clicca il pulsante qui sotto per
                  scoprire dove siamo.
                </p>
                <div className="mt-6 space-y-2 lg:space-y-4">
                  <p className="text-2xl font-bold sm:text-3xl md:text-4xl">
                    Maglia{' '}
                    <span className="text-3xl text-amber-600 font-bold sm:text-4xl md:text5xl">
                      €2,99
                    </span>
                  </p>
                  <p className="text-2xl font-bold sm:text-3xl md:text-4xl">
                    Maglione{' '}
                    <span className="text-3xl text-amber-600 font-bold sm:text-4xl md:text5xl">
                      €3,99
                    </span>
                  </p>
                </div>
                <div className="mt-6 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-full shadow">
                    <Link href="/#dove-siamo--fornacette">
                      <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-amber-700 hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 md:py-4 md:text-lg md:px-10">
                        Dove siamo
                      </a>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href="/">
                      <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-amber-700 bg-amber-100 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 md:py-4 md:text-lg md:px-10">
                        Su di noi
                      </a>
                    </Link>
                  </div>
                </div>
                <p className="mt-4 text-xs text-gray-500 sm:mt-6 sm:max-w-xl sm:mx-auto lg:mx-0">
                  La promozione in oggetto è valida fino al giorno 20/02/2021 ed
                  esclusivamente nel nostro negozio di Fornacette (Piazza Kolbe,
                  15 56012, Fornacette (PI) ). Sono esclusi dalla promozione
                  maglie e maglioni con accessori particolari o che necessitano
                  di un lavaggio ad acqua.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src="/images/sweaters.jpg"
            layout="fill"
            alt="Maglioni impilati"
          />
        </div>
      </div>
    </>
  )
}
