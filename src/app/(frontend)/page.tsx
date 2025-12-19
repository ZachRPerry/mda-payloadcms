import Link from 'next/link'
import React from 'react'

export default async function HomePage() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Helping Ohio Teens Become Safe, Confident Drivers</h1>
              <p>Family owned driving instruction trusted by parents for over 29 years</p>
              <Link href="/schedule" className="btn btn-primary">
                View Upcoming Classes
              </Link>
            </div>
            <div className="hero-image">{/* Placeholder for hero image */}</div>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <h2>Why Parents Choose Us</h2>
          <div className="features">
            <div className="feature">
              <div className="feature-icon">❤️</div>
              <h3>Family-Owned & Local</h3>
              <p>Personalized instruction from people who care</p>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <h3>State-Certified Instructors</h3>
              <p>Experienced, patient, and safety-focused</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📅</div>
              <h3>Classes Fill Fast</h3>
              <p>Monthly sessions with limited seats</p>
            </div>
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
            <div className="option-card">
              <h3>Online Course</h3>
              <ul>
                <li>✓ Self-paced</li>
                <li>✓ Flexible for busy families</li>
                <li>✓ Includes in-car driving lesson</li>
              </ul>
              <Link href="/online-course" className="btn btn-primary">
                Learn More
              </Link>
            </div>
            <div className="option-card">
              <h3>In-Person Classes</h3>
              <ul>
                <li>✓ Structured classroom environment</li>
                <li>✓ Great for hands-on learners</li>
                <li>✓ Includes in-car driving lessons</li>
              </ul>
              <Link href="/schedule" className="btn btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Choose Your Class Type</h3>
              <p>Complete your spot</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Register & Submit Forms</h3>
              <p>Complete coursework + Driving</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
