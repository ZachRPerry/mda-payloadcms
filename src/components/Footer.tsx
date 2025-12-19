import Link from 'next/link'
import { getFooter, getHeader } from '@/lib/cms'

export default async function Footer() {
  const footer = await getFooter()
  const header = await getHeader()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo & Tagline */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="40" height="40">
                <path d="M100 20L60 35v30c0 40 40 60 40 60s40-20 40-60v-30l-40-15z" fill="white" />
                <path d="M100 20L100 115s40-20 40-60v-30l-40-15z" fill="#4da876" />
                <path
                  d="M75 65l15 30 15-30M85 75v20M100 75v20M115 75v20"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <path d="M110 45l-8 8 4 4 8-8" fill="white" />
              </svg>
              <div>
                <div className="footer-logo-title">MYERS</div>
                <div className="footer-logo-subtitle">DRIVING ACADEMY</div>
              </div>
            </Link>
            <p className="footer-tagline">Helping Ohio teens become safe, confident drivers.</p>
          </div>

          {/* Navigation */}
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              {header.navigation?.map((item, index) => (
                <li key={index}>
                  <Link href={item.link || '#'}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>Contact</h4>
            {footer.phone && (
              <p>
                <span>📞</span>
                <a href={`tel:${footer.phone}`}>{footer.phone}</a>
              </p>
            )}
            {footer.email && (
              <p>
                <span>✉️</span>
                <a href={`mailto:${footer.email}`}>{footer.email}</a>
              </p>
            )}
            {footer.address && (
              <p>
                <span>📍</span>
                <span>{footer.address}</span>
              </p>
            )}
          </div>

          {/* Badges */}
          <div className="footer-badges">
            <div className="badge badge-green">
              <div className="badge-label">Ohio</div>
              <div className="badge-text">Driver Education</div>
            </div>
            <div className="badge badge-outline">
              <div className="badge-label">LICENSED</div>
              <div className="badge-text">&amp; INSURED</div>
            </div>
          </div>
        </div>

        {footer.copyrightText && <div className="copyright">{footer.copyrightText}</div>}
      </div>
    </footer>
  )
}
