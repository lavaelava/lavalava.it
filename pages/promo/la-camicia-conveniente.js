import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function LaCamiciaConveniente() {
  return (
    <>
      <Head>
        <title>
          La Camicia Conveniente - Camicia da uomo lavata e stirata a partire da
          €1,99 | Lava&Lava
        </title>
        <meta
          name="description"
          content="Vieni a provare la convenienza. Se ci porti 10 o più camicie ogni camicia la paghi solo €1,99!"
        />
      </Head>

      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto lg:h-screen">
          <div className="relative h-full z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
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

            <main className="flex items-center h-full mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 sm:justify-center md:mt-16 lg:justify-start lg:mt-0 lg:px-8">
              <div className="sm:text-center lg:text-left">
                <img
                  src="/lcc-logo.svg"
                  className="h-16 w-auto sm:mx-auto sm:h-20 md:h-24 lg:mx-0"
                  width={350}
                  height={96}
                  alt="La Camicia Conveniente"
                />
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Stanco di stirare le tue camicie? Ci pensiamo noi! <br />
                  Camicia da uomo lavata e stirata meccanicamente consegnata in
                  gruccia ad un prezzo mai visto. Vieni a trovarci in negozio e
                  prova la convenienza!
                </p>
                <p className="mt-3">
                  <span className="mr-5 text-2xl text-light-blue-900 font-bold sm:text-3xl md:text4xl">
                    10 o più
                  </span>
                  <span className="text-3xl text-light-blue-600 font-bold sm:text-4xl md:text5xl">
                    €1,99
                  </span>
                  <span className="text-base text-light-blue-700 font-semibold sm:text-lg md:text-xl">
                    /camicia
                  </span>
                </p>
                <p className="mt-3">
                  <span className="mr-5 text-2xl text-light-blue-900 font-bold sm:text-3xl md:text4xl">
                    Da 5 a 9
                  </span>
                  <span className="text-3xl text-light-blue-600 font-bold sm:text-4xl md:text5xl">
                    €2,10
                  </span>
                  <span className="text-base text-light-blue-700 font-semibold sm:text-lg md:text-xl">
                    /camicia
                  </span>
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-full shadow">
                    <Link href="/#dove-siamo">
                      <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-light-blue-700 hover:bg-light-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 md:py-4 md:text-lg md:px-10">
                        Dove siamo
                      </a>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href="/">
                      <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-light-blue-700 bg-light-blue-100 hover:bg-light-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 md:py-4 md:text-lg md:px-10">
                        Su di noi
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src="/images/confused-guy.jpg"
            layout="fill"
            alt="Guy with a confused look"
          />
        </div>
      </div>
    </>
  )
}
