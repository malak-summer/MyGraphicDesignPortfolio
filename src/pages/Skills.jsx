import React, { useEffect, useRef } from 'react'
import './Skills.css'

/**
 * Skills Page
 * Design skills and expertise showcase
 */
function Skills() {
  const sectionRef = useRef(null)

  const skills = [
    {
      category: 'Brand Identity',
      items: [
        { name: 'Logo Design', level: 95 },
        { name: 'Brand Strategy', level: 90 },
        { name: 'Visual Identity', level: 92 },
        { name: 'Brand Guidelines', level: 88 },
      ],
    },
    {
      category: 'Print Design',
      items: [
        { name: 'Editorial Design', level: 90 },
        { name: 'Packaging Design', level: 88 },
        { name: 'Typography', level: 92 },
        { name: 'Print Production', level: 85 },
      ],
    },
    {
      category: 'Digital Design',
      items: [
        { name: 'UI Design', level: 90 },
        { name: 'UX Research', level: 85 },
        { name: 'Web Design', level: 88 },
        { name: 'Motion Graphics', level: 82 },
      ],
    },
  ]

  const tools = [
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Adobe InDesign',
    'Adobe XD',
    'Figma',
    'Sketch',
    'After Effects',
    'Premiere Pro',
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

    const elements = sectionRef.current?.querySelectorAll('.fade-in, .skill-bar')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="skills-page" ref={sectionRef}>
      {/* Header */}
      <section className="skills-header">
        <div className="container">
          <h1>Skills</h1>
          <p>Design expertise and creative capabilities</p>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="skills-categories">
        <div className="container">
          {skills.map((category, catIndex) => (
            <div
              key={catIndex}
              className="skill-category fade-in"
              style={{ animationDelay: `${catIndex * 0.2}s` }}
            >
              <h2>{category.category}</h2>
              <div className="skill-list">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="tools-section">
        <div className="container">
          <div className="tools-content fade-in">
            <h2>Design Tools</h2>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <div key={index} className="tool-item">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
