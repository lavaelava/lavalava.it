import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: 1,
    spacing: 50,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  return (
    <>
      {/* Hero section */}
      <div className="relative pb-8 md:pt-8 overflow-x-hidden">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/images/hero.jpg"
                  layout="fill"
                  alt="Pila di vestiti su un tavolo"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">
                    Dal 1981 ci prendiamo
                  </span>
                  <span className="block text-cyan-200">
                    cura dei tuoi capi
                  </span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-cyan-100 sm:max-w-3xl">
                  Professionalità e innovazione sono per Lava&Lava punti di
                  riferimento per continuare ad offrire un servizio efficiente e
                  di qualità.
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
                      href="#overview"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-500 bg-opacity-60 hover:bg-opacity-70 focus:outline-none focus:ring focus:ring-white sm:px-8"
                    >
                      Scopri di più
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="keen-slider__slide relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/images/woman-with-duvet.jpeg"
                  layout="fill"
                  alt="Pila di vestiti su un tavolo"
                />
                <div className="absolute inset-0 bg-indigo-300 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">È tempo di</span>
                  <span className="block text-indigo-200">
                    lavare il piumone
                  </span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-100 sm:max-w-3xl">
                  Sta arrivando il caldo ed hai bisogno di lavare il tuo
                  piumone? Approfitta ora della nostra promozione! Lavaggio ad
                  acqua con detergenti professionali e additivi disinfettanti ed
                  igienizzanti.
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <Link href="/promo/piumoni-2021">
                      <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring focus:ring-indigo-300 sm:px-8">
                        Scopri di più
                      </a>
                    </Link>
                    <a
                      href="https://ordini.lavalava.it"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 focus:outline-none focus:ring focus:ring-white sm:px-8"
                    >
                      Ordina online
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="keen-slider__slide relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/images/woman-on-carpet.jpg"
                  layout="fill"
                  alt="Pila di vestiti su un tavolo"
                />
                <div className="absolute inset-0 bg-cyan-200 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">
                    Fai tornare il tuo tappeto
                  </span>
                  <span className="block text-cyan-200">come nuovo</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-cyan-100 sm:max-w-3xl">
                  Trattiamo tutte le tipologie di tappeti: orientali, persiani,
                  in lana, sintetici ed altre. Laviamo il tuo tappeto ad acqua
                  eliminando batteri, acari ed altre impurità. Approfitta ora
                  della promozione!
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <Link href="/promo/tappeti-2021">
                      <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-cyan-700 bg-white hover:bg-cyan-50 focus:outline-none focus:ring focus:ring-cyan-300 sm:px-8">
                        Scopri di più
                      </a>
                    </Link>
                    <a
                      href="https://ordini.lavalava.it"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-500 bg-opacity-60 hover:bg-opacity-70 focus:outline-none focus:ring focus:ring-white sm:px-8"
                    >
                      Ordina online
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {slider && (
            <nav
              className="mt-12 flex items-center justify-center"
              aria-label="Slides"
            >
              {/* <p className="text-sm font-medium">
              Step {steps.findIndex((step) => step.status === 'current') + 1} of{' '}
              {steps.length}
            </p> */}
              <ol className="flex items-center space-x-5 z-10">
                {[...Array(slider.details().size).keys()].map((idx) => (
                  <li key={idx}>
                    {currentSlide === idx ? (
                      <button
                        type="button"
                        className="relative flex items-center justify-center"
                        aria-current="step"
                        onClick={() => {
                          slider.moveToSlideRelative(idx)
                        }}
                      >
                        <span
                          className="absolute w-5 h-5 p-px flex"
                          aria-hidden="true"
                        >
                          <span className="w-full h-full rounded-full bg-teal-200" />
                        </span>
                        <span
                          className="relative block w-2.5 h-2.5 bg-teal-600 rounded-full"
                          aria-hidden="true"
                        />
                        <span className="sr-only">{idx}</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="block w-2.5 h-2.5 bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                        onClick={() => {
                          slider.moveToSlideRelative(idx)
                        }}
                      >
                        <span className="sr-only">{idx}</span>
                      </button>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </div>
      </div>
    </>
  )
}
