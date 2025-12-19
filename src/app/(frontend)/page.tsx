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

  const features = home.features?.length
    ? home.features
    : [
        {
          icon: '❤️',
          title: 'Family-Owned & Local',
          description: 'Personalized instruction from people who care',
        },
        {
          icon: '✓',
          title: 'State-Certified Instructors',
          description: 'Experienced, patient, and safety-focused',
        },
        {
          icon: '📅',
          title: 'Classes Fill Fast',
          description: 'Monthly sessions with limited seats',
        },
      ]

  const learningOptions = home.learningOptions?.length
    ? home.learningOptions
    : [
        {
          title: 'Online Course',
          bullets: [
            { text: 'Self-paced' },
            { text: 'Flexible for busy families' },
            { text: 'Includes in-car driving lesson' },
          ],
          ctaLabel: 'Learn More',
          ctaLink: '/online-course',
        },
        {
          title: 'In-Person Classes',
          bullets: [
            { text: 'Structured classroom environment' },
            { text: 'Great for hands-on learners' },
            { text: 'Includes in-car driving lessons' },
          ],
          ctaLabel: 'Learn More',
          ctaLink: '/schedule',
        },
      ]

  const steps = home.steps?.length
    ? home.steps
    : [
        {
          stepNumber: 1,
          title: 'Choose Your Class Type',
          description: 'Pick online or in-person instruction',
        },
        {
          stepNumber: 2,
          title: 'Register & Submit Forms',
          description: 'Complete coursework and schedule drives',
        },
      ]

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>{heroTitle}</h1>
              <p>{heroDescription}</p>
              <Link href={heroCtaLink} className="btn btn-primary">
                {heroCtaLabel}
              </Link>
            </div>
            <div className="hero-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {heroImageUrl && <img src={heroImageUrl} alt={heroTitle} loading="lazy" />}
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <h2>Why Parents Choose Us</h2>
          <div className="features">
            {features.map((feature, index) => (
              <div key={index} className="feature">
                {feature.icon && <div className="feature-icon">{feature.icon}</div>}
                <h3>{feature.title}</h3>
                {feature.description && <p>{feature.description}</p>}
              </div>
            ))}
          </div>
          <Link href="/schedule" className="btn btn-secondary">
            View Class Schedule
          </Link>
        </div>
      </section>

      <section className="learning-options">
        <div className="container">
          <h2>Two Ways to Learn</h2>
          <div className="options">
            {learningOptions.map((option, index) => (
              <div key={index} className="option-card">
                <h3>{option.title}</h3>
                {option.bullets && option.bullets.length > 0 && (
                  <ul>
                    {option.bullets.map((bullet, idx) => (
                      <li key={idx}>✓ {bullet.text}</li>
                    ))}
                  </ul>
                )}
                {option.ctaLink && option.ctaLabel && (
                  <Link href={option.ctaLink} className="btn btn-primary">
                    {option.ctaLabel}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps">
            {steps.map((step, index) => (
              <div key={index} className="step">
                {step.stepNumber && <div className="step-number">{step.stepNumber}</div>}
                <h3>{step.title}</h3>
                {step.description && <p>{step.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
