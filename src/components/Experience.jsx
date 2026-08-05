import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <Briefcase size={15} />
            <span>CAREER JOURNEY</span>
          </div>
          <h2 className="section-title">Work Experience</h2>
        </div>

        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card exp-card"
              style={{
                padding: '1.75rem',
                position: 'relative',
                borderLeft: '4px solid var(--accent-purple)',
              }}
            >
              {/* Top Header */}
              <div
                className="exp-header"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  marginBottom: '1.2rem',
                }}
              >
                <div>
                  <h3 style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)', fontWeight: 700, marginBottom: '0.2rem' }}>
                    {exp.role}
                  </h3>
                  <p style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--accent-cyan)' }}>
                    {exp.company}
                  </p>
                </div>

                <div
                  className="exp-meta"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '0.3rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.82rem',
                      color: 'var(--text-muted)',
                      background: 'var(--bg-tertiary)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    <Calendar size={14} color="var(--accent-purple)" />
                    <span>{exp.period}</span>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    <MapPin size={13} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities List */}
              <div style={{ marginBottom: '1.5rem' }}>
                {exp.description.map((item, dIdx) => (
                  <div
                    key={dIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <CheckCircle size={15} color="var(--accent-green)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Stack Used */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      padding: '0.28rem 0.7rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(139, 92, 246, 0.1)',
                      border: '1px solid rgba(139, 92, 246, 0.2)',
                      color: 'var(--accent-purple)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .exp-card {
            padding: 1.25rem !important;
          }
          .exp-meta {
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
