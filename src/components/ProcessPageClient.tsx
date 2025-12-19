'use client'

import { useState } from 'react'
import type { Process as ProcessType } from '@/payload-types'

interface ProcessPageClientProps {
  processData: ProcessType
}

export default function ProcessPageClient({ processData }: ProcessPageClientProps) {
  const [activeTab, setActiveTab] = useState<'inperson' | 'online'>('inperson')

  return (
    <div className="process-page">
      <section className="page-hero">
        <div className="container">
          <h1>{processData.heroTitle}</h1>
          {processData.heroDescription && <p>{processData.heroDescription}</p>}
        </div>
      </section>

      <section className="process-steps">
        <div className="container">
          <div className="process-tabs">
            <button
              className={`tab-button ${activeTab === 'inperson' ? 'active' : ''}`}
              onClick={() => setActiveTab('inperson')}
            >
              In-Person Classes
            </button>
            <button
              className={`tab-button ${activeTab === 'online' ? 'active' : ''}`}
              onClick={() => setActiveTab('online')}
            >
              Online Course
            </button>
          </div>

          {activeTab === 'inperson' && (
            <div className="steps-grid">
              {processData.inPersonSteps && processData.inPersonSteps.length > 0 ? (
                processData.inPersonSteps
                  .sort((a, b) => (a.stepNumber || 0) - (b.stepNumber || 0))
                  .map((step, index, arr) => (
                    <div
                      key={`inperson-${index}`}
                      className={`step-card ${index < arr.length - 1 ? 'has-arrow' : ''}`}
                    >
                      <div className="step-number">{step.stepNumber}</div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                      {step.icon && typeof step.icon !== 'string' && (
                        <div className="step-icon">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={step.icon.url || ''} alt={step.title || ''} />
                        </div>
                      )}
                    </div>
                  ))
              ) : (
                <p>Steps coming soon.</p>
              )}
            </div>
          )}

          {activeTab === 'online' && (
            <div className="steps-grid">
              {processData.onlineSteps && processData.onlineSteps.length > 0 ? (
                processData.onlineSteps
                  .sort((a, b) => (a.stepNumber || 0) - (b.stepNumber || 0))
                  .map((step, index, arr) => (
                    <div
                      key={`online-${index}`}
                      className={`step-card ${index < arr.length - 1 ? 'has-arrow' : ''}`}
                    >
                      <div className="step-number">{step.stepNumber}</div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                      {step.icon && typeof step.icon !== 'string' && (
                        <div className="step-icon">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={step.icon.url || ''} alt={step.title || ''} />
                        </div>
                      )}
                    </div>
                  ))
              ) : (
                <p>Steps coming soon.</p>
              )}
            </div>
          )}

          {processData.additionalInfo && (
            <div className="additional-info">
              <div
                dangerouslySetInnerHTML={{ __html: JSON.stringify(processData.additionalInfo) }}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
