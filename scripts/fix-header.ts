import { config as dotenvConfig } from 'dotenv'
import { getPayload } from 'payload'
import payloadConfig from '../src/payload.config'

async function main() {
  dotenvConfig({ path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env' })

  const payload = await getPayload({ config: payloadConfig })

  const navigation = [
    { label: 'Home', link: '/' },
    { label: 'Schedule', link: '/schedule' },
    { label: 'How It Works', link: '/process' },
    { label: 'Online Course', link: '/online-course' },
    { label: 'Registration', link: '/registration' },
    { label: 'Contact', link: '/contact' },
  ]

  const header = await payload.updateGlobal({
    slug: 'header',
    data: { navigation },
  })

  console.log('Updated navigation items:', header.navigation)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
