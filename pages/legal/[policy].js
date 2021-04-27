import Head from 'next/head'
import Header from '../../components/Header'
import FooterSimple from '../../components/FooterSimple'

export async function getStaticPaths() {
  return {
    paths: [
      { params: { policy: 'privacy-policy' } },
      { params: { policy: 'cookie-policy' } },
    ],
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  let url = 'https://www.iubenda.com/api/privacy-policy/56045222'

  if (params.policy === 'cookie-policy') url += '/cookie-policy'

  const res = await fetch(url)
  const { content } = await res.json()

  return {
    props: { policyContent: content }, // will be passed to the page component as props
  }
}

export default function PrivacyPolicy({ policyContent }) {
  return (
    <>
      <Head>
        <title>Privacy Policy | Lava&Lava</title>
        <meta name="description" content="Privacy Policy - Lava&Lava" />
      </Head>
      <Header />
      <div
        className="max-w-prose px-8 py-12 prose mx-auto"
        dangerouslySetInnerHTML={{ __html: policyContent }}
      ></div>

      <FooterSimple />
    </>
  )
}
