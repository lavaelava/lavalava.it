import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const POLICIES = {
  'privacy-policy': 'Privacy Policy',
  'cookie-policy': 'Cookie Policy',
} as const

type Policy = keyof typeof POLICIES

// Only the two policies above exist; anything else 404s (the Pages Router
// equivalent was `fallback: false`).
export const dynamicParams = false

export async function generateStaticParams() {
  return Object.keys(POLICIES).map((policy) => ({ policy }))
}

async function getPolicyContent(policy: Policy) {
  const url =
    'https://www.iubenda.com/api/privacy-policy/56045222' +
    (policy === 'cookie-policy' ? '/cookie-policy' : '')

  // Revalidate daily so edits made in Iubenda reach the site without a deploy.
  const res = await fetch(url, { next: { revalidate: 86400 } })
  const { content } = await res.json()

  return content as string
}

export async function generateMetadata({
  params,
}: PageProps<'/legal/[policy]'>): Promise<Metadata> {
  const { policy } = await params
  const name = POLICIES[policy as Policy]

  return {
    title: `${name} | Lava&Lava`,
    description: `${name} - Lava&Lava`,
  }
}

export default async function LegalPolicy({
  params,
}: PageProps<'/legal/[policy]'>) {
  const { policy } = await params
  const policyContent = await getPolicyContent(policy as Policy)

  return (
    <>
      <Header />
      <div
        className="px-8 py-12 mx-auto prose max-w-prose"
        dangerouslySetInnerHTML={{ __html: policyContent }}
      ></div>

      <Footer />
    </>
  )
}
