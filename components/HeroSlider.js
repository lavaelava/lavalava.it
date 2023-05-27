import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      spacing: 50,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      {/* Hero section */}
      <div className="relative pb-8 overflow-x-hidden md:pt-8">
        <div className="absolute inset-x-0 bottom-0 bg-gray-100 h-1/2" />
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div ref={sliderRef} className="keen-slider">
            {/* <div className="relative shadow-xl keen-slider__slide sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  className="absolute inset-0 object-cover w-full h-full"
                  src="/images/woman-with-duvet.jpeg"
                  layout="fill"
                  alt="Ragazza che si nasconde dietro ad un piumone"
                />
                <div className="absolute inset-0 bg-indigo-200 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl">
                  <span className="block text-white">È tempo di</span>
                  <span className="block text-indigo-200">
                    lavare il piumone
                  </span>
                </h1>
                <p className="max-w-lg mx-auto mt-6 text-xl text-center text-indigo-100 sm:max-w-3xl">
                  Fa veramente troppo caldo per continuare a tenere il piumone
                  sul letto, portalo in lavanderia dal 25 Maggio e fino al 6
                  Giugno e risparmia!
                </p>
                <div className="max-w-sm mx-auto mt-10 sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <Link href="/promo/piumoni-flash-2022">
                      <a className="flex items-center justify-center px-4 py-3 text-base font-medium text-indigo-700 bg-white border border-transparent rounded-md shadow-sm hover:bg-indigo-50 focus:outline-none focus:ring focus:ring-indigo-300 sm:px-8">
                        Scopri di più
                      </a>
                    </Link>
                    <a
                      href="https://ordini.lavalava.it"
                      className="flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 focus:outline-none focus:ring focus:ring-white sm:px-8"
                    >
                      Ordina online
                    </a>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="relative shadow-xl keen-slider__slide sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  className="absolute inset-0 object-cover w-full h-full"
                  src="/images/hero.jpg"
                  layout="fill"
                  alt="Pila di vestiti su un tavolo"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl">
                  <span className="block text-white">
                    Dal 1981 ci prendiamo
                  </span>
                  <span className="block text-cyan-200">
                    cura dei tuoi capi
                  </span>
                </h1>
                <p className="max-w-lg mx-auto mt-6 text-xl text-center text-cyan-100 sm:max-w-3xl">
                  Professionalità e innovazione sono per Lava&Lava punti di
                  riferimento per continuare ad offrire un servizio efficiente e
                  di qualità.
                </p>
                <div className="max-w-sm mx-auto mt-10 sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <a
                      href="#dove-siamo"
                      className="flex items-center justify-center px-4 py-3 text-base font-medium bg-white border border-transparent rounded-md shadow-sm text-cyan-700 hover:bg-cyan-50 focus:outline-none focus:ring focus:ring-cyan-300 sm:px-8"
                    >
                      Dove siamo
                    </a>
                    <a
                      href="#overview"
                      className="flex items-center justify-center px-4 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-cyan-500 bg-opacity-60 hover:bg-opacity-70 focus:outline-none focus:ring focus:ring-white sm:px-8"
                    >
                      Scopri di più
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav
            className="flex items-center justify-center mt-12"
            aria-label="Slides"
          >
            {loaded && instanceRef.current && (
              <ol className="z-10 flex items-center space-x-5">
                {[
                  ...Array(
                    instanceRef.current.track.details.slides.length
                  ).keys(),
                ].map((idx) => (
                  <li key={idx}>
                    {currentSlide === idx ? (
                      <button
                        type="button"
                        className="relative flex items-center justify-center"
                        aria-current="step"
                        onClick={() => {
                          instanceRef.current?.moveToIdx(idx)
                        }}
                      >
                        <span
                          className="absolute flex w-6 h-6 p-px"
                          aria-hidden="true"
                        >
                          <span className="w-full h-full bg-teal-200 rounded-full" />
                        </span>
                        <span
                          className="relative block w-3 h-3 bg-teal-600 rounded-full"
                          aria-hidden="true"
                        />
                        <span className="sr-only">Slide {idx}</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="block w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                        onClick={() => {
                          instanceRef.current?.moveToIdx(idx)
                        }}
                      >
                        <span className="sr-only">Slide {idx}</span>
                      </button>
                    )}
                  </li>
                ))}
              </ol>
            )}
          </nav>
        </div>
      </div>
    </>
  )
}
