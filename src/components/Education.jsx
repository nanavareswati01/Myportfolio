import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, Award, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <GraduationCap size={15} />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="section-title">Education</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              {/* Status Badge */}
              <div
                style={{
                  alignSelf: 'flex-start',
                  padding: '0.35rem 0.9rem',
                  borderRadius: 'var(--radius-full)',
                  background: edu.status === 'pursuing' ? 'rgba(139, 92, 246, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                  border: edu.status === 'pursuing' ? '1px solid rgba(139, 92, 246, 0.3)' : '1px solid rgba(16, 185, 129, 0.3)',
                  color: edu.status === 'pursuing' ? 'var(--accent-purple)' : 'var(--accent-green)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <Award size={14} />
                <span>{edu.score}</span>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                {edu.degree}
              </h3>

              <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '1rem' }}>
                {edu.institution}
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  marginBottom: '1.2rem',
                }}
              >
                <Calendar size={14} />
                <span>{edu.period}</span>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: 'auto' }}>
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
