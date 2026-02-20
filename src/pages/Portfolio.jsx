import React, { useEffect, useRef, useState } from 'react'
import './Portfolio.css'

/**
 * Portfolio Page
 * Full portfolio grid with project categories
 */
function Portfolio() {
  const sectionRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'Luxe Brand Identity',
      category: 'Branding',
      image: 'Luxe Brand Identity.png',
    },
    {
      id: 2,
      title: 'Editorial Magazine',
      category: 'Print Design',
      image: 'Editorial Magazine.jpg',
    },
    {
      id: 3,
      title: 'Digital Experience',
      category: 'UI/UX',
      image: 'project-3.jpg',
    },
    {
      id: 4,
      title: 'Artisan Packaging',
      category: 'Packaging',
      image: 'Artisan Packaging.jpg',
    },
    {
      id: 5,
      title: 'Cinematic Poster',
      category: 'Motion Graphics',
      image: 'Cinematic Poster.png',
    },
    {
      id: 6,
      title: 'Minimalist Logo',
      category: 'Identity',
      image: 'Minimalist Logo.jpg',
    },
  ]

  const categories = ['All', 'Branding', 'Print Design', 'UI/UX', 'Packaging', 'Motion Graphics', 'Identity']

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  useEffect(() => {
    // Add fade-in animation
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
  }, [activeCategory])

  return (
    <div className="portfolio-page" ref={sectionRef}>
      {/* Header */}
      <section className="portfolio-header">
        <div className="container">
          <h1>Portfolio</h1>
          <p>A curated collection of design projects</p>
        </div>
      </section>

      {/* Filter */}
      <section className="portfolio-filter">
        <div className="container">
          <div className="filter-tabs">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`filter-tab ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="portfolio-grid-section">
        <div className="container">
          <div className="portfolio-grid" key={activeCategory}>
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="portfolio-item fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="portfolio-image" onClick={() => setSelectedImage(`/images/${project.image}`)}>
                  <img 
                    src={`/images/${project.image}`} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="portfolio-placeholder">{project.title}</div>
                  <div className="portfolio-overlay">
                    <span className="view-project">View Project</span>
                  </div>
                </div>
                <div className="portfolio-info">
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              </div>
            ))}
          </div>
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

export default Portfolio
