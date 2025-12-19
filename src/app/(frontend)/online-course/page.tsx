import { getPayload } from 'payload'
import config from '@payload-config'
import type { OnlinePartnership as OnlinePartnershipType } from '@/payload-types'

export default async function OnlineCoursePage() {
  const payload = await getPayload({ config })
  const partnershipData = (await payload.findGlobal({
    slug: 'online-partnership',
  })) as OnlinePartnershipType

  return (
    <div className="online-course-page">
      <section className="page-hero">
        <div className="container">
          <h1>{partnershipData.pageTitle}</h1>
        </div>
      </section>

      <section className="partnership-info">
        <div className="container">
          <div className="content-card">
            {partnershipData.description && (
              <div
                className="partnership-description"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(partnershipData.description) }}
              />
            )}

            {partnershipData.partnerLink && (
              <div className="cta-section">
                <a
                  href={partnershipData.partnerLink}
                  className="btn btn-primary btn-large"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {partnershipData.ctaButtonText ||
                    `Visit ${partnershipData.partnerName || 'Partner'} Today`}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
