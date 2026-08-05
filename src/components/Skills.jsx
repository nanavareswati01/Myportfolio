import React from 'react';
import { skillsData } from '../data/portfolioData';
import { Cpu, Code2, Layout, Server, Database, Wrench } from 'lucide-react';

export default function Skills() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 size={22} />;
      case 'Layout': return <Layout size={22} />;
      case 'Server': return <Server size={22} />;
      case 'Database': return <Database size={22} />;
      case 'Wrench': return <Wrench size={22} />;
      default: return <Cpu size={22} />;
    }
  };

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <Cpu size={15} />
            <span>MY TOOLKIT</span>
          </div>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {skillsData.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.35rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: `${cat.color}15`,
                    border: `1px solid ${cat.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: cat.color,
                    flexShrink: 0,
                  }}
                >
                  {getIcon(cat.icon)}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>
                  {cat.category}
                </h3>
              </div>

              {/* Skill Pills */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      padding: '0.4rem 0.8rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-color)',
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      transition: 'all 0.2s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = cat.color;
                      e.currentTarget.style.boxShadow = `0 0 12px ${cat.color}40`;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
