import React from 'react'
import './Footer.css'

/**
 * Footer Component
 * Minimal footer with copyright and social links
 */
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Copyright */}
          <p className="footer-copyright">
            © {currentYear} Malak. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="footer-social">
            <a href="#" className="footer-social-link">Instagram</a>
            <a href="#" className="footer-social-link">Behance</a>
            <a href="#" className="footer-social-link">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
