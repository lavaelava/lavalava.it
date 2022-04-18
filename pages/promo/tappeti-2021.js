import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import FooterSimple from '../../components/FooterSimple'

export default function MaglieMaglioni2021() {
  return (
    <>
      <Head>
        <title>
          Promozione Tappeti - Lavaggio ed igienizzazione a soli €4,99 al Kg |
          Lava&Lava
        </title>
        <meta
          name="description"
          content="Tappeti in promozione! Lavati ed igienizzati a soli €4,99 al Kg"
        />
      </Head>

      <div className="relative overflow-hidden bg-white font-sen">
        <div className="mx-auto max-w-7xl lg:min-h-screen">
          <div className="relative z-10 flex flex-col justify-center h-full pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:min-h-screen lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden w-48 h-full text-white translate-x-1/2 lg:block"
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
                  Valida in
                  <span className="text-cyan-700"> negozio</span> e{' '}
                  <span className="text-cyan-700"> online</span>
                </p>
                <h2 className="mt-4 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                  Promozione
                  <br />
                  <span className="text-cyan-600"> Tappeti</span>
                </h2>
                <p className="mt-6 text-base text-gray-500 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
                  Prenditi cura del tuo tappeto e fallo tornare come nuovo!
                  Trattiamo tutte le tipologie di tappeti: orientali, persiani,
                  in lana, sintetici ed altre. <br />
                  Laviamo il tuo tappeto ad acqua eliminando batteri, acari ed
                  altre impurità. <br /> Approfitta ora della promozione!
                  <br />
                  <br />
                  Troppo scomodo portare il tappeto in lavanderia? Puoi ordinare
                  comodamente online, ritiriamo e riconsegnamo il tappeto
                  direttamente a casa tua.
                </p>
                <div className="mt-6 space-y-2 lg:space-y-4">
                  <p className="text-2xl font-bold sm:text-3xl md:text-4xl">
                    A soli{' '}
                    <span className="text-3xl font-bold text-cyan-600 sm:text-4xl md:text5xl">
                      €4,99
                    </span>{' '}
                    al Kg
                  </p>
                </div>
                <div className="mt-6 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-full shadow">
                    <Link href="/#dove-siamo--fornacette">
                      <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-full bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 md:py-4 md:text-lg md:px-10">
                        Vieni in negozio
                      </a>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="https://ordini.lavalava.it"
                      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium border border-transparent rounded-full text-cyan-700 bg-cyan-100 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 md:py-4 md:text-lg md:px-10"
                    >
                      Ritiro a domicilio
                    </a>
                  </div>
                </div>
                <p className="mt-4 text-xs text-gray-500 sm:mt-6 sm:max-w-xl sm:mx-auto lg:mx-0">
                  La promozione in oggetto è valida esclusivamente fino al
                  giorno 31/05/2021.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <Image
            className="absolute inset-0 object-cover w-full h-full"
            src="/images/woman-on-carpet.jpg"
            layout="fill"
            alt="Mamma e figlia su tappeto"
          />
        </div>
      </div>
      <FooterSimple />
    </>
  )
}
