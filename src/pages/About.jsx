import React, { useEffect, useRef } from 'react'
import './About.css'

/**
 * About Page
 * Designer bio and philosophy
 */
function About() {
  const sectionRef = useRef(null)

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
    <div className="about-page" ref={sectionRef}>
      {/* Header */}
      <section className="about-header">
        <div className="container">
          <h1>About</h1>
          <p>The story behind the designer</p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="about-bio">
        <div className="container">
          <div className="bio-content">
            <div className="bio-image">
              <img src="/images/malak.jpg" alt="Malak" />
            </div>
            <div className="bio-text fade-in">
              <h2>Visual Storyteller & Designer</h2>
              <p className="bio-lead">
                Hi, I'm Malak, a graphic designer and web developer passionate about crafting visually compelling and purposeful digital experiences.
              </p>
              <p>
                I work across graphic design, brand visuals, and web development, transforming ideas into clear, engaging visual stories. From poster design and online graphics to building responsive websites, my approach is always guided by attention to detail and intentional design.
              </p>
              <p>
                Currently, I work as a Web Developer at BPOlytics Experts Agency, where I contribute to building and optimizing digital solutions that support business goals. Alongside this, I collaborate with clients as a freelance graphic designer, creating image-based content and visual identities for digital platforms.
              </p>
              <p>
                With experience working both independently and within agency environments, I combine creative thinking, technical execution, and strategic awareness to deliver designs that are not only aesthetically strong but also effective and meaningful.
              </p>
              <p>
                Every pixel matters — and every project tells a story.
              </p>
              <div className="bio-signature">
                <span className="signature">Malak</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="about-philosophy">
        <div className="container">
          <div className="philosophy-content fade-in">
            <h2>Design Philosophy</h2>
            <div className="philosophy-grid">
              <div className="philosophy-item">
                <span className="philosophy-number">01</span>
                <h3>Simplicity</h3>
                <p>Every element must have purpose. Remove what doesn't serve the story.</p>
              </div>
              <div className="philosophy-item">
                <span className="philosophy-number">02</span>
                <h3>Precision</h3>
                <p>Details matter. Excellence is in the pixels others don't notice.</p>
              </div>
              <div className="philosophy-item">
                <span className="philosophy-number">03</span>
                <h3>Meaning</h3>
                <p>Design should communicate, evoke emotion, and create impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="about-experience">
        <div className="container">
          <div className="experience-content fade-in">
            <h2>Experience</h2>
            <div className="experience-timeline">
              <div className="timeline-item">
                <span className="timeline-year">Present</span>
                <div className="timeline-content">
                  <h3>Web Developer</h3>
                  <p>BPOlytics Experts Agency</p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">Present</span>
                <div className="timeline-content">
                  <h3>Freelance Graphic Designer</h3>
                  <p>Independent Client Work</p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">Past</span>
                <div className="timeline-content">
                  <h3>Graphic Designer</h3>
                  <p>Various Projects & Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
