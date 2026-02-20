import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

/**
 * Navigation Component
 * Fixed top navigation with React Router links
 * Transparent initially, solid background on scroll
 */
function Navigation({ scrolled }) {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact Me' },
  ]

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo / Name */}
          <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
            <span className="logo-text">Malak</span>
          </Link>

          {/* Nav Links */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                  <span className="nav-link-underline"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu */}
          <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="mobile-menu-link"
            onClick={closeMobileMenu}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  )
}

export default Navigation
