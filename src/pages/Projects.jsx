import React, { useEffect, useRef, useState } from 'react'
import './Projects.css'

/**
 * Projects Page
 * Detailed project showcase with case studies
 */
function Projects() {
  const sectionRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Luxe Brand Identity',
      category: 'Branding',
      client: 'Luxe Cosmetics',
      year: '2024',
      image: '/images/Luxe Cosmetics.jpg',
      description: 'A complete brand identity redesign for a luxury cosmetics brand, including logo design, color palette, typography, and brand guidelines.',
      services: ['Logo Design', 'Brand Strategy', 'Visual Identity', 'Brand Guidelines'],
    },
    {
      id: 2,
      title: 'Editorial Magazine',
      category: 'Print Design',
      client: 'Vogue Style',
      year: '2024',
      image: '/images/Vogue Style.png',
      description: 'Editorial layout design for a high-fashion magazine, featuring innovative page layouts, typography, and photographic direction.',
      services: ['Editorial Design', 'Layout Design', 'Typography', 'Photo Direction'],
    },
    {
      id: 3,
      title: 'Digital Experience',
      category: 'UI/UX',
      client: 'TechStart',
      year: '2023',
      image: '/images/TechStart.jpg',
      description: 'User interface and experience design for a fintech mobile application, focusing on clean, intuitive interactions.',
      services: ['UI Design', 'UX Research', 'Wireframing', 'Prototyping'],
    },
    {
      id: 4,
      title: 'Artisan Packaging',
      category: 'Packaging',
      client: 'Organic Foods Co.',
      year: '2023',
      image: '/images/Organic Foods Co..jpg',
      description: 'Sustainable packaging design for a premium organic food brand, emphasizing eco-friendly materials and elegant aesthetics.',
      services: ['Packaging Design', 'Print Production', 'Material Selection', 'Sustainability'],
    },
  ]

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
    <div className="projects-page" ref={sectionRef}>
      {/* Header */}
      <section className="projects-header">
        <div className="container">
          <h1>Projects</h1>
          <p>Detailed case studies of selected works</p>
        </div>
      </section>

      {/* Projects List */}
      <section className="projects-list">
        <div className="container">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-item fade-in ${index % 2 === 1 ? 'reverse' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="project-image" onClick={() => setSelectedImage(project.image)}>
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button className="view-project-btn">View Project</button>
                </div>
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h2>{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-meta">
                  <div className="meta-item">
                    <span className="meta-label">Client</span>
                    <span className="meta-value">{project.client}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Year</span>
                    <span className="meta-value">{project.year}</span>
                  </div>
                </div>
                <div className="project-services">
                  {project.services.map((service, i) => (
                    <span key={i} className="service-tag">{service}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Full size" />
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects
