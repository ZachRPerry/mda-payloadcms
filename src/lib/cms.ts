import { unstable_cache } from 'next/cache'
import { getPayload } from 'payload'
import config from '@payload-config'
import type {
  Class,
  Config,
  Contact,
  Footer,
  Header,
  Home,
  OnlinePartnership,
  Process,
  Registration,
  Schedule,
} from '@/payload-types'

const getPayloadClient = async () => getPayload({ config })

export const getHeader = unstable_cache(
  async () => {
    const payload = await getPayloadClient()
    return (await payload.findGlobal({ slug: 'header' })) as Header
  },
  ['header'],
  { revalidate: false, tags: ['header'] },
)

export const getFooter = unstable_cache(
  async () => {
    const payload = await getPayloadClient()
    return (await payload.findGlobal({ slug: 'footer' })) as Footer
  },
  ['footer'],
  { revalidate: false, tags: ['footer'] },
)

export const getProcess = unstable_cache(
  async () => {
    const payload = await getPayloadClient()
    return (await payload.findGlobal({ slug: 'process' })) as Process
  },
  ['process'],
  { revalidate: false, tags: ['process'] },
)

export const getRegistration = unstable_cache(
  async () => {
    const payload = await getPayloadClient()
    return (await payload.findGlobal({ slug: 'registration' })) as Registration
  },
  ['registration'],
  { revalidate: false, tags: ['registration'] },
)

export const getOnlinePartnership = unstable_cache(
  async () => {
    const payload = await getPayloadClient()
    return (await payload.findGlobal({ slug: 'online-partnership' })) as OnlinePartnership
  },
  ['online-partnership'],
  { revalidate: false, tags: ['online-partnership'] },
)

export const getHome = unstable_cache(
  async () => {
    const payload = await getPayloadClient()
    const data = await payload.findGlobal({ slug: 'home' as keyof Config['globals'] })
    return data as Home
  },
  ['home'],
  { revalidate: false, tags: ['home'] },
)

export const getOpenClasses = unstable_cache(
  async () => {
    const payload = await getPayloadClient()
    const { docs } = await payload.find({
      collection: 'classes',
      where: {
        status: { equals: 'open' },
        startDate: { greater_than: new Date().toISOString() },
      },
      sort: 'startDate',
      limit: 50,
    })

    return docs as Class[]
  },
  ['classes'],
  { revalidate: false, tags: ['classes'] },
)

export const getSchedule = unstable_cache(
  async () => {
    const payload = await getPayloadClient()
    return (await payload.findGlobal({
      slug: 'schedule' as keyof Config['globals'],
    })) as Schedule
  },
  ['schedule'],
  {
    revalidate: false,
    tags: ['schedule'],
  },
)

export const getContact = unstable_cache(
  async () => {
    const payload = await getPayloadClient()
    return (await payload.findGlobal({
      slug: 'contact' as keyof Config['globals'],
    })) as Contact
  },
  ['contact'],
  {
    revalidate: false,
    tags: ['contact'],
  },
)
