import { getOnlinePartnership } from '@/lib/cms'
import type { Metadata } from 'next'
import { OnlineCourseRichText } from '@/components/OnlineCourseRichText'

export async function generateMetadata(): Promise<Metadata> {
  const partnershipData = await getOnlinePartnership()

  const title = partnershipData.seo?.title || partnershipData.pageTitle || 'Online Course'
  const description =
    partnershipData.seo?.description ||
    'Flexible online driver education through our partnership with Aceable Inc. Self-paced learning for busy families.'

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Myers Driving Academy`,
      description,
    },
  }
}

export default async function OnlineCoursePage() {
  const partnershipData = await getOnlinePartnership()

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
              <div className="partnership-description">
                <OnlineCourseRichText content={partnershipData.description} />
              </div>
            )}

            {partnershipData.partnerLink && (
              <div className="cta-card">
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
