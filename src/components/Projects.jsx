import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { FolderGit2, Eye } from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack'];

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <FolderGit2 size={15} />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        {/* Filter Category Tabs */}
        <div
          className="no-scrollbar"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '2.5rem',
            overflowX: 'auto',
            paddingBottom: '0.5rem',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.45rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: 600,
                background: activeCategory === cat ? 'var(--gradient-primary)' : 'var(--bg-glass-card)',
                color: activeCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                border: activeCategory === cat ? 'none' : '1px solid var(--border-color)',
                boxShadow: activeCategory === cat ? 'var(--shadow-glow)' : 'none',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Image Preview Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '190px',
                  overflow: 'hidden',
                  background: 'var(--bg-tertiary)',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  className="project-img"
                />

                <span
                  style={{
                    position: 'absolute',
                    top: '0.8rem',
                    right: '0.8rem',
                    padding: '0.25rem 0.7rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(11, 15, 25, 0.75)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--accent-cyan)',
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.35rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  {project.title}
                </h3>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.88rem',
                    lineHeight: 1.6,
                    marginBottom: '1.2rem',
                    flex: 1,
                  }}
                >
                  {project.shortDesc}
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.35rem' }}>
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '0.22rem 0.6rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-tertiary)',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        color: 'var(--text-muted)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-outline"
                    style={{ flex: 1, padding: '0.5rem 0.85rem', fontSize: '0.82rem' }}
                  >
                    <Eye size={15} />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
