import { getPayload } from 'payload'
import config from '@payload-config'
import type { Footer as FooterType } from '@/payload-types'

export default async function Footer() {
  const payload = await getPayload({ config })
  const footer = (await payload.findGlobal({
    slug: 'footer',
  })) as FooterType

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>{footer.companyName}</h3>
            {footer.address && <p className="address">{footer.address}</p>}
            {footer.phone && <p className="phone">{footer.phone}</p>}
            {footer.email && <p className="email">{footer.email}</p>}
          </div>
          {footer.socialLinks && footer.socialLinks.length > 0 && (
            <div className="social-links">
              {footer.socialLinks.map((link, index) => (
                <a key={index} href={link.url || '#'} target="_blank" rel="noopener noreferrer">
                  {link.platform}
                </a>
              ))}
            </div>
          )}
        </div>
        {footer.copyrightText && <div className="copyright">{footer.copyrightText}</div>}
      </div>
    </footer>
  )
}
