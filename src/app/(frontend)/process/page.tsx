import { getPayload } from 'payload'
import config from '@payload-config'
import type { Process as ProcessType } from '@/payload-types'
import ProcessPageClient from '@/components/ProcessPageClient'

export default async function ProcessPage() {
  const payload = await getPayload({ config })
  const processData = (await payload.findGlobal({
    slug: 'process',
  })) as ProcessType

  return <ProcessPageClient processData={processData} />
}
