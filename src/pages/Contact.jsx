import React, { useEffect, useRef } from 'react'
import './Contact.css'

/**
 * Contact Page
 * Contact form and information
 */
function Contact() {
  const sectionRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for your message! I will get back to you soon.')
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.fade-in')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="contact-page" ref={sectionRef}>
      {/* Header */}
      <section className="contact-header">
        <div className="container">
          <h1>Contact</h1>
          <p>Let's create something beautiful together</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info fade-in">
              <h2>Get in Touch</h2>
              <p className="contact-intro">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hello, I'll try my best 
                to get back to you!
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-label">Email</span>
                  <a href="mailto:malaksummer35@gmail.com" className="contact-value">
                    malaksummer35@gmail.com
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Casablanca, Morocco</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Availability</span>
                  <span className="contact-value available">Open for projects</span>
                </div>
              </div>

              <div className="contact-social">
                <h3>Follow Me</h3>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/malak-ait-baba-4121bb2a3" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                  <a href="#" className="social-link">Instagram</a>
                  <a href="#" className="social-link">Behance</a>
                  <a href="#" className="social-link">Dribbble</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper fade-in">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Project inquiry"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-submit">
                  Send Message
                  <span className="btn-arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
