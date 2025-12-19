import { getProcess } from '@/lib/cms'
import ProcessPageClient from '@/components/ProcessPageClient'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const processData = await getProcess()

  const title = processData.seo?.title || processData.heroTitle || 'How It Works'
  const description =
    processData.seo?.description ||
    "Learn the step-by-step process for getting your Ohio driver's license. Choose between online and in-person instruction."

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Myers Driving Academy`,
      description,
    },
  }
}

export default async function ProcessPage() {
  const processData = await getProcess()

  return <ProcessPageClient processData={processData} />
}
