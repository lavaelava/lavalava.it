import Image from 'next/image'
import type { Metadata } from 'next'
import type { ComponentType } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LocationCard from '@/components/LocationCard'
import { primaryButton, secondaryButton } from '@/components/buttons'
import { ArrowRightIcon, ArrowUpRightIcon, StarIcon } from '@/components/icons'
import {
  CarpetIcon,
  DryCleaningIcon,
  LeatherIcon,
  OzoneIcon,
  TailoringIcon,
  WetCleaningIcon,
} from '@/components/brand-icons'
import { stores } from '@/data/stores'
import { reviews } from '@/data/reviews'

export const metadata: Metadata = {
  title: 'Lava&Lava',
  description:
    'Lavaggio a secco e ad acqua, sanificazione ad ozono e lavaggio tappeti. Questi sono solo alcuni dei servizi che offriamo da Lava&Lava. Vieni a trovarci: siamo a Pisa e a Fornacette.',
}

const px = 'px-[clamp(20px,4vw,48px)]'
const sectionY = 'py-[clamp(56px,7vw,104px)]'
const container = 'mx-auto max-w-[1200px]'
const eyebrow = 'text-[15px] font-bold tracking-[0.08em] text-sky-700 uppercase'
const h2 =
  'text-[clamp(30px,3.6vw,46px)] leading-[1.1] font-extrabold tracking-[-0.015em] text-sky-800'
const h2Band =
  'text-[clamp(28px,3.2vw,40px)] leading-[1.12] font-extrabold tracking-[-0.015em] text-sky-800'
const card = 'rounded-[22px] border border-line bg-white p-7'

const SERVICES: {
  title: string
  Icon: ComponentType<{ className?: string }>
  text: React.ReactNode
}[] = [
  {
    title: 'Lavaggio a secco',
    Icon: DryCleaningIcon,
    text: (
      <>
        Utilizziamo il solvente di ultima generazione{' '}
        <a
          href="https://safechem.com/it/lavaggio-dei-tessuti/sensenetm"
          className="font-semibold text-sky-700 underline"
        >
          SENSENE™
        </a>{' '}
        ecologicamente responsabile ed a basso impatto ambientale.
      </>
    ),
  },
  {
    title: 'Wet-cleaning',
    Icon: WetCleaningIcon,
    text: 'Questa tipologia di lavaggio ci permette di lavare ad acqua tessuti come seta e lana, altrimenti lavabili solo a secco.',
  },
  {
    title: 'Tappeti, tappezzeria e tendaggi',
    Icon: CarpetIcon,
    text: 'Laviamo tappeti anche antichi o pregiati, a secco o ad acqua, con trattamento anti-acaro e anti-tarme.',
  },
  {
    title: 'Capi in pelle e pellicce',
    Icon: LeatherIcon,
    text: 'Effettuiamo il lavaggio di capi in pelle, camoscio, pellicce e ceratura di Barbour.',
  },
  {
    title: 'Riparazioni sartoriali',
    Icon: TailoringIcon,
    text: 'Eseguiamo piccole riparazioni come orli, cambi cerniera, stringere/allargare girovita, sostituzione bottoni, ecc.',
  },
  {
    title: 'Sanificazione ad ozono',
    Icon: OzoneIcon,
    text: "L'innovativo sistema di igienizzazione ad ozono elimina muffe, acari, virus, batteri e cattivi odori da cuscini, caschi moto, passeggini, valigie, ecc.",
  },
]

const HISTORY = [
  {
    year: '1981',
    text: "Nata a Pisa con la perseveranza e la determinazione della Signora Raffaella, Lava&Lava è diventata, con l'ingresso del figlio Vittorio, punto di riferimento per tutto il territorio.",
  },
  {
    year: '2017',
    text: 'Abbiamo avviato un laboratorio attrezzato con macchinari moderni per rispondere alla crescente domanda.',
  },
  {
    year: '2020',
    text: 'A febbraio abbiamo aperto un nuovo punto vendita presso il centro commerciale Pam Panorama di Fornacette.',
  },
]

const STATS = [
  { value: '60K+', strong: 'Capi', rest: 'lavorati in un anno.' },
  { value: '2K+', strong: 'Camicie', rest: 'lavorate in un mese.' },
  {
    value: '45+',
    strong: 'Anni di esperienza',
    rest: 'nel settore delle lavanderie.',
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        {/* Hero */}
        <section className={`bg-sky-50 ${px} py-[clamp(40px,5vw,72px)]`}>
          <div
            className={`${container} flex flex-col gap-[clamp(28px,4vw,48px)]`}
          >
            <div className="flex flex-wrap items-center gap-[clamp(28px,4vw,56px)]">
              <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-[22px]">
                <p className={eyebrow}>Lavanderia a Pisa e Fornacette</p>
                <h1 className="text-[clamp(38px,5.2vw,68px)] leading-[1.04] font-extrabold tracking-[-0.02em] text-sky-800">
                  Dal 1981 ci prendiamo{' '}
                  <span className="text-sky-600">cura dei tuoi capi</span>
                </h1>
                <p className="max-w-[540px] text-[clamp(17px,1.6vw,20px)] text-slate-600">
                  Professionalità e innovazione sono per Lava&amp;Lava punti di
                  riferimento per continuare ad offrire un servizio efficiente e
                  di qualità.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="#dove-siamo" className={primaryButton}>
                    Trova il negozio
                  </a>
                  <a href="#servizi" className={secondaryButton}>
                    Scopri i servizi
                  </a>
                </div>
              </div>
              <div className="min-w-0 flex-[1_1_420px]">
                <Image
                  src="/images/sweaters.jpg"
                  alt="Pila di maglioni piegati su un tavolo"
                  width={1600}
                  height={1066}
                  sizes="(min-width: 1248px) 570px, (min-width: 960px) 46vw, 100vw"
                  priority
                  className="h-[clamp(240px,34vw,440px)] w-full rounded-[28px] object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-[15px] font-bold tracking-[0.08em] text-slate-600 uppercase">
                Oggi in negozio
              </h2>
              <div className="flex flex-wrap gap-3">
                {stores.map((store) => (
                  <div key={store.id} className="min-w-0 flex-[1_1_320px]">
                    <LocationCard store={store} variant="compact" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Servizi */}
        <section id="servizi" className={`${px} ${sectionY}`}>
          <div
            className={`${container} flex flex-col gap-[clamp(28px,4vw,48px)]`}
          >
            <div className="flex max-w-[720px] flex-col gap-3.5">
              <h2 className={h2}>I nostri principali servizi</h2>
              <p className="text-[19px] text-slate-600">
                In oltre quarant&apos;anni di esperienza abbiamo ampliato le
                nostre competenze e continuato ad investire in nuove tecnologie
                per migliorare ed incrementare i nostri servizi.
              </p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
              {SERVICES.map(({ title, Icon, text }) => (
                <article
                  key={title}
                  className={`flex flex-col gap-3.5 ${card}`}
                >
                  <Icon className="size-14 text-sky-600" />
                  <h3 className="text-[21px] font-bold text-sky-800">
                    {title}
                  </h3>
                  <p className="text-[16.5px] text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* La Camicia Conveniente */}
        <section
          id="camicia-conveniente"
          className={`${px} pb-[clamp(56px,7vw,104px)]`}
        >
          <div
            className={`${container} flex flex-wrap items-stretch overflow-hidden rounded-[28px] border border-line bg-white`}
          >
            <div className="flex min-w-0 flex-[1_1_460px] flex-col justify-center gap-[22px] p-[clamp(28px,5vw,64px)]">
              <Image
                src="/lcc-logo.svg"
                alt="La Camicia Conveniente"
                width={360}
                height={98}
                className="h-auto w-[min(100%,360px)]"
                unoptimized
              />
              <h2 className={h2Band}>
                Stanco di stirare le tue camicie? Ci pensiamo noi!
              </h2>
              <p className="text-lg text-slate-600">
                Camicia da uomo lavata e stirata meccanicamente con manichino
                automatizzato, consegnata in gruccia ad un prezzo conveniente. E
                il prezzo varia in base alla quantità: più ne porti e più
                risparmi!
              </p>
              <div className="flex">
                <a href="#dove-siamo" className={primaryButton}>
                  Vieni a trovarci in negozio
                </a>
              </div>
            </div>
            <div className="flex min-w-0 flex-[1_1_380px] items-end justify-center px-6 pt-6">
              <Image
                src="/images/confused-guy.jpg"
                alt="Ragazzo in camicia con espressione perplessa"
                width={918}
                height={1000}
                sizes="440px"
                className="h-[clamp(300px,36vw,480px)] w-full max-w-[440px] object-contain object-bottom"
              />
            </div>
          </div>
        </section>

        {/* Storia */}
        <section className={`bg-sky-50 ${px} ${sectionY}`}>
          <div
            className={`${container} flex flex-col gap-[clamp(36px,5vw,64px)]`}
          >
            <div className="flex flex-wrap items-center gap-[clamp(28px,4vw,56px)]">
              <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-6">
                <h2 className={h2}>Continuiamo ad innovarci dal 1981</h2>
                <div className="flex flex-col gap-[18px]">
                  {HISTORY.map(({ year, text }) => (
                    <div key={year} className="flex items-baseline gap-5">
                      <span className="w-16 flex-none text-[22px] font-extrabold text-sky-700">
                        {year}
                      </span>
                      <p className="text-slate-600">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="min-w-0 flex-[1_1_420px]">
                <Image
                  src="/images/old-laundry.jpg"
                  alt="La lavanderia Lava&Lava negli anni Ottanta"
                  width={900}
                  height={592}
                  sizes="(min-width: 1248px) 570px, (min-width: 960px) 46vw, 100vw"
                  className="h-[clamp(240px,30vw,400px)] w-full rounded-[28px] object-cover"
                />
              </div>
            </div>
            <dl className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-5">
              {STATS.map(({ value, strong, rest }) => (
                <div
                  key={value}
                  className="flex flex-col gap-1 rounded-[22px] bg-white px-7 py-6"
                >
                  <dt className="order-2 text-slate-600">
                    <strong className="text-slate-800">{strong}</strong> {rest}
                  </dt>
                  <dd className="order-1 text-[44px] leading-[1.1] font-extrabold text-sky-700">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Recensioni */}
        <section id="recensioni" className={`${px} pt-[clamp(56px,7vw,104px)]`}>
          <div
            className={`${container} flex flex-col gap-[clamp(28px,4vw,48px)]`}
          >
            <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
              <div className="flex max-w-[720px] flex-col gap-3.5">
                <p className={eyebrow}>Recensioni Google</p>
                <h2 className={h2}>Cosa dicono i nostri clienti</h2>
              </div>
              <a
                href="https://g.page/lavaelava"
                className="inline-flex min-h-12 items-center gap-2.5 font-bold text-sky-700"
              >
                Leggi tutte le recensioni su Google
                <ArrowUpRightIcon className="size-5" />
              </a>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => (
                <figure
                  key={review.name}
                  className={`flex flex-col gap-4 ${card}`}
                >
                  <div
                    role="img"
                    aria-label="5 stelle su 5"
                    className="flex gap-0.5"
                  >
                    {[1, 2, 3, 4, 5].map((i) => (
                      <StarIcon
                        key={i}
                        className="size-[22px] text-amber-500"
                      />
                    ))}
                  </div>
                  <blockquote className="flex-auto font-medium text-slate-800">
                    “{review.text}”
                  </blockquote>
                  <figcaption className="flex items-center gap-3">
                    {review.avatar ? (
                      <Image
                        src={review.avatar}
                        alt=""
                        width={40}
                        height={40}
                        className="size-10 flex-none rounded-full object-cover"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="size-10 flex-none rounded-full bg-sky-100"
                      />
                    )}
                    <span className="flex flex-col">
                      <strong className="text-base font-bold text-slate-800">
                        {review.name}
                      </strong>
                      <span className="text-[14.5px] text-slate-500">
                        Recensione su Google
                      </span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Dove siamo */}
        <section id="dove-siamo" className={`${px} ${sectionY}`}>
          <div
            className={`${container} flex flex-col gap-[clamp(28px,4vw,48px)]`}
          >
            <div className="flex max-w-[720px] flex-col gap-3.5">
              <p className={eyebrow}>Dove siamo</p>
              <h2 className={h2}>Vieni a trovarci in negozio</h2>
              <p className="text-[19px] text-slate-600">
                Trova il punto vendita Lava&amp;Lava più vicino a te.
              </p>
            </div>
            <div className="flex flex-wrap items-start gap-6">
              {stores.map((store) => (
                <div
                  key={store.id}
                  id={store.id}
                  className="min-w-0 flex-[1_1_420px] scroll-mt-6"
                >
                  <LocationCard store={store} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Per le lavanderie */}
        <section
          id="per-le-lavanderie"
          className={`${px} pb-[clamp(56px,7vw,104px)]`}
        >
          <div
            className={`${container} flex flex-wrap items-stretch overflow-hidden rounded-[28px] bg-sky-100 text-sky-800`}
          >
            <div className="flex min-w-0 flex-[1_1_460px] flex-col justify-center gap-5 p-[clamp(28px,5vw,64px)]">
              <p className={eyebrow}>Per le lavanderie</p>
              <h2 className={h2Band}>
                Ti aiutiamo a proiettare la tua lavanderia nel futuro
              </h2>
              <p className="text-[17.5px] text-slate-700">
                Il settore delle lavanderie è profondamente cambiato negli
                ultimi anni. Anche una piccola lavanderia ha bisogno di
                trasformarsi ed espandere i suoi servizi affidandosi a
                laboratori specializzati e tecnologicamente avanzati. Contattaci
                e potremo aiutarti a far crescere la tua azienda.
              </p>
              <div className="flex">
                <a
                  href="mailto:info@lavalava.it"
                  className={`${primaryButton} gap-2.5`}
                >
                  Contattaci
                  <ArrowRightIcon className="size-5" />
                </a>
              </div>
            </div>
            <div className="relative min-h-[260px] min-w-0 flex-[1_1_380px]">
              <Image
                src="/images/businessmen.jpeg"
                alt="Due persone che si stringono la mano"
                fill
                sizes="(min-width: 1248px) 520px, (min-width: 960px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
