import Link from 'next/link'
import { getHeader } from '@/lib/cms'

export default async function Header() {
  const header = await getHeader()

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-content">
          <Link href="/" className="logo-link">
            <img
              src="/myerslogo.png"
              alt="Myers Driving Academy Logo"
              className="logo"
              style={{ height: '70px', width: 'auto' }}
            />
          </Link>

          <nav className="main-nav">
            {header.navigation?.map((item, index) => (
              <Link key={index} href={item.link || '#'} className="nav-link">
                {item.label}
              </Link>
            ))}
            <Link href="/schedule" className="btn btn-primary">
              View Schedule
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
