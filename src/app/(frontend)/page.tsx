import type { Metadata } from 'next'
import { getHome } from '@/lib/cms'
import Link from 'next/link'
import React from 'react'

export async function generateMetadata(): Promise<Metadata> {
  const home = await getHome()

  const title =
    home.seo?.title || home.heroTitle || 'Helping Ohio Teens Become Safe, Confident Drivers'
  const description =
    home.seo?.description ||
    home.heroDescription ||
    'Family owned driving instruction trusted by parents for over 29 years'
  const keywords = home.seo?.keywords?.split(',').map((k) => k.trim())

  return {
    title: 'Home',
    description,
    keywords,
    openGraph: {
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  }
}

export default async function HomePage() {
  const home = await getHome()

  const heroTitle = home.heroTitle || 'Helping Ohio Teens Become Safe, Confident Drivers'
  const heroDescription =
    home.heroDescription || 'Family owned driving instruction trusted by parents for over 29 years'
  const heroCtaLabel = home.heroCtaLabel || 'View Upcoming Classes'
  const heroCtaLink = home.heroCtaLink || '/schedule'

  const heroImageUrl =
    home.heroImage && typeof home.heroImage !== 'string' ? home.heroImage?.url : undefined

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>{heroTitle}</h1>
              <p className="hero-description">{heroDescription}</p>
              <div className="hero-buttons">
                <Link href={heroCtaLink} className="btn btn-primary btn-large">
                  {heroCtaLabel}
                </Link>
                <Link href="/process" className="btn btn-secondary btn-large">
                  How It Works
                </Link>
              </div>
            </div>
            {heroImageUrl && (
              <div className="hero-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={heroImageUrl} alt={heroTitle} loading="lazy" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="trust-badges">
        <div className="container">
          <div className="badges-grid">
            <div className="badge-item">
              <span className="badge-icon">✓</span>
              <span>Ohio Certified Driver Education</span>
            </div>
            <div className="badge-item">
              <span className="badge-icon">✓</span>
              <span>Experienced Instructors</span>
            </div>
            <div className="badge-item">
              <span className="badge-icon">✓</span>
              <span>Safety-First Training</span>
            </div>
            <div className="badge-item">
              <span className="badge-icon">✓</span>
              <span>Trusted by Ohio Families</span>
            </div>
          </div>
        </div>
      </section>

      <section className="path">
        <div className="path__container">
          <header className="path__header">
            <h2 className="path__title">A Simple, Clear Path to a License</h2>
            <p className="path__subtitle">
              Clear steps, calm instruction, and Ohio-focused preparation—so your teen feels
              confident behind the wheel.
            </p>
          </header>

          <div className="path__grid">
            {(
              (home.steps && home.steps.length >= 5
                ? home.steps.slice(0, 5)
                : [
                    {
                      stepNumber: 1,
                      title: 'Classroom or Online Instruction',
                      description:
                        'Choose the format that fits your schedule. We keep it clear, structured, and easy to follow.',
                    },
                    {
                      stepNumber: 2,
                      title: 'Behind-the-Wheel Training',
                      description:
                        'Certified instructors coach calmly and clearly—building confidence on real Ohio roads.',
                    },
                    {
                      stepNumber: 3,
                      title: 'Practice & Preparation',
                      description:
                        'We help you understand required hours and what to practice, so progress feels steady.',
                    },
                    {
                      stepNumber: 4,
                      title: 'Test Ready',
                      description:
                        'Focused prep that covers Ohio testing expectations—so students feel ready, not rushed.',
                    },
                    {
                      stepNumber: 5,
                      title: 'License Day',
                      description:
                        'The finish line. We make sure families know what to expect and what to bring.',
                    },
                  ]) as Array<{ title: string; description?: string }>
            ).map((step, index) => (
              <article key={index} className="path-card">
                <div
                  className={'path-card__icon' + (index === 3 ? ' path-card__icon--accent' : '')}
                  aria-hidden="true"
                >
                  {index === 0 && (
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="40"
                      height="40"
                      aria-label="Classroom or Online"
                    >
                      <path
                        d="M24 4 39 10v14c0 12-8.2 19.7-15 22C17.2 43.7 9 36 9 24V10L24 4z"
                        fill="#0A2540"
                      />
                      <path
                        d="M24 4 39 10v14c0 12-8.2 19.7-15 22V4z"
                        fill="#278a3f"
                        opacity=".95"
                      />
                      <path
                        d="M16 17c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v14c0 .6-.4 1-1 1H19c-1.7 0-3 1.3-3 3V17z"
                        fill="#fff"
                      />
                      <path d="M18 19h10v2H18v-2zm0 5h12v2H18v-2z" fill="#0A2540" opacity=".20" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="40"
                      height="40"
                      aria-label="Behind the Wheel"
                    >
                      <path
                        d="M24 4 39 10v14c0 12-8.2 19.7-15 22C17.2 43.7 9 36 9 24V10L24 4z"
                        fill="#0A2540"
                      />
                      <path
                        d="M24 4 39 10v14c0 12-8.2 19.7-15 22V4z"
                        fill="#278a3f"
                        opacity=".95"
                      />
                      <circle cx="24" cy="24" r="9" fill="#fff" />
                      <circle cx="24" cy="24" r="3" fill="#0A2540" opacity=".20" />
                      <path
                        d="M15.5 24h6.5M26 24h6.5"
                        stroke="#0A2540"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        opacity=".35"
                      />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="40"
                      height="40"
                      aria-label="Practice and Preparation"
                    >
                      <path
                        d="M24 4 39 10v14c0 12-8.2 19.7-15 22C17.2 43.7 9 36 9 24V10L24 4z"
                        fill="#0A2540"
                      />
                      <path
                        d="M24 4 39 10v14c0 12-8.2 19.7-15 22V4z"
                        fill="#278a3f"
                        opacity=".95"
                      />
                      <path
                        d="M18 16h12a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H18a3 3 0 0 1-3-3V19a3 3 0 0 1 3-3z"
                        fill="#fff"
                      />
                      <path d="M21 14h6a2 2 0 0 1 2 2v2H19v-2a2 2 0 0 1 2-2z" fill="#fff" />
                      <path
                        d="M20 25l2.2 2.2L28.5 21"
                        stroke="#0A2540"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity=".45"
                      />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="40"
                      height="40"
                      aria-label="Test Ready"
                    >
                      <path
                        d="M24 4 39 10v14c0 12-8.2 19.7-15 22C17.2 43.7 9 36 9 24V10L24 4z"
                        fill="#0A2540"
                      />
                      <path
                        d="M24 4 39 10v14c0 12-8.2 19.7-15 22V4z"
                        fill="#278a3f"
                        opacity=".95"
                      />
                      <path
                        d="M18.5 25.5 22.5 29.5 31 21"
                        stroke="#fff"
                        strokeWidth="4.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  {index === 4 && (
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="40"
                      height="40"
                      aria-label="License Day"
                    >
                      <path
                        d="M24 4 39 10v14c0 12-8.2 19.7-15 22C17.2 43.7 9 36 9 24V10L24 4z"
                        fill="#0A2540"
                      />
                      <path
                        d="M24 4 39 10v14c0 12-8.2 19.7-15 22V4z"
                        fill="#278a3f"
                        opacity=".95"
                      />
                      <rect x="16" y="19" width="16" height="12" rx="3" fill="#fff" />
                      <circle cx="21" cy="24" r="2" fill="#0A2540" opacity=".25" />
                      <path
                        d="M19.5 29c1-1.6 2.4-2.4 3.5-2.4S25.5 27.4 26.5 29"
                        fill="#0A2540"
                        opacity=".18"
                      />
                      <rect
                        x="24.5"
                        y="22"
                        width="6"
                        height="2"
                        rx="1"
                        fill="#0A2540"
                        opacity=".22"
                      />
                      <rect
                        x="24.5"
                        y="26"
                        width="7"
                        height="2"
                        rx="1"
                        fill="#0A2540"
                        opacity=".18"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="path-card__title">{step.title}</h3>
                {step.description && <p className="path-card__text">{step.description}</p>}
              </article>
            ))}
          </div>

          <div className="path__cta">
            <Link href="/process" className="btn btn-primary btn-large">
              See Full Licensing Process
            </Link>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="container">
          <div className="trust-content">
            <div className="trust-text">
              <h2>
                Built for First-Time Drivers.
                <br />
                Trusted by Parents.
              </h2>
              <ul className="trust-list">
                <li>✓ Calm, confidence-building instruction</li>
                <li>✓ Clear steps with no confusion</li>
                <li>✓ Ohio-specific test preparation</li>
                <li>✓ Safety-focused, never rushed</li>
              </ul>
            </div>
            {heroImageUrl && (
              <div className="trust-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={heroImageUrl} alt="Instructor with student" loading="lazy" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="testimonials-grid">
            <div className="testimonial">
              <p className="quote">My son felt confident instead of nervous on test day.</p>
              <p className="source">– Ohio Parent</p>
            </div>
            <div className="testimonial">
              <p className="quote">They actually explain things instead of yelling.</p>
              <p className="source">– Student</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Classes fill quickly. Reserve your spot today.</p>
          <Link href="/schedule" className="btn btn-primary btn-large">
            View Class Schedule
          </Link>
        </div>
      </section>
    </div>
  )
}
