import { getPayload } from 'payload'
import config from '@payload-config'
import type { Registration as RegistrationType } from '@/payload-types'

export default async function RegistrationPage() {
  const payload = await getPayload({ config })
  const registrationData = (await payload.findGlobal({
    slug: 'registration',
  })) as RegistrationType

  return (
    <div className="registration-page">
      <section className="page-hero">
        <div className="container">
          <h1>{registrationData.pageTitle}</h1>
          {registrationData.pageDescription && <p>{registrationData.pageDescription}</p>}
        </div>
      </section>

      <section className="registration-forms">
        <div className="container">
          <div className="forms-grid">
            {registrationData.classRegistrationForm && (
              <div className="form-card">
                <h2>{registrationData.classRegistrationForm.title}</h2>
                <p>{registrationData.classRegistrationForm.description}</p>
                {registrationData.classRegistrationForm.formFile &&
                  typeof registrationData.classRegistrationForm.formFile !== 'string' && (
                    <a
                      href={registrationData.classRegistrationForm.formFile.url || '#'}
                      className="btn btn-primary"
                      download
                    >
                      Download Class Registration Form
                    </a>
                  )}
              </div>
            )}

            {registrationData.behindTheWheelForm && (
              <div className="form-card">
                <h2>{registrationData.behindTheWheelForm.title}</h2>
                <p>{registrationData.behindTheWheelForm.description}</p>
                {registrationData.behindTheWheelForm.formFile &&
                  typeof registrationData.behindTheWheelForm.formFile !== 'string' && (
                    <a
                      href={registrationData.behindTheWheelForm.formFile.url || '#'}
                      className="btn btn-primary"
                      download
                    >
                      Download Behind The Wheel Form
                    </a>
                  )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
