import { getOpenClasses, getSchedule } from '@/lib/cms'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const schedule = await getSchedule()

  const title = schedule.seo?.title || schedule.pageTitle || 'Class Schedule'
  const description =
    schedule.seo?.description ||
    schedule.pageDescription ||
    'View upcoming in-person driver education classes at Myers Driving Academy. Monthly sessions with limited seats available in Plymouth, Ohio.'

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Myers Driving Academy`,
      description,
    },
  }
}

export default async function SchedulePage() {
  const classes = await getOpenClasses()

  return (
    <div className="schedule-page">
      <section className="page-hero">
        <div className="container">
          <h1>Upcoming Classes</h1>
          <p>View our schedule and register for an upcoming in-person driver education class</p>
        </div>
      </section>

      <section className="classes-list">
        <div className="container">
          {classes.length === 0 ? (
            <div className="no-classes">
              <p>
                No upcoming classes scheduled at this time. Please check back soon or contact us for
                more information.
              </p>
            </div>
          ) : (
            <div className="classes-grid">
              {classes.map((classItem) => {
                const startDate = new Date(classItem.startDate)
                const endDate = new Date(classItem.endDate)

                return (
                  <div key={classItem.id} className="class-card">
                    <div className="class-header">
                      <h3>{classItem.title}</h3>
                      <span className={`status-badge ${classItem.status}`}>
                        {classItem.status === 'full' ? 'Full' : 'Available'}
                      </span>
                    </div>
                    <div className="class-details">
                      <div className="detail-row">
                        <span className="label">📅 Dates:</span>
                        <span className="value">
                          {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
                        </span>
                      </div>
                      <div className="detail-row">
                        <span className="label">🕐 Schedule:</span>
                        <span className="value">{classItem.schedule}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label"> Price:</span>
                        <span className="value">${classItem.price}</span>
                      </div>
                      {classItem.description && (
                        <div className="class-description">
                          <p>{classItem.description}</p>
                        </div>
                      )}
                      {classItem.notes && (
                        <div className="class-notes">
                          <p>
                            <strong>Note:</strong> {classItem.notes}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
