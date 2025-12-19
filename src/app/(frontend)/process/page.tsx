import { getProcess } from '@/lib/cms'
import ProcessPageClient from '@/components/ProcessPageClient'

export default async function ProcessPage() {
  const processData = await getProcess()

  return <ProcessPageClient processData={processData} />
}
