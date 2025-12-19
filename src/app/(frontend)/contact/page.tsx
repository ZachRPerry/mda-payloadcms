import { getContact } from '@/lib/cms'
import ContactPageClient from '@/components/ContactPageClient'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const contact = await getContact()

  const title = contact.seo?.title || contact.pageTitle || 'Contact Us'
  const description =
    contact.seo?.description ||
    contact.pageDescription ||
    'Contact Myers Driving Academy in Plymouth, Ohio. Send us a message with your questions about driver education classes.'

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Myers Driving Academy`,
      description,
    },
  }
}

export default function ContactPage() {
  return <ContactPageClient />
}
