import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

/**
 * Home Page
 * Hero section with name, title, tagline, and scroll indicator
 */
function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    // Add fade-in animation on mount
    const timer = setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.classList.add('visible')
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const scrollToContent = () => {
    const portfolioSection = document.getElementById('portfolio')
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">Malak</h1>
            <p className="hero-title">Graphic Designer</p>
            <div className="hero-tagline">
              <span className="tagline-text">Crafting Visual Stories</span>
              <span className="tagline-separator">•</span>
              <span className="tagline-text">with Precision & Passion</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <Link to="/portfolio" className="btn btn-primary">
              View Portfolio
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator" onClick={scrollToContent}>
          <span className="scroll-text">Scroll</span>
          <div className="scroll-line">
            <div className="scroll-dot"></div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="hero-decoration hero-decoration-1"></div>
        <div className="hero-decoration hero-decoration-2"></div>
      </section>

      {/* Featured Portfolio Section */}
      <section id="portfolio" className="featured-portfolio">
        <div className="container">
          <div className="section-header">
            <h2>Selected Works</h2>
            <p>A curated collection of recent projects</p>
          </div>

          <div className="featured-grid">
            <div className="featured-item featured-item-1">
              <div className="featured-image">
                <img 
                  src="/images/project-1.png" 
                  alt="Luxe Brand Identity"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="featured-placeholder">Luxe Brand</div>
              </div>
              <div className="featured-info">
                <h3>Luxe Brand Identity</h3>
                <p>Branding</p>
              </div>
            </div>

            <div className="featured-item featured-item-2">
              <div className="featured-image">
                <img 
                  src="/images/project-2.jpg" 
                  alt="Editorial Magazine"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="featured-placeholder">Editorial</div>
              </div>
              <div className="featured-info">
                <h3>Editorial Magazine</h3>
                <p>Print Design</p>
              </div>
            </div>

            <div className="featured-item featured-item-3">
              <div className="featured-image">
                <img 
                  src="/images/project-3.jpg" 
                  alt="Digital Experience"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="featured-placeholder">Digital</div>
              </div>
              <div className="featured-info">
                <h3>Digital Experience</h3>
                <p>UI/UX</p>
              </div>
            </div>
          </div>

          <div className="section-cta">
            <Link to="/portfolio" className="link-arrow">
              View All Projects
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>The Art of Visual Storytelling</h2>
              <p>
                Malak is a graphic designer driven by the pursuit of visual excellence. 
                With an obsessive attention to detail and a passion for storytelling through 
                design, she transforms concepts into compelling visual narratives.
              </p>
              <Link to="/about" className="link-arrow">
                Learn More
                <span className="arrow">→</span>
              </Link>
            </div>
            <div className="about-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-circle"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="contact-cta-content">
            <h2>Let's Create Together</h2>
            <p>Available for freelance projects and collaborations</p>
            <Link to="/contact" className="btn btn-primary">
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
